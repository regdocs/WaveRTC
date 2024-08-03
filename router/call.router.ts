import { z } from "zod";
import { procedure, router } from "./trpc";
import {
  eventEmitter,
  WaveRTCEventHandlerArgsZSchema,
  WaveRTCEvents,
} from "@/events/emitter";
import { observable } from "@trpc/server/observable";
import { SignallingPayload, SignallingPayloadEnum } from "@/types/webrtc";
import { allocateRoomId, deallocateRoomId } from "@/utils/core/call";

export const callRouter = router({
  makeCall: procedure
    .input(
      z.object({
        sourceCallerId: z.string(),
        destinationCallerId: z.string(),
        sdpOffer: z.string(),
      })
    )
    .output(z.object({ roomId: z.string() }))
    .mutation(({ input }) => {
      const { sourceCallerId, destinationCallerId, sdpOffer } = input;

      if (sourceCallerId === destinationCallerId)
        throw new Error("You cannot make call to yourself, dum dum");

      const roomId = allocateRoomId();

      eventEmitter.emit(WaveRTCEvents.INCOMING_CALL, <
        z.infer<
          (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.INCOMING_CALL]
        >
      >{
        roomId,
        destinationCallerId,
        sourceCallerId,
        sdpOffer,
      });

      return { roomId };
    }),

  receiveCall: procedure
    .input(z.object({ roomId: z.string(), sdpAnswer: z.string() }))
    .output(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      const { roomId, sdpAnswer } = input;
      eventEmitter.emit(WaveRTCEvents.RECEIVED_CALL, <
        z.infer<
          (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.RECEIVED_CALL]
        >
      >{
        roomId,
        sdpAnswer,
      });

      return { message: "`receivedcall` event dispatched to your peers" };
    }),

  broadcastICECandidate: procedure
    .input(
      z.object({
        roomId: z.string(),
        candidate: z.string(),
        sdpMid: z.string().nullable(),
        sdpMLineIndex: z.number().nullable(),
      })
    )
    .output(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      const { candidate, roomId } = input;

      eventEmitter.emit(WaveRTCEvents.GOT_ICE_CANDIDATE, <
        z.infer<
          (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.GOT_ICE_CANDIDATE]
        >
      >{
        roomId,
        candidate,
      });

      return { message: "`goticecandidate` event dispatched to your peers" };
    }),

  hangUp: procedure
    .input(z.object({ roomId: z.string() }))
    .output(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      const { roomId } = input;

      eventEmitter.emit(WaveRTCEvents.HUNG_UP, <
        z.infer<(typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.HUNG_UP]>
      >{ roomId });

      deallocateRoomId(roomId);

      return { message: "`hungup` event dispatched to your peers" };
    }),

  incomingCallEvent: procedure
    .input(z.object({ subscriberCallerId: z.string() }))
    .subscription(({ input }) => {
      const { subscriberCallerId } = input;

      return observable<SignallingPayload<SignallingPayloadEnum.SDP_OFFER>>(
        (observer) => {
          const onIncomingCall = ({
            roomId,
            destinationCallerId,
            sdpOffer,
            sourceCallerId,
          }: z.infer<
            (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.INCOMING_CALL]
          >) => {
            if (subscriberCallerId === destinationCallerId) {
              observer.next({
                type: SignallingPayloadEnum.SDP_OFFER,
                sdpOffer,
                roomId,
                sourceCallerId,
              });
            }
          };
          eventEmitter.on(WaveRTCEvents.INCOMING_CALL, onIncomingCall);
          return () =>
            eventEmitter.off(WaveRTCEvents.INCOMING_CALL, onIncomingCall);
        }
      );
    }),

  receivedCallEvent: procedure
    .input(z.object({ roomId: z.string(), sourceCallerId: z.string() }))
    .subscription(({ input }) => {
      const { roomId: observerRoomId, sourceCallerId } = input;

      return observable<SignallingPayload<SignallingPayloadEnum.SDP_ANSWER>>(
        (observer) => {
          const onReceivedCall = ({
            roomId: responderRoomId,
            sdpAnswer,
          }: z.infer<
            (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.RECEIVED_CALL]
          >) => {
            if (observerRoomId === responderRoomId) {
              observer.next({
                type: SignallingPayloadEnum.SDP_ANSWER,
                roomId: observerRoomId,
                sdpAnswer,
                sourceCallerId,
              });
            }
          };
          eventEmitter.on(WaveRTCEvents.RECEIVED_CALL, onReceivedCall);
          return () =>
            eventEmitter.off(WaveRTCEvents.RECEIVED_CALL, onReceivedCall);
        }
      );
    }),

  gotICECandidateEvent: procedure
    .input(z.object({ roomId: z.string() }))
    .subscription(({ input }) => {
      const { roomId: observerRoomId } = input;

      return observable<SignallingPayload<SignallingPayloadEnum.ICE_CANDIDATE>>(
        (observer) => {
          const onGotICECandidate = ({
            roomId: initiatorRoomId,
            candidate,
            sdpMLineIndex,
            sdpMid,
          }: z.infer<
            (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.GOT_ICE_CANDIDATE]
          >) => {
            if (observerRoomId === initiatorRoomId) {
              observer.next({
                type: SignallingPayloadEnum.ICE_CANDIDATE,
                candidate,
                sdpMid,
                sdpMLineIndex,
              });
            }
          };
          eventEmitter.on(WaveRTCEvents.GOT_ICE_CANDIDATE, onGotICECandidate);
          return () =>
            eventEmitter.off(
              WaveRTCEvents.GOT_ICE_CANDIDATE,
              onGotICECandidate
            );
        }
      );
    }),

  hungUpEvent: procedure
    .input(z.object({ roomId: z.string() }))
    .subscription(({ input }) => {
      const { roomId: observerRoomId } = input;

      return observable<SignallingPayload<SignallingPayloadEnum.HANG_UP>>(
        (observer) => {
          const onHungUp = ({
            roomId: responderRoomId,
          }: z.infer<
            (typeof WaveRTCEventHandlerArgsZSchema)[WaveRTCEvents.HUNG_UP]
          >) => {
            if (observerRoomId === responderRoomId) {
              observer.next({ type: SignallingPayloadEnum.HANG_UP });
            }
          };
          eventEmitter.on(WaveRTCEvents.HUNG_UP, onHungUp);
          return () => eventEmitter.off(WaveRTCEvents.HUNG_UP, onHungUp);
        }
      );
    }),
});
