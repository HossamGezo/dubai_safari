// React
import {useMemo} from "react";
// Components
import ActivityTour from "./components/ActivityTour";
import TourPrice from "./components/TourPrice";
import TourRating from "./components/TourRating";
import TourImage from "./components/TourImage";
import Error from "../error/Error";
// React Router Dom
import {useParams} from "react-router";
// Data
import {toursList} from "../home/data/data";
// Main Component
const TourDetailsPage = () => {
  const {id} = useParams();
  // Tour Logic
  const tour = useMemo(() => {
    return toursList.find((tour) => tour.id === Number(id));
  }, [id]);
  // Tour Not Found Condition
  if (!tour) {
    return (
      <div className="text-5xl flex items-center justify-center text-red-700 h-[calc(100vh-99.05px)]">
        <Error />
      </div>
    );
  }
  const {title, duration, rating, reviews, priceFrom, image} = tour;
  return (
    <>
      <section className="tour bg-[#ECECEC] max-sm:px-2 max-sm:py-5 p-5">
        <div className="tour-h3 max-sm:text-[13px] text-lg text-gray-500 mb-2.5">
          United Arab Emirates &gt; Things to in Dubai &gt; Safari
        </div>
        <div className="tour-label w-fit px-2 py-1 bg-orange-800 text-white font-bold rounded-sm mb-5 select-none">
          ADVENTURE
        </div>
        <div className="tour-title max-sm:text-lg text-3xl text-orange-800 font-medium">
          Dubai : {title}
        </div>
        {/* Tour Rating */}
        <TourRating rating={rating} reviews={reviews} />
        {/* Image Price Wrapper */}
        <div className="image_price_wrapper flex gap-3.5 max-lg:flex-col justify-between mb-3.5">
          {/* Image */}
          <TourImage image={image} />
          {/* Price */}
          <TourPrice priceFrom={priceFrom} />
        </div>
        {/* Tour Activity */}
        <ActivityTour duration={duration} />
      </section>
    </>
  );
};

export default TourDetailsPage;
