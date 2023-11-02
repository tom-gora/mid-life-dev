import "./styles/Navbar.css";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { GiPlainCircle } from "react-icons/gi";

const Navbar = ({ isDarkMode, toggleDarkMode, showNavigationShadow }) => {
  return (
    <div className="navigation" style={showNavigationShadow ? { boxShadow: '0 0 5px var(--shadow-opaque)' } : {}}>
      <div className="name">Tomasz Gora</div>
      <div className="navigation-segment">
        <ul className="navigation-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <label htmlFor="theme-input">
          <input type="checkbox" id="theme-input" checked={isDarkMode} onChange={toggleDarkMode} />
          <div className="toggle-switch">
            <div>{<IoSunnyOutline />}</div>
            <div> {<GiPlainCircle />}</div>
            <div>{<IoMoonOutline />}</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
