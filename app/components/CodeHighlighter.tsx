'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeHighlighter = ({ children }: { children: string }) => {
  return (
    <SyntaxHighlighter language='javascript' style={nightOwl}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
