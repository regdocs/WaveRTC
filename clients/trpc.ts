import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/router/app";

export const waveRTCTrpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
