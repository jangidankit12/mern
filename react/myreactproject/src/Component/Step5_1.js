import React from "react";
import Step5_1img from "../Images/net.png";
import "../Css/Step5_1.css";
import Step5_1img2 from "../Images/Untitled-111.png";

function Step5_1() {
  return (
    <div>
      <div class="step5_1bg">
        <div class="step5_1img">
          <img src={Step5_1img} alt="" />
          <div class="Step5_1butt">
            <button>Sign Out</button>
          </div>
        </div>
        <div class="step5_1hr">
          <hr />
        </div>
        <div class="step5_1p">
          <p>STEP 3 OF 3</p>
        </div>

        <div class="Step5_1p1">
          <p>
            Set up your credit or debit <br /> <spam>card</spam>
          </p>
        </div>

        <div class="step5_1img2">
          <img src={Step5_1img2} alt="" />
        </div>

        <div class="step5_1input">
          <div class="step5_1inpuit1">
            <input type="text" placeholder="Card Number" required />
          </div>
          <div class="step5_1inpuit2">
            <input type="text" placeholder="Expiration date" required />
            <div class="step5_1cvv">
              <input type="text" placeholder="CVV" required />
            </div>
          </div>

          <div class="step5_1first">
            <div>
              <input type="text" placeholder="First Name" required />
            </div>
            <div>
              <input type="text" placeholder="Last Name" required />
            </div>
          </div>

          <div class="step5_1month">
            <p class="step5_1pri">₹199/month</p>
            <p class="step5_1basic">Basic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5_1;
