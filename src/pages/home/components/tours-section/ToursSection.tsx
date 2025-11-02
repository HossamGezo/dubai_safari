// React
import {useState} from "react";
// Data
import {toursList} from "../../data/data";
// Components
import Title from "../../../../components/common/section-title/Title";
import Tour from "./Tour";
import Pagination from "./pagination/Pagination";
// Main Component
const ToursSection = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  // Number Of Cards & Pages
  const numberOfCards = 4;
  const numberOfPages = Math.ceil(toursList.length / numberOfCards);
  // Tours Array
  const startIndex = (currentPage - 1) * numberOfCards;
  const finishIndex = currentPage * numberOfCards;
  const tours = toursList.slice(startIndex, finishIndex);
  // Return JSX
  return (
    <>
      <section className="tours-section bg-[#ECECEC] py-20">
        <div className="container m-auto max-md:px-2">
          {/* Title */}
          <Title title={"tours"} />
          {/* Tour */}
          <div className="tours grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
            {tours.map((tour) => (
              <Tour key={tour.id} tour={tour} />
            ))}
          </div>
          {/* Pagination */}
          <Pagination
            pages={numberOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default ToursSection;
