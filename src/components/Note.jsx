import React from "react";

const Note = ({ type, color, children }) => {
  const getIcon = () => {
    switch (type) {
      case "idea":
        return "💡";
      case "note":
        return "📝";
      case "re":
        return "";
      default:
        return "📌";
    }
  };

  const getColorStyle = () => {
    switch (color) {
      case "emerald":
        return { backgroundColor: "#f0fdf4", borderColor: "#a7f3d0", color: "#047857" };
      case "blue":
        return { backgroundColor: "#eff6ff", borderColor: "#bfdbfe", color: "#1d4ed8" };
      case "amber":
        return { backgroundColor: "#fffbeb", borderColor: "#fde68a", color: "#b45309" };
      case "rose":
        return { backgroundColor: "#fff1f2", borderColor: "#fecdd3", color: "#be123c" };
      default:
        return { backgroundColor: "#f9fafb", borderColor: "#e5e7eb", color: "#374151" };
    }
  };

  const boxStyle = {
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid",
    display: "flex",
    alignItems: "flex-start",
    marginTop: "16px", // Add top margin
    marginBottom: "16px", // Add bottom margin
    ...getColorStyle(),
  };

  const iconStyle = {
    marginRight: "12px",
    fontSize: "1.25rem",
  };

  return (
    <div style={boxStyle}>
      <span style={iconStyle}>{getIcon()}</span>
      <div>{children}</div>
    </div>
  );
};

export default Note;
