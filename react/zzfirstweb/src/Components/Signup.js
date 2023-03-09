import { useState } from "react";

function Signup(props) {
  console.log(">>>>>props", props);
  var [name, setName] = useState(props.name);
  var [Email, setEmail] = useState();
  var [Password, setPassword] = useState();

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(name, Email, Password);
    const data = {
      name: name,
      Email: Email,
      Password: Password,
    };
    const stringifyData = JSON.stringify(data);
    localStorage.setItem("data", stringifyData);
    console.log(">>>>>>>>data", data);
    console.log(">>>>>data", JSON.stringify(data));
  };

  return (
    <div class="Signup">
      <div class="form">
        <h2>Sign Up</h2>
        <br />
        <br />
        <form onSubmit={onSubmitForm}>
          <label for="name">Name*</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Name Here"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
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
          Already have an account?
          <span>
            <a href="signin">Log in</a>
          </span>
        </h4>
      </div>
      <img src="../images/Entorno-Green-Final.png" alt="" />
    </div>
  );
}

export default Signup;
