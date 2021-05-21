import React, { Component, useEffect, useState } from "react";
import { APPOINTMENTLIST } from "../../Data/dumby";
export const Appointment = (props) => {
  //pull data and map
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    setAppointments([...APPOINTMENTLIST]);
  }, []);
  const appointmentMap = appointments.map((x) => (
    <div className="singleAppointment">
      <div className="single-appointment-item">{x.patient}</div>
      <div className="single-appointment-item">
        Date: <br />
        {x.patientDate}
      </div>
      <div className="single-appointment-item">
        Time: <br />
        {x.appointmentTime}
      </div>
      <div className="single-appointment-item">
        Phone: <br />
        {x.phone}
      </div>
      <div className="single-appointment-item">
        Duration: <br />
        {x.duration}
      </div>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  ));
  return (
    <div className="modal">
      <div className="modal-content-appointment">
        <h3>Appointments</h3>
        {appointmentMap}
      </div>
    </div>
  );
};
