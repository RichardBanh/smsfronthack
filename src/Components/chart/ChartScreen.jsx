import React, { Component, useEffect, useState } from "react";
import { PATIENTCHART } from "../../Data/dumby";
import { Patientheader } from "./PatientHead";
import { MedicalNotes } from "./MedicalNotes";
import { PatientInfo } from "./PatientInfo";
import { HivDiagnosis } from "./HivDiagnosis";
import { GeneralDiagnosis } from "./GeneralDiagnosis";
import { GeneralMedication } from "./GeneralMedication";
import { ReminderScreen } from "./Reminder/ReminderScreen";

function getcurrentDate() {
  const date = new Date();
  const month = "" + (date.getMonth() + 1);
  const day = "" + date.getDate();
  const year = date.getFullYear();
  return "" + year + day + month;
}
export const ChartScreen = (props) => {
  const [patientShowRem, setPatientShowRem] = useState(false);
  useEffect(() => {
    const matchChart = PATIENTCHART.find(
      (x) => x.patientId === props.patientId
    );
    props.dispatch({ type: "LOAD/INITIAL", payload: { all: matchChart } });
  }, [props.patientId]);
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
            <GeneralMedication patientMedication={props.patientMedication} />
            <GeneralDiagnosis patientDiagnosis={props.patientDiagnosis} />
          </div>
        </div>
      </div>
      <div className="bottomrow">
        <button>Commit</button>
        <div
          className="patientSetting"
          onClick={() => setPatientShowRem(!patientShowRem)}
        ></div>
      </div>
      {patientShowRem ? (
        <ReminderScreen patientReminders={props.patientReminders} />
      ) : (
        ""
      )}
    </div>
  );
};
