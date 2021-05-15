import React, { Component, useEffect, useState } from "react";
import { Patientleftmenu } from "../Components/patientLeftMenu";
import { Patientheader } from "../Components/chart/patientHead";
import { useSelector, useDispatch } from "react-redux";

import { PATIENTCHART } from "../Data/dumby";

//auto save function?
export const WorkingScreen = () => {
  const patientId = useSelector((state) => state.patient.patientId);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!patientId === "") {
      const matchChart = PATIENTCHART.find((x) => x.patientId === patientId);
      dispatch({ type: "LOAD/INITIAL", payload: { all: matchChart } });
    }
  }, []);
  return (
    <div className="workingWrapper">
      {/* need function to match and pull data */}
      {/* menueyfvhasfh blk */}
      <menu className="menublk">
        <div className="icon">ICON</div>
        {/* dynamic */}
        <div>John Harris</div>

        <div className="rightsideMenu">
          <button className="appointmentBtn">Appointments</button>
          <div className="bellicon"></div>
          <div className="lockicon"></div>
        </div>
      </menu>
      {/* menueyfvhasfh blk */}
      {/* sidebar */}
      <div className="bottomStack">
        <Patientleftmenu />
        <div className="body">
          <div className="chart">
            {/* dynamic */}
            <Patientheader />
            {/* dynamic */}
            <div className="midrow">
              <div className="leftcol">
                <div className="patientinfo">
                  <div className="tabblock">
                    <div>Patient Info</div>
                    <div>Age: </div>
                    <div>Gender: </div>
                    <div>Weight: </div>
                    <div>Height: </div>
                    <div>Blood Type: </div>
                  </div>
                  <div className="">
                    <div>Account Creation Date:</div>
                  </div>
                </div>
                <div className="medicalnotes"></div>
              </div>
              <div className="rightcol">
                <div className="hivdiagnosis"></div>
                <div className="bottombox">
                  <div className="medication"></div>
                  <div className="diagnosis"></div>
                </div>
              </div>
            </div>
            <div className="bottomrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
