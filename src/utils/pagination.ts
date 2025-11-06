// Types
import type {ToursListType} from "@/types/index";
// Main Function
export const paginate = (
  toursLength: number,
  currentPage: number,
  toursArray: ToursListType[]
) => {
  // Pagination : Number Of Cards & Pages
  const numberOfCards = 4;
  const numberOfPages = Math.ceil(toursLength / numberOfCards);
  // Pagination : Tours Array
  const startIndex = (currentPage - 1) * numberOfCards;
  const finishIndex = currentPage * numberOfCards;
  const tours = toursArray.slice(startIndex, finishIndex);
  return {numberOfPages, tours};
};
