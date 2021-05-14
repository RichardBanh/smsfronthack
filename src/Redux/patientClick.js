const initialState = { patientName: "", patientID: "" };

export const patientClick = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK/LEFT/PATIENT":
      return {};
    default:
      return state;
  }
};
