const initialState = { patientName: "", patientID: "" };

export const patient = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK/LEFT/PATIENT":
      return {
        patientName: action.payload.patientName,
        patientID: action.payload.patientID,
      };
    default:
      return state;
  }
};
