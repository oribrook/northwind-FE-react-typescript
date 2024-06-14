import { Link, useLocation } from "react-router-dom";

import "./sidebar.css";
import { useContext } from "react";
import { AppContext } from "../../App";

const SideBar = () => {
    
    const location = useLocation()
  const { order } = useContext(AppContext);
    console.log("Sidebar rendered");
    
  return (    
    <div className="side-main">
      <div>
        Order: {Object. keys(order). length}
      </div>
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
