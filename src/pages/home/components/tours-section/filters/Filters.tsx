// React Icons
import SelectBox from "@/components/common/select-box/SelectBox";
import { HiMiniInformationCircle } from "react-icons/hi2";

// Types
type FiltersType = {
  tours: number;
  currentFilter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

// Main Component
const Filters = ({ tours, currentFilter, setFilter }: FiltersType) => {
  const filterOptions = [
    { id: 1, value: "recommended", label: "Recommended" },
    { id: 2, value: "low", label: "Price - Low to high" },
    { id: 3, value: "high", label: "Price - High to low" },
  ];
  // Return JSX
  return (
    <div className="filters mb-10 flex items-center justify-between max-md:flex-col max-md:gap-3">
      {/* Tours Number */}
      <div className="tours-number relative w-56.25 text-center flex items-center justify-center gap-2 border-2 p-1.5 rounded-sm select-none">
        <span className="text-2xl text-orange-700 font-bold">{tours}</span>
        <span className="text-lg">Tours Found</span>
        <HiMiniInformationCircle className="absolute -left-3 -top-3 text-2xl text-orange-900 bg-[#ECECEC] rounded-full" />
      </div>
      {/* Filters Box */}
      <SelectBox
        items={filterOptions}
        value={currentFilter}
        onChange={(e) => setFilter(e.target.value)}
        className="filters-box flex flex-col bg-orange-800 text-lg text-white p-1.5 rounded-sm outline-0"
      />
    </div>
  );
};

export default Filters;
