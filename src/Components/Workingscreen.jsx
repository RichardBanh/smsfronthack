import React, { Component, useEffect, useState } from "react";
import { Patientleftmenu } from "../Components/patientLeftMenu";
import { Patientheader } from "../Components/chart/patientHead";
import { useSelector } from "react-redux";

//auto save function?
export const WorkingScreen = () => {
  const patientName = useSelector((state) => state.patient.patientId);
  const [patientChart, setPatientChart] = useState([]);
  useEffect(() => {
    if (!patientName === "") {
      //have to do a search function
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
                <div className="patientinfo"></div>
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
