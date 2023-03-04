import { Route, Routes } from "react-router";
import Home from "./Component/home";
import Singin from "./Component/Signin";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singin" element={<Singin />} />
    </Routes>
  );
};

export default PublicRoutes;
