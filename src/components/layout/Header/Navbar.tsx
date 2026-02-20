// Libraries
import { useEffect } from "react";
import { NavLink } from "react-router";

// React Icons
import { FaHome } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";

// Utils
import { cn } from "@/utils/cn";

// Types
interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Main Component
const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  // Handle Closing Mobile Menu After Open It
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 720) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMenuOpen]);

  // Return JSX
  return (
    <nav
      className={cn(
        "max-md:absolute max-md:top-[calc(100%-0.5px)] max-md:right-0 max-md:w-full z-9999 max-md:p-5 max-md:bg-white max-md:transition-[clip-path] max-md:duration-500 max-md:ease-in-out md:relative md:top-auto md:right-auto md:w-auto md:p-0 md:bg-transparent md:[clip-path:none]",
        isMenuOpen
          ? "max-md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
          : "max-md:[clip-path:polygon(0_0,100%_0,100%_0,0_0)]",
      )}
    >
      <ul className="flex max-md:flex-col flex-row gap-7 font-bold text-[18px] max-md:gap-5">
        <li className="list" onClick={() => setIsMenuOpen(false)}>
          <NavLink to="/">
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="list" onClick={() => setIsMenuOpen(false)}>
          <NavLink to="/about">
            <RiInformation2Fill />
            <span>About</span>
          </NavLink>
        </li>
        <li className="list" onClick={() => setIsMenuOpen(false)}>
          <NavLink to="/login">
            <IoIosLogIn />
            <span>Login</span>
          </NavLink>
        </li>
        <li className="list" onClick={() => setIsMenuOpen(false)}>
          <NavLink to="/register">
            <FaUser />
            <span>Register</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
