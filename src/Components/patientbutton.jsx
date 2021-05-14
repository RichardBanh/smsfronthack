import React, { Component, useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const Patientbutton = (props) => {
  const value = useSelector((state) => state.patient.patientName);
  return (
    <div
      className="patientBox"
      id={props.id}
      onClick={() => {
        props.dispatch({
          type: "CLICK/LEFT/PATIENT",
          payload: {
            patientName: props.patientName,
            patientID: props.patientId,
          },
        });
      }}
    >
      {props.patientName}
    </div>
  );
};
