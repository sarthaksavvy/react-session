import React from "react";
import Link from "next/link";
import Header from "../components/header";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title>My Next App - Home</title>
      </Head>
      <Header />
      hello
    </div>
  );
}
