import React, { useEffect, useState } from 'react';

const ResponseBox = ({ response }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };

    // Initial theme check
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`response-box border rounded-md !mt-1 ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="response-header p-3">
        <span className="response-label text-blue-500">Response</span>
      </div>
      <pre className="response-content whitespace-pre-wrap break-all">
        <code>{response}</code>
      </pre>
      <style jsx>{`
        .response-box {
          border: 1px solid var(--theme-divider);
          border-radius: 0.5rem;
          overflow: hidden;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          line-height: 1.5;
          margin-top: 1rem;
        }
        .response-box.light {
          background-color: var(--theme-bg);
          color: var(--theme-text);
        }
        .response-box.dark {
          background-color: var(--theme-bg-dark);
          color: var(--theme-text-dark);
        }
        .response-header {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--theme-divider);
        }
        .response-label {
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
      `}</style>
    </div>
  );
};

export default ResponseBox;