import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Signin from "./Component/Signin";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import Step4 from "./Component/Step4";
import Step5 from "./Component/Step5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Signin /> */}
    {/* <Step1 /> */}
    {/* <Header /> */}
    {/* <Step3 /> */}
    {/* <Step4 /> */}
    <Step5 />
    {/* <Step2 /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
