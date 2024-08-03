import { z } from "zod";
import { procedure, router } from "./trpc";
import { observable } from "@trpc/server/observable";
import { allocateCallerId, deallocateCallerId } from "@/utils/core/init";

export const initRouter = router({
  mainframe: procedure
    .input(z.object({ callerId: z.string() }))
    .subscription(({ input }) => {
      const { callerId } = input;

      if (!allocateCallerId(callerId))
        throw new Error("This callerId is taken, try again :(");

      return observable<{ message: string }>((observer) => {
        observer.next({ message: `Welcome aboard, @${callerId}!` });
        return () => deallocateCallerId(callerId);
      });
    }),
});
