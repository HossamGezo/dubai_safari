// Project Components
import Button from "@/components/common/button/Button";

// React Icons
import { IoIosSearch } from "react-icons/io";

// Main Component
const HeroSection = () => {
  return (
    <section>
      {/* Hero Image */}
      <div className="relative h-[calc(100vh-99.02px)] bg-[url(./images/dubai-desert.jpg)] bg-no-repeat bg-cover bg-position-[55%]">
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Search Box */}
        <div className="absolute top-10 left-[50%] translate-x-[-50%] max-md:h-9 h-13.75 bg-white max-md:w-[90%] w-[70%] max-md:pl-3 pl-5 rounded-full flex items-center justify-between max-md:gap-1 gap-5">
          <div className="max-md:w-[98%] w-[90%] h-full flex items-center justify-between max-md:gap-2 gap-5">
            <IoIosSearch className="text-[#909390] max-md:text-2xl text-3xl font-bold" />
            <input
              type="text"
              aria-label="Search tours"
              placeholder="What Are You Looking For ?"
              className="w-full h-full max-md:placeholder:text-[12px] placeholder:text-[18px] placeholder:select-none outline-0 caret-orange"
            />
          </div>
          <Button className="max-md:mr-0.5 mr-1 max-md:px-0 max-md:py-1 px-7 py-3 w-37.5">
            Search
          </Button>
        </div>
        {/* Hero Text */}
        <div className="container absolute font-jetbrains text-white max-md:pr-0 px-8 bottom-[20%] left-[50%] translate-x-[-50%] tracking-widest [-webkit-text-stroke:1px_white]">
          <p className="mb-2.5">
            <span className="max-md:text-[2.70rem] text-[5.25rem] font-bold text-transparent bg-linear-to-r from-orange-500 to-white bg-clip-text text-shadow-2xs select-none">
              Dubai
            </span>
          </p>
          <p className="max-md:text-[2.9rem] text-8xl font-bold text-transparent bg-linear-to-r from-white via-orange-600 to-orange-700 bg-clip-text text-shadow-2xs select-none">
            Desert Safaris
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
