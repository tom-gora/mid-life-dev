import "./styles/Header.css";
import Blob from "../assets/blob.svg"
const Header = () => {
  return (
    <div className="header__title-wrapper">
      <div className="header__title">
        <h1 className="header__blog-name">MID LIFE DEV</h1>
        <p>* FRONT END CRISIS</p>
      </div>
      <div className="header__svg-wrapper">
        <img src={Blob} alt="blob" />
      </div>
    </div>
  );
};

export default Header;
