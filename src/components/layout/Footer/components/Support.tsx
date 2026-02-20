// Libraries
import { Link } from "react-router";

// Main Component
const Support = () => {
  return (
    <div className="flex-center">
      <h3>Support</h3>
      <ul>
        <li className="footer-support-list-item">
          <Link to="#">Contact</Link>
        </li>
        <li className="footer-support-list-item">
          <Link to="#">Legal Notice</Link>
        </li>
        <li className="footer-support-list-item">
          <Link to="#">Privacy Policy</Link>
        </li>
        <li className="footer-support-list-item">
          <Link to="#">General Terms</Link>
        </li>
        <li className="footer-support-list-item">
          <Link to="#">Sitemap</Link>
        </li>
      </ul>
    </div>
  );
};

export default Support;
