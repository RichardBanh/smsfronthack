import Cookies from "js-cookie";
import axios from "axios";

const storeCookie = (resdata) => {
  Cookies.set("jwt", resdata.token);
  Cookies.set("username", resdata.user.username);
};
export const loginFetch = async (datain, dispatch, type, payload) => {
  const url = "http://127.0.0.1:8000/token-auth/";
  try {
    const response = await axios.post(url, datain);
    storeCookie(response.data);
    dispatch({
      type: type,
      payload: payload,
    });
  } catch (error) {
    console.error(error);
  }
};
