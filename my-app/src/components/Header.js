import React from "react";

export default function Header({ title }) {
  return (
    <header className="bg-purple-800 text-white p-4 flex">
      <p className="mx-2">{title}</p>
      <p className="mx-2">Home</p>
      <p className="mx-2">About</p>
    </header>
  );
}
