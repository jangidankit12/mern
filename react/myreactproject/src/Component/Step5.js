import React from "react";
import "../Css/Step5.css";
import Step5net from "../Images/net.png";
import Step5lock from "../Images/lock1.png";
import Step5upi from "../Images/icons1.png";
import Step5upi1 from "../Images/icons2.png";
function Step5() {
  return (
    <div>
      <div class="Step5bg">
        <div class="Step5logo">
          <img src={Step5net} alt="" />
          <div class="Step5Sign">
            <button>Sign Out</button>
          </div>
        </div>
        <div class="step5hr">
          <hr />
        </div>

        <div class="step5lock">
          <div class="step5lock1">
            <img src={Step5lock} alt="baba" />
          </div>
        </div>

        <div class="step5p">
          <p>STEP 3 OF 3</p>
        </div>

        <div class="Step5h1">
          <h1>Choose how to pay</h1>
        </div>

        <div class="Step5p1">
          <p>
            Your payment is encrypted and you can change your
            <br />
            <spam> payment method at anytime.</spam>
          </p>
        </div>

        <div class="step5p2">
          <p>
            Secure for peace of mind. <br />
            <spam>Cancel easily online.</spam>
          </p>
        </div>

        <div class="step5upi">
          <div class="step5upi1">
            <button>
              <img src={Step5upi} alt="" />
            </button>
          </div>
          <div class="step5upi2">
            <button>
              <img src={Step5upi1} alt="" />
            </button>
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
}

export default Step5;
