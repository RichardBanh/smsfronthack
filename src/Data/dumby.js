export const USER = [{ email: "richard", password: "1234" }];

export const DOCTORPATIENTS = [
  {
    patientName: "Enqu Waper",
    patientID: "ashdfiu28rh2",
    id: 1,
    patientPhone: "7789527551",
  },
  {
    patientName: "Enqu Waper",
    patientID: "ashdfiu28rh2",
    id: 2,
    patientPhone: "7789527551",
  },
  {
    patientName: "Enqu Waper",
    patientID: "ashdfiu28rh2",
    id: 3,
    patientPhone: "88223222",
  },
  {
    patientName: "Enqu Waper",
    patientID: "ashdfiu28rh2",
    id: 4,
    patientPhone: "88223222",
  },
  {
    patientName: "Enqu Waper",
    patientID: "ashdfiu28rh2",
    id: 5,
    patientPhone: "88223222",
  },
];

export const PATIENTCHART = [
  {
    patientId: "ashdfiu28rh2",
    patientinfo: {
      age: "23",
      height: "130",
      gender: "Female",
      blood: "A",
      weight: "70",
      accountcreation: "20201206",
      dr: "Dr John Harris",
    },
    medicalChart: [
      {
        date: "2020123",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis sagittis lectus. Nam venenatis nibh turpis, sed finibus ex dapibus non. Sed ut quam massa. Integer eu venenatis risus. Aliquam sit amet odio eleifend, eleifend lectus at, lobortis ante. In aliquam ullamcorper sagittis. Nulla eget est feugiat, tristique mi a, malesuada risus. Proin dapibus leo eu ultrices hendrerit. Sed nec lacinia tellus. In hac habitasse platea dictumst. Ut sagittis molestie faucibus. Cras rutrum, sapien ut mattis rhoncus, nisl ipsum consequat quam, vulputate viverra felis leo euismod odio. Donec euismod purus nec orci pharetra blandit. Sed eu tempus mi, ac finibus lacus. Nam tincidunt eros eget sem rutrum cursus. Praesent ut magna in urna finibus elementum.",
        signed: "Dr John Macoronie",
      },
    ],
    hiv: {
      hivtype: "3",
      hivdiagnosisStage: "1",
      hivpositive: "1",
      hivtest: "1",
      hivtreatment: "medication1, 2 day",
      hivmedication: "medication1, medication2, medication3",
    },
    medication: "medication1, vitamins",
    diagnosis: "Hiv 3, Arthritis",
    reminder: [
      {
        message: "Take medication",
        startdate: "20210306",
        times: ["1400"],
        days: ["Mon", "Thu"],
      },
    ],
  },
];
