import React, { Component, useState, useEffect } from "react";

export const Patientheader = (props) => {
  console.log(props);
  return (
    <div className="toprow">
      <header>
        <div>{props.patientName}</div>
        <div>{props.patientPhone}</div>
        <div>Main Office</div>
      </header>
    </div>
  );
};
