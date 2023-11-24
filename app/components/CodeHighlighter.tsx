'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeHighlighter = ({ children }: { children: string }) => {
  return (
    <SyntaxHighlighter language='javascript' style={ocean}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
