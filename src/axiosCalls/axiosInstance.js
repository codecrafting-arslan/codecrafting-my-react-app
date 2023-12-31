import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});



axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // We getting it everytime
    /* eslint-disable no-param-reassign */
    config.headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "*",
    };
    
    return config;
  });


  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response &&
        error.response.status === 401 &&
        (!error.response.config || error.response.config.url !== "/")
      ) {
        // Unauthorized
        console.log("removed Token");
        localStorage.removeItem("token");

        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );