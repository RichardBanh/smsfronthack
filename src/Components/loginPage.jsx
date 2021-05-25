import React, { useState } from "react";
import { useDispatch } from "react-redux";
//dumbie authsection need to add loading screen
import { loginFetch } from "../Fetch-cookie/loginFetch";
import Cookies from "js-cookie";
export const Login = () => {
  const dis = useDispatch();
  const [userName, setUsername] = useState("");
  const [password, setPass] = useState("");
  return (
    <>
      <div className="loginWrapper">
        <form className="loginForm">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button
            onClick={async (e) => {
              e.preventDefault();

              //dumbie authsection need to add loading screen
              await loginFetch({ username: userName, password: password });
              const username = Cookies.get("username");
              const jwt = Cookies.get("jwt");
              if (userName === username && typeof jwt !== "undefined") {
                dis({ type: "SIGNIN", payload: { username: userName } });
              }
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
