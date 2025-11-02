// React Icons
import {IoIosArrowDroprightCircle} from "react-icons/io";
import {IoIosArrowDropleftCircle} from "react-icons/io";
// Styles
import "./pagination.css";
// Types
type PaginationType = {
  pages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
// Main Component
const Pagination = ({pages, currentPage, setCurrentPage}: PaginationType) => {
  // Handle Previous Page Function
  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  // Handle Next Page Function
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages));
  };
  // Pages Buttons Array
  const PagesBtns = Array(pages).fill(0);
  // Resturn JSX
  return (
    <>
      <div className="pagination">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          className="pagination-btn"
          onClick={handlePrevious}
        >
          <IoIosArrowDropleftCircle />
        </button>
        {/* Pages Button */}
        <div className="pagination-pages flex">
          {PagesBtns.map((_, index) => (
            <button
              key={index}
              className={`pagination-btn-page ${
                index + 1 === currentPage ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {/* Next Button */}
        <button
          disabled={currentPage === pages}
          className="pagination-btn"
          onClick={handleNext}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </>
  );
};

export default Pagination;
