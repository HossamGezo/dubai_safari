// Libraries
import { Link } from "react-router";

// React Icons
import { FaLongArrowAltRight } from "react-icons/fa";

// Components
import Button from "@/components/common/button/Button";
import Rating from "./Rating";

// Utils
import { formatCurrency } from "@/utils/formatCurrency";

// Styles
import "./tour.css";

// Types
import type { TourType } from "@/types/tour.types";

// Main Component
const Tour = ({ ...tour }: TourType) => (
  <div className="tour-box group h-155 rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-3xl hover:-translate-y-3 hover:scale-101 duration-500">
    {/* Tour Image */}
    <div className="relative w-full h-[50%]">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-full object-cover"
      />
      <span className="absolute left-2.5 -bottom-4 w-37.5 text-center select-none bg-orange-800 text-white font-bold rounded-sm py-1">
        ADVENTURE_{tour.id}
      </span>
    </div>
    {/* Tour Desc Wrapper */}
    <div className="h-[50%] pt-8 px-3 relative">
      {/* Tour Title */}
      <h3 className="text-xl font-medium h-[25%] mb-2.5">{tour.title}</h3>
      {/* Tour Rating */}
      <div className="flex items-center gap-2.5 my-3">
        <span className="text-xl font-bold">{tour.rating}</span>
        <Rating rating={tour.rating} />
        <span className="text-[12px] text-[#a9a9a9]">
          ({tour.reviews} reviews)
        </span>
      </div>
      {/* Tour Duration */}
      <div className="tour-duration flex items-center gap-3 mb-3">
        <span className="tour-time text-[22px] text-orange-800 font-bold">
          {tour.duration}
        </span>
        <span className="tour-transport text-[12px] text-[#9a9a9a]">
          Pickup available
        </span>
      </div>
      {/* Tour Price */}
      <div className="flex items-center gap-3">
        <span className="price-tag flex items-center gap-3">
          From
          <span className="text-xl text-orange-800 font-bold">
            {formatCurrency(tour.priceFrom)}
          </span>
          / per person
        </span>
      </div>
      {/* Button */}
      <Link to={`/tour/${tour.id}`}>
        <div className="seemore-btn absolute px-3 w-full bottom-4 left-0 flex items-center justify-between">
          <Button className="tracking-widest w-30 h-7.5 rounded-sm">
            See More
          </Button>
          <FaLongArrowAltRight className="icon-animation text-xl text-orange-800" />
        </div>
      </Link>
    </div>
  </div>
);

export default Tour;
