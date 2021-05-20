import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const PatientAdd = (props) => {
  const [patientName, setpatientName] = useState("");
  const [patientID, setpatientID] = useState("");
  const [patientPhone, setpatientPhone] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Account Info</h4>
        <div className="modal-add-top">
          <div>
            <div className="modal-input-items">
              <div className="modal-input-items">Username:</div>
              <input
                type="text"
                name=""
                id=""
                value={patientID}
                onChange={(e) => {
                  setpatientID(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="modal-input-items">
              <div className="modal-input-items">Phone Number:</div>
              <input
                type="text"
                name=""
                id=""
                value={patientPhone}
                onChange={(e) => {
                  setpatientPhone(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="modal-input-items">Name:</div>
              <input
                type="text"
                name=""
                id=""
                value={patientName}
                onChange={(e) => {
                  setpatientName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Patient Info</h4>
          <div className="modal-add-patient-info">
            <div>
              <div className="modal-input-items">Age: </div>
              <input type="text" name="" id="" className="modal-input-items" />
              <div className="modal-input-items">Gender: </div>
              <input type="text" name="" id="" className="modal-input-items" />
              <div className="modal-input-items">Weight: </div>
              <input type="text" name="" id="" className="modal-input-items" />
            </div>
            <div>
              <div className="modal-input-items">Height:</div>
              <input type="text" name="" id="" className="modal-input-items" />
              <div className="modal-input-items">Blood Type:</div>
              <input type="text" name="" id="" className="modal-input-items" />
              <div className="modal-input-items">Home Doctor:</div>
              <input type="text" name="" id="" className="modal-input-items" />
            </div>
          </div>
        </div>
        <button
          className="modal-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "PATIENT/LIST/ADD",
              payload: {
                patientName: patientName,
                patientID: patientID,
                patientPhone: patientPhone,
              },
            });
            props.setAdd(false);
            //need to add dispatch to add chart to data
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            props.setAdd(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
