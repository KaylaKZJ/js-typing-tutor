'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeHighlighter = ({ children }: { children: string }) => {
  return (
    <SyntaxHighlighter language='javascript' style={darcula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
