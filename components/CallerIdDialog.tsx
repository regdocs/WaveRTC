"use client";

import React, { useState } from "react";

type CallerIdDialogProps = {
  onSubmit: (callerId: string) => void;
  isVerifying: boolean;
};

const CallerIdDialog: React.FC<CallerIdDialogProps> = ({
  onSubmit,
  isVerifying,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-md shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Enter Caller ID</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter a unique Caller ID'
            className='border p-2 w-full rounded-md mb-4'
            disabled={isVerifying}
          />
          <button
            type='submit'
            className={`w-full p-2 rounded-md text-white ${
              isVerifying ? "bg-gray-500" : "bg-blue-500"
            } `}
            disabled={isVerifying}>
            {isVerifying ? "Verifying..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallerIdDialog;
