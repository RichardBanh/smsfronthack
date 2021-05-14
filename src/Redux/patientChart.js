const initialState = {
  patientinfo: { age: "", height: "", gender: "", blood: "" },
  medicalChart: [{ date: "", note: "" }],
  hiv: {
    hivtype: "",
    hivdiagnosisStage: "",
    hivpositive: "",
    hivtest: "",
    hivtreatment: "",
    hivmedication: "",
  },
  medication: "",
  diagnosis: "",
};

export const patientChart = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD/INITIAL":
      return { ...action.payload.all };
    case "UPDATE/CHART":
      return {
        ...state,
        medicalChart: [
          ...state.medicalChart,
          { date: payload.date, note: payload.note },
        ],
      };
    case "UPDATE/MEDICATION":
      return {
        ...state,
        medication: payload.medication,
      };
    case "UPDATE/DIAGNOSIS":
      return {
        ...state,
        diagnosis: payload.diagnosis,
      };
    case "UPDATE/HIV":
      return {
        ...state,
        hiv: {
          hivtype: payload.hivtype,
          hivdiagnosisStage: payload.hivdiagnosisStage,
          hivpositive: payload.hivpositive,
          hivtest: payload.hivtest,
          hivtreatment: payload.hivtreatment,
          hivmedication: payload.hivmedication,
        },
      };
    default:
      break;
  }
};
