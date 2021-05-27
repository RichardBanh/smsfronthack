import React, { useState } from "react";
import { Patientleftmenu } from "./patientnav/patientLeftMenu";
import { useSelector, useDispatch } from "react-redux";
import { ChartScreen } from "./chart/ChartScreen";
import { AppointmentBase } from "./Appointment/AppointmentBase";
import { APPOINTMENTLIST } from "../Data/dumby";

//auto save function?
export const WorkingScreen = () => {
  const patientNotes = useSelector((state) => state.patientChart.medicalChart);
  const patientHiv = useSelector((state) => state.patientChart.hiv);
  const dispatch = useDispatch();
  const patientId = useSelector((state) => state.patient.patientID);
  const patientName = useSelector((state) => state.patient.patientName);
  const patientPhone = useSelector((state) => state.patient.patientPhone);

  const patientMedication = useSelector(
    (state) => state.patientChart.medication
  );
  const patientList = useSelector((state) => state.patientList);
  const [showappointment, setshow] = useState(false);
  const patientDiagnosis = useSelector((state) => state.patientChart.diagnosis);
  const patientReminders = useSelector((state) => state.patientChart.reminder);
  const val = useSelector((state) => state.patientList);
  const propsFunc = {
    dispatch: dispatch,
    patientId: patientId,
    patientNotes: patientNotes,
    patientPhone: patientPhone,
    patientName: patientName,
    patientHiv: patientHiv,
    patientMedication: patientMedication,
    patientDiagnosis: patientDiagnosis,
    patientReminders: patientReminders,
    patientList: patientList,
  };

  return (
    <>
      {/* {patientId != "" ? <div>Loading</div> :} */}
      <div className="workingWrapper">
        {/* need function to match and pull data */}
        {/* menueyfvhasfh blk */}
        <menu className="menublk">
          <div className="icon">ICON</div>
          {/* dynamic */}
          <div>John Harris</div>

          <div className="rightsideMenu">
            <button
              className="appointmentBtn"
              onClick={() => {
                setshow(true);
                dispatch({
                  type: "LOAD/INITIAL/DRAPPOIN",
                  payload: { all: [...APPOINTMENTLIST] },
                });
              }}
            >
              Appointments
            </button>
            <div className="bellicon"></div>
            <div className="lockicon"></div>
          </div>
          {showappointment ? <AppointmentBase /> : ""}
        </menu>
        {/* menueyfvhasfh blk */}
        {/* sidebar */}
        <div className="bottomStack">
          <Patientleftmenu />
          <div className="body">
            {patientId === "" ? (
              <div>Loading</div>
            ) : (
              <ChartScreen {...propsFunc} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
