import React from "react";
import "../Css/Step2.css";
import netlo from "../Images/net.png";
import step2right from "../Images/checkright.png";
import step2phone from "../Images/icons8-phone-64.png";
import step22phone from "../Images/icons8-phone-63.png";
import step2tablet from "../Images/icons8-tablet-32.png";
import step2tablet1 from "../Images/icons8-tablet-33.png";
import step2computer from "../Images/icons8-computer-64.png";
import step2computer1 from "../Images/icons8-computer-65.png";
import step2tv from "../Images/icons8-tv-50.png";
import step21tv from "../Images/icons8-tv-51.png";
function Step2() {
  return (
    <div class="step2">
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

            <div class="Step2recta">basic</div>

            <div class="Step2recta">Standard</div>

            <div class="Step2recta">premium</div>
          </div>
        </div>
      </div>
      <div class="Step2Price">
        <div class="Step2price1">
          <p>Monthly price</p>
        </div>
      </div>
      <div class="step2prices">
        <div class="Step2price2">
          <span>
            <p>₹ 149</p>
          </span>
        </div>
        <div class="Step2price2">
          <p>₹ 199</p>
        </div>
        <div class="Step2price2">
          <p>₹ 499</p>
        </div>
        <div class="Step2price2">
          <p>₹ 649</p>
        </div>
      </div>
      <div class="step22hr">
        <hr />
      </div>
      <div class="Step2Price">
        <div class="Step2price1">
          <p>Resolution</p>
        </div>
      </div>
      <div class="step2prices">
        <div class="Step2price2">
          <span>
            <p>480p</p>
          </span>
        </div>
        <div class="Step2price2">
          <p>720p</p>
        </div>
        <div class="Step2price2">
          <p>1080p</p>
        </div>
        <div class="Step2price2">
          <p>4K+HDR</p>
        </div>
      </div>
      <div class="step22hr">
        <hr />
      </div>
      <div class="Step2Price">
        <div class="Step2price1">
          <p>Video quality</p>
        </div>
      </div>
      <div class="step2prices">
        <div class="Step2price2">
          <span>
            <p>Good</p>
          </span>
        </div>
        <div class="Step2price2">
          <p>Good</p>
        </div>
        <div class="Step2price2">
          <p>Better</p>
        </div>
        <div class="Step2price2">
          <p>Best</p>
        </div>
      </div>
      <div class="step22hr">
        <hr />
      </div>
      <div class="Step2Price">
        <div class="Step2price1">
          <p>Devices you can use to watch</p>
        </div>
      </div>
      <div class="step2prices">
        <div class="Step2price2">
          <span>
            <img src={step2phone} alt="" />
          </span>
        </div>
        <div class="Step2price2">
          <span>
            <img src={step22phone} alt="" />
          </span>
        </div>
        <div class="Step2price2">
          <span>
            <img src={step22phone} alt="" />
          </span>
        </div>
        <div class="Step2price2">
          <span>
            <img src={step22phone} alt="" />
          </span>
        </div>
      </div>
      <div class="step22prices">
        <div class="Step22price2">
          <span>
            <img src={step2tablet1} alt="" />
          </span>
        </div>
        <div class="Step22price2">
          <span>
            <img src={step2tablet} alt="" />
          </span>
        </div>
        <div class="Step22price2">
          <span>
            <img src={step2tablet} alt="" />
          </span>
        </div>
        <div class="Step22price2">
          <span>
            <img src={step2tablet} alt="" />
          </span>
        </div>
      </div>

      <div class="step2computer">
        {/* <div class="Step2computer1">
          <span>
            <img src={step2computer1} alt="" />
          </span>
        </div> */}
        <div class="Step2computer1">
          <span>
            <img src={step2computer1} alt="" />
          </span>
        </div>
        <div class="Step2computer1">
          <span>
            <img src={step2computer} alt="" />
          </span>
        </div>
        <div class="Step2computer1">
          <span>
            <img src={step2computer} alt="" />
          </span>
        </div>
      </div>

      <div class="step21tv">
        {/* <div class="Step2computer1">
          <span>
            <img src={step2computer1} alt="" />
          </span>
        </div> */}
        <div class="step21tv1">
          <span>
            <img src={step21tv} alt="" />
          </span>
        </div>
        <div class="Step2computer1">
          <span>
            <img src={step2tv} alt="" />
          </span>
        </div>
        <div class="Step2computer1">
          <span>
            <img src={step2tv} alt="" />
          </span>
        </div>
      </div>

      <div class="step2para">
        <div class="step2para1">
          <p>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all <br></br> resolutions. See our{" "}
            <a href="#">Terms of Use </a> for more details.
          </p>
        </div>

        <div class="step2para2">
          <p>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and <br></br> Mobile.
          </p>
        </div>
      </div>
      <div class="step2button">
        <div class="step2button1">
          <button>Next</button>
        </div>
      </div>

      <div class="hederfooter">
        <div class="hederfooter2">
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
}

export default Step2;
