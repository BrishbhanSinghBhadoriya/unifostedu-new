const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://unifostedu.com"
    : "http://localhost:3000";

export async function getLandingData() {
  try {
    const res = await fetch(`${baseUrl}/api/v1/landingData`, {
      cache: "no-store", // Ensure dynamic fetching at runtime
    });

    if (!res.ok) {
      console.error(`Failed to fetch landing data: ${res.status}`);
      return getFallbackData();
    }

    const data = await res.json();
    return data || getFallbackData();
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return getFallbackData();
  }
}

function getFallbackData() {
  return {
    heroSlides: [],
    courses: [],
    features: [],
    cities: [],
    accreditationLogos: [],
    universityLogos: [],
    faqs: [],
    colleges: [],
  };
}
