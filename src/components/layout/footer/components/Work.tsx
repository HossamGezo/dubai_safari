// React Icons
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

// Main Component
const Work = () => {
  // Copyright Year
  const year = new Date().getFullYear();

  // Return JSX
  return (
    <div className="flex-center">
      <h3>Work With Us</h3>
      <p className="footer-work-desc">Become a Supplier</p>
      <p className="footer-work-desc">Become an Affiliate Partner</p>
      <div className="flex items-center gap-2.5 text-3xl font-bold my-5 *:cursor-pointer">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on X"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="flex items-center gap-2.5 text-[16px]">
        Copyright <FaCopyright /> {year} Dubai Desert Safari
      </div>
    </div>
  );
};

export default Work;
