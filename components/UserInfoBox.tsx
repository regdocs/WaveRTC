import Image from "next/image";
import React from "react";
import LOGO from "@/public/icon.png";

function UserInfo() {
  return (
    <div className='flex flex-row items-center gap-3 rounded-xl p-3 pl-4 bg-tokyo-dull-gray bg-opacity-30'>
      <div className='flex flex-col gap-0.5 items-end'>
        <div className='text-white text-lg font-normal'>@jayzsh</div>
        <div className='text-xs'>192.168.81.10 (You)</div>
      </div>
      <Image src={LOGO} alt='user icon' height={40} />
    </div>
  );
}

export default UserInfo;
