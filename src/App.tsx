import { createContext, useContext, useEffect, useState } from "react";
import { SiteRoutes } from "./SiteRoutes";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

import "./index.css";
import ProductModel from "./models/ProductModel";
import { UserModel } from "./models/UserModel";
import { getLoggedUser } from "./utils/helpers";
import useWindowSize from "./hooks/useWindowSize";
import { AuthAction, AuthActionType, authStore } from "./redux/AuthState";


export const AppContext = createContext<any>(null);

function App() {
  const [order, setOrder] = useState<ProductModel[]>([])
  // const [userData, setUserData] = useState<UserModel | boolean>(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    // check if user logged 
    const user = getLoggedUser()
    if (user) {
      const action: AuthAction = {
        type: AuthActionType.SetUserData,
        payload: user,
      }
      authStore.dispatch(action);
      // setUserData(user)
    }
  }, [])

  return (
    <div className="app-div">
      {/* <AppContext.Provider value={{ order, setOrder, userData, setUserData }}> */}
      <AppContext.Provider value={{ order, setOrder }}>
        <div className="app-wrap">
          {width > 600 && <SideBar />}
          <div className="app-content">
            <NavBar />
            <SiteRoutes />
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
