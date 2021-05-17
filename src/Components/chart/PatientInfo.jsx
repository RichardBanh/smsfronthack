import React, { Component } from "react";

export const PatientInfo = (props) => {
  return (
    <div className="patientinfo">
      <div className="tabblock">
        <div>Patient Info</div>
        <div>Age: {props.age}</div>
        <div>Gender: {props.gender} </div>
        <div>Weight: {props.weight} </div>
        <div>Height: {props.height}</div>
        <div>Blood Type: {props.blood} </div>
        <div>Home Doctor: {props.dr}</div>
      </div>
      <div>
        <div>Account Creation Date: {props.accountcreation}</div>
      </div>
    </div>
  );
};
