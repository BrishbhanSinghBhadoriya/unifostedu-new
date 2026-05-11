// ============================================================================
// MANIPAL ONLINE MA - COMPLETE LAYOUT.TSX FILE
// Full Next.js 13+ Configuration with SEO Optimization
// ============================================================================

import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

// ─── TYPE DEFINITIONS ───────────────────────────────────────────────────────

interface ChildrenProps {
  children: ReactNode;
}

// ─── METADATA CONFIGURATION ─────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://unifostedu.com"),
  
  // ── Basic SEO Metadata ──
  title: "Manipal Online MA 2025 | Master of Arts Degree India | UGC Approved",
  description:
    "Manipal Online MA - UGC-approved Master of Arts program from NAAC A+ Manipal University Jaipur. Specializations in English, Journalism, Sociology. 2-year flexible online degree with 40% scholarship. Direct admissions, no entrance exam. Enroll now!",
  
  keywords: [
    "Manipal Online MA",
    "Online MA degree India",
    "Master of Arts Online",
    "UGC approved MA online India",
    "Best Online MA program India",
    "Manipal University Jaipur MA",
    "Online MA Journalism",
    "Online MA English",
    "MA course online",
    "distance MA degree",
    "Online postgraduate degree",
    "flexible MA program",
    "low fees MA online",
    "Online MA Sociology",
    "MA specialization",
    "master degree online India",
    "UGC recognised online degree",
    "NAAC A+ university MA",
    "Online MA admission",
    "ma online 2025",
  ],

  // ── Canonical & Alternates ──
  alternates: {
    canonical: "https://unifostedu.com/muj-online-ma",
  },

  // ── Open Graph (Social Media) ──
  openGraph: {
    title: "Manipal Online MA | Master of Arts | 2-Year UGC-Approved Program",
    description:
      "Pursue Online Master of Arts from Manipal University - NAAC A+ accredited, UGC approved, 40% scholarship available. English, Journalism, Sociology specializations. Start your postgraduate journey now!",
    url: "https://unifostedu.com/muj-online-ma",
    siteName: "UNIFOST Education",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://unifostedu.com/images/manipal-online-ma-banner.webp",
        width: 1200,
        height: 630,
        alt: "Manipal University Online Master of Arts Program - NAAC A+ Accredited",
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "Manipal Online MA 2025 | Master of Arts Degree",
    description:
      "UGC-approved Online MA from Manipal University Jaipur with 40% scholarship. Flexible online learning, direct admissions, career guidance included.",
    images: ["https://unifostedu.com/images/manipal-online-ma-banner.webp"],
    creator: "@unifostedu",
  },

  // ── Robots & Indexing ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Author & Publisher ──
  authors: [
    { name: "UNIFOST Education Team", url: "https://unifostedu.com" },
    { name: "UNIFOST Education Consultancy" },
  ],
  creator: "UNIFOST Education Consultancy",
  publisher: "UNIFOST Education Consultancy",

  // ── Format Detection ──
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Additional Meta Tags ──
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.position": "28.6139; 77.2090",
    "language": "en-IN",
    "revisit-after": "3 days",
    "rating": "general",
    "distribution": "global",
    "og:type": "website",
    "og:locale:alternate": "en_IN",
    "twitter:domain": "unifostedu.com",
    "article:published_time": "2025-01-01T00:00:00+05:30",
    "article:modified_time": new Date().toISOString(),
    "article:publisher": "https://www.facebook.com/unifostedu",
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "mobile-web-app-capable": "yes",
    "mobile-web-app-status-bar-style": "default",
  },
  
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ─── VIEWPORT CONFIGURATION ────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1e40af",
  colorScheme: "light",
};

// ─── NEXT.JS CONFIG ────────────────────────────────────────────────────────

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate cache daily for fresh content

// ============================================================================
// SEO CONTENT SECTIONS - HIGH-VALUE CONTENT STRUCTURE
// ============================================================================

