const initialState = { patientName: "", patientID: "", phone: "" };

export const patient = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK/LEFT/PATIENT":
      return {
        patientName: action.payload.patientName,
        patientID: action.payload.patientID,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};
