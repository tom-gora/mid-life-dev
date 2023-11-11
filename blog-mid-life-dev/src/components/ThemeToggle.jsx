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
    <label htmlFor="theme-toggle__theme-input">
      <input
        type="checkbox"
        id="theme-toggle__theme-input"
        checked={isDarkMode}
        onChange={handleThemeChange}
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
