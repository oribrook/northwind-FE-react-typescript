import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./navbar.css";
import { AppContext } from "../../App";
import { AuthAction, AuthActionType, authStore } from "../../redux/AuthState";
import { UserModel } from "../../models/UserModel";

type Props = {};

const NavBar = (props: Props) => {
  // const { userData, setUserData } = useContext(AppContext);
  const [userData, setUserData] = useState<UserModel | undefined>(authStore.getState().userData)
  // const userData = authStore.getState().userData;

  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    authStore.subscribe(()=>setUserData(authStore.getState().userData))
  },[])

  const handleLogout = () => {
    localStorage.removeItem("token");
    const action: AuthAction = {
      type: AuthActionType.DeleteUserData
    }
    authStore.dispatch(action);
    // setUserData(false)
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
          <button className="btn-primary btn" onClick={handleLogout}> Logout </button>
        </div>}
      </div>
    </div>
  );
};

export default NavBar;
