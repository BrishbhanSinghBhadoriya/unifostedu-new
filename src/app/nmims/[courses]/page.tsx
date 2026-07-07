import course from "@/data/nmimscourses.json";
import { CourseDataFromJSON, Program } from "types/NmimsSlug";
import SlugClient from "./_components/SlugClient";
import type { Metadata } from "next";

const BASE_URL = "https://unifostedu.com";
const PARENT_URL = `${BASE_URL}/nmims`;

type ProgramKey = keyof CourseDataFromJSON["programs"];

interface PageProps {
  params: Promise<{ courses: string }>;
}

// ── Dynamic Metadata per NMIMS course slug ────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courses } = await params;
  const data = course as CourseDataFromJSON;

  if (!courses || !Object.prototype.hasOwnProperty.call(data.programs, courses)) {
    return {
      title: "Course Not Found | NMIMS Online",
      robots: { index: false, follow: false },
    };
  }

  const program: Program = data.programs[courses as ProgramKey];
  const pageUrl = `${PARENT_URL}/${courses}`;

  // Build human-readable course name for title/description
  const courseName = program.name ?? courses.replace(/-/g, " ").toUpperCase();
  const fullName = program.fullName ?? courseName;
  const totalFee = program.totalFee ?? "Contact us";
  const duration = program.duration ?? "2 Years";
  const mode = program.mode ?? "100% Online";

  const title = `NMIMS Online ${courseName} 2026 | ${fullName} | Fees ${totalFee} | NAAC A++`;
  const description = `NMIMS Online ${courseName} 2026 admission open. NAAC A++ accredited, UGC-entitled ${fullName} from SVKM's NMIMS Mumbai. ${duration}, ${mode}. Fee: ${totalFee}. 100% placement support. EMI available. Apply now.`;

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: title,
      template: `%s | NMIMS Online 2026`,
    },

    description,

    keywords: [
      `NMIMS Online ${courseName}`,
      `NMIMS ${courseName} fees`,
      `NMIMS ${courseName} admission 2026`,
      `NMIMS ${courseName} eligibility`,
      `NMIMS ${courseName} specializations`,
      `NMIMS ${courseName} placement`,
      `SVKM NMIMS online ${courseName}`,
      `NAAC A++ online ${courseName} India`,
      `UGC entitled online ${courseName} NMIMS`,
      `best online ${courseName} India 2026`,
      `online ${courseName} Mumbai 2026`,
      `NMIMS online degree valid government jobs`,
    ],

    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl },
    },

    openGraph: {
      title: `NMIMS Online ${courseName} 2026 | NAAC A++ | ${totalFee}`,
      description,
      url: pageUrl,
      siteName: "Unifost Education",
      images: [
        {
          url: program.image ?? "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp",
          width: 1200,
          height: 630,
          alt: `NMIMS Online ${courseName} — ${fullName}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `NMIMS Online ${courseName} | NAAC A++ | ${totalFee}`,
      description,
      images: [program.image ?? "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    authors: [{ name: "Unifost Education" }],
    publisher: "Unifost Education",
    formatDetection: { email: false, address: false, telephone: false },
  };
}

// ── Static params for ISR/SSG ─────────────────────────────────────────────────
export async function generateStaticParams() {
  const data = course as CourseDataFromJSON;
  return Object.keys(data.programs).map((slug) => ({ courses: slug }));
}

export const revalidate = 604800;

// ── Page component ────────────────────────────────────────────────────────────
const CoursesPage = async ({ params }: PageProps) => {
  const { courses } = await params;

  if (!courses) return <div>Invalid route</div>;

  const data = course as CourseDataFromJSON;
  const programs = data.programs;

  if (!programs || !Object.prototype.hasOwnProperty.call(programs, courses)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-red-100">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Course Not Found</h1>
          <p className="text-gray-600">The requested course "{courses}" could not be found.</p>
        </div>
      </div>
    );
  }

  const key = courses as ProgramKey;
  const coursesData: Program = programs[key];

  const pageUrl = `${PARENT_URL}/${courses}`;
  const courseName = coursesData.name ?? courses;
  const totalFee = coursesData.totalFee ?? "Contact us";
  const duration = coursesData.duration ?? "2 Years";

  // ── JSON-LD: Course Schema ──────────────────────────────────────────────────
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `NMIMS Online ${coursesData.fullName ?? courseName}`,
    description: `NAAC A++ accredited, UGC-entitled online ${coursesData.fullName ?? courseName} from SVKM's NMIMS Mumbai. ${duration}. Fee: ${totalFee}.`,
    provider: {
      "@type": "EducationalOrganization",
      name: "NMIMS Online",
      sameAs: PARENT_URL,
    },
    url: pageUrl,
    educationalLevel: courses.startsWith("b") ? "Undergraduate" : "Postgraduate",
    timeRequired: courses.startsWith("b") ? "P3Y" : "P2Y",
    inLanguage: "en-IN",
    offers: {
      "@type": "Offer",
      price: typeof totalFee === "string" && totalFee.includes("₹")
        ? totalFee.replace(/[₹,]/g, "").trim()
        : "131000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  // ── JSON-LD: BreadcrumbList ─────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "NMIMS Online", item: PARENT_URL },
      { "@type": "ListItem", position: 3, name: `NMIMS Online ${courseName}`, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SlugClient courseData={coursesData} />
    </>
  );
};

export default CoursesPage;
