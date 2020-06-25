import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Users() {
  const [users, setUsers] = useState({ data: [] });
  useEffect(async () => {
    const { data } = await Axios.get("https://reqres.in/api/users");
    setUsers(data);
  }, []);
  return (
    <div>
      {users.data.map((user) => (
        <section>
          <div className="flex ">
            <p className="mx-2 ">{user.first_name}</p>
            <p className="mx-2 ">{user.email}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
