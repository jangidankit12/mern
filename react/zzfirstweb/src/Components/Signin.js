import { useState } from "react";

function Signin(props) {
  console.log(">>>>>props", props);

  var [Email, setEmail] = useState(props.Email);
  var [Password, setPassword] = useState();

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(Email, Password);
    const data = {
      Email: Email,
      Password: Password,
    };
    const stringifyData = JSON.stringify(data);
    localStorage.setItem("data", stringifyData);
    console.log(">>>>>>>>data", data);
    console.log(">>>>>data", JSON.stringify(data));
  };

  return (
    <div class="Signin">
      <div class="form">
        <h2>Sign in</h2>
        <br />
        <br />
        <form onSubmit={onSubmitForm}>
          <label for="Email">Email*</label>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email Here"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label for="Password">Password*</label>
          <br />

          <input
            type="Password"
            placeholder="Enter Your Password here"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p>Must be atleast 8 characters</p>
          <br />

          <button>Submit</button>
        </form>
        <h4>
          have't an account?
          <span>
            <a href="signup">Sign up</a>
          </span>
        </h4>
      </div>
      <img src="../images/Entorno-Green-Final.png" alt="" />
    </div>
  );
}

export default Signin;
