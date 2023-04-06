import React from "react";
import net from "../Images/net.png";
import check from "../Images/check-mark.png";
import "../Css/Step1.css";

const Step1 = () => {
  return (
    <div>
      <div class="heder">
        <img src={net} alt="hh" />
        <button className="headersig">Sign In</button>
      </div>

      <div class="check">
        <div class="checkimg">
          <img src={check} alt="" />
          <p>STEP 1 OF 3</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Step1;
