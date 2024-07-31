import React from "react";
import { FaMandalorian } from "react-icons/fa";

function StreamWindow() {
  return (
    <div className='w-full max-w-[calc(50%-1rem)] max-h-full min-h-[calc(50%-1rem)] rounded-xl bg-tokyo-blue border-4 border-tokyo-bright-blue relative'>
      <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
        <FaMandalorian className='text-9xl text-tokyo-dull-gray' />
      </div>
    </div>
  );
}

export default StreamWindow;
