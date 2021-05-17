import React, { Component } from "react";

export const Patientbutton = (props) => {
  return (
    <div
      className="patientBox"
      style={{ opacity: props.selected === props.id ? 0.6 : 1 }}
      id={props.id}
      onClick={() => {
        props.dispatch({
          type: "CLICK/LEFT/PATIENT",
          payload: {
            patientName: props.patientName,
            patientID: props.patientID,
            patientPhone: props.patientPhone,
          },
        });
        props.setSelected(props.id);
      }}
    >
      <div className="patientText">{props.patientName}</div>
    </div>
  );
};
