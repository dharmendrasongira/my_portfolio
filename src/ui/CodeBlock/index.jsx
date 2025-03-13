/* eslint-disable react/prop-types */
import "./CodeBlock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ language, code }) => {
  return (
    <div className="code_block">
      <div className="flex_center dot_container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yLight}
        customStyle={{
          background: "rgba(var(--color-primary-rgb), 0.03)",
          color: "skyblue",
          padding: "20px",
          fontSize: "14px",
          lineHeight: "1.5",
          overflowX: "auto", // Allows horizontal scrolling
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
