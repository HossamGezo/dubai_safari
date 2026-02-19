// React
import { useState } from "react";

// React Icons
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Navbar from "./Navbar";
import Logo from "./Logo";

// Styles
import "./header.css";

// Main Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header bg-white ">
      <div className="container mx-auto flex items-center justify-between px-5 py-1 relative">
        <Logo setIsMenuOpen={setIsMenuOpen} />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* Header Menu */}
        <button
          aria-label="Toggle Menu"
          className="block md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {!isMenuOpen ? (
            <IoMenu className="text-5xl cursor-pointer" />
          ) : (
            <MdOutlineClose className="text-5xl cursor-pointer" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
