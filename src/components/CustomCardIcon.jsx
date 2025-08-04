import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export default function CustomCardIcon({ name, size = "1.5em" }) {
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to set up theme detection
  useEffect(() => {
    // Initial theme check
    const checkTheme = () => {
      const theme = document.documentElement.dataset.theme;
      setIsDarkMode(theme === 'dark');
    };

    // Check theme on mount
    checkTheme();

    // Listen for theme changes
    const handleThemeChange = () => {
      checkTheme();
    };

    // Add event listener for theme changes
    document.addEventListener('themechange', handleThemeChange);

    // Also check periodically
    const interval = setInterval(checkTheme, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('themechange', handleThemeChange);
      clearInterval(interval);
    };
  }, []);

  // Map to store the icon libraries
  const iconSets = {
    "FaGlobe": FaIcons.FaGlobe,
    "FaFileAlt": FaIcons.FaFileAlt,
    "FaQuestionCircle": FaIcons.FaQuestionCircle,
    "FaFileText": FaIcons.FaFile,
    "FaYoutube": FaIcons.FaYoutube,
    "FaDatabase": FaIcons.FaDatabase,
    "FaPuzzlePiece": FaIcons.FaPuzzlePiece,
    "FaRobot": FaIcons.FaRobot,
    "FaCloudUploadAlt": FaIcons.FaCloudUploadAlt,
    "FaRocket": FaIcons.FaRocket,
    "FaCogs": FaIcons.FaCogs,
    "FaDropbox": FaIcons.FaDropbox,
    "FaGoogle": FaIcons.FaGoogle,
    "FaEye": FaIcons.FaEye,
    "FaLightbulb": FaIcons.FaLightbulb,
    "FaComments": FaIcons.FaComments,
    "FaSlack": FaIcons.FaSlack,
    "FaIntercom": FaIcons.FaCommentDots,
    "FaCommentAlt": FaIcons.FaCommentAlt,
    "FaDiscord": FaIcons.FaDiscord
  };

  // Map icons to colors based on the screenshots
  const iconColors = {
    "FaGlobe": "#3b82f6", // Blue for website icon
    "FaFileAlt": "#10b981", // Green for documents icon
    "FaQuestionCircle": "#f59e0b", // Amber for FAQs icon
    "FaFileText": "#8b5cf6", // Purple for text icon
    "FaYoutube": "#ef4444", // Red
    "FaDatabase": "#6366f1", // Indigo
    "FaPuzzlePiece": "#ec4899", // Pink
    "FaRobot": "#6b7280", // Slate
    "FaCloudUploadAlt": "#0ea5e9", // Sky
    "FaRocket": "#f97316", // Orange
    "FaCogs": "#64748b", // Gray
    "FaDropbox": "#0061ff", // Dropbox blue
    "FaGoogle": "#4285F4", // Google blue
    "FaEye": "#9333ea", // Purple
    "FaLightbulb": "#eab308", // Yellow
    "FaComments": "#0891b2", // Cyan
    "FaSlack": "#4A154B", // Slack purple
    "FaIntercom": "#1F8DED", // Intercom blue
    "FaCommentAlt": "#f43f5e", // Rose
    "FaDiscord": "#5865F2" // Discord blue
  };

  // Get the icon component
  const IconComponent = iconSets[name];
  const iconColor = iconColors[name] || "#6B7280"; // Default to gray if no color specified

  // Light mode background colors (from screenshots)
  const lightModeBackgrounds = {
    "FaGlobe": "#dbeafe", // Light blue
    "FaFileAlt": "#d1fae5", // Light green
    "FaQuestionCircle": "#fef3c7", // Light amber
    "FaFileText": "#ede9fe", // Light purple
  };

  // Dark mode background colors (from screenshots)
  const darkModeBackgrounds = {
    "FaGlobe": "#1e3a8a", // Dark blue
    "FaFileAlt": "#065f46", // Dark green
    "FaQuestionCircle": "#92400e", // Dark amber
    "FaFileText": "#5b21b6", // Dark purple
  };

  // Get background color based on theme and icon
  const getBgColor = () => {
    if (isDarkMode) {
      return darkModeBackgrounds[name] || "#1e293b"; // Default dark background
    } else {
      return lightModeBackgrounds[name] || "#f3f4f6"; // Default light background
    }
  };

  // If icon exists, render it in a colored box
  if (IconComponent) {
    return (
      <div style={{
        display: "inline-flex",
        backgroundColor: getBgColor(),
        color: iconColor,
        borderRadius: "8px",
        padding: "8px",
        justifyContent: "center",
        alignItems: "center",
        width: "36px",
        height: "36px",
        minWidth: "36px",
        minHeight: "36px",
        boxSizing: "border-box"
      }}>
        <IconComponent style={{ fontSize: size }} />
      </div>
    );
  }

  // Fallback
  return null;
}
