import "./styles/MobileMenuToggle.css";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";
const MobileMenuToggle = () => {
  return (
    <>
      <button className="mobile-menu-toggle">
        <HiMiniChevronLeft />
      </button>
    </>
  );
};

export default MobileMenuToggle;
