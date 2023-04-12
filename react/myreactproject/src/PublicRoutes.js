import { Route, Routes } from "react-router";
import Home from "./Component/Home";
import Gallery from "./Component/Gallery";
import Header from "./Component/Header";
import Services from "./Component/Services";
import AboutUs from "./Component/AboutUs";
import Signin from "./Component/Signin";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/header" element={<Header />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
    </Routes>
  );
};

export default PublicRoutes;
