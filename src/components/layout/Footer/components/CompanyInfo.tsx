// Libraries
import { Link } from "react-router";

// Main Component
const CompanyInfo = () => {
  return (
    <div className="flex-center">
      <h3>Company</h3>
      <ul>
        <li className="footer-company-list-item">
          <Link to="#">About Us</Link>
        </li>
        <li className="footer-company-list-item">
          <Link to="#">Careers</Link>
        </li>
        <li className="footer-company-list-item">
          <Link to="#">Blog</Link>
        </li>
        <li className="footer-company-list-item">
          <Link to="#">Press</Link>
        </li>
        <li className="footer-company-list-item">
          <Link to="#">Gift Cards</Link>
        </li>
        <li className="footer-company-list-item">
          <Link to="#">Magazine</Link>
        </li>
        <li className="footer-company-list-item">
          <Link to="#">Travel Guides</Link>
        </li>
      </ul>
    </div>
  );
};

export default CompanyInfo;
