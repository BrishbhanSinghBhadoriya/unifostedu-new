import axios from "axios";

// Set API base URL based on environment
const getAPIBaseURL = () => {
  if (typeof window !== 'undefined') {
    const isLocal = window.location.hostname === "localhost";
    return isLocal
      ? "http://localhost:5001" // local backend
      : "https://unifost-backend.onrender.com"; // prod backend
  }
  // Server-side fallback
  return "https://unifost-backend.onrender.com";
};

const API_BASE_URL = getAPIBaseURL();

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ send cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// 🧩 Auth API endpoints
export const authAPI = {
  register: (data) => API.post("/api/auth/register", data),
  login: (data) => API.post("/api/auth/login", data),
  logout: () => API.post("/api/auth/logout"),
};

// 🧩 Demo/Enquiry API
export const demoAPI = {
  bookDemo: (data) => API.post("/api/enquiry/enquiry", data),
};

export default API;
