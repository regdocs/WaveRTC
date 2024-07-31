import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import Collapser from "./Collapser";

function TokyoContainer({
  children,
  heading,
  Icon,
}: {
  children: ReactNode;
  heading: string;
  Icon: IconType;
}) {
  return (
    <div className='h-full rounded-2xl bg-tokyo-blue w-full shadow-lg p-2 flex flex-col'>
      <div className='p-2 pl-4 w-full text-sm text-white bg-tokyo-gray rounded-xl flex flex-row justify-between items-center'>
        <div>
          <Icon className='inline-block mr-3 text-xl' />
          {heading}
        </div>

        <Collapser />
      </div>

      <div className='p-5 overflow-y-auto flex-grow relative'>{children}</div>
    </div>
  );
}

export default TokyoContainer;
