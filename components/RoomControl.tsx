import React, { Dispatch, SetStateAction, useState } from "react";
import {
  IoMicOff,
  IoMicSharp,
  IoVideocamOff,
  IoVideocamSharp,
} from "react-icons/io5";
import classNames from "classnames";
import { LuScreenShare, LuScreenShareOff } from "react-icons/lu";
import { PiPhoneDisconnect } from "react-icons/pi";

function RoomControl() {
  const [voiceDisabled, setVoiceDisabled] = useState<boolean>(true);
  const [videoDisabled, setVideoDisabled] = useState<boolean>(true);
  const [screenShareDisabled, setScreenShareDisabled] = useState<boolean>(true);

  return (
    <div className='bg-tokyo-blue rounded-full w-fit p-3 flex flex-row gap-5'>
      <VoiceControl state={!voiceDisabled} setDisabled={setVoiceDisabled} />
      <VideoControl state={!videoDisabled} setDisabled={setVideoDisabled} />
      <ScreenShareControl
        state={!screenShareDisabled}
        setDisabled={setScreenShareDisabled}
      />
      <Disconnect />
    </div>
  );
}

function VoiceControl({
  state,
  setDisabled,
}: {
  state: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}) {
  const toggle = () => setDisabled((s) => !s);

  return (
    <button
      onClick={toggle}
      className={classNames(
        "h-12 w-12 rounded-full outline-none text-2xl flex items-center justify-center cursor-pointer",
        {
          "bg-tokyo-dull-gray text-white bg-opacity-30": state,
          "bg-tokyo-red text-black": !state,
        }
      )}>
      {state ? <IoMicSharp /> : <IoMicOff />}
    </button>
  );
}

function VideoControl({
  state,
  setDisabled,
}: {
  state: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}) {
  const toggle = () => setDisabled((s) => !s);

  return (
    <button
      onClick={toggle}
      className={classNames(
        "h-12 w-12 rounded-full outline-none text-2xl flex items-center justify-center cursor-pointer",
        {
          "bg-tokyo-dull-gray text-white bg-opacity-30": state,
          "bg-tokyo-red text-black": !state,
        }
      )}>
      {state ? <IoVideocamSharp /> : <IoVideocamOff />}
    </button>
  );
}

function ScreenShareControl({
  state,
  setDisabled,
}: {
  state: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}) {
  const toggle = () => setDisabled((s) => !s);

  return (
    <button
      onClick={toggle}
      className={classNames(
        "h-12 w-12 rounded-full outline-none text-2xl flex items-center justify-center cursor-pointer",
        {
          "bg-tokyo-dull-gray text-white bg-opacity-30": state,
          "bg-tokyo-cyan text-black": !state,
        }
      )}>
      {state ? <LuScreenShare /> : <LuScreenShareOff />}
    </button>
  );
}

function Disconnect() {
  return (
    <button
      className={classNames(
        "h-12 w-28 rounded-full outline-none text-2xl flex items-center justify-center cursor-pointer",
        "bg-tokyo-red text-black"
      )}>
      <PiPhoneDisconnect />
    </button>
  );
}

export default RoomControl;
