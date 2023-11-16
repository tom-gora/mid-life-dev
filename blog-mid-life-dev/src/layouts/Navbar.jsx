import "./styles/Navbar.css";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = ({
  setIsMobileMenuOpen,
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
      <div className="navbar__name">Tom Gora</div>
      <div className="navbar_right-segment">
        <ul className="navbar__links">
          <li>
            <a
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                currentView !== "home" &&
                  onHomeClick &&
                  onHomeClick();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                currentView !== "about" &&
                  onAboutClick &&
                  onAboutClick();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a href="https://tomgora.online" role="button">
              Projects
            </a>
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
