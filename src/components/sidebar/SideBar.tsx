import { Link, useLocation } from "react-router-dom";

import "./sidebar.css";

const SideBar = () => {
    
    const location = useLocation()

  return (    
      <div className="side-main">
        <div className="side-links">
          <Link
            to="/products"
            className={
              location.pathname === "/products" ? "side-link active" : "side-link"
            }
          >
            Products
          </Link>
          <Link
            to="/add-product"
            className={
              location.pathname === "/add-product"
                ? "side-link active"
                : "side-link"
            }
          >
            Add-Product
          </Link>          
        </div>
      </div>    
  );
};

export default SideBar;
