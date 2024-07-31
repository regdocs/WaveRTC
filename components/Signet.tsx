import React from "react";
import { BsGithub, BsSoundwave } from "react-icons/bs";

function Signet() {
  return (
    <div className='flex flex-row gap-2 items-center p-5 bg-tokyo-blue rounded-2xl shadow-lg justify-center flex-nowrap'>
      <BsSoundwave fontSize={30} className='text-tokyo-bright-blue' />

      <div className='font-light text-xl whitespace-nowrap'>
        <span className='text-white'>
          wave<b className='font-bold'>RTC</b>
        </span>
        <span className='text-xs font-normal mx-2 hover:text-tokyo-bright-blue cursor-pointer'>
          by @jayzsh&nbsp;&nbsp;
          <BsGithub className='inline-block text-lg mb-1' />
        </span>
      </div>
    </div>
  );
}

export default Signet;
