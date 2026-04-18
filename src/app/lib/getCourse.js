const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://unifostedu.com"
    : "http://localhost:3000";

export async function getLandingData() {
  try {
    const res = await fetch(`${baseUrl}/api/unifostData.json`, {
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
    heroSlides: [
      {
        src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu3_mzvr6y.webp",
        title: "Explore Your Future with Unifost",
        subtitle: "India's Best Online University Degree Guidance",
        description: "Your journey to professional excellence starts here.",
        ctaText: "Apply Now",
        ctaLink: "/compare",
      },
    ],
    courses: [],
    features: [
      {
        _id: "f1",
        title: "Expert Counseling",
        description: "Get personalized guidance from our experienced career experts.",
        iconKey: "FaCompass",
        color: "from-blue-500 to-cyan-500"
      },
      {
        _id: "f2",
        title: "Top Universities",
        description: "Partnered with India's most prestigious online universities.",
        iconKey: "FaBuildingColumns",
        color: "from-indigo-500 to-purple-500"
      }
    ],
    cities: [],
    accreditationLogos: [
      { _id: "a1", name: "UGC Approved", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" },
      { _id: "a2", name: "AICTE Recognized", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp" },
      { _id: "a3", name: "NAAC A+", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763124771/NAAC-A_g3pb34.webp" },
      { _id: "a4", name: "NIRF Ranked", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp" }
    ],
    universityLogos: [],
    faqs: [],
    colleges: [],
  };
}
