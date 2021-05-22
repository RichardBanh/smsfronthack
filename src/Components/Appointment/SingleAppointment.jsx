import React, { useState, useEffect } from "react";

export const SingleAppointment = (props) => {
  const [edit, setEdit] = useState(false);
  const [patientApp, setpatientApp] = useState({ ...props });
  useEffect(() => {
    setpatientApp({ ...props });
  }, [props]);

  return (
    <div className="singleAppointment">
      <div className="single-appointment-item">{patientApp.patient}</div>
      <div className="single-appointment-item">
        Date: <br />
        {edit ? (
          <input type="text" defaultValue={patientApp.patientDate} />
        ) : (
          patientApp.patientDate
        )}
      </div>
      <div className="single-appointment-item">
        Time: <br />
        {edit ? (
          <input type="text" defaultValue={patientApp.appointmentTime} />
        ) : (
          patientApp.appointmentTime
        )}
      </div>
      <div className="single-appointment-item">
        Phone: <br />
        {edit ? (
          <input type="text" defaultValue={patientApp.phone} />
        ) : (
          patientApp.phone
        )}
      </div>
      <div className="single-appointment-item">
        Duration: <br />
        {edit ? (
          <input type="text" defaultValue={patientApp.duration} />
        ) : (
          patientApp.duration
        )}
      </div>
      <button>Delete</button>
      {edit ? (
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Submit
        </button>
      ) : (
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};
