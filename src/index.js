import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Popper from "popper.js";
import "./App.css";
import App from "./containers/App";
//import * as serviceWorker from './serviceWorker';

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

ReactDOM.render(<App />, document.getElementById("root"));
