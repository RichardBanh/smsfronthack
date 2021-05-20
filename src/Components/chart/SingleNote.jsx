import React from "react";

export const SingleNote = (props) => {
  return (
    <div className="singleNote">
      <div className="noteDate">{props.date}</div>
      <div className="notePar">{props.note}</div>
      <div>{props.signed}</div>
    </div>
  );
};
