// Components
import Rating from "../../home/components/tours-section/Rating";
// Main Component
const TourRating = ({rating, reviews}: {rating: number; reviews: string}) => {
  return (
    <>
      <div className="tour-rating flex max-sm:flex-col gap-2.5 my-5">
        <div className="rating flex gap-2.5">
          <Rating rating={rating} />
          <div className="rating-number">{rating}</div>
        </div>
        <div className="rating-reviews text-gray-500">({reviews} reviews)</div>
        <div className="tour-provider">
          Activity Provider :
          <span className="provider text-blue-700">Hossam Gouda</span>
        </div>
      </div>
    </>
  );
};

export default TourRating;
