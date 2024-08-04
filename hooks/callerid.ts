import { useState, useEffect } from "react";
import { waveRTCTrpcClient } from "@/clients/trpc";

export const useLocalStorageCallerId = () => {
  const [callerId, setCallerId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const storedCallerId = getLocalStorageCallerId();
    if (storedCallerId) verifyCallerId(storedCallerId);
    else setIsDialogOpen(true);
  }, []);

  const verifyCallerId = (inputCallerId: string) => {
    setIsVerifying(true);

    waveRTCTrpcClient.appInit.mainframe.subscribe(
      { callerId: inputCallerId },
      {
        onData: (_) => {
          setLocalStorageCallerId(inputCallerId);
          setCallerId(inputCallerId);
          setIsDialogOpen(false);
          setIsVerifying(false);
        },
        onError: (error) => {
          alert("This callerId is taken, try again :(");
          console.error(error);
          setIsVerifying(false);
          setIsDialogOpen(true);
        },
      }
    );
  };

  const handleDialogSubmit = (inputCallerId: string) => {
    verifyCallerId(inputCallerId);
  };

  return {
    callerId,
    isDialogOpen,
    isVerifying,
    handleDialogSubmit,
  };
};

const getLocalStorageCallerId = () => localStorage.getItem("callerId");
const setLocalStorageCallerId = (callerId: string) => {
  localStorage.setItem("callerId", callerId);
};
