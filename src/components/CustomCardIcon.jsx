import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export default function CustomCardIcon({ name, size = "1.2em" }) {
  // Map to store the icon libraries
  const iconSets = {
    "FaGlobe": FaIcons.FaGlobe,
    "FaFileAlt": FaIcons.FaFileAlt,
    "FaQuestionCircle": FaIcons.FaQuestionCircle,
    "FaFileText": FaIcons.FaFile, // Changed to FaFile as FaFileText might not exist
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
    // Adding icons for conversation section
    "FaRobot": FaIcons.FaRobot,
    "FaComments": FaIcons.FaComments,
    "FaSlack": FaIcons.FaSlack,
    "FaIntercom": FaIcons.FaCommentDots,
    "FaCommentAlt": FaIcons.FaCommentAlt,
    "FaDiscord": FaIcons.FaDiscord
  };

  // Map icons to colors
  const iconColors = {
    "FaGlobe": "#3b82f6", // blue
    "FaFileAlt": "#10b981", // green
    "FaQuestionCircle": "#f59e0b", // amber
    "FaFileText": "#8b5cf6", // purple
    "FaYoutube": "#ef4444", // red
    "FaDatabase": "#6366f1", // indigo
    "FaPuzzlePiece": "#ec4899", // pink
    "FaRobot": "#6b7280", // slate
    "FaCloudUploadAlt": "#0ea5e9", // sky
    "FaRocket": "#f97316", // orange
    "FaCogs": "#64748b", // gray
    "FaDropbox": "#0061ff", // dropbox blue
    "FaGoogle": "#4285F4", // google blue
    "FaEye": "#9333ea", // purple
    "FaLightbulb": "#eab308", // yellow
    "FaComments": "#0891b2", // cyan
    "FaSlack": "#4A154B", // slack purple
    "FaIntercom": "#1F8DED", // intercom blue
    "FaCommentAlt": "#f43f5e", // rose
    "FaDiscord": "#5865F2" // discord blue
  };

  // Get lighter shade of the color for the background
  const getLighterShade = (hex) => {
    // Convert hex to RGB and make it lighter
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // For light mode: mix with white (255, 255, 255) at 85%
    const lighter = {
      r: Math.round(r * 0.15 + 255 * 0.85),
      g: Math.round(g * 0.15 + 255 * 0.85),
      b: Math.round(b * 0.15 + 255 * 0.85)
    };
    
    return `rgb(${lighter.r}, ${lighter.g}, ${lighter.b})`;
  };

  // Get the icon component
  const IconComponent = iconSets[name];
  const iconColor = iconColors[name] || "#6b7280"; // Default to gray if no color specified
  const bgColor = getLighterShade(iconColor);

  // If icon exists, render it in a colored box
  if (IconComponent) {
    return (
      <div style={{
        display: "inline-flex",
        backgroundColor: bgColor,
        color: iconColor,
        borderRadius: "6px",
        padding: "6px",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "20px"
      }}>
        <IconComponent style={{ fontSize: size }} />
      </div>
    );
  }

  // Fallback
  return null;
}
