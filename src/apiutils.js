import axios from "axios";
let baseurl = "http://68.183.141.188:3000/client";
export const sendMessage = (data) => {
  return axios.post(`${baseurl}/client`, data);
};
