import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./navbar.css";
import { AppContext } from "../../App";

type Props = {};

const NavBar = (props: Props) => {
  const { userData, setUserData } = useContext(AppContext);

  const location = useLocation();
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(false)
  }

  return (
    <div className="nav-main">
      <div
        className="nav-company-name"
        onClick={() => {
          nav("/home");
        }}
      >
        Northwind
      </div>
      <div className="nav-links">
        {!userData && (
          <>
            <Link
              to="/login"
              className={
                location.pathname == "/login" ? "nav-link active" : "nav-link"
              }
            >
              Login
            </Link>
            <Link
              to="/register"
              className={
                location.pathname == "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >              
              Register 
            </Link>
          </>
        )}
        {userData && <div>
          Welcome {userData.firstName}
          <br />
          <button onClick={handleLogout}> Logout </button>
        </div>}
      </div>
    </div>
  );
};

export default NavBar;
