// React
import { useMemo } from "react";
import { useParams } from "react-router";

// Components
import ActivityTour from "./components/ActivityTour";
import TourPrice from "./components/TourPrice";
import TourRating from "./components/TourRating";
import TourImage from "./components/TourImage";
import Error from "@/pages/error/Error";

// Data
import { toursList } from "src/data/data";

// Main Component
const TourDetailsPage = () => {
  const { id } = useParams();

  // Tour Logic
  const tour = useMemo(() => {
    return toursList.find((tour) => tour.id === Number(id));
  }, [id]);

  // Tour Not Found Condition
  if (!tour) {
    return (
      <div className="text-5xl flex items-center justify-center text-red-700">
        <Error />
      </div>
    );
  }
  const { title, duration, rating, reviews, priceFrom, image } = tour;

  // Return JSX
  return (
    <section className="container mx-auto sm:my-10 sm:rounded-lg bg-[#ECECEC]/60 max-sm:px-2 max-sm:py-5 p-5">
      <div className="max-sm:text-[13px] text-lg text-gray-500 mb-2.5">
        United Arab Emirates &gt; Things to do in Dubai &gt; Safari
      </div>
      <div className="w-fit px-2 py-1 bg-orange-800 text-white font-bold rounded-sm mb-5 select-none">
        ADVENTURE
      </div>
      <div className="max-sm:text-lg text-3xl text-orange-800 font-medium">
        Dubai : {title}
      </div>

      {/* Tour Rating */}
      <TourRating rating={rating} reviews={reviews} />

      {/* Image Price Wrapper */}
      <div className="flex gap-3.5 max-xl:flex-col-reverse justify-between mb-3.5">
        <TourImage image={image} />
        <TourPrice priceFrom={priceFrom} />
      </div>

      {/* Tour Activity */}
      <ActivityTour duration={duration} />
    </section>
  );
};

export default TourDetailsPage;
