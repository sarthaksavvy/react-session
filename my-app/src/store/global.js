import React from "react";
import Cookies from "js-cookie";

const token = Cookies.get("token");
let user = {};
let loggedIn = false;

function validateToken() {
  if (tokenIsValid) {
    user = "fromToken";
    loggedIn = true;
  }
}

export const InitialState = { loggedIn, user };

export const reducer = (state, { type, payload }) => {
  if (type === "LOGOUT") {
    return { token: "", loggedIn: false };
  }

  if (type === "SET_LOGIN") {
    return { token: payload, loggedIn: true };
  }
};

const GlobalContext = React.createContext();
export default GlobalContext;
