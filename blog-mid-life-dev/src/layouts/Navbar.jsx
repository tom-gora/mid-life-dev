import "./styles/Navbar.css";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = ({
  isMobileView,
  isDarkMode,
  toggleDarkMode,
  showNavigationShadow,
  isMobileMenuOpen,
  onAboutClick,
  onHomeClick,
  currentView,
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
            <a
              style={{ cursor: "pointer" }}
              onClick={
                currentView === "home" ? null : onHomeClick
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{ cursor: "pointer" }}
              onClick={
                currentView === "about" ? null : onAboutClick
              }
            >
              About
            </a>
          </li>
          <li>
            <a href="https://tomgora.online">Projects</a>
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
