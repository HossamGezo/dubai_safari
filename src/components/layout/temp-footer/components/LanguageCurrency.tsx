// Data
import { languages, currencies } from "src/data/data";
import SelectBox from "@/components/common/select-box/SelectBox";

// Main Component
const LanguageCurrency = () => {
  return (
    <div className="flex-center">
      {/* Language */}
      <div className="flex flex-col gap-5">
        <label className="font-bold text-xl text-left" htmlFor="language">
          Language
        </label>
        <SelectBox items={languages} id="language" className="w-50" />
      </div>
      {/* Currency */}
      <div className="flex flex-col gap-5">
        <label className="font-bold text-xl text-left" htmlFor="currency">
          Currency
        </label>
        <SelectBox items={currencies} id="currency" className="w-50" />
      </div>
    </div>
  );
};

export default LanguageCurrency;
