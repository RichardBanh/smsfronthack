import React, { useState, useEffect } from "react";
import { Patientbutton } from "./patientbutton";
import { DOCTORPATIENTS } from "../../Data/dumby";
import { useDispatch, useSelector } from "react-redux";
import { PatientAdd } from "./PatientAdd";

export const Patientleftmenu = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("all");
  const docPatient = useSelector((state) => state.patientList);
  useEffect(() => {
    dispatch({
      type: "PATIENT/LIST/LOADALL",
      payload: { all: [...DOCTORPATIENTS] },
    });
  }, []);
  const [addPatient, setAdd] = useState(false);

  const mapButtonPatient = docPatient.map((x) => {
    const props = {
      patientName: x.patientName,
      patientID: x.patientID,
      patientPhone: x.patientPhone,
      id: x.id,
      dispatch: dispatch,
      selected: selected,
      setSelected: setSelected,
    };
    return <Patientbutton {...props} key={x.id} />;
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
        <div
          className="labelPatientAdd"
          onClick={() => {
            setAdd(!addPatient);
          }}
        >
          + Add Patients
        </div>
      </menu>
      {addPatient ? <PatientAdd setAdd={setAdd} /> : ""}
    </>
  );
};
