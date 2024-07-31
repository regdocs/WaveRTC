import React from "react";
import TokyoContainer from "./TokyoContainer";
import { PiChatsTeardropFill } from "react-icons/pi";

function ChatPanel() {
  return (
    <TokyoContainer heading='Chats' Icon={PiChatsTeardropFill}>
      ChatPanel
      <div className='h-20' />
      <textarea
        className='peer rounded-lg font-light h-20 focus:shadow-lg focus:ring-2 m-2 ring-tokyo-bright-blue outline-none bg-tokyo-dark bg-opacity-50 resize-none absolute bottom-0 left-0 w-[calc(100%-1rem)] p-2 text-white placeholder:text-tokyo-dull-gray'
        name=''
        id=''
        rows={2}
        placeholder='Type your message...'
      />
      <button className='absolute bottom-[4.8rem] right-7 p-1 px-3 text-white text-xs peer-focus:flex hidden peer-focus:shadow-tokyo-bright bg-tokyo-bright-blue rounded-full'>
        Transmit ↵
      </button>
    </TokyoContainer>
  );
}

export default ChatPanel;
