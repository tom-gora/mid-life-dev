import "./styles/Navbar.css";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { GiPlainCircle } from "react-icons/gi";

const Navbar = ({ isDarkMode, toggleDarkMode, showNavigationShadow }) => {
  return (
    <div className="navbar" style={showNavigationShadow ? { boxShadow: '0 0 5px var(--shadow-opaque)' } : {}}>
      <div className="navbar__name">Tomasz Gora</div>
      <div className="navbar_right-segment">
        <ul className="navbar__links">
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
        <label htmlFor="navbar__theme-input">
          <input type="checkbox" id="navbar__theme-input" checked={isDarkMode} onChange={toggleDarkMode} />
          <div className="navbar__toggle-switch">
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
