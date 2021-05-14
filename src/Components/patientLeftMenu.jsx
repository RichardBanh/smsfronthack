import React, { Component, useState, useEffect } from "react";

export const Patientleftmenu = () => {
  return (
    <>
      <menu className="menuleftBox">
        <div className="labelPatient">Patients</div>
        <div className="scrollbox">
          {/* //map this section */}
          <div className="patientBox"></div>
          <div className="patientBox"></div>
          <div className="patientBox"></div>
          <div className="patientBox"></div>
          <div className="patientBox"></div>
          <div className="patientBox"></div>
          <div className="patientBox"></div>
          {/* //map this section */}
        </div>
        <div className="labelPatientAdd">+ Add Patients</div>
      </menu>
    </>
  );
};
