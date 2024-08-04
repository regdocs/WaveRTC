"use client";

import React, { useState } from "react";
import { waveRTCTrpcClient } from "@/clients/trpc";
import { useCallerIdContext } from "@/contexts/CallerIdProvider";

export default function Home() {
  const { callerId } = useCallerIdContext();

  if (!callerId) return <>waiting for callerid input...</>;

  return (
    <main className='flex bg-tokyo-dark flex-col items-center justify-center min-h-screen p-4'>
      {callerId}
    </main>
  );
}
