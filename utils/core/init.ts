import { globalCallerIdStore } from "@/db/mcache";

export function allocateCallerId(requestedCallerId: string): boolean {
  if (globalCallerIdStore.has(requestedCallerId)) return false;
  globalCallerIdStore.add(requestedCallerId);
  return true;
}

export function deallocateCallerId(existingCallerId: string): boolean {
  return globalCallerIdStore.delete(existingCallerId);
}
