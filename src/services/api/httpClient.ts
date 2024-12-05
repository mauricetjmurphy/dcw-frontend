import axios from "axios";

// Utility function to get the token from local storage or any other place you're storing it
export const getToken = () => {
  return localStorage.getItem("token"); // This assumes you store the token in localStorage
};

// Utility function to save token when it's refreshed or acquired
export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

// Utility function to refresh token (optional if your API supports it)
const refreshToken = async () => {
  try {
    const refresh_token = localStorage.getItem("refresh_token");
    const response = await axios.post("/auth/refresh", { refresh_token });
    const newToken = response.data.token;
    saveToken(newToken); // Save new token
    return newToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

// Create an axios instance
const httpClient = axios.create({
  baseURL: "https://",
});

// Request interceptor to add Authorization header
httpClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and refresh
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 (Unauthorized) and token was sent, try to refresh the token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshToken(); // Refresh token
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`; // Update default headers
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`; // Retry the original request with new token

        return httpClient(originalRequest); // Retry the original request
      } catch (refreshError) {
        // Handle refresh token error (like logging out the user)
        console.error("Token refresh failed:", refreshError);
        // Optionally, you can redirect the user to the login page
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // For other errors, just reject the promise
  }
);

export default httpClient;
