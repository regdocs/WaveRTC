import { z } from "zod";
import { procedure, router } from "./trpc";

export const appRouter = router({
  helloWorld: procedure
    .input(
      z.object({
        sayHelloTo: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.sayHelloTo}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
