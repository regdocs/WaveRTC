import React from "react";
import RoomInfoBox from "./RoomInfoBox";
import AutoFlexContainer from "./AutoFlexContainer";
import StreamWindow from "./StreamWindow";
import RoomControl from "./RoomControl";
import UserInfoBox from "./UserInfoBox";

function Confluence({
  roomid,
  password,
}: {
  roomid: string;
  password: string;
}) {
  return (
    <div className='flex flex-col justify-between items-center gap-5'>
      <div className='flex flex-row justify-between items-center w-full'>
        <RoomInfoBox roomid={roomid} password={password} />

        <UserInfoBox />
      </div>

      <AutoFlexContainer>
        <StreamWindow />
        <StreamWindow />
        <StreamWindow />
      </AutoFlexContainer>

      <RoomControl />
    </div>
  );
}

export default Confluence;
