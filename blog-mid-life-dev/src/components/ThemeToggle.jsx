import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { GiPlainCircle } from "react-icons/gi";

import "./styles/ThemeToggle.css";

const ThemeToggle = ({ toggleDarkMode, isDarkMode }) => {
  const handleThemeChange = () => {
    toggleDarkMode();
    localStorage.setItem(
      "mldBlogThemePreference",
      isDarkMode ? "light" : "dark"
    );
  };
  return (
    <label htmlFor="theme-toggle__theme-input" >
      <span id="label-text" style={{ visibility: "hidden", width: 0, height: 0 }}>Toggle for switching a visual theme.</span>
      <input
        type="checkbox"
        role="checkbox"
        id="theme-toggle__theme-input"
        checked={isDarkMode}
        onChange={handleThemeChange}
        aria-checked="false"
        aria-labelledby="label-text"
      />
      <div className="theme-toggle__toggle-switch">
        <div>{<IoMoonOutline />}</div>
        <div> {<GiPlainCircle />}</div>
        <div>{<IoSunnyOutline />}</div>
      </div>
    </label>
  );
};

export default ThemeToggle;
