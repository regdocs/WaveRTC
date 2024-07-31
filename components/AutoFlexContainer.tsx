import React, { type ReactNode } from "react";

function AutoFlexContainer({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-row w-full flex-grow flex-wrap justify-center gap-5 items-center'>
      {children}
    </div>
  );
}

export default AutoFlexContainer;