export const SEOContentSections = {
  // ──────────────────────────────────────────────────────────────────────
  // SECTION 1: HERO/OVERVIEW (H1 - Most Important)
  // ──────────────────────────────────────────────────────────────────────
  heroSection: {
    h1: "Master of Arts (MA) Online – 2-Year UGC-Approved Degree from Manipal University",
    description: `Manipal Online MA is your pathway to a recognized postgraduate degree without 
leaving your work or home. NAAC A+ accredited, UGC-approved, and designed for 
working professionals across India.`,
    trustSignals: [
      "✓ NAAC A+ Accreditation",
      "✓ UGC Approved Degree",
      "✓ Direct Admissions (No Entrance Exam)",
      "✓ Up to 40% Scholarship Available",
      "✓ 2000+ Successful Graduates",
      "✓ 100% Online - No Campus Visit Required",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 2: QUICK FACTS TABLE
  // ──────────────────────────────────────────────────────────────────────
  quickFacts: {
    heading: "Online MA at a Glance",
    data: [
      { label: "Program Duration", value: "2 Years (4 Semesters)" },
      { label: "Specializations", value: "English, Journalism, Sociology" },
      { label: "Mode of Study", value: "100% Online" },
      { label: "Admission Type", value: "Direct (No Entrance Exam)" },
      { label: "Eligibility", value: "Bachelor's Degree with 50%+ Marks" },
      { label: "Scholarship", value: "Up to 40% Available" },
      { label: "University", value: "Manipal University Jaipur" },
      { label: "Accreditation", value: "NAAC A+, UGC Approved" },
      { label: "Campus Visit", value: "Not Required" },
      { label: "Career Support", value: "Yes - Placement Assistance" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 3: SPECIALIZATION CARDS
  // ──────────────────────────────────────────────────────────────────────
  specializations: {
    heading: "Choose Your Specialization",
    subheading: "Online MA programs tailored for different career paths",
    specializations: [
      {
        id: "english",
        name: "MA English – Online",
        keywordFocus: [
          "online ma english",
          "english literature masters distance",
          "ma english online india",
        ],
        description: `Master English literature, linguistics, and academic writing. 
Perfect for content creators, educators, researchers, and aspiring writers.`,
        courseHighlights: [
          "Advanced English Literature",
          "Critical Theory & Analysis",
          "Creative Writing",
          "Research Methodology",
          "Academic Publishing",
        ],
        careerPaths: [
          "University Lecturer / Professor",
          "Content Writer / Editor",
          "Research Analyst",
          "Author / Columnist",
          "UGC NET eligible for PhD",
        ],
        targetAudience: [
          "Aspiring educators",
          "Content creators",
          "Journalists",
          "Authors",
          "Civil services aspirants",
        ],
      },
      {
        id: "journalism",
        name: "MA Journalism – Online",
        keywordFocus: [
          "online ma journalism",
          "journalism masters online india",
          "ma journalism distance degree",
        ],
        description: `Become a skilled journalist or content strategist. Learn multimedia 
journalism, media ethics, and digital storytelling from industry experts.`,
        courseHighlights: [
          "Journalism & Mass Communication",
          "Digital Media & Broadcasting",
          "Media Ethics & Law",
          "Feature Writing & Reporting",
          "Social Media Strategy",
        ],
        careerPaths: [
          "Journalist / Reporter",
          "News Editor",
          "Content Strategist",
          "Media Manager",
          "Digital Marketing Professional",
        ],
        targetAudience: [
          "Aspiring journalists",
          "Media professionals",
          "Content creators",
          "Digital marketers",
          "PR professionals",
        ],
      },
      {
        id: "sociology",
        name: "MA Sociology – Online",
        keywordFocus: [
          "online ma sociology",
          "sociology masters distance learning",
          "ma sociology online india",
        ],
        description: `Study society, culture, and social change. Ideal for social researchers, 
NGO workers, and those pursuing social work or civil services.`,
        courseHighlights: [
          "Sociological Theory",
          "Social Research Methods",
          "Community Development",
          "Social Policy & Planning",
          "Data Analysis & Statistics",
        ],
        careerPaths: [
          "Social Researcher",
          "NGO Program Coordinator",
          "Policy Analyst",
          "Civil Services Officer (UPSC)",
          "Community Development Officer",
        ],
        targetAudience: [
          "Social workers",
          "Researchers",
          "NGO professionals",
          "Civil services aspirants",
          "Policy makers",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 4: KEY FEATURES & BENEFITS
  // ──────────────────────────────────────────────────────────────────────
  features: {
    heading: "Why Choose Manipal Online MA?",
    subheading: "India's premier UGC-approved online master's degree program",
    featureGroups: [
      {
        groupName: "Quality & Accreditation",
        features: [
          {
            title: "NAAC A+ Accredited",
            description: "Highest accreditation rating from National Assessment Council",
            icon: "star",
          },
          {
            title: "UGC Approved",
            description: "Recognized by University Grants Commission - valid nationwide",
            icon: "shield",
          },
          {
            title: "Industry-Expert Faculty",
            description: "Learn from experienced professors and industry professionals",
            icon: "users",
          },
        ],
      },
      {
        groupName: "Flexibility & Convenience",
        features: [
          {
            title: "100% Online Learning",
            description: "Study anytime, anywhere at your own pace",
            icon: "globe",
          },
          {
            title: "Recorded Lectures",
            description: "Access to lifetime recorded session content",
            icon: "video",
          },
          {
            title: "No Campus Visit Required",
            description: "Complete the degree without visiting campus",
            icon: "home",
          },
          {
            title: "Flexible Exam Schedule",
            description: "Online proctored exams at your convenience",
            icon: "clock",
          },
        ],
      },
      {
        groupName: "Affordability & Support",
        features: [
          {
            title: "Up to 40% Scholarship",
            description: "Merit-based scholarships available for eligible students",
            icon: "gift",
          },
          {
            title: "EMI & Flexible Payment",
            description: "Pay semester-wise or through monthly installments",
            icon: "credit-card",
          },
          {
            title: "Career Guidance",
            description: "One-on-one counseling and career planning support",
            icon: "briefcase",
          },
          {
            title: "24/7 Student Support",
            description: "Round-the-clock technical and academic support",
            icon: "headphones",
          },
        ],
      },
      {
        groupName: "Career Advancement",
        features: [
          {
            title: "UGC NET Eligible",
            description: "Pursue PhD or become university faculty",
            icon: "graduation-cap",
          },
          {
            title: "UPSC Civil Services Eligible",
            description: "Qualify for government jobs and competitive exams",
            icon: "award",
          },
          {
            title: "Placement Assistance",
            description: "Career counseling and job placement support",
            icon: "trending-up",
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 5: ELIGIBILITY & ADMISSION PROCESS
  // ──────────────────────────────────────────────────────────────────────
  admission: {
    heading: "Online MA Eligibility & Admission",
    subheading: "Simple, direct admission process - no entrance exam required",

    eligibility: {
      title: "Who Can Apply?",
      requirements: [
        {
          criterion: "Educational Qualification",
          requirement:
            "Bachelor's degree from any UGC-recognized university or equivalent",
          status: "✓ Required",
        },
        {
          criterion: "Minimum Marks",
          requirement: "50% aggregate marks in Bachelor's degree",
          status: "✓ Required",
        },
        {
          criterion: "Age Limit",
          requirement: "No age limit - any age is eligible",
          status: "✓ Open",
        },
        {
          criterion: "Stream Requirement",
          requirement: "Any bachelor's stream (Arts, Science, Commerce)",
          status: "✓ Open",
        },
        {
          criterion: "NRI/Foreign Students",
          requirement: "Eligible with equivalent educational qualifications",
          status: "✓ Open",
        },
        {
          criterion: "Working Professionals",
          requirement: "Can pursue MA while working - fully flexible",
          status: "✓ Encouraged",
        },
      ],
    },

    admissionProcess: {
      title: "How to Enroll in Online MA",
      steps: [
        {
          stepNo: 1,
          title: "Contact UNIFOST for Counseling",
          description: "Call +91-7042646766 or fill inquiry form for free guidance",
          timeFrame: "Same day response",
        },
        {
          stepNo: 2,
          title: "Document Verification",
          description: "Submit educational certificates, ID proof, and address proof",
          timeFrame: "2-3 business days",
        },
        {
          stepNo: 3,
          title: "Application Submission",
          description: "Complete online application form through Manipal portal",
          timeFrame: "1-2 days",
        },
        {
          stepNo: 4,
          title: "Scholarship Application (Optional)",
          description: "Apply for available scholarships (up to 40%)",
          timeFrame: "Parallel process",
        },
        {
          stepNo: 5,
          title: "Fee Payment",
          description: "Pay enrollment fee - choose EMI or semester-wise payment",
          timeFrame: "Flexible - up to admission date",
        },
        {
          stepNo: 6,
          title: "Admission Confirmation",
          description: "Receive admission letter and course access",
          timeFrame: "3-5 business days after fee payment",
        },
        {
          stepNo: 7,
          title: "Course Access & Orientation",
          description: "Get instant access to Online Manipal platform",
          timeFrame: "Immediate",
        },
      ],
    },

    admissionDates: {
      title: "Admission Timeline 2025",
      intakes: [
        { intake: "January 2025", status: "Ongoing", deadline: "30 days before intake" },
        { intake: "April 2025", status: "Open Soon", deadline: "Announced Soon" },
        { intake: "July 2025", status: "Open Soon", deadline: "Announced Soon" },
        { intake: "October 2025", status: "Open Soon", deadline: "Announced Soon" },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 6: FEES, SCHOLARSHIPS & PAYMENT OPTIONS
  // ──────────────────────────────────────────────────────────────────────
  feesScholarship: {
    heading: "Online MA Fees & Scholarships",
    subheading: "Affordable education with flexible payment options",

    feesBreakdown: {
      title: "Cost Breakdown",
      totalCost: "₹60,000 - ₹80,000",
      note: "(Exact fees may vary based on specialization)",
      breakdown: [
        { component: "Tuition Fees (4 semesters)", amount: "₹45,000 - ₹60,000" },
        { component: "Registration & Admission", amount: "₹5,000" },
        { component: "Online Platform Access", amount: "₹2,000 - ₹3,000" },
        { component: "Exam Fees (4 semesters)", amount: "₹8,000 - ₹12,000" },
        { component: "Certificate & Documentation", amount: "₹2,000" },
      ],
    },

    scholarships: {
      title: "Available Scholarships",
      description: "Manipal offers scholarships up to 40% for eligible students",
      types: [
        {
          name: "Merit Scholarship",
          eligibility: "Based on bachelor's degree marks",
          amount: "Up to 40%",
          howToApply: "Automatic if eligible",
        },
        {
          name: "Armed Forces Family Scholarship",
          eligibility: "Family of defense personnel",
          amount: "15-25%",
          howToApply: "Submit military ID with application",
        },
        {
          name: "Alumni Benefit",
          eligibility: "Manipal alumni",
          amount: "10-20%",
          howToApply: "Verify through Manipal database",
        },
        {
          name: "Women Empowerment Scholarship",
          eligibility: "Female students",
          amount: "5-15%",
          howToApply: "Apply during enrollment",
        },
      ],
    },

    paymentOptions: {
      title: "Payment Plans",
      options: [
        {
          plan: "Upfront Payment",
          description: "Pay full fees at once",
          amount: "₹60,000 - ₹80,000",
          benefit: "5-10% additional discount",
        },
        {
          plan: "Semester-wise Payment",
          description: "Pay ₹15,000 - ₹20,000 per semester",
          frequency: "4 payments over 2 years",
          benefit: "Most popular option",
        },
        {
          plan: "Monthly EMI",
          description: "Easy installment plan",
          amount: "₹2,500 - ₹3,500/month",
          duration: "24-30 months",
          benefit: "No additional interest",
        },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 7: CAREER OPPORTUNITIES AFTER MA
  // ──────────────────────────────────────────────────────────────────────
  careersSection: {
    heading: "Career Opportunities After Online MA",
    subheading: "Multiple pathways for growth and advancement",

    careerBySpecialization: [
      {
        specialization: "MA English",
        jobTitles: [
          "English Language Teacher/Professor",
          "Content Writer/Editor",
          "Literary Critic/Researcher",
          "UGC NET Qualified Faculty",
          "Technical Writer",
          "Corporate Trainer",
          "Curriculum Designer",
          "Publishing Editor",
        ],
        industries: [
          "Education & Universities",
          "Media & Publishing",
          "Content Agencies",
          "Government Institutions",
          "Corporate Training",
          "NGOs & Social Organizations",
        ],
        salaryRange: "₹25,000 - ₹60,000/month (Entry to Senior roles)",
      },
      {
        specialization: "MA Journalism",
        jobTitles: [
          "Journalist/Reporter",
          "News Editor",
          "Content Strategist",
          "Digital Media Manager",
          "Social Media Manager",
          "PR Executive",
          "Media Researcher",
          "Documentary Filmmaker",
        ],
        industries: [
          "News Media (Print/Digital/TV)",
          "Digital Publications",
          "Social Media Agencies",
          "Corporate Communications",
          "Marketing Agencies",
          "Government Press Bodies",
        ],
        salaryRange: "₹22,000 - ₹55,000/month (Entry to Senior roles)",
      },
      {
        specialization: "MA Sociology",
        jobTitles: [
          "Social Researcher",
          "NGO Program Coordinator",
          "Policy Analyst",
          "Civil Services Officer (UPSC)",
          "Community Development Officer",
          "Research Associate",
          "Social Welfare Officer",
          "Academic Researcher",
        ],
        industries: [
          "NGOs & Social Organizations",
          "Government Institutions",
          "Research Organizations",
          "International Organizations",
          "Universities",
          "Social Enterprises",
        ],
        salaryRange: "₹20,000 - ₹50,000/month (Entry to Senior roles)",
      },
    ],

    furtherStudies: {
      heading: "Advanced Education Opportunities",
      options: [
        {
          option: "PhD / Doctorate",
          description: "Pursue research doctorate in any subject",
          eligibility: "Automatic - MA is the basic requirement",
        },
        {
          option: "UGC NET",
          description: "National Eligibility Test for university faculty",
          eligibility: "Directly eligible to appear for NET exam",
        },
        {
          option: "UPSC Civil Services",
          description: "Indian Administrative Service, Foreign Service, etc.",
          eligibility: "Master's degree holders can appear",
        },
        {
          option: "M.Phil Courses",
          description: "Master of Philosophy in specialized areas",
          eligibility: "Eligible with MA qualification",
        },
        {
          option: "Postdoctoral Fellowships",
          description: "Research fellowships in India and abroad",
          eligibility: "With research experience",
        },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 8: STUDENT TESTIMONIALS & SUCCESS STORIES
  // ──────────────────────────────────────────────────────────────────────
  testimonials: {
    heading: "Success Stories from Our Graduates",
    subheading: "Hear from working professionals who completed their MA Online",
    stories: [
      {
        name: "Priya Sharma",
        specialization: "MA English",
        previousRole: "Content Writer",
        currentRole: "Senior Editor at Digital Publishing House",
        testimonial: `"Doing MA English online while working full-time was the best decision. 
        The flexible schedule allowed me to upskill without quitting my job. Now I'm managing 
        a team of writers and earning ₹45,000/month. Manipal's curriculum was industry-relevant 
        and the faculty was exceptional."`,
        currentSalary: "₹45,000/month",
        salaryIncrease: "+60% from enrollment",
      },
      {
        name: "Rahul Kumar",
        specialization: "MA Journalism",
        previousRole: "Freelance Writer",
        currentRole: "Senior Journalist at National News Portal",
        testimonial: `"The MA Journalism from Manipal gave me the credibility and skills I needed. 
        The journalism ethics and digital media modules were game-changing. I landed my dream job 
        within 3 months of graduation at a leading news organization."`,
        currentSalary: "₹38,000/month",
        salaryIncrease: "+85% from enrollment",
      },
      {
        name: "Anjali Patel",
        specialization: "MA Sociology",
        previousRole: "NGO Coordinator",
        currentRole: "Policy Analyst at Think Tank",
        testimonial: `"My MA Sociology from Manipal opened doors to policy work. The research 
        methodology courses were outstanding. Now I'm involved in creating social policies 
        at a national level. The degree is truly making a difference in my career."`,
        currentSalary: "₹42,000/month",
        salaryIncrease: "+70% from enrollment",
      },
    ],
    averageRating: 4.8,
    totalReviews: "250+",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 10: COMPARISON TABLES
  // ──────────────────────────────────────────────────────────────────────
  comparisons: {
    onlineVsRegular: {
      heading: "Online MA vs Regular/Campus MA",
      subheading: "Side-by-side comparison to help you choose",
      comparison: [
        {
          aspect: "Study Mode",
          online: "100% Online - Study from home/office",
          regular: "Campus-based - Attend classes physically",
        },
        {
          aspect: "Flexibility",
          online: "Complete flexibility - Study anytime",
          regular: "Fixed schedule - Must attend classes",
        },
        {
          aspect: "Cost",
          online: "₹60,000-₹80,000 total",
          regular: "₹1,00,000-₹2,00,000+ total",
        },
        {
          aspect: "Duration",
          online: "2 years (can be faster with dedication)",
          regular: "2 years fixed",
        },
        {
          aspect: "Degree Value",
          online: "UGC Approved - Same validity",
          regular: "UGC Approved - Same validity",
        },
        {
          aspect: "For Working Professionals",
          online: "Perfect - Work while studying",
          regular: "Difficult - Requires leaving job",
        },
      ],
    },

    maVsMba: {
      heading: "Online MA vs Online MBA",
      subheading: "Choose the right postgraduate degree for your goals",
      comparison: [
        {
          aspect: "Focus",
          ma: "Arts, Humanities, Research",
          mba: "Business, Management, Corporate",
        },
        {
          aspect: "Best For",
          ma: "Educators, Researchers, Content creators",
          mba: "Business professionals, Entrepreneurs, Managers",
        },
        {
          aspect: "Career Path",
          ma: "Academia, Research, Media, NGOs",
          mba: "Corporate management, Startups, Business",
        },
        {
          aspect: "Salary Range (Entry)",
          ma: "₹20,000-₹30,000/month",
          mba: "₹25,000-₹45,000/month",
        },
        {
          aspect: "Cost",
          ma: "₹60,000-₹80,000",
          mba: "₹1,20,000-₹1,80,000",
        },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // SECTION 11: CTA (Call-to-Action) BUTTONS
  // ──────────────────────────────────────────────────────────────────────
  cta: {
    primary: {
      text: "Apply for Online MA Now",
      action: "openAdmissionForm",
      keyword: "online ma admission",
    },
    secondary: [
      {
        text: "Download MA Brochure",
        action: "downloadBrochure",
        keyword: "online ma details",
      },
      {
        text: "Talk to Counselor",
        action: "openChat",
        keyword: "online ma counseling",
      },
      {
        text: "Get Scholarship Calculator",
        action: "openCalculator",
        keyword: "online ma scholarship",
      },
    ],
  },
};

// ============================================================================
// SEO KEYWORD OPTIMIZATION GUIDE
// ============================================================================

export const SEOKeywords = {
  primary: [
    "online ma",
    "manipal online ma",
    "master of arts online",
    "online ma degree",
    "ma online india",
  ],
  secondary: [
    "best online ma program",
    "online ma admission",
    "online ma 2025",
    "manipal university online ma",
    "ma online specialization",
  ],
  longTail: [
    "online ma english specialization",
    "online ma journalism online degree",
    "online ma sociology specialization",
    "online ma while working",
    "best online ma colleges india",
    "ugc approved online master degree",
    "online ma fees and duration",
    "online ma career opportunities",
  ],
};

// ============================================================================
// JSON-LD SCHEMAS FOR ENHANCED SEO
// ============================================================================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://unifostedu.com/#organization",
  name: "UNIFOST Education Consultancy",
  alternateName: ["Unifost", "UNIFOST"],
  url: "https://unifostedu.com",
  logo: {
    "@type": "ImageObject",
    url: "https://unifostedu.com/images/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "India's trusted online education consultancy helping students enroll in UGC-approved master's degree programs from top universities like Manipal, Amity, and LPU.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7042646766",
      contactType: "customer service",
      areaServed: ["IN", "Delhi", "Mumbai", "Bangalore", "Hyderabad"],
      availableLanguage: ["en", "hi"],
    },
    {
      "@type": "ContactPoint",
      email: "info@unifostedu.com",
      contactType: "support",
      areaServed: "IN",
    },
  ],
  sameAs: [
    "https://www.facebook.com/unifostedu",
    "https://www.instagram.com/unifostedu",
    "https://www.linkedin.com/company/unifost",
    "https://www.youtube.com/@unifostedu",
    "https://twitter.com/unifostedu",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Delhi",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
};

const universitySchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://manipal.edu/#university",
  name: "Manipal University Jaipur",
  alternateName: ["MUJ", "Online Manipal", "Manipal Online"],
  url: "https://www.manipal.edu",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  description:
    "Manipal University Jaipur - UGC-entitled, NAAC A+ accredited university offering world-class online Master of Arts and other postgraduate degree programs.",
  image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manipal University Jaipur Campus",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303007",
    addressCountry: "IN",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NAAC A+ Accreditation",
      recognizingAuthority: "NAAC (National Assessment and Accreditation Council)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "UGC Entitled",
      recognizingAuthority: "University Grants Commission, Government of India",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ISO 9001:2015 Certified",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "https://www.manipal.edu",
    contactType: "admissions",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://unifostedu.com/muj-online-ma/#course",
  name: "Online MA – Master of Arts",
  alternateName: [
    "Manipal Online MA",
    "Master of Arts Online",
    "Online Master Degree",
  ],
  description:
    "UGC-approved 2-year online Master of Arts (MA) program from NAAC A+ Manipal University Jaipur. Specializations: English Literature, Journalism, Sociology. Fully flexible online degree with recorded lectures, interactive sessions, and proctored exams. Direct admissions, no entrance exam required. 40% scholarship available. Career guidance and placement support included.",
  url: "https://unifostedu.com/muj-online-ma",
  image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/ma-online-image_xxyvt0.webp",
  inLanguage: "en-IN",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
    url: "https://www.manipal.edu",
    sameAs: "https://www.manipal.edu",
  },
  offers: {
    "@type": "Offer",
    category: "Online Postgraduate Degree",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://unifostedu.com/muj-online-ma",
    description: "Master of Arts Online Program with Scholarship",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "250",
  },
  courseMode: ["online", "distance"],
  educationalLevel: ["Postgraduate", "Master"],
  timeRequired: "P2Y",
  numberOfCredits: 120,
  occupationalCategory: [
    "Education",
    "Media & Journalism",
    "Publishing",
    "Research",
    "Social Work",
    "Content Creation",
    "Public Relations",
  ],
  teaches: [
    "Advanced English Literature",
    "Journalism and Mass Communication",
    "Sociology",
    "Research Methodology",
    "Critical Theory",
    "Communication Skills",
    "Academic Writing",
    "Data Analysis",
    "Professional Development",
  ],
  coursePrerequisites: "Bachelor's degree from recognized university with minimum 50% marks",
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      instructionLanguage: "en-IN",
      startDate: "2025-01-15",
      endDate: "2027-01-15",
      inLanguage: "en-IN",
      instructor: {
        "@type": "Organization",
        name: "Manipal University Jaipur",
      },
    },
  ],
};

const programSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://unifostedu.com/muj-online-ma/#program",
  name: "Master of Arts (MA) - Online",
  description:
    "2-year UGC-approved online Master of Arts from Manipal University Jaipur with specializations in English, Journalism, and Sociology. Flexible learning, direct admissions, 40% scholarship.",
  educationalLevel: "Postgraduate",
  programType: "Master Degree",
  timeToComplete: "P2Y",
  startDate: "2025-01-15",
  numberOfCredits: 120,
  occupationalCategory: [
    "Education",
    "Journalism",
    "Research",
    "Social Work",
    "Content Creation",
  ],
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Manipal University Jaipur",
  },
  areaCovered: ["English Literature", "Journalism", "Sociology"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://unifostedu.com/muj-online-ma/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal Online MA degree valid and UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. Manipal University Jaipur is UGC-entitled and NAAC A+ accredited. The Online MA degree is fully recognized at par with on-campus degrees in India and is valid for higher studies (PhD), government jobs (civil services, education), and private sector employment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total duration and fees for Manipal Online MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Online MA program is 2 years (4 semesters). Total fees are affordable with 40% scholarship available. Flexible payment options include semester-wise, annual, and EMI facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pursue Manipal Online MA while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the entire program is designed for working professionals. You get recorded lectures, online assignments, and flexible exam schedules. Study at your own pace without any campus visit requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an entrance exam for Manipal Online MA admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No entrance exam is required. Admissions are direct based on your bachelor's degree qualification. Merit-based scholarships up to 40% are available for eligible candidates.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to visit campus for classes or exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, it is 100% online. All classes, assignments, projects, and exams are conducted through the Online Manipal learning platform. No campus visits required anywhere in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are the specializations available in Manipal Online MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manipal Online MA offers three specializations: (1) English Literature - for content creators, researchers, and educators; (2) Journalism - for media professionals and content writers; (3) Sociology - for social research and NGO work.",
      },
    },
    {
      "@type": "Question",
      name: "What are the eligibility criteria for Manipal Online MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To enroll in Manipal Online MA, you need: Bachelor's degree from a UGC-recognized university with minimum 50% aggregate marks. Foreign/NRI students with equivalent qualifications are eligible. No age limit.",
      },
    },
    {
      "@type": "Question",
      name: "What career opportunities after Manipal Online MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Graduates can pursue careers in education (lecturer, researcher), journalism (reporter, editor), content creation, civil services, social work, publishing, NGOs, and academia. Many pursue PhD or UGC NET examination.",
      },
    },
    {
      "@type": "Question",
      name: "Is Manipal Online MA recognized for PhD and civil services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since it's a UGC-recognized degree, you are eligible to appear for UGC NET, GATE, civil services exams (UPSC), and PhD programs at any university in India and abroad.",
      },
    },
    {
      "@type": "Question",
      name: "How to apply for Manipal Online MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact UNIFOST Education for guidance. We handle your complete admission process - documentation, application submission, fee payment arrangement, and scholarship assistance. Admissions open year-round.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://unifostedu.com/muj-online-ma/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://unifostedu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Manipal University Jaipur",
      item: "https://unifostedu.com/manipal-university-jaipur",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Online Programs",
      item: "https://unifostedu.com/manipal-online-programs",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Online MA – Master of Arts",
      item: "https://unifostedu.com/muj-online-ma",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unifostedu.com/muj-online-ma/#webpage",
  url: "https://unifostedu.com/muj-online-ma",
  name: "Manipal Online MA | Master of Arts | UGC Approved | 2-Year Program",
  alternateName: [
    "Manipal MA Online",
    "Online Master of Arts India",
    "MUJ Online MA",
  ],
  description:
    "Manipal Online MA - UGC-approved Master of Arts program from NAAC A+ Manipal University. English, Journalism, Sociology specializations. Flexible online learning, direct admissions, 40% scholarship, no campus visits required.",
  keywords:
    "online ma, manipal online ma, master of arts online, online ma degree, best online ma, manipal ma, ugc approved ma online",
  inLanguage: "en-IN",
  contentLocation: {
    "@type": "Country",
    name: "India",
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://unifostedu.com/#website",
    url: "https://unifostedu.com",
    name: "UNIFOST - Online Education in India",
    description:
      "India's trusted online education consultancy for UGC-approved postgraduate degree programs",
    sameAs: [
      "https://www.facebook.com/unifostedu",
      "https://www.instagram.com/unifostedu",
      "https://www.linkedin.com/company/unifost",
    ],
  },
  about: {
    "@id": "https://unifostedu.com/muj-online-ma/#course",
  },
  breadcrumb: {
    "@id": "https://unifostedu.com/muj-online-ma/#breadcrumb",
  },
  datePublished: "2025-01-01T00:00:00+05:30",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "UNIFOST Education Consultancy",
    url: "https://unifostedu.com",
  },
  publisher: {
    "@type": "Organization",
    name: "UNIFOST Education Consultancy",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/ma-online-image_xxyvt0.webp",
    width: 1200,
    height: 630,
    description: "Manipal University Online Master of Arts Program",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "#overview", "#highlights", "#specializations"],
  },
  mainEntity: {
    "@id": "https://unifostedu.com/muj-online-ma/#course",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://unifostedu.com/#localbusiness",
  name: "UNIFOST Education Consultancy",
  image: "https://unifostedu.com/images/logo.png",
  description:
    "India's trusted education consultancy for online Master's and Bachelor's degree admissions from UGC-approved universities including Manipal, Amity, and LPU.",
  url: "https://unifostedu.com",
  telephone: "+91-7042646766",
  email: "info@unifostedu.com",
  priceRange: "Free Counseling",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Delhi" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "City", name: "Delhi NCR" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Kolkata" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Jaipur" },
  ],
  serviceType: "Education Consultancy",
  knowsLanguage: ["English", "Hindi"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online Master's Degree Programs",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manipal Online MA Admissions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manipal Online MBA Admissions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manipal Online MSW Admissions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Amity Online MBA Admissions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LPU Online Degree Admissions" } },
    ],
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
    reviewBody:
      "UNIFOST provides excellent guidance for online degree admissions. Highly recommended for direct admission to Manipal and other top universities.",
    author: {
      "@type": "Person",
      name: "Student Reviews",
    },
  },
};

const allSchemas = [
  organizationSchema,
  universitySchema,
  courseSchema,
  programSchema,
  faqSchema,
  breadcrumbSchema,
  webPageSchema,
  localBusinessSchema,
];

// ============================================================================
// LAYOUT COMPONENT
// ============================================================================

export default function ManipalMALayout({ children }: ChildrenProps) {
  return (
    <>
      {/* ── JSON-LD Schemas for Enhanced SEO ── */}
      {allSchemas.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          suppressHydrationWarning
        />
      ))}

      {/* ── Layout Wrapper ── */}
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  );
}

// ============================================================================
// EXPORTS FOR PAGE COMPONENT USAGE
// ============================================================================