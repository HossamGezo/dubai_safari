// React
import {useEffect} from "react";

// React Router Dom
import {NavLink} from "react-router";

// React Icons
import {FaHome} from "react-icons/fa";
import {IoIosLogIn} from "react-icons/io";
import {FaUser} from "react-icons/fa";
import {RiInformation2Fill} from "react-icons/ri";

// Types
interface NavbarTypes {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({toggle, setToggle}: NavbarTypes) => {
  // Handle Closing Mobile Menu After Open It
  useEffect(() => {
    // Function
    const handleResize = () => {
      if (window.innerWidth >= 720) setToggle(false);
    };
    // Event
    window.addEventListener("resize", handleResize);
    // CleanUp
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [setToggle]);
  return (
    <nav
      className={`
        header-navbar ${
          toggle
            ? "max-md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
            : "max-md:[clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
        } max-md:absolute max-md:top-[calc(100%-0.5px)] max-md:right-0 max-md:w-full z-50
        max-md:p-5 max-md:bg-white max-md:transition-clip-path max-md:duration-500 max-md:ease-in-out
        md:relative md:top-auto md:right-auto md:w-auto md:p-0 md:bg-transparent md:[clip-path:none]
      `}
    >
      <ul className="navbar-list flex max-md:flex-col flex-row gap-7 font-bold text-[18px] max-md:gap-5">
        <li className="list" onClick={() => setToggle(false)}>
          <NavLink to="/">
            <FaHome />
            <span className="list-title">Home</span>
          </NavLink>
        </li>
        <li className="list" onClick={() => setToggle(false)}>
          <NavLink to="/about">
            <RiInformation2Fill />
            <span className="list-title">About</span>
          </NavLink>
        </li>
        <li className="list" onClick={() => setToggle(false)}>
          <NavLink to="/login">
            <IoIosLogIn />
            <span className="list-title">Login</span>
          </NavLink>
        </li>
        <li className="list" onClick={() => setToggle(false)}>
          <NavLink to="/register">
            <FaUser />
            <span className="list-title">Register</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
