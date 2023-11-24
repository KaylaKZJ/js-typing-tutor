'use client';

import { useEffect, useState } from 'react';
import Tutor from './Tutor';
import TypingArea from './TypingArea';
import { CODE } from '@/operations/constants';
import { shuffleArrayOfArrays } from '@/operations/helpers';

const TypingTutorWrapper = () => {
  const [code, setCode] = useState<null | any[]>();
  const [codeShuffled, setCodeShuffled] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (codeShuffled) return;
    setCode(shuffleArrayOfArrays(CODE));
    setCodeShuffled(true);
  }, []);

  return (
    <>
      {codeShuffled && (
        <Tutor
          code={code as any[]}
          userInput={userInput}
          setUserInput={setUserInput}
          complete={complete}
          setComplete={setComplete}
        />
      )}
      <TypingArea userInput={userInput} setUserInput={setUserInput} />
    </>
  );
};

export default TypingTutorWrapper;
