import { createContext, useContext, useState } from "react";
import { SiteRoutes } from "./SiteRoutes";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

import "./index.css";


const AppContext = createContext({});

function App() {
  const [order, setOrder] = useState({})

  return (
    <div>
      <AppContext.Provider value={{ order, setOrder }}>
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
