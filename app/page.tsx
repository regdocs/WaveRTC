import { waveRTCTrpcClient } from "@/clients/trpc";

export default async function Home() {
  const hi = await waveRTCTrpcClient.helloWorld.query({
    sayHelloTo: "@jayzsh",
  });

  return <main className='font-black'>{hi.greeting}</main>;
}
