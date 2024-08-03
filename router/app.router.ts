import { z } from "zod";
import { procedure, router } from "./trpc";
import { callRouter } from "./call.router";
import { initRouter } from "./init.router";

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

  call: callRouter,

  appInit: initRouter,
});

export type AppRouter = typeof appRouter;
