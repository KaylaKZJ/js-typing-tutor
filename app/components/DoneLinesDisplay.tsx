'use client';
import CodeHighlighter from './CodeHighlighter';

const DoneLinesDisplay = ({
  doneLines,
  code,
}: {
  doneLines: number[];
  code: string[];
}) => {
  return (
    <>
      {doneLines.length > 0 &&
        doneLines.map((line) => (
          <CodeHighlighter key={code[line]}>{code[line]}</CodeHighlighter>
        ))}
    </>
  );
};

export default DoneLinesDisplay;
