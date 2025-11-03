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
    <>
      <footer className="footer py-20 bg-[#1E3054] text-white">
        <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
          {/* Language And Currency */}
          <LanguageCurrency />
          {/* Footer Support */}
          <Support />
          {/* Footer Campany */}
          <CompanyInfo />
          {/* Footer Work With Us */}
          <Work />
        </div>
      </footer>
    </>
  );
};
export default Footer;
