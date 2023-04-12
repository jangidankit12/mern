import React from "react";
import "../Css/Step2.css";
import netlo from "../Images/net.png";
import step2right from "../Images/checkright.png";
function Step2() {
  return (
    <div>
      <div class="Step2Logo">
        <div class="Step2logoimg">
          <img src={netlo} alt="" />

          <button class="Step2button"> Sign In</button>
        </div>
      </div>
      <div class="step2hr">
        <hr />
      </div>

      <div class="Step22ndpart">
        <div class="Step22ndpart1">
          <p>STEP 1 OF 3</p>
          <h3>Choose the plan that’s right for you</h3>
        </div>
        <div class="Step2right">
          <img src={step2right} alt="" />
          <p>Watch whatever you want. Without any ads.</p>
        </div>
        <div class="Step2right1">
          <img src={step2right} alt="" />
          <p>Some suggestions for you.</p>
        </div>
        <div class="Step2right2">
          <img src={step2right} alt="" />
          <p>Change or cancel your plan anytime.</p>
        </div>

        <div class="recat">
          <div class="Step2Rect">
            <div class="Step2recta">Mobile</div>
          </div>

          <div class="Step2recta">basic</div>

          <div class="Step2recta">Standard</div>

          <div class="Step2recta">premium</div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
