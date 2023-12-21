import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaVoicemail } from "react-icons/fa";
import Container from "../Container/Container";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerBg">
      <Container>
        <footer className="footer footer-center pt-44 text-base-content rounded  ">
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link>
                <FaFacebook size={26} className="text-white"></FaFacebook>
              </Link>
              <Link>
                <FaTwitter size={26} className="text-white"></FaTwitter>
              </Link>
              <Link>
                <FaLinkedin size={26} className="text-white"></FaLinkedin>
              </Link>
              <Link>
                <FaVoicemail size={26} className="text-white"></FaVoicemail>
              </Link>
              <Link>
                <FaInstagram size={26} className="text-white"></FaInstagram>
              </Link>
            </div>
          </nav>
          <aside>
            <p className="text-white">
              {" "}
              © CopyRight 2023 ProTaskMagnet.com. All rights reserved.
            </p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
