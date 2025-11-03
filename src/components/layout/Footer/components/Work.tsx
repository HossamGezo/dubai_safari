// React Icons
import {FaInstagramSquare} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaCopyright} from "react-icons/fa";
// Main Component
const Work = () => {
  // Copyright Year
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-work flex-center">
        <h3 className="footer-work-head">Work With Us</h3>
        <p className="footer-work-desc">Become a Supplier</p>
        <p className="footer-work-desc">Become an Affiliate Partner</p>
        <div className="footer-work-social-media flex items-center gap-2.5 text-3xl font-bold my-5 *:cursor-pointer">
          <FaInstagramSquare className="" />
          <FaFacebookSquare />
          <FaSquareXTwitter />
          <FaLinkedin />
        </div>
        <div className="footer-work-copyright flex items-center gap-2.5 text-lg">
          Copyright <FaCopyright /> {year} Dubai Desert Safari
        </div>
      </div>
    </>
  );
};

export default Work;
