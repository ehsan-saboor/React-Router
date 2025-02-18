import axios from "axios";

class AxiosInstance {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL: baseURL || "",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          console.error("Response error:", error.response.status, error.response.data);
          switch (error.response.status) {
            case 401:
              console.log("Unauthorized access. Redirecting to login...");
              break;
            case 404:
              console.log("Resource not found");
              break;
          }
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

   
}

const axiosInstance = new AxiosInstance("https://jsonplaceholder.typicode.com");
export default axiosInstance;