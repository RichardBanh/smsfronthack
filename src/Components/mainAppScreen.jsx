import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./LoginPage";
import { useSelector } from "react-redux";
import { WorkingScreen } from "./Workingscreen";
export const Main = () => {
  const loggedinPass = useSelector((state) => state.login.signin);
  return <Router>{loggedinPass ? <WorkingScreen /> : <Login />}</Router>;
};
