// Libraries
import { Link } from "react-router";

// Images
import DubaiLogo from "@/images/logo.png";

// Types
type LogoProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// Main Component
const Logo = ({ setIsMenuOpen }: LogoProps) => {
  return (
    <div className="-ml-5">
      <Link
        to="/"
        className="flex items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        <img
          src={DubaiLogo}
          alt="Dubai Desert Safari Logo"
          draggable={false}
          className="w-17.5"
        />
        <div className="flex flex-col text-sm text-orange select-none cursor-pointer">
          <strong>DUBAI</strong>
          <strong className="-my-px">DESERT</strong>
          <strong>SAFARI</strong>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
