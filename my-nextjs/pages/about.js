import React from "react";
import Header from "../components/header";
import Head from "next/head";
export default function about() {
  return (
    <div>
      <Head>
        <title>My Next App - About</title>
      </Head>
      <Header />
      <p className="text-red">About</p>
      <style jsx>{`
        .text-red {
          color: red;
        }
      `}</style>
    </div>
  );
}
