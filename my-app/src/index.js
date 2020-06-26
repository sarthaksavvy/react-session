import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Axios from "axios";
require("dotenv").config();
const url = process.env.REACT_APP_API_URL;
Axios.defaults.baseURL = url;

ReactDOM.render(<App />, document.getElementById("root"));
