import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//dumbie authsection need to add loading screen
import { USER } from "../Data/dumby";

export const Login = () => {
  //dumbie email and pass
  const email = USER[0].email;
  const pass = USER[0].password;
  ///
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
            onClick={(e) => {
              e.preventDefault();

              //dumbie authsection need to add loading screen
              if (userName === email && password === pass) {
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
