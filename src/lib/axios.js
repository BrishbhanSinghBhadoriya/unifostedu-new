import axios from "axios";

// Set API base URL based on environment
const getAPIBaseURL = () => {
  if (typeof window !== 'undefined') {
    const isLocal = window.location.hostname === "localhost";
    return isLocal
      ? "http://localhost:5001" // local backend
      : "https://api.unifostedu.com"; // prod backend (provided)
  }
  // Server-side fallback
  return "https://api.unifostedu.com";
};

const API_BASE_URL = getAPIBaseURL();

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ send cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Read token from cookies (client-side)
function getAdminTokenFromCookie() {
  if (typeof document === 'undefined') return "";
  const found = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("admin_token="));
  if (!found) return "";
  try {
    return decodeURIComponent(found.split("=")[1] || "");
  } catch {
    return found.split("=")[1] || "";
  }
}

// 🧩 Auth API endpoints
export const authAPI = {
  register: (data) => API.post("/api/auth/register", data),
  login: (data) => API.post("/api/auth/login", data),
  logout: () => API.post("/api/auth/logout"),
};

// 🧩 Demo/Enquiry API
export const demoAPI = {
  bookDemo: (data) =>
    axios.post(
      "https://api.unifostedu.com/api/v1/enquiry",
      data,
      { headers: { "Content-Type": "application/json" } }
    ),
};

// 🧩 Specific enquiries (absolute URLs as provided)
export const enquiryAPI = {
  videoCall: (data) =>
    axios.post(
      "https://api.unifostedu.com/api/v1/videoCallEnquiry",
      data,
      { headers: { "Content-Type": "application/json" } }
    ),
  homeDemo: (data) =>
    axios.post(
      "https://api.unifostedu.com/api/v1/homeDemoEnquiry",
      data,
      { headers: { "Content-Type": "application/json" } }
    ),
  general: (data) =>
    axios.post(
      "https://api.unifostedu.com/api/v1/enquiry",
      data,
      { headers: { "Content-Type": "application/json" } }
    ),
};

// 🧩 Blog + Upload API (absolute URLs as provided)
export const uploadAPI = {
  image: (formData) => {
    const token = getAdminTokenFromCookie();
    return axios.post(
      "https://unifost-backend-ev0y.onrender.com/api/v1/upload/image",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    );
  },
};



export default API;
