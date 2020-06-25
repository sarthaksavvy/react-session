import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header className="bg-purple-800 text-white p-4 flex">
      <p className="mx-2">
        <Link to="/">{title}</Link>
      </p>
      <p className="mx-2">
        <Link to="/login">Login</Link>
      </p>
      <p className="mx-2">
        <Link to="/users">Users</Link>
      </p>
      <p className="mx-2">
        <Link to="/about">About</Link>
      </p>
    </header>
  );
}
