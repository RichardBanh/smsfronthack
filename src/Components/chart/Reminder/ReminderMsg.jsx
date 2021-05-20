import React, { Component } from "react";

import { useDispatch } from "react-redux";

export const ReminderMsg = (props) => {
  return (
    <div>
      Message: <div>{props.message}</div>
    </div>
  );
};
