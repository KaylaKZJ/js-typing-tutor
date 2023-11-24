'use client';
import {
  getLineUpdates,
  getNewLineTutorText,
  getUserDiffedTutorText,
} from '@/operations/helpers';
import { useEffect, useMemo, useState } from 'react';
import CurrentLineDisplay from './CurrentLineDisplay';
import DoneLinesDisplay from './DoneLinesDisplay';

const Tutor = ({
  userInput,
  complete,
  setUserInput,
  setComplete,
  code,
}: {
  userInput: string;
  complete: boolean;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  code: any[];
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCode, setCurrentCode] = useState(0);
  const [tutorText, setTutorText] = useState(code[currentCode][currentLine]);
  const [doneLines, setDoneLines] = useState<number[]>([]);
  const CODE_CURRENT = useMemo(() => code[currentCode], [currentCode, code]);
  const hasNextCode = useMemo(
    () => currentCode < code.length - 1,
    [currentCode, code]
  );
  const userInputMatchesCode = useMemo(
    () => userInput === CODE_CURRENT[currentLine],
    [userInput, CODE_CURRENT, currentLine]
  );

  useEffect(() => {
    onUserInputChange();
  }, [userInput]);

  useEffect(() => {
    onCurrentCodeCompletion();
  }, [doneLines]);

  const onCurrentCodeCompletion = () => {
    if (doneLines.length === CODE_CURRENT.length) {
      setComplete(true);
      if (hasNextCode) {
        setTutorText('Code complete! Type "yes" to continue');
      } else {
        setTutorText('You have completed the tutorial');
      }
    }
  };

  const onUserInputChange = () => {
    if (complete && userInput === 'yes' && hasNextCode) {
      setCurrentCode(currentCode + 1);
      resetState();
    }
    if (!complete && userInputMatchesCode) {
      setNewLineState();
    } else if (CODE_CURRENT[currentLine]) {
      setTutorText(
        getUserDiffedTutorText(CODE_CURRENT, currentLine, userInput)
      );
    }
  };

  const setNewLineState = () => {
    let { done, current } = getLineUpdates(doneLines, currentLine);

    setUserInput('');
    setCurrentLine(current);
    setDoneLines(done);
    setTutorText(getNewLineTutorText(CODE_CURRENT, currentLine));
  };

  const resetState = () => {
    setCurrentLine(0);
    setDoneLines([]);
    setComplete(false);
    setUserInput('');
  };

  return (
    <>
      <DoneLinesDisplay doneLines={doneLines} code={CODE_CURRENT} />
      <CurrentLineDisplay userInput={userInput} tutorText={tutorText} />
    </>
  );
};

export default Tutor;
