import React from "react";
import Cookies from "js-cookie";
import { withRouter, Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function Auth(WrappedComponent) {
  function AuthHOC() {
    const token = Cookies.get("token");
    return !token ? <Redirect to="/login" /> : <WrappedComponent />;
  }
  // class AuthHOC extends React.Component {
  //   render() {
  //     const token = Cookies.get("token");
  //     return !token ? <Redirect to="/login" /> : <WrappedComponent />;
  //   }
  // }

  return withRouter(AuthHOC);
}
