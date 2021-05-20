import React, { Component } from "react";

export const ReminderDays = (props) => {
  return (
    <div className="modal-days-row">
      {props.days.map((b) => {
        return <div className="modal-day">{b}</div>;
      })}
    </div>
  );
};
