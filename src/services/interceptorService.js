import axios from "axios";
import { useAuth } from "../stores/oauth";

const interceptorService = () => {
  axios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access_token");
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        //useAuth().fetchAccessToken();
      }
      // Do something before request is sent
      return config;
    },
    function (error) {
      console.log("error");
      // Do something with request error
      return Promise.reject(error);
    }
  );
};
export default interceptorService;
