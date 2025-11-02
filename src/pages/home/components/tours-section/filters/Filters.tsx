// React Icons
import {HiMiniInformationCircle} from "react-icons/hi2";
// Types
type FiltersType = {
  tours: number;
  currentFilter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};
// Main Component
const Filters = ({tours, currentFilter, setFilter}: FiltersType) => {
  return (
    <div className="filters mb-10 flex items-center justify-between max-md:flex-col max-md:gap-3">
      {/* Tours Number */}
      <div className="tours-number relative w-[225px] text-center flex items-center justify-center gap-2 border-2 p-1.5 rounded-sm select-none">
        <span className="text-2xl text-orange-700 font-bold">{tours}</span>
        <span className="text-lg">Tours Found</span>
        <HiMiniInformationCircle className="absolute -left-3 -top-3 text-2xl text-orange-900 bg-[#ECECEC] rounded-full" />
      </div>
      {/* Filters Box */}
      <select
        value={currentFilter}
        onChange={(e) => setFilter(e.target.value)}
        className="filters-box flex flex-col bg-orange-800 text-lg text-white p-1.5 rounded-sm outline-0"
      >
        <option value="recomended">Recomended</option>
        <option value="low">Price - Low to high</option>
        <option value="high">Price - High to low</option>
      </select>
    </div>
  );
};

export default Filters;
