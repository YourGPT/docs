import React from 'react';

const ResponseBox = ({ response }) => {
  return (
    <div className="response-box border border-gray-800 rounded-md !mt-1">
      <div className="response-header p-3">
        <span className="response-label text-blue-500 ">Response</span>
      </div>
      <pre className="response-content whitespace-pre-wrap break-all bg-gray-800 !mt-0">
        <code>{response}</code>
      </pre>
      {/* <style jsx>{`
        .response-box {
          border: 1px solid #30363d;
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: #0d1117;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          line-height: 1.5;
          color: #e6edf3;
          margin-top: 1rem;
        }
        .response-header {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          background-color: #161b22;
          border-bottom: 1px solid #30363d;
        }
        .response-label {
          color: #58a6ff;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .response-content {
          margin-top: 0 !important;
          padding: 1rem;
          overflow-x: auto;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        @media (max-width: 640px) {
          .response-box {
            font-size: 12px;
          }
          .response-header {
            padding: 0.5rem;
          }
          .response-label {
            font-size: 0.75rem;
          }
          .response-content {
            padding: 0.5rem;
          }
        }
      `}</style> */}
    </div>
  );
};

export default ResponseBox;