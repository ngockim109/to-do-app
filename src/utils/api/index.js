import axios from "axios";
const api = axios.create({
  baseURL: "https://65a4dbd652f07a8b4a3dce16.mockapi.io/api/v1/",
});

export default api;
