import React, { useState, useEffect, useCallback } from 'react';

const CopyIcon = ({ copied }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {copied ? (
      <polyline points="20 6 9 17 4 12" />
    ) : (
      <>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </>
    )}
  </svg>
);
const highlightSyntax = (code) => {
    return code
      .replace(/(["'`])(?:\\.|[^\\])*?\1/g, '<span class="string">$&</span>') // Strings
      .replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g, '<span class="function">$1</span>') // Functions
      .replace(/\b(const|let|var)\s+([a-zA-Z_]\w*)/g, '$1 <span class="variable">$2</span>') // Variables
      .replace(/(^|\s)(\/\/.*$)/gm, '$1<span class="comment">$2</span>') // Single-line comments
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>'); // Multi-line comments
  };
  
  const CodeBox = ({ children, language }) => {
    const [copied, setCopied] = useState(false);
    const [lines, setLines] = useState([]);
  
    useEffect(() => {
      // Escape angle brackets to prevent HTML parsing
      const escapedCode = children.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const highlightedCode = highlightSyntax(escapedCode);
      setLines(highlightedCode.split('\n'));
    }, [children]);
  
    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText(children).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }, [children]);
  
    return (
      <div className="code-box">
        <div className="code-box-header">
          <span className="language-label">{language || 'text'}</span>
          <button 
            onClick={handleCopy}
            className="copy-button"
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            <CopyIcon copied={copied} />
          </button>
        </div>
        <pre className="code-content">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="code-line">
                <span className="line-number">{index + 1}</span>
                <span className="line-content" dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
          </code>
        </pre>
        <style jsx>{`
          .code-box {
            border: 1px solid #1e2d3d;
            border-radius: 0.5rem;
            overflow: hidden;
            background-color: #0d1117;
            font-family: 'Fira Code', monospace;
            font-size: 14px;
            line-height: 1.5;
            color: #e6edf3;
          }
          .code-box-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1rem;
            background-color: #161b22;
            border-bottom: 1px solid #30363d;
          }
          .language-label {
            color: #8b949e;
            font-size: 0.875rem;
          }
          .copy-button {
            background-color: transparent;
            border: none;
            color: #8b949e;
            cursor: pointer;
            padding: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s ease;
          }
          .copy-button:hover {
            color: #58a6ff;
          }
          .code-content {
            margin: 0;
            padding: 1rem;
            overflow-x: auto;
          }
          .code-line {
            display: flex;
            white-space: pre;
          }
          .line-number {
            user-select: none;
            color: #484f58;
            text-align: right;
            padding-right: 1rem;
            min-width: 2.5rem;
          }
          .line-content {
            flex: 1;
          }
          .line-content :global(.string) { color: #a5d6ff; }
          .line-content :global(.function) { color: #d2a8ff; }
          .line-content :global(.variable) { color: #ffa657; }
          .line-content :global(.comment) { color: #4ade80; font-style: italic; }
          
          @media (max-width: 640px) {
            .code-box {
              font-size: 12px;
            }
            .code-box-header {
              padding: 0.5rem;
            }
            .language-label {
              font-size: 0.75rem;
            }
            .code-content {
              padding: 0.5rem;
            }
            .line-number {
              min-width: 2rem;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default CodeBox;