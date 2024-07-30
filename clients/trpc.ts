import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/router/app";
import { getBaseUrl } from "@/utils/environment";

export const waveRTCTrpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: getBaseUrl() + "/api/trpc",
    }),
  ],
});
