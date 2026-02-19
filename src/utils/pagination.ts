// Types
import type { TourType } from "@/types/tour.types";

// Main Function
export const paginate = (
  toursLength: number,
  currentPage: number,
  toursArray: TourType[],
  itemsPerPage: number = 4,
) => {
  // Pagination : Number Of Cards & Pages
  const numberOfPages = Math.ceil(toursLength / itemsPerPage);

  // Pagination : Tours Array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const finishIndex = currentPage * itemsPerPage;
  const tours = toursArray.slice(startIndex, finishIndex);
  return { numberOfPages, tours };
};
