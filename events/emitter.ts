import { EventEmitter } from "stream";
import { z } from "zod";

export const eventEmitter = new EventEmitter();

export enum WaveRTCEvents {
  INCOMING_CALL = "incomingcall",
  RECEIVED_CALL = "receivedcall",
  HUNG_UP = "hungup",
  GOT_ICE_CANDIDATE = "goticecandidate",
}

export const WaveRTCEventHandlerArgsZSchema = {
  [WaveRTCEvents.INCOMING_CALL]: z.object({
    sdpOffer: z.string(),
    roomId: z.string(),
    destinationCallerId: z.string(),
    sourceCallerId: z.string(),
  }),

  [WaveRTCEvents.RECEIVED_CALL]: z.object({
    roomId: z.string(),
    sdpAnswer: z.string(),
  }),

  [WaveRTCEvents.HUNG_UP]: z.object({
    roomId: z.string(),
  }),

  [WaveRTCEvents.GOT_ICE_CANDIDATE]: z.object({
    roomId: z.string(),
    candidate: z.string(),
    sdpMid: z.string().nullable(),
    sdpMLineIndex: z.number().nullable(),
  }),
};
