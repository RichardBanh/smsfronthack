const initialState = {
  patientinfo: { age: "", height: "", gender: "", blood: "" },
  medicalChart: [{ date: "", note: "", signed: "" }],
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
          {
            date: action.payload.date,
            note: action.payload.note,
            signed: action.payload.signed,
          },
        ],
      };
    case "UPDATE/MEDICATION":
      return {
        ...state,
        medication: action.payload.medication,
      };
    case "UPDATE/DIAGNOSIS":
      return {
        ...state,
        diagnosis: action.payload.diagnosis,
      };
    case "UPDATE/HIV":
      return {
        ...state,
        hiv: {
          hivtype: action.payload.hivtype,
          hivdiagnosisStage: action.payload.hivdiagnosisStage,
          hivpositive: action.payload.hivpositive,
          hivtest: action.payload.hivtest,
          hivtreatment: action.payload.hivtreatment,
          hivmedication: action.payload.hivmedication,
        },
      };
    default:
      return state;
  }
};
