import "./styles/Navbar.css";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = ({
  isMobileView,
  isDarkMode,
  toggleDarkMode,
  showNavigationShadow,
  isMobileMenuOpen,
}) => {
  return (
    <div
      className="navbar"
      style={{
        ...(showNavigationShadow
          ? { boxShadow: "0 0 5px var(--shadow-opaque)" }
          : {}),
        ...(isMobileMenuOpen ? { right: "0" } : { right: "-120%" }),
      }}
    >
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
        <ThemeToggle
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default Navbar;
