// React Icons
import {TbCalendarEvent} from "react-icons/tb";
// Custom Functions
import currencyFormat from "@/utils/formatCurrency";
// Main Component
const TourPrice = ({priceFrom}: {priceFrom: number}) => {
  return (
    <>
      <div className="tour-price bg-white border border-gray-300 rounded-lg max-lg:w-full w-[500px] h-fit overflow-hidden">
        <div className="tour-price-discount text-right h-[70px] p-2.5 bg-linear-to-b from-pink-200 to-white text-2xl text-pink-800">
          Save up to 35%
        </div>
        <div className="tour-price-wrapper p-3">
          <div className="tour-price-booked w-fit px-3 p-1 bg-[#d1f6e2] text-[#007850] rounded-lg">
            Booked 42 times yesterday
          </div>
          <div className="tour-price flex items-center gap-10 my-5">
            <div className="tour-price-person">
              <span className="price block text-[32px] text-red-500">
                {currencyFormat(priceFrom)}
              </span>
              per person
            </div>
            <button className="tour-book-btn w-[200px] h-10 rounded-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-400 duration-75 cursor-pointer text-lg font-bold text-white">
              Book Now
            </button>
          </div>
          <div className="tour-reserve flex gap-1.5">
            <TbCalendarEvent className="text-2xl text-green-400" />
            <div className="tour-reserve-link">
              <span className="tour-reserve-desc text-blue-700 font-bold">
                Reserve now and pay later
              </span>
              <span className="tour-reserve-desc block">
                to book your spot and pay nothing today
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TourPrice;
