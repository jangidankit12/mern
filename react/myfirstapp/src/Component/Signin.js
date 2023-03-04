import { useState } from "react";
function Singin() {
  var [Fname, setFname] = useState("");
  var [lname, setlname] = useState("");
  var [email, setemail] = useState("");
  var [password, setpassword] = useState("");
  var [repassword, setrepassword] = useState("");

  var onSubmitForm = (e) => {
    e.preventDefault();

    console.log(Fname, lname, email, password, repassword);
    var data = {
      Fname: Fname,
      lname: lname,
      email: email,
      password: password,
      repassword: repassword,
    };
    var stringifyData = JSON.stringify(data);

    localStorage.setItem("data", stringifyData);
    console.log(">>>>>>>data", data);
    console.log(">>>>>>>data", JSON.stringify(data));
  };
  return (
    // <div class="container">
    //   <div class="border1">
    //     <div class="border">
    //       <p>my name is {ankit} </p>
    //     </div>
    //     <div class="name">
    //       <label for=""></label>
    //       <br />
    //       <input
    //         type="text"
    //         name=""
    //         id=""
    //         placeholder="enter your name"
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>

    //     <p>my father name is {f_name} </p>
    //     <div class="fname">
    //       <label for=""></label>
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="enter your f_name"
    //         onChange={(e) => F_setName(e.target.value)}
    //       />
    //     </div>
    //     <div className="mname">
    //       <p>my mother name is {m_name} </p>

    //       <label for=""></label>
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="enter your m_name"
    //         onChange={(e) => m_setName(e.target.value)}
    //       />
    //     </div>

    //     <div class="address">
    //       <p>my father name is {address} </p>

    //       <label for=""></label>
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="address"
    //         onChange={(e) => aaddress(e.target.value)}
    //       />
    //     </div>
    //   </div>
    // </div>
    <center>
      <div>
        <h1>sing up </h1>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name=""
            id=""
            placeholder="enter your f_name here "
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="enter your last name"
            onChange={(e) => setlname(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="enter your email here"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="re-enter your password"
            onChange={(e) => setrepassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </center>
  );
}

export default Singin;
