import { Route, Routes } from "react-router";

import Singin from "./";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singin" element={<Singin />} />
    </Routes>
  );
};

export default PublicRoutes;
