const initialState = [
  {
    firstname: "",
    lastname: "",
    patientID: "",
    age: "",
    blood_type: "",
    lat: "",
    lon: "",
    phone_number: "",
    registration_date: "",
  },
];

export const patientList = (state = initialState, action) => {
  switch (action.type) {
    case "PATIENT/LIST/LOADALL":
      return [...action.payload.all];
    case "PATIENT/LIST/ADD":
      return [
        ...state,
        {
          // patientName: action.payload.patientName,
          // patientID: action.payload.patientID,
          // patientPhone: action.payload.patientPhone,
          firstname: action.payload.first_name,
          lastname: action.payload.last_name,
          patientID: action.payload.uuid,
          age: action.payload.age,
          blood_type: action.payload.blood_type,
          lat: action.payload.lat,
          lon: action.payload.lon,
          phone_number: action.payload.phone_number,
        },
      ];
    default:
      return state;
  }
};
