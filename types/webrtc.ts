export enum SignallingPayloadEnum {
  SDP_OFFER = "sdp_offer",
  SDP_ANSWER = "sdp_answer",
  ICE_CANDIDATE = "ice_candidate",
  HANG_UP = "hang_up",
}

export type SignallingPayloadTypes = EnumValues<typeof SignallingPayloadEnum>;

export type SignallingPayload<T extends SignallingPayloadTypes> = {
  type: T;
} & (T extends SignallingPayloadEnum.SDP_OFFER
  ? { sdpOffer: string; roomId: string; sourceCallerId: string }
  : T extends SignallingPayloadEnum.SDP_ANSWER
  ? { sdpAnswer: string; roomId: string; sourceCallerId: string }
  : T extends SignallingPayloadEnum.ICE_CANDIDATE
  ? { candidate: string; sdpMid: string | null; sdpMLineIndex: number | null }
  : {});

/* Utility types */
type EnumValues<E> = E[keyof E];
