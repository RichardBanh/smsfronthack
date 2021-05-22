import React, { Component, useEffect, useState } from "react";
import { APPOINTMENTLIST } from "../../Data/dumby";
import { useDispatch, useSelector } from "react-redux";

import { SingleAppointment } from "./SingleAppointment";
export const Appointment = () => {
  const dispatch = useDispatch();

  const drappointments = useSelector((state) => state.drappointments);

  useEffect(() => {}, [drappointments]);

  return (
    <div className="modal">
      <div className="modal-content-appointment">
        <h3>Appointments</h3>
        {drappointments.map((x) => (
          <SingleAppointment {...x} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
