// Components
import Rating from "@/pages/home/components/tours-section/Rating";

// Types
type TourRatingProps = {
  rating: number;
  reviews: string;
};

// Main Component
const TourRating = ({ rating, reviews }: TourRatingProps) => {
  return (
    <div className="flex max-sm:flex-col gap-2.5 my-5">
      <div className="rating flex gap-2.5">
        <Rating rating={rating} />
        <div>{rating}</div>
      </div>
      <div className="rating-reviews text-gray-500">({reviews} reviews)</div>
      <div className="tour-provider">
        Activity Provider :
        <span className="provider text-blue-700">Hossam Gouda</span>
      </div>
    </div>
  );
};

export default TourRating;
