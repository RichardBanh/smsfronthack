const initialState = [{ patientName: "", patientID: "", patientPhone: "" }];

export const patientList = (state = initialState, action) => {
  switch (action.type) {
    case "PATIENT/LIST/LOADALL":
      return [...action.payload.all];
    case "PATIENT/LIST/ADD":
      return [
        ...state,
        {
          patientName: action.payload.patientName,
          patientID: action.payload.patientID,
          patientPhone: action.payload.patientPhone,
        },
      ];
    default:
      return state;
  }
};
