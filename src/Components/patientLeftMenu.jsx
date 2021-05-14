import React, { Component, useState, useEffect } from "react";
import { Patientbutton } from "../Components/patientbutton";
import { DOCTORPATIENTS } from "../Data/dumby";
export const Patientleftmenu = () => {
  const [dataPatient, setPatientData] = useState();
  useEffect(() => {
    setPatientData(DOCTORPATIENTS);
  }, []);
  const mapButtonPatient = dataPatient.map((x) => {
    const props = {
      patientName: x.patientName,
      patientID: x.patientID,
    };
    <Patientbutton {...props} />;
  });
  return (
    <>
      <menu className="menuleftBox">
        <div className="labelPatient">Patients</div>
        <div className="scrollbox">
          {/* //map this section */}
          {mapButtonPatient}
          {/* //map this section */}
        </div>
        <div className="labelPatientAdd">+ Add Patients</div>
      </menu>
    </>
  );
};
