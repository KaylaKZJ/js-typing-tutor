'use client';

import { useEffect, useRef } from 'react';

type TProps = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};
const TypingArea = ({ setUserInput, userInput }: TProps) => {
  const inputReference = useRef<any>(null);

  useEffect(() => {
    if (inputReference.current !== null) {
      inputReference.current.focus();
    }
  }, [inputReference]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Backspace') {
      setUserInput(userInput.slice(0, -1));
    }
  };

  return (
    <textarea
      ref={inputReference}
      value={''}
      className='w-full h-[100vh] p-0 text-2xl bg bg-black'
      onKeyDown={handleKeyDown}
      onChange={(e) => setUserInput(userInput + e.target.value)}
    />
  );
};

export default TypingArea;
