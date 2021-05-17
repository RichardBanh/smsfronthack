import React, { Component, useState } from "react";
import { SingleNote } from "./SingleNote";

export const MedicalNotes = (props) => {
  const [showform, setShowForm] = useState(false);
  const notesMap = props.patientNotes.map((x) => <SingleNote {...x} />);
  return (
    <div
      className="medicalnotes"
      onClick={() => {
        setShowForm(!showform);
      }}
    >
      {/* onclick show form */}
      <form action="">
        <div>{props.date}</div>
        <textarea></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>

      {notesMap}
    </div>
  );
};
