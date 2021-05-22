import React, { Component, useEffect, useState } from "react";
import { APPOINTMENTLIST } from "../../Data/dumby";
import { useDispatch, useSelector } from "react-redux";

import { SingleAppointment } from "./SingleAppointment";
export const Appointment = () => {
  const dispatch = useDispatch();
  const drappointments = useSelector((state) => state.drappointments);
  useEffect(() => {
    dispatch({
      type: "LOAD/INITIAL/DRAPPOIN",
      payload: { all: [...APPOINTMENTLIST] },
    });
  }, []);
  const appointmentMap = drappointments.map((x) => (
    <SingleAppointment {...x} dispatch={dispatch} />
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
