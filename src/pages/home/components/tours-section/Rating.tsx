// React Icons
import {FaStar} from "react-icons/fa";
import {FaRegStarHalfStroke} from "react-icons/fa6";
import {FaRegStar} from "react-icons/fa";
// Types
type RatingType = {
  rating: number;
};
// Main Component
const Rating = ({rating}: RatingType) => {
  // Checking Rate Function -> To check Rating Less Than 1
  const checkRating = () => {
    const ratingResult = rating - Math.trunc(rating);
    if (ratingResult >= 0.5) return <FaRegStarHalfStroke />;
    else if (ratingResult !== 0 && ratingResult < 0.5) return <FaRegStar />;
  };
  // Fill Stars Array
  const fillStarsArray = Array(Math.trunc(rating)).fill(0);
  // Empty Stars Array
  const emptyStarsArray = Array(5 - Math.ceil(rating)).fill(0);
  // Return JSX
  return (
    <div className="stars flex items-center gap-0.5 text-[18px] text-yellow-500">
      {fillStarsArray.map((_, index) => (
        <FaStar key={index} />
      ))}
      {checkRating()}
      {emptyStarsArray.map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

export default Rating;
