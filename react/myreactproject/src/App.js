import "./App.css";
// import Header from "./Component/Header";
// import Aboutus from "./Component/AboutUs";
// import Home from "./Component/Home";
// import Services from "./Component/Services";
// import Gallery from "./Component/Gallery";
import PublicRouters from "./PublicRoutes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <PublicRouters />
      </BrowserRouter>
    </>
  );
}

export default App;
