import { Route, Routes } from "react-router";
import Home from "./Component/Home";
import Gallery from "./Component/Gallery";
// import Header from "./Component/Header";
import Services from "./Component/Services";
import AboutUs from "./Component/AboutUs";
import Signin from "./Component/Signin";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/Header" element={<Header />} /> */}
      <Route path="/services" element={<Services />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  );
};

export default PublicRoutes;
