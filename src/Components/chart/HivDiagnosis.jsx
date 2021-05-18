import React, { Component } from "react";
import { useSelector } from "react-redux";

export const HivDiagnosis = () => {
  //state comparison and data call here
  const hivChart = useSelector((state) => state.patientChart.hiv);
  return (
    <>
      <div className="hivdiagnosis">
        <div>HIV Diagnosis</div>
        <div className="diagnosisTop">
          <select name="HIV Type" id="hivtype">
            <option value="1">HIV 1 M-A</option>
            <option value="2">HIV 1 M-B</option>
            <option value="3">HIV 1 M-C</option>
            <option value="4">HIV 1 M-D</option>
            <option value="5">HIV 1 M-E</option>
            <option value="6">HIV 1 M-F</option>
            <option value="7">HIV 1 M-G</option>
            <option value="8">HIV 1 M-H</option>
            <option value="9">HIV 1 M-I</option>
            <option value="10">HIV 1 M-J</option>
            <option value="11">HIV 1 M-K</option>
            <option value="12">HIV 1 M-L</option>
            <option value="13">HIV 1 N</option>
            <option value="14">HIV 1 O</option>
            <option value="15">HIV 1 P</option>
            <option value="16">HIV 2 A</option>
            <option value="17">HIV 2 B</option>
            <option value="18">HIV 2 C</option>
            <option value="19">HIV 2 D</option>
            <option value="20">HIV 2 E</option>
            <option value="21">HIV 2 F</option>
            <option value="22">HIV 2 G</option>
            <option value="23">HIV 2 H</option>
          </select>
          <select name="HIVStage" id="HIVStage" value="2">
            <option value="1">Stage 1</option>
            <option value="2">Stage 2</option>
            <option value="3">Stage 3</option>
          </select>
          <label class="container">
            HIV Positive
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="diagnosisBottom">
          <div className="hivtest">
            <div>HIV Test</div>
          </div>
          <div className="hivtreatment">
            <div>HIV Treatment Schedule</div>
          </div>
          <div className="hivmed">
            <div>HIV Medication</div>
          </div>
        </div>
      </div>
    </>
  );
};
