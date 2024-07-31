import React from "react";
import { RxCross2 } from "react-icons/rx";

function Collapser() {
  return (
    <div className='h-8 w-8 rounded-full flex items-center justify-center cursor-pointer bg-tokyo-dull-gray bg-opacity-10 hover:bg-opacity-90'>
      <RxCross2 />
    </div>
  );
}

export default Collapser;
