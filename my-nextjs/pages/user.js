import React from "react";
import Header from "../components/header";
import Head from "next/head";
import axios from "axios";
function User({ users }) {
  return (
    <div>
      <Head>
        <title>My Next App - User</title>
      </Head>
      <Header />
      User
    </div>
  );
}

User.getInitialProps = async (ctx) => {
  const { data } = await axios.get(`https://reqres.in/api/unknown`);
  console.log(data);
  return { users: data };
};

export default User;
