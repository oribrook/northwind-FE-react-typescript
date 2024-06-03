import { createContext, useContext, useEffect, useState } from "react";
import { SiteRoutes } from "./SiteRoutes";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

import "./index.css";
import ProductModel from "./models/ProductModel";
import { UserModel } from "./models/UserModel";
import { getLoggedUser } from "./utils/helpers";


export const AppContext = createContext<any>(null);

function App() {
  const [order, setOrder] = useState<ProductModel[]>()
  const [userData, setUserData] = useState<UserModel | boolean>(false)

  useEffect(() => {
    // check if user logged 
    const user = getLoggedUser()
    if (user) {
      setUserData(user)
    }
  }, [])

  return (
    <div>
      <AppContext.Provider value={{ order, setOrder, userData, setUserData }}>
        <div className="app-wrap">
          <SideBar />
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
