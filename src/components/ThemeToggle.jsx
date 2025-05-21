import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('auto');
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('starlight-theme') || 'auto';
    setTheme(storedTheme);

    // Set initial dark mode state
    if (storedTheme === 'dark') {
      setIsDark(true);
    } else if (storedTheme === 'light') {
      setIsDark(false);
    } else {
      // Auto mode - check system preference
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'auto') {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Update theme when toggle is clicked
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDark(!isDark);

    // Update localStorage
    localStorage.setItem('starlight-theme', newTheme);

    // Update document theme
    document.documentElement.dataset.theme = newTheme;

    // Update Starlight theme if StarlightThemeProvider exists
    if (window.StarlightThemeProvider) {
      window.StarlightThemeProvider.updatePickers(newTheme);
    }
  };

  return (
    <div className="theme-toggle-wrapper">
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      >
        <div className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
          <div className="toggle-icons">
            <FiSun className="sun-icon" />
            <FiMoon className="moon-icon" />
          </div>
          <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`} />
        </div>
      </button>
      <style jsx>{`
        .theme-toggle-wrapper {
          display: inline-flex;
          align-items: center;
          height: 100%;
        }

        .theme-toggle {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          outline: none;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .toggle-track {
          position: relative;
          display: inline-block;
          width: 60px; /* Wider to give more space for icons */
          height: 28px;
          border-radius: 30px;
          padding: 0;
          transition: all 0.2s ease;
          border: 2px solid; /* Thicker border with dynamic color */
          overflow: visible; /* Allow icons to overflow if needed */
        }

        .toggle-track.light {
          background-color: #e0e0e0; /* Light gray background for better contrast */
          border-color: #9b59b6; /* Purple border */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 1px #9b59b6; /* Double shadow for visibility */
        }

        .toggle-track.dark {
          background-color: #1a1a2e;
          border-color: rgba(255, 255, 255, 0.3); /* More visible border */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2); /* Double shadow */
        }

        .toggle-track:hover {
          box-shadow: 0 0 0 3px rgba(155, 89, 182, 0.5); /* Stronger purple glow for light mode hover */
          border-color: #8e44ad; /* Darker purple border on hover */
        }

        .toggle-track.dark:hover {
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3); /* Stronger white glow for dark mode hover */
          border-color: rgba(255, 255, 255, 0.4); /* More visible border on hover */
        }

        /* Add hover effect to the thumb as well */
        .theme-toggle:hover .toggle-thumb.light {
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(155, 89, 182, 0.5);
        }

        .theme-toggle:hover .toggle-thumb.dark {
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.3);
        }

        .toggle-icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0;
          width: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 2; /* Ensure icons are above the thumb */
          left: 0;
          top: 0;
        }

        .sun-icon {
          color: ${isDark ? '#ff9500' : '#ff9500'}; /* Orange in both modes for better visibility */
          font-size: 18px; /* Larger icon */
          margin: 0;
          padding: 0;
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
          opacity: ${isDark ? 0.6 : 1}; /* More visible in light mode */
          transition: all 0.2s ease;
          filter: drop-shadow(0 0 3px ${isDark ? 'rgba(255, 149, 0, 0.7)' : 'rgba(255, 149, 0, 0.9)'});
          stroke-width: 3px; /* Thicker lines for better visibility */
        }

        .moon-icon {
          color: ${isDark ? '#ffffff' : '#6c5ce7'}; /* White in dark mode, purple in light mode */
          font-size: 18px; /* Larger icon */
          margin: 0;
          padding: 0;
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          opacity: ${isDark ? 1 : 0.7}; /* More visible in both modes */
          transition: all 0.2s ease;
          filter: drop-shadow(0 0 3px ${isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(108, 92, 231, 0.9)'});
          stroke-width: 3px; /* Thicker lines for better visibility */
        }

        .toggle-thumb {
          position: absolute;
          top: 2px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          z-index: 1; /* Below the icons */
          opacity: 1; /* Fully opaque for better visibility */
          border: 2px solid; /* Add border to thumb */
        }

        .toggle-thumb.light {
          background-color: #9b59b6; /* Purple thumb in light mode */
          border-color: #8e44ad; /* Darker purple border */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1); /* Enhanced shadow */
          transform: translateX(4px); /* Slightly offset from left edge */
        }

        .toggle-thumb.dark {
          background-color: #9b59b6; /* Purple thumb in dark mode */
          border-color: #8e44ad; /* Darker purple border */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2); /* Enhanced shadow */
          transform: translateX(32px); /* Adjusted for wider track */
        }
      `}</style>
    </div>
  );
};

export default ThemeToggle;
