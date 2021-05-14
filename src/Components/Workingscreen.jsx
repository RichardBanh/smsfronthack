import React, { Component } from "react";
import { Patientleftmenu } from "../Components/patientLeftMenu";
export const WorkingScreen = () => {
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
        <div className="body"></div>
      </div>
    </div>
  );
};
