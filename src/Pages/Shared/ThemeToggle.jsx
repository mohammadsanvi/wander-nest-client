import React from "react";
import { FiSun } from "react-icons/fi";
import { CiDark } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useThemeToggle } from "../../Contex/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div>
      <button
        onClick={toggleTheme}
        data-tooltip-id="theme-tooltip"
        data-tooltip-content={
          theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
        aria-label="Toggle theme"
        className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${
          theme === "light"
            ? "hover:bg-gray-300 hover:bg-opacity-50"
            : "hover:bg-gray-700 hover:bg-opacity-50"
        }`}
      >
        {theme === "light" ? <FiSun size={20} /> : <CiDark size={20} />}
      </button>

      <Tooltip
        id="theme-tooltip"
        place="top"
        style={{
          backgroundColor: theme === "light" ? "#eee" : "#333",
          color: theme === "light" ? "#111" : "#fff",
          fontSize: "13px",
          padding: "6px 10px",
          borderRadius: "6px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ThemeToggle;
