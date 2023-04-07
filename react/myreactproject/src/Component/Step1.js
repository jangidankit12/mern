import React from "react";
import net from "../Images/net.png";
import check from "../Images/check-mark.png";
import "../Css/Step1.css";
import checkright from "../Images/checkright.png";

const Step1 = () => {
  return (
    <div class="bodyco">
      <div class="heder">
        <img src={net} alt="" />
        <button className="headersig">Sign In</button>
      </div>
      <div class="check">
        <div class="checkimg">
          <img src={check} alt="" />
          <p>STEP 1 OF 3</p>
          <span>Choose your plan.</span>
        </div>
        <div class="commitments">
          <p>
            <img src={checkright} /> No commitments, cancel <br />
            <span>anytime.</span>
          </p>
        </div>
        <div class="commitments">
          <p>
            <img src={checkright} /> Everything on Netflix for one <br />
            <span>low price.</span>
          </p>
        </div>

        <div class="commitments">
          <p>
            <img src={checkright} /> No ads and no extra fees. Ever.
          </p>
        </div>

        <div class="Nextbutt">
          <button>Next</button>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="hederfooter">
          <div class="hederfooter1">
            <h1 class="quescall">Questions? Call 000-800-919-1694</h1>
          </div>

          <div class="FAQ">
            <div className="faqpar">
              <p>FAQ</p>
              <p>Help Centre</p>
              <p>Netflix Shop</p>
              <p>Terms of Use</p>
            </div>
          </div>

          <div class="FAQ1">
            <div className="faqpar1">
              <p>Privacy</p>
            </div>
          </div>
          <p class="p11">Cookie Preferences</p>
          <p class="p12">Corporate Information</p>
          <div class="langu">
            <select id="lang">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
