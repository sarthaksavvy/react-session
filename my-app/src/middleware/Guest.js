import React from "react";
import Cookies from "js-cookie";
import { withRouter, Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function Guest(WrappedComponent) {
  class AuthHOC extends React.Component {
    render() {
      const token = Cookies.get("token");
      return token ? <Redirect to="/" /> : <WrappedComponent />;
    }
  }

  return withRouter(AuthHOC);
}
