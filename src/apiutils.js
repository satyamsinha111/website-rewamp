import axios from "axios";
let baseurl = "https://satyamsinha.online/client";
export const sendMessage = (data) => {
  return axios.post(`${baseurl}/client`, data);
};
