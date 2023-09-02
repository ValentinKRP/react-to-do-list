import React from "react";

const DarkModeButton = ({ darkMode, darkModeToggle }) => {
  return (
    <div>
      <button type="" onClick={() => darkModeToggle()}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeButton;
