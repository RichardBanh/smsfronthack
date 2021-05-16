import React, { Component, useEffect, useState } from "react";
import { Patientleftmenu } from "../Components/patientLeftMenu";
import { Patientheader } from "../Components/chart/patientHead";
import { useSelector, useDispatch } from "react-redux";
import { ChartScreen } from "../Components/chart/ChartScreen";

//auto save function?
export const WorkingScreen = () => {
  const patientinfo = useSelector((state) => state.patientChart.patientinfo);
  const patientNotes = useSelector((state) => state.patientChart.medicalChart);
  const dispatch = useDispatch();
  const patientId = useSelector((state) => state.patient.patientID);

  const propsFunc = {
    dispatch: dispatch,
    patientId: patientId,
    patientinfo: patientinfo,
    patientNotes: patientNotes,
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
