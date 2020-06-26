import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const history = useHistory();
  const [form, setform] = React.useState({ email: "", password: "" });
  const [error, seterror] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  function handleForm(e) {
    e.preventDefault();
    seterror("");
    setIsLoading(true);
    axios
      .post("/api/login?delay=1", form)
      .then((res) => {
        Cookies.set("token", res.data.token);
        history.push("/");
        // setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        seterror(err.response.data.error);
      });
  }

  return (
    <div className="flex justify-center">
      <form
        className="w-1/2 bg-gray-100 border rounded shadow py-10 text-center"
        onSubmit={handleForm}
      >
        <h1 className="text-3xl">Login Here</h1>
        <p className="my-5 text-red-700 text-xs">{error}</p>
        <div className="flex justify-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-800 w-64"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-5 flex justify-center">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="p-2 border border-gray-800 my-4 w-64"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button
          className={`w-64 text-white p-2 my-5 ${
            isLoading ? "bg-blue-500" : "bg-blue-700"
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
