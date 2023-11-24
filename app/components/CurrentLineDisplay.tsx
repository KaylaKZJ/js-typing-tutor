'use client';
import CodeHighlighter from './CodeHighlighter';

const CurrentLineDisplay = ({
  userInput,
  tutorText,
}: {
  userInput: string;
  tutorText: string;
}) => {
  return (
    <div className='flex'>
      <CodeHighlighter>{userInput.trimStart()}</CodeHighlighter>
      <pre className='bg-[#2b2b2b] p-[0.5em] pl-0 pr-0 ml-[-0.5em] text-[#4a4a4a] opacity-100'>
        <code>{tutorText}</code>
      </pre>
    </div>
  );
};

export default CurrentLineDisplay;
