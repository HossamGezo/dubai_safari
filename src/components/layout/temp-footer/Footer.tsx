// Components
import LanguageCurrency from "./components/LanguageCurrency";
import Support from "./components/Support";
import CompanyInfo from "./components/CompanyInfo";
import Work from "./components/Work";

// Styles
import "./footer.css";

// Main Component
const Footer = () => {
  return (
    <footer className="footer py-20 bg-[#1E3054] text-white">
      <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-10">
        <LanguageCurrency />
        <Support />
        <CompanyInfo />
        <Work />
      </div>
    </footer>
  );
};
export default Footer;
