import React from "react";
import { MdOutlineFileCopy } from "react-icons/md";
import { TbCopyCheck } from "react-icons/tb";

const CodeBox = ({ language, children, commentColor = "#4ade80" }) => {
  const codeRef = React.useRef(null); // Reference to the code block
  const [copy, setCopy] = React.useState(false); // State to track if the code has been copied
  const handleCopy = () => {
    console.log("sdaf");
    if (codeRef.current) {
      const text = codeRef.current.innerText;
      navigator.clipboard.writeText(text).then(
        () => {
          setCopy(true); // Optional alert to notify user
        },
        () => {
         setCopy(false); // Optional alert to notify user
        }
      );
    }
  };

  // Function to detect comments and apply styles
  const formatCodeWithComments = (code) => {
    const lines = code.split("\n");
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith("/*") && trimmedLine.endsWith("*/")) {
        return (
          <span key={index} style={{ color: commentColor }}>
            {line}
            {"\n"}
          </span>
        );
      }
      return (
        <span key={index}>
          {line}
          {"\n"}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col  text-white  rounded-md border border-gray-800 my-4">
      <div className="flex items-center justify-between p-3">
        <p className="text-lg font-semibold">{language}</p>
        <button
          onClick={handleCopy}
          className=" copy-button text-white p-2 rounded bg-gray-800 !mt-0"
        >
         {copy ? <TbCopyCheck className="text-blue-500" /> : <MdOutlineFileCopy />} 
        </button>
      </div>

      <pre
        ref={codeRef}
        className="whitespace-pre-wrap break-all bg-gray-800 rounded-b-md !mt-0"
      >
        <code>{formatCodeWithComments(children.props.value)}</code>
      </pre>
    </div>
  );
};

export default CodeBox;


