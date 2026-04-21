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

    const rawData = await res.json();
    const data = transformLandingData(rawData);
    return data || getFallbackData();
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return getFallbackData();
  }
}

function transformLandingData(raw) {
  if (!raw) return null;

  return {
    heroSlides: raw.heroSlides || getFallbackData().heroSlides,
    courses: (raw.courses || []).map(course => ({
      title: course.name || course.title,
      desc: course.description || course.desc,
      level: course.level,
      tag: course.tag || (course.level === "PG" ? "Popular" : "Trending"),
      duration: course.duration || (course.level === "PG" ? "2 Years" : "3 Years"),
      color: course.color || getCourseColor(course.name || course.title),
      iconKey: course.iconKey || (course.name || course.title || "").toLowerCase().split(" ")[0],
      isActive: true,
      order: 0
    })),
    features: (raw.features || []).map(f => ({
      ...f,
      title: f.name || f.title,
      iconKey: f.iconKey || "FaCompass",
      color: f.color || "from-blue-500 to-cyan-500"
    })),
    cities: raw.cities || (raw.cities_served || []).map((city, idx) => ({
      _id: `city-${idx}`,
      city: city,
      state: "",
      img: `https://res.cloudinary.com/didkrwhbu/image/upload/v1762327127/delhi_lwsbb7.webp`, // Placeholder
      students: "10K+",
      isActive: true,
      order: idx
    })),
    accreditationLogos: raw.accreditationLogos || (raw.accreditations || []).map((name, idx) => ({
      _id: `acc-${idx}`,
      name: name,
      imageUrl: getAccreditationImage(name),
      isActive: true,
      order: idx
    })),
    universityLogos: raw.universityLogos || [],
    faqs: raw.faqs || [],
    colleges: raw.partner_universities || raw.colleges || [],
  };
}

function getCourseColor(title = "") {
  const colors = [
    "from-blue-500 to-purple-600",
    "from-teal-500 to-cyan-600",
    "from-green-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-purple-500 to-pink-600"
  ];
  const hash = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

function getAccreditationImage(name) {
  const map = {
    "UGC": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp",
    "NAAC": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp",
    "NIRF": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp",
    "AICTE": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp",
  };
  return map[name] || "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp";
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
