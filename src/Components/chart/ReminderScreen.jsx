import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const ReminderScreen = (props) => {
  const dispatch = useDispatch();
  const [numberReminders, setNumReminders] = useState(0);
  const [patientRemind, setpatientRemind] = useState({
    ...props.patientReminders,
  });
  useEffect(() => {
    setpatientRemind(...props.patientReminders);
  }, [props.patientReminders]);
  const currentRem = patientRemind.map((x) => {
    <div>
      <div> {x.message}</div>
      <div>{...x.times}</div>
      <div>{...x.days}</div>
    </div>;
  });
  return (
    <>
      <div className="modal">
        <div class="modal-content">
          {currentRem}
          <button
            onClick={(e) => {
              e.preventDefault();
              setNumReminders(numberReminders + 1);
            }}
          >
            Add Reminder
          </button>
        </div>
      </div>
    </>
  );
};
