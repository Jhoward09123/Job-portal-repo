import React from "react";

const CustomButton = ({ text, backgroundColor, color, underline }) => {
  const buttonStyles = {
    padding: "10px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontWeight: 400,
    fontSize: "24px",
    display: "flex",
    cursor: "pointer",
    backgroundColor: backgroundColor, // Set the background color based on the prop
    color: color, // Text color
    border: "none", // Remove the default button border
    borderRadius: "10px", // Border radius
    textDecoration: underline ? "underline" : "none",
  };

  return <button style={buttonStyles}>{text}</button>;
};

export default CustomButton;
