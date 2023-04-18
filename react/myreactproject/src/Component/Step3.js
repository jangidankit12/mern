import React from "react";
import Step3net from "../Images/net.png";
import "../Css/Step3.css";
import Step3img1 from "../Images/comp.jpg";
import Step3img2 from "../Images/tv.jpg";
import Step3img3 from "../Images/tabph.jpg";

export const Step3 = () => {
  return (
    <div>
      <div class="Step3bg">
        <div class="Step3logo">
          <img src={Step3net} alt="" />
          <div class="Step3Sign">
            <button>Sign In</button>
          </div>
        </div>
        <div class="step3hr">
          <hr />
        </div>

        <div class="Step3imges">
          <div class="Step3img1">
            <img src={Step3img1} alt="baba" />
          </div>
          <div class="Step3img2">
            <img src={Step3img2} alt="" />
          </div>
          <div class="Step3img3">
            <img src={Step3img3} alt="" />
          </div>
        </div>

        <div class="Step3p1">
          <p>STEP 2 OF 3</p>
        </div>

        <div class="Step3h1">
          <h1>
            Finish setting up your <br /> <span>account</span>
          </h1>
        </div>

        <div class="step3p1">
          <div class="Step3p">
            <p>
              Netflix is personalised for you. Create
              <br />
              a password to watch on any device at <br />
              <span> any time.</span>
            </p>
          </div>
        </div>
        <div class="step3button1">
          <div class="step3button2">
            <button>Next</button>
          </div>
        </div>
      </div>

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
  );
};

export default Step3;
