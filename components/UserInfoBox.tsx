import React from "react";
import { GiPyromaniac } from "react-icons/gi";

const blinkingDotStyle = {
  animation: "blink 2s step-start 0s infinite",
};

const UserInfoBox = () => {
  return (
    <div className='flex flex-row items-center gap-3 rounded-2xl p-3 px-4 bg-tokyo-blue'>
      <div className='flex flex-col gap-0.5 items-end'>
        <div className='text-white text-lg font-normal items-center flex flex-row'>
          <div
            style={blinkingDotStyle}
            className='bg-tokyo-bright-blue h-2 w-2 rounded-full inline-block mr-2 shadow-tokyo-bright'>
            &nbsp;
          </div>
          @jayzsh
        </div>
        <div className='text-xs'>192.168.81.10 (You)</div>
      </div>
      <GiPyromaniac className='text-4xl text-white ml-2' />
      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          25% {
            opacity: 0;
          }
          75% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default UserInfoBox;
