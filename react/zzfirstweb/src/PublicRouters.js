import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";

const PublicRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} /> */
    </Routes>
  );
};

export default PublicRouters;
