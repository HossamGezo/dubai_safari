// React Router Dom
import {Link} from "react-router";
// Images
import DubaiLogo from "../../../images/logo.png";

const Logo = () => {
  return (
    <div className="logo -ml-5">
      <Link to="/" className="flex items-center">
        <img
          src={DubaiLogo}
          alt="IMAGE"
          draggable={false}
          className="w-[70px]"
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
