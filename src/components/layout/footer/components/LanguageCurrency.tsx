// Data
import {languages, currencies} from "../../../../pages/home/data/data";
import SelectBox from "../../../common/select-box/SelectBox";
// Main Component
const LanguageCurrency = () => {
  return (
    <>
      <div className="footer-lang-and-currency flex-center">
        {/* Language */}
        <div className="footer-lang">
          <h3 className="footer-lang-head">Language</h3>
          <SelectBox items={languages} />
        </div>
        {/* Currency */}
        <div className="footer-currency">
          <h3 className="footer-currency-head">Currency</h3>
          <SelectBox items={currencies} />
        </div>
      </div>
    </>
  );
};

export default LanguageCurrency;
