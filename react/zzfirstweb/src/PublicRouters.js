import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Aboutus from "./Components/Aboutus";
// import Images from "./Images/graphic3.jpg";

const PublicRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Aboutus" element={<Aboutus />} />
    </Routes>
  );
};

export default PublicRouters;
