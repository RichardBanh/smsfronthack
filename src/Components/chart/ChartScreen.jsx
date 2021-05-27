import React, { useEffect, useState } from "react";
import { Patientheader } from "./PatientHead";
import { MedicalNotes } from "./MedicalNotes";
import { PatientInfo } from "./PatientInfo";
import { HivDiagnosis } from "./HivDiagnosis";
import { GeneralDiagnosis } from "./GeneralDiagnosis";
import { GeneralMedication } from "./GeneralMedication";
import { ReminderScreen } from "./Reminder/ReminderScreen";
import { patientNotesFetch } from "../../Fetch-cookie/patientNotesFetch";

function getcurrentDate() {
  const date = new Date();
  const month = "" + (date.getMonth() + 1);
  const day = "" + date.getDate();
  const year = date.getFullYear();
  return "" + year + day + month;
}
export const ChartScreen = (props) => {
  const [patientShowRem, setPatientShowRem] = useState(false);
  const [currentPatientInfo, setPatientInfo] = useState("");
  useEffect(() => {
    const matchChart = props.patientList.find(
      (x) => x.uuid === props.patientId
    );
    patientNotesFetch(props.patientId, props.dispatch);
    setPatientInfo(matchChart);
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
          <PatientInfo {...currentPatientInfo} />
          {/* dynamic */}
          <MedicalNotes
            patientNotes={props.patientNotes}
            date={date}
            patientId={props.patientId}
            doctor_id={currentPatientInfo.doctor_id}
          />
          {/* dynamic */}
        </div>
        <div className="rightcol">
          {/* dynamic */}
          {/* <HivDiagnosis patientHiv={props.patientHiv} /> */}
          {/* dynamic */}
          <div className="bottombox">
            {/* <GeneralMedication patientMedication={props.patientMedication} />
            <GeneralDiagnosis patientDiagnosis={props.patientDiagnosis} /> */}
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
        <ReminderScreen
          patientReminders={props.patientReminders}
          setPatientShowRem={setPatientShowRem}
        />
      ) : (
        ""
      )}
    </div>
  );
};
