import React, { Component } from "react";

export const ReminderTime = (props) => {
  return (
    <div>
      Times Sent:
      {props.times.map((a) => (
        <div>{a}</div>
      ))}
    </div>
  );
};
