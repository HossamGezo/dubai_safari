// Types
import type { TourType } from "@/types/tour.types";
// Main Function
export const getFilteredTours = (
  currentFilter: string,
  toursList: TourType[],
): TourType[] => {
  switch (currentFilter) {
    case "recommended":
      return toursList.toSorted((a, b) => b.rating - a.rating);
    case "low":
      return toursList.toSorted((a, b) => a.priceFrom - b.priceFrom);
    case "high":
      return toursList.toSorted((a, b) => b.priceFrom - a.priceFrom);
    default:
      return toursList;
  }
};
