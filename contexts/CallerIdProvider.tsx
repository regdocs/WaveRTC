"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLocalStorageCallerId } from "@/hooks/callerid"; // Ensure the import path is correct
import CallerIdDialog from "@/components/CallerIdDialog"; // Ensure the import path is correct

type CallerIdContextType = {
  callerId: string | null;
};

const CallerIdContext = createContext<CallerIdContextType | undefined>(
  undefined
);

export const useCallerIdContext = (): CallerIdContextType => {
  const context = useContext(CallerIdContext);
  if (context === undefined) {
    throw new Error(
      "useCallerIdContext must be used within a CallerIdProvider"
    );
  }
  return context;
};

export const CallerIdProvider = ({ children }: { children: ReactNode }) => {
  const { callerId, isDialogOpen, isVerifying, handleDialogSubmit } =
    useLocalStorageCallerId();

  return (
    <CallerIdContext.Provider value={{ callerId }}>
      {children}
      {isDialogOpen && (
        <CallerIdDialog
          onSubmit={handleDialogSubmit}
          isVerifying={isVerifying}
        />
      )}
    </CallerIdContext.Provider>
  );
};
