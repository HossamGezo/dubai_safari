import Button from "../../../../components/common/button/Button";
import Rating from "./Rating";
// Types
type TourType = {
  tour: {
    id: number;
    title: string;
    duration: string;
    rating: number;
    reviews: string;
    priceFrom: number;
    image: string;
  };
};
// Component
const Tour = ({tour}: TourType) => {
  return (
    <>
      <div className="tour-box h-[620px] rounded-xl overflow-hidden bg-white shadow-xl haver:shadow-3xl hover:-translate-y-3 hover:scale-101 duration-500">
        {/* Tour Image */}
        <div className="tour-image relative w-full h-[50%]">
          <img
            src={tour.image}
            alt="IMAGE"
            className="w-full h-full object-cover"
          />
          <span className="label absolute left-2.5 -bottom-4 w-[150px] text-center select-none bg-orange-800 text-white font-bold rounded-sm py-1">
            ADVENTURE
          </span>
        </div>
        {/* Tour Desc Wrapper */}
        <div className="tour-desc-wrapper h-[50%] pt-8 px-3 relative">
          {/* Tour Title */}
          <h3 className="tour-title text-2xl font-medium h-[25%] mb-2.5">
            {tour.title}
          </h3>
          {/* Tour Rating */}
          <div className="tour-rating flex items-center gap-2.5 my-3">
            <span className="rating-number text-xl font-bold">
              {tour.rating}
            </span>
            <Rating rating={tour.rating} />
            <span className="reviews text-[12px] text-[#a9a9a9]">
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
          <div className="tour-price flex items-center gap-3">
            <span className="price-tag flex items-center gap-3">
              From
              <span className="text-xl text-orange-800 font-bold">
                ${tour.priceFrom}
              </span>
              / per person
            </span>
          </div>
          {/* Button */}
          <Button customStyles="py-[5px] absolute left-1/2 -translate-x-1/2 bottom-[15px] tracking-widest text-xl w-[90%]">
            See More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Tour;
