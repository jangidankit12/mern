import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  var [ankit, setName] = useState("ankit");
  var [f_name, F_setName] = useState("fname");
  var [m_name, m_setName] = useState("mname");
  var [address, aaddress] = useState("address");
  return (
    <div class="container">
      <div class="border1">
      <div class="border">
        <p>my name is {ankit} </p>
      </div>
      <div class="name">
        <label for="">name </label>
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <p>my father name is {f_name} </p>
      <div class="fname">
        <label for="">f_name</label>
        <br />
        <input
          type="text"
          placeholder="enter your f_name"
          onChange={(e) => F_setName(e.target.value)}
        />
      </div>
      <div className="mname">
        <p>my mother name is {m_name} </p>

        <label for="">m_name</label>
        <br />
        <input
          type="text"
          placeholder="enter your m_name"
          onChange={(e) => m_setName(e.target.value)}
        />
      </div>

      <div class="address">
        <p>my father name is {address} </p>

        <label for="">address</label>
        <br />
        <input
          type="text"
          placeholder="address"
          onChange={(e) => aaddress(e.target.value)}
        />
      </div>
    </div>
    </div>
  );
}

export default App;
