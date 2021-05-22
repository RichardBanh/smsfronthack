import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { SingleAppointment } from "./SingleAppointment";
export const Appointment = (props) => {
  const dispatch = useDispatch();
  const [appointment, setappointment] = useState([...props.drappointments]);
  const callBackDel = async (id) => {
    const newlist = appointment.filter((x) => x.id !== id);
    setappointment([...newlist]);
  };
  return (
    <div className="modal">
      <div className="modal-content-appointment">
        <h3>Appointments</h3>
        {appointment.map((x) => (
          <SingleAppointment
            {...x}
            dispatch={dispatch}
            callBackDel={callBackDel}
          />
        ))}
        <button>Add</button>
      </div>
    </div>
  );
};
