import React from 'react';

const ResponseBox = ({ response }) => {
  return (
    <div className="response-box">
      <div className="response-header">
        <span className="response-label">Response</span>
      </div>
      <pre className="response-content">
        <code>{response}</code>
      </pre>
      <style jsx>{`
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
          margin: 0;
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
      `}</style>
    </div>
  );
};

export default ResponseBox;