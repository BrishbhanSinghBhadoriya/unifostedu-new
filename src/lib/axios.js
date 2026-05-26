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
  bookDemo: async (data) => {
    const localRes = axios.post(
      "/api/v1/enquiry",
      data,
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('Local API Error:', err.message);
      return null;
    });

    const neoDoveRes = axios.post(
      "https://25515469-e21f-48a6-93fb-91446641fcda.neodove.com/integration/custom/4fa16adb-e429-4417-a5ba-fc6f77e3fea3/leads",
      data,
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('NeoDove Error:', err.message);
      return null;
    });

    const crmRes = process.env.NEXT_PUBLIC_CRM_API_URL ? axios.post(
      process.env.NEXT_PUBLIC_CRM_API_URL,
      {
        name: data.name,
        phone: data.phone || data.mobile,
        email: data.email || "",
        source: "website",
        city: data.city || data.location || "",
        notes: `Book Demo - University: ${data.university}, Course: ${data.course}`
      },
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('CRM Sync Error:', err.message);
      return null;
    }) : Promise.resolve(null);

    return Promise.all([localRes, neoDoveRes, crmRes]);
  }
};

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "";


// 🧩 Specific enquiries (absolute URLs as provided)
export const enquiryAPI = {
  videoCall: async (data) => {
    const neoDovePromise = axios.post(
      "https://25515469-e21f-48a6-93fb-91446641fcda.neodove.com/integration/custom/4fa16adb-e429-4417-a5ba-fc6f77e3fea3/leads",
      data,
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('NeoDove Error:', err.message);
      return null;
    });

    const crmPromise = process.env.NEXT_PUBLIC_CRM_API_URL ? axios.post(
      process.env.NEXT_PUBLIC_CRM_API_URL,
      {
        name: data.name,
        phone: data.phone || data.mobile,
        email: data.email || "",
        source: "website",
        city: data.city || data.location || "",
        notes: `Video Call Request - University: ${data.university}, Course: ${data.course}`
      },
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('CRM Sync Error:', err.message);
      return null;
    }) : Promise.resolve(null);

    return Promise.all([neoDovePromise, crmPromise]);
  },
  homeDemo: async (data) => {
    const neoDovePromise = axios.post(
      "https://25515469-e21f-48a6-93fb-91446641fcda.neodove.com/integration/custom/4fa16adb-e429-4417-a5ba-fc6f77e3fea3/leads",
      data,
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('NeoDove Error:', err.message);
      return null;
    });

    const crmPromise = process.env.NEXT_PUBLIC_CRM_API_URL ? axios.post(
      process.env.NEXT_PUBLIC_CRM_API_URL,
      {
        name: data.name,
        phone: data.phone || data.mobile,
        email: data.email || "",
        source: "website",
        city: data.city || data.location || "",
        notes: `Home Demo Request - University: ${data.university}, Course: ${data.course}`
      },
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('CRM Sync Error:', err.message);
      return null;
    }) : Promise.resolve(null);

    return Promise.all([neoDovePromise, crmPromise]);
  },
  // Submit to internal API which handles DB storage, NeoDove and New CRM
  general: async (data) => {
    const response = await axios.post(
      "/api/v1/enquiry",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  },
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

// 🧩 Chatbot AI API
export const chatbotAPI = {
  ask: (data) =>
    axios.post(
      "/api/v1/chatbot",
      data,
      { headers: { "Content-Type": "application/json" } }
    ),
};



export default API;
