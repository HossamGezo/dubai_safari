// React
import { useState } from "react";

// Data
import { toursList } from "src/data/data";

// Utils
import { getFilteredTours } from "@/utils/filters";

// Components
import Title from "@/components/common/section-title/Title";
import Tour from "./Tour";
import Pagination from "./pagination/Pagination";
import Filters from "./filters/Filters";
import { paginate } from "@/utils/pagination";

// Main Component
const ToursSection = () => {
  // - - - - - - - - - - - - - - - States
  // Filters State
  const [currentFilter, setFilter] = useState("recommended");
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  // - - - - - - - - - - - - - - - Logic
  // Filtering Logic
  const toursArray = getFilteredTours(currentFilter, toursList);
  // Pagination Logic
  const { numberOfPages, tours } = paginate(
    toursArray.length,
    currentPage,
    toursArray,
  );
  // Return JSX
  return (
    <section className="tours-section bg-[#ECECEC] py-20">
      <div className="container m-auto max-md:px-2">
        {/* Title */}
        <Title title={"tours"} />
        {/* Filters */}
        <Filters
          tours={toursArray.length}
          currentFilter={currentFilter}
          setFilter={setFilter}
        />
        {/* Tour */}
        <div className="tours grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
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
  );
};

export default ToursSection;
