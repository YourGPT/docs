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
          padding: 3px 4px; /* Small padding around the capsule */
          cursor: pointer;
          outline: none !important;
          display: flex;
          align-items: center;
          height: auto;
          position: relative;
          z-index: 15; /* Ensure button is above other elements */
          border-radius: 18px; /* Tight capsule shape */
          box-shadow: none !important;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        /* Remove any focus outline and replace with tight capsule-shaped focus */
        .theme-toggle:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
          border-radius: 18px !important;
        }

        .theme-toggle:focus-visible {
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
          border-radius: 18px !important;
        }

        /* Dark mode focus */
        :global([data-theme="dark"]) .theme-toggle:focus,
        :global([data-theme="dark"]) .theme-toggle:focus-visible {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3) !important;
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
          z-index: 20; /* Ensure track is above other elements */
        }

        .toggle-track.light {
          background-color: #f8fafc; /* Very light gray background */
          border-color: #cbd5e1; /* Subtle gray border */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(203, 213, 225, 0.8); /* Subtle shadow */
        }

        .toggle-track.dark {
          background-color: #1e293b;
          border-color: rgba(59, 130, 246, 0.6); /* Blue border for dark mode */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.4); /* Blue shadow */
        }

        .toggle-track:hover {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3); /* Subtle blue glow for light mode hover */
          border-color: #94a3b8; /* Slightly darker gray border on hover */
        }

        .toggle-track.dark:hover {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Blue glow for dark mode hover */
          border-color: rgba(59, 130, 246, 0.8); /* More visible blue border on hover */
        }

        /* Add hover effect to the thumb as well */
        .theme-toggle:hover .toggle-thumb.light {
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(59, 130, 246, 0.3);
        }

        .theme-toggle:hover .toggle-thumb.dark {
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.6);
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
          color: ${isDark ? '#ffffff' : '#f2f3f3'}; /* Neutral gray in both modes */
          font-size: 16px; /* Larger icon */
          margin: 0;
          padding: 0;
          position: absolute;
          left: 9px;
          top: 50%;
          transform: translateY(-50%);
          opacity: ${isDark ? 0.4 : 1}; /* More visible in light mode */
          transition: all 0.2s ease;
          filter: drop-shadow(0 0 ${isDark ? '0px' : '6px'} ${isDark ? 'transparent' : 'rgba(71, 85, 105, 0.9)'});
          stroke-width: 3px; /* Thicker lines for better visibility */
        }

        .moon-icon {
          color: ${isDark ? '#ffffff' : '#64748b'}; /* White when active (dark mode), gray when inactive (light mode) */
          font-size: 18px; /* Larger icon */
          margin: 0;
          padding: 0;
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          opacity: ${isDark ? 1 : 0.4}; /* Bright when active, dim when inactive */
          transition: all 0.2s ease;
          filter: drop-shadow(0 0 ${isDark ? '6px' : '0px'} ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'transparent'}); /* Glow when active */
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
          background-color: #64748b; /* Elegant gray thumb in light mode */
          border-color: #475569; /* Darker gray border */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05); /* Subtle shadow */
          transform: translateX(4px); /* Slightly offset from left edge */
        }

        .toggle-thumb.dark {
          background-color: #3b82f6; /* Blue thumb in dark mode */
          border-color: #2563eb; /* Darker blue border */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.3); /* Enhanced shadow */
          transform: translateX(32px); /* Adjusted for wider track */
        }
      `}</style>
    </div>
  );
};

export default ThemeToggle;
