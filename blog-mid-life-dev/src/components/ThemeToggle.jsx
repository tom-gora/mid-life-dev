import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { GiPlainCircle } from "react-icons/gi";

import "./styles/ThemeToggle.css";

const ThemeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <label htmlFor="theme-toggle__theme-input">
      <input
        type="checkbox"
        id="theme-toggle__theme-input"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className="theme-toggle__toggle-switch">
        <div>{<IoSunnyOutline />}</div>
        <div> {<GiPlainCircle />}</div>
        <div>{<IoMoonOutline />}</div>
      </div>
    </label>
  );
};

export default ThemeToggle;
