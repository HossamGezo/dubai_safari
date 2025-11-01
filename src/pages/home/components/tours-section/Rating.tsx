// React Icons
import {FaStar} from "react-icons/fa";
import {FaRegStarHalfStroke} from "react-icons/fa6";
import {FaRegStar} from "react-icons/fa";
// Types
type RatingType = {
  rating: number;
};
const Rating = ({rating}: RatingType) => {
  // Checking Rate Function -> To check Rating Less Than 1
  const checkRating = () => {
    const ratingResult = rating - Math.trunc(rating);
    if (ratingResult >= 0.5) return <FaRegStarHalfStroke />;
    else if (ratingResult !== 0 && ratingResult < 0.5) return <FaRegStar />;
  };
  return (
    <div className="stars flex items-center gap-0.5 text-[18px] text-yellow-500">
      {Array(Math.trunc(rating))
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} />
        ))}
      {checkRating()}
      {Array(5 - Math.ceil(rating))
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} />
        ))}
    </div>
  );
};

export default Rating;
