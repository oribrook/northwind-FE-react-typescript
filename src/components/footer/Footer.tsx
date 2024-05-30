import { Link } from 'react-router-dom';
import "./footer.css"
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
            </div>
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} Northwind. All rights reserved.
            </div>
          </div>
        </footer>
      );
}

export default Footer