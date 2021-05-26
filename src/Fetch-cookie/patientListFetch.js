import Cookies from "js-cookie";
import axios from "axios";

export const patientFetch = async (dispatch, type) => {
  const url = "http://127.0.0.1:8000/patients/";
  const jwt = Cookies.get("jwt");
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `JWT ${jwt}`,
      },
    });
    console.log(response);
    dispatch({ type: type, payload: { all: [...response.data] } });
  } catch (error) {
    console.error(error);
  }
};
