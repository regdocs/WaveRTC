"use client";

import ChatPanel from "@/components/ChatPanel";
import Confluence from "@/components/Confluence";
import RecentPanel from "@/components/RecentPanel";
import Signet from "@/components/Signet";

function Room({ params }: { params: { roomid: string } }) {
  return (
    <main className='flex-grow grid grid-cols-[20%_1fr_20%] w-full h-full gap-5 p-5'>
      <div className='flex flex-col w-full h-full gap-5'>
        <Signet />

        <RecentPanel />
      </div>

      <Confluence roomid={params.roomid} password='abiwporyaegy' />

      <ChatPanel />
    </main>
  );
}

export default Room;
