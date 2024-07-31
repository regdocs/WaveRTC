"use client";

import ChatPanel from "@/components/ChatPanel";
import Confluence from "@/components/Confluence";
import RecentPanel from "@/components/RecentPanel";
import Signet from "@/components/Signet";

function Room({ params }: { params: { roomid: string } }) {
  return (
    <main className='flex-grow grid grid-cols-[18%_1fr_25%] w-full h-full gap-7 p-7'>
      <div className='flex flex-col w-full h-full gap-7'>
        <Signet />

        <RecentPanel />
      </div>

      <Confluence roomid={params.roomid} password='abiwporyaegy' />

      <ChatPanel />
    </main>
  );
}

export default Room;
