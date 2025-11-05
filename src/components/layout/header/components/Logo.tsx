// React Router Dom
import {Link} from "react-router";
// Images
import DubaiLogo from "../../../../images/logo.png";
// Types
type LogoTypes = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
// Main Component
const Logo = ({setToggle}: LogoTypes) => {
  return (
    <div className="logo -ml-5" onClick={() => setToggle(false)}>
      <Link to="/" className="flex items-center">
        <img
          src={DubaiLogo}
          alt="IMAGE"
          draggable={false}
          className="w-[70px] select-none"
        />
        <div className="logo-text flex flex-col text-sm text-orange select-none cursor-pointer">
          <strong>DUBAI</strong>
          <strong className="-my-px">DESERT</strong>
          <strong>SAFARI</strong>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
