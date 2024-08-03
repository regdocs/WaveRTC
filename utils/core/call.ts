import { globalRoomIdStore } from "@/db/mcache";
import { generateUniqueHexString } from "../random";

const roomIdSet = globalRoomIdStore;

export function allocateRoomId() {
  let id: string;
  while (true) {
    id = generateUniqueHexString(20);
    if (!roomIdSet.has(id)) {
      roomIdSet.add(id);
      return id;
    }
  }
}

export function deallocateRoomId(roomId: string) {
  return globalRoomIdStore.delete(roomId);
}
