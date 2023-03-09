import "./App.css";
import Header from "./Components/Header";
import { Home } from "./Components/Home";
import { Signin } from "./Components/Signin";
import { Signup } from "./Components/Signup";
import { BrowserRouter } from "react-router-dom";
import PublicRouters from "./PublicRouters";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <PublicRouters />
      </BrowserRouter>
    </>
  );
}

export default App;
