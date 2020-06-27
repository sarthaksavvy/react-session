import React, { useContext } from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import GlobalContext from "../store/global";

export default function Header({ title }) {
  const [{ loggedIn }, dispatch] = useContext(GlobalContext);

  const history = useHistory();
  function handleLogout(e) {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    Cookies.remove("token");
    history.push("/login");
    // window.location.href = "/login";
  }
  return (
    <header className="bg-purple-800 text-white p-4 flex justify-between">
      <div className="flex">
        <p className="mx-2">
          <Link to="/">{title}</Link>
        </p>

        <p className="mx-2">
          <Link to="/users">Users</Link>
        </p>
        <p className="mx-2">
          <Link to="/about">About</Link>
        </p>
      </div>
      <div className="flex">
        {loggedIn ? (
          <p className="mx-2 cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
        ) : (
          <p className="mx-2">
            <Link to="/login">Login</Link>
          </p>
        )}
      </div>
    </header>
  );
}
