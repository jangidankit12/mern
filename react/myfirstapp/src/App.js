import logo from "./logo.svg";
import "./App.css";

import Header from "./Component/Header";
import Signin from "./Component/Signin";
import Footer from "./Component/Footer";
import PublicRoutes from "./PublicRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
// function App() {
//   const userName = "ankit";
//   return (
//     <>
//       <Header />

//       <Signin name={userName} phone={1234567890} age={10} title="Signup" />

//       <Footer />
//     </>
//   );
// }

export default App;
