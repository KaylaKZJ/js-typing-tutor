'use client';

type TProps = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};
const TypingArea = ({ setUserInput, userInput }: TProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Backspace') {
      setUserInput(userInput.slice(0, -1));
    }
  };

  return (
    <textarea
      value={''}
      className='w-full h-[100vh] p-0 text-2xl bg bg-black'
      onKeyDown={handleKeyDown}
      onChange={(e) => setUserInput(userInput + e.target.value)}
    />
  );
};

export default TypingArea;
