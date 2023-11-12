import "./styles/Footer.css";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi"
import { FiChevronsUp } from "react-icons/fi";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <p>&copy; {new Date().getFullYear()} Tomasz Gora @ UWS</p>
                <ul className="footer__links">
                    <li>
                        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            {<FiChevronsUp size="2.5rem" />}
                        </a>
                    </li>
                    <li>
                        <a href="https://tomgora.online/">
                            {<BiShowAlt size="2.5rem" />}
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/tomasz-gora-6075b71ba">{<AiOutlineLinkedin size="2.5rem" />} </a>
                    </li>
                    <li>
                        <a href="goratomasz@outlook.com">{<HiOutlineMailOpen size="2.5rem" />}</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Footer
    ;
