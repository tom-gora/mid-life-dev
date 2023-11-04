import "./styles/MobileMenuToggle.css";
import { HiMiniChevronLeft } from "react-icons/hi2";
const MobileMenuToggle = ({ isMobileMenuOpen, isMobileView }) => {
  return (
    <>
      <button className="mobile-menu-toggle" style={{ visibility: isMobileView ? "hidden" : "visible" }}>
        <HiMiniChevronLeft style={{ rotate: isMobileMenuOpen ? "180deg" : "0deg" }} />
      </button>
    </>
  );
};

export default MobileMenuToggle;
