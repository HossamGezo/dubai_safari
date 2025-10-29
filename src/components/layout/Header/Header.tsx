// React
import {useState} from "react";
// React Icons
import {IoMenu} from "react-icons/io5";
import {MdOutlineClose} from "react-icons/md";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
// Styles
import "./styles.scss";
// Component
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="header bg-white ">
        <div className="container m-auto px-5 py-1 relative lc-flex-between">
          <Logo setToggle={setToggle} />
          <Navbar toggle={toggle} setToggle={setToggle} />
          {/* Header Menu */}
          <div
            className="header-menu block md:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <IoMenu className="text-5xl cursor-pointer" />
            ) : (
              <MdOutlineClose className="text-5xl cursor-pointer" />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
