import React from "react";
import Step4net from "../Images/net.png";
import "../Css/Step4.css";

export const Step4 = () => {
  return (
    <div>
      <div class="Step4bg">
        <div class="Step4logo">
          <img src={Step4net} alt="" />
          <div class="Step4Sign">
            <button>Sign In</button>
          </div>
        </div>
        <div class="step4hr">
          <hr />
        </div>

        <div class="Step4p">
          <div class="Step4p1">
            <p>STEP 2 OF 3</p>
          </div>

          <div class="Step4h1">
            <h1>
              Create a password to start <br /> <span> your membership</span>
            </h1>
          </div>
        </div>

        <div class="step4p1">
          <div class="Step4p">
            <p>
              Netflix is personalised for you. Create
              <br />
              a password to watch on any device at <br />
              any time.
            </p>
          </div>
        </div>

        <div class="step4input">
          <div class="step4input1">
            <input type="text" placeholder="Email" required />
            <br />
            <br />
            <input type="text" placeholder="Add a Password" required />
          </div>
        </div>
        <div class="step4button1">
          <div class="step4button2">
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

export default Step4;
