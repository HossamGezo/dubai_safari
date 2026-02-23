// Libraries
import { useNavigate } from "react-router";

// React Icons
import { TbCalendarEvent } from "react-icons/tb";

// Custom Functions
import { formatCurrency } from "@/utils/formatCurrency";

// Types
type TourPriceProps = { priceFrom: number };

// Main Component
const TourPrice = ({ priceFrom }: TourPriceProps) => {
  const navigate = useNavigate();

  // Return JSX
  return (
    <div className="bg-white border shadow-xl border-gray-300 rounded-lg max-xl:w-full w-125 h-fit overflow-hidden">
      <div className="text-right h-17.5 p-2.5 bg-linear-to-b from-pink-200 to-white text-2xl text-pink-800">
        Save up to 35%
      </div>
      <div className="p-3">
        <div className="w-fit px-3 p-1 bg-[#d1f6e2] text-[#007850] rounded-lg">
          Booked 42 times yesterday
        </div>
        <div className="flex items-center gap-10 my-5">
          <div>
            <span className="block text-[32px] text-red-500">
              {formatCurrency(priceFrom)}
            </span>
            per person
          </div>
          <button
            type="button"
            className="w-50 h-10 rounded-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-400 duration-75 cursor-pointer text-lg font-bold text-white"
            onClick={() => navigate("/login")}
          >
            Book Now
          </button>
        </div>
        <div className="flex gap-1.5">
          <TbCalendarEvent className="text-2xl text-green-400" />
          <div>
            <span className="text-blue-700 font-bold">
              Reserve now and pay later
            </span>
            <span className="block">
              to book your spot and pay nothing today
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourPrice;
