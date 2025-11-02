// Types
import type {ToursListType} from "../types";
// Main Function
export const getFilteredTours = (
  currentFilter: string,
  toursList: ToursListType[]
): ToursListType[] => {
  const toursArray =
    currentFilter === "recomended"
      ? toursList.sort((a, b) => b.rating - a.rating)
      : currentFilter === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : toursList.sort((a, b) => b.priceFrom - a.priceFrom);
  return toursArray;
};
