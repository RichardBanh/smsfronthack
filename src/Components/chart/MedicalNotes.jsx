import React, { Component, useState } from "react";
import { SingleNote } from "./SingleNote";

import { useDispatch, useSelector } from "react-redux";

export const MedicalNotes = (props) => {
  const [showform, setShowForm] = useState(false);
  const [textvalue, setTextValue] = useState();
  const notesMap = props.patientNotes.map((x) => <SingleNote {...x} />);
  const dispatch = useDispatch();
  const drname = useSelector((state) => state.login.username);
  return (
    <div
      className="medicalnotes"
      onClick={() => {
        if (textvalue === "" || textvalue === null || textvalue === undefined) {
          setShowForm(!showform);
        }
      }}
    >
      {showform ? (
        <form
          action=""
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>{props.date}</div>
          <textarea
            value={textvalue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "UPDATE/CHART",
                payload: { date: props.date, note: textvalue, signed: drname },
              });
              setShowForm(false);
              setTextValue(null);
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <div></div>
      )}
      {notesMap}
    </div>
  );
};
