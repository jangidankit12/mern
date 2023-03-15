import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Aboutus from "./Components/Aboutus";
import StopWatch from "./Components/StopWatch";
import User from "./Components/User";

const PublicRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/StopWatch" element={<StopWatch />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
};

export default PublicRouters;
