import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Patientbutton = (props) => {
  <div
    className="patientBox"
    id={props.id}
    onClick={() => {
      useDispatch({
        type: "CLICK/LEFT/PATIENT",
        payload: {
          patientName: props.patientName,
          patientID: props.patientName,
        },
      });
    }}
  >
    Fred Johnson
  </div>;
};
