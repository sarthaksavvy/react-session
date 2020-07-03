import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about" prefetch={true}>
        <a>About</a>
      </Link>
      <Link href="/user" prefetch={true}>
        <a>User</a>
      </Link>
    </nav>
  );
}
