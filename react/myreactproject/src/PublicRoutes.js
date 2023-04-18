import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Component/Home";
// import Gallery from "./Component/Gallery";
import Header from "./Component/Header";
// import Services from "./Component/Services";
// import AboutUs from "./Component/AboutUs";
// import Signin from "./Component/Signin";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import Step4 from "./Component/Step4";
import Step5 from "./Component/Step5";
const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/" element={<Header />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
        {/* <Route path="/signin" element={<Signin />} /> */}
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
