import React from "react";
import ReactDOM from "react-dom";
// import pi, { doublePi, triplePi } from "./maths.js";
import * as pi from "./maths.js";

console.log(pi);

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

// pi, doublePi and tripePi used when importing specific
