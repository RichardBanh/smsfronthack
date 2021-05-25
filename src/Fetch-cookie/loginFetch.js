import Cookies from "js-cookie";
import axios from "axios";

const storeCookie = (resdata) => {
  Cookies.set("jwt", resdata.token);
  Cookies.set("username", resdata.user.username);
};
export const loginFetch = async (datain) => {
  const url = "http://127.0.0.1:8000/token-auth/";

  const response = axios({
    url: url,
    method: "POST",
    data: datain,
  })
    .then((res) => storeCookie(res.data))
    .catch((err) => {
      console.log(err);
    });
};
