import React from "react";
import { PiPlugsConnected } from "react-icons/pi";

function RoomInfoBox({
  roomid,
  password,
}: {
  roomid: string;
  password: string;
}) {
  return (
    <div className='p-[0.9rem] self-start pl-5 pr-8 rounded-2xl shadow-tokyo-bright w-fit flex flex-row items-center text-white bg-tokyo-bright-blue'>
      <PiPlugsConnected className='mr-3 text-3xl' />
      <div className='flex flex-col'>
        <div className='text-xl font-normal text-white'>#{roomid}</div>
        <div className='text-xs'>{password}</div>
      </div>
    </div>
  );
}

export default RoomInfoBox;
