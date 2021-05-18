import React, { Component, useEffect } from "react";
import { PATIENTCHART } from "../../Data/dumby";
import { Patientheader } from "./patientHead";
import { MedicalNotes } from "./MedicalNotes";
import { PatientInfo } from "./PatientInfo";
import { HivDiagnosis } from "./HivDiagnosis";

function getcurrentDate() {
  const date = new Date();
  const month = "" + (date.getMonth() + 1);
  const day = "" + date.getDate();
  const year = date.getFullYear();
  return "" + year + day + month;
}
export const ChartScreen = (props) => {
  useEffect(() => {
    const matchChart = PATIENTCHART.find(
      (x) => x.patientId === props.patientId
    );
    props.dispatch({ type: "LOAD/INITIAL", payload: { all: matchChart } });
  }, []);
  //might cause issue when doing a remote call
  const date = getcurrentDate();
  return (
    <div className="chart">
      {/* dynamic */}
      <Patientheader
        patientPhone={props.patientPhone}
        patientName={props.patientName}
      />
      {/* dynamic */}
      <div className="midrow">
        <div className="leftcol">
          <PatientInfo {...props.patientinfo} />
          {/* dynamic */}
          <MedicalNotes patientNotes={props.patientNotes} date={date} />
          {/* dynamic */}
        </div>
        <div className="rightcol">
          {/* dynamic */}
          <HivDiagnosis patientHiv={props.patientHiv} />
          {/* dynamic */}
          <div className="bottombox">
            <div className="medication">Medication</div>
            <div className="diagnosis">Diagnosis</div>
          </div>
        </div>
      </div>
      <div className="bottomrow">
        <button>Commit</button>
        <div className="patientSetting"></div>
      </div>
    </div>
  );
};
