"use client";
import { useState } from "react";
import styles from "./page.module.css";

const universities = [
  {
    rank: 1,
    name: "Amity University Online",
    logo: "🎓",
    accreditation: "UGC-DEB, NAAC A+",
    fees: "₹2,25,000 – ₹3,25,000",
    duration: "2 Years",
specializations: [
  "Business Analytics",
  "Data Science",
  "Digital Entrepreneurship",
  "Digital Marketing",
  "Entrepreneurship & Leadership",
  "Finance & Accounting",
  "Global Finance",
  "Hospitality",
  "Human Resource Management",
  "HR Analytics",
  "IT Management",
  "Insurance",
  "International Business",
  "International Finance (ACCA)",
  "Marketing & Sales",
  "Operations Management",
  "Retail Management",
  "General Management"
],
    courses: [
  "MBA in Business Analytics",
  "MBA in Data Science",
  "MBA in Digital Entrepreneurship",
  "MBA in Digital Marketing Management",
  "MBA in Entrepreneurship and Leadership Management",
  "MBA in Finance and Accounting Management",
  "MBA in Global Finance Market",
  "MBA in Hospitality Management",
  "MBA in Human Resource Management",
  "MBA in Human Resources Analytics",
  "MBA in Information Technology Management",
  "MBA in Insurance Management",
  "MBA in International Business Management",
  "MBA in International Finance (ACCA)",
  "MBA in Marketing & Sales Management",
  "MBA in Production and Operations Management",
  "MBA in Retail Management",
  "MBA in General Management"
],
    highlights: ["Industry Projects", "Live Sessions", "Placement Support"],
    rating: 4.5,
    link: "https://unifostedu.com/amity/mba-online",
    tag: "Top Ranked",
    tagColor: "#2563eb",
  },
 {
  rank: 2,
  name: "Manipal University Jaipur",
  logo: "🏛️",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹1,80,000",
  duration: "2 Years",
  specializations: [
    "Digital Marketing",
    "Marketing",
    "Analytics and Data Science",
    "IT & FinTech",
    "Finance Management",
    "Human Resource Management",
    "BFSI",
    "Operations Management",
    "International Business",
    "Information Systems Management",
    "Project Management",
    "Supply Chain Management",
    "Retail Management"
  ],
  courses: [
    "MBA in Digital Marketing",
    "MBA in Marketing",
    "MBA in Analytics and Data Science",
    "MBA in IT & FinTech",
    "MBA in Finance Management",
    "MBA in Human Resource Management",
    "MBA in BFSI",
    "MBA in Operations Management",
    "MBA in International Business",
    "MBA in Information Systems Management",
    "MBA in Project Management",
    "MBA in Supply Chain Management",
    "MBA in Retail Management"
  ],
  highlights: [
    "UGC Approved",
    "100% Online",
    "Dual Specialization",
    "Industry-Oriented Curriculum",
    "Career Support"
  ],
  rating: 4.5,
  link: "https://unifostedu.com/muj-online-mba",
  tag: "Dual Specialization",
  tagColor: "#0891b2",
},
 {
  rank: 3,
  name: "Lovely Professional University (LPU) Online",
  logo: "💼",
  accreditation: "UGC-DEB, NAAC A++",
  fees: "₹2,00,000",
  duration: "2 Years",
  specializations: [
    "Human Resource Management",
    "Finance",
    "Marketing",
    "Operations Management",
    "Business Analytics",
    "Digital Marketing",
    "Data Science",
    "Information Technology",
    "International Business",
    "Banking & Finance",
    "Healthcare Management",
    "Logistics & Supply Chain Management"
  ],
  courses: [
    "MBA in Human Resource Management",
    "MBA in Finance",
    "MBA in Marketing",
    "MBA in Operations Management",
    "MBA in Business Analytics",
    "MBA in Digital Marketing",
    "MBA in Data Science",
    "MBA in Information Technology",
    "MBA in International Business",
    "MBA in Banking & Finance",
    "MBA in Healthcare Management",
    "MBA in Logistics & Supply Chain Management"
  ],
  highlights: [
    "NIRF Ranked University",
    "Live Interactive Classes",
    "Digital Library Access",
    "Placement Assistance",
    "Industry-Oriented Curriculum"
  ],
  rating: 4.3,
  link: "https://unifostedu.com/lpu-online",
  tag: "NIRF Ranked",
  tagColor: "#ea580c",
},
  {
  rank: 4,
  name: "Amrita Vishwa Vidyapeetham Online",
  logo: "🕉️",
  accreditation: "UGC-DEB, NAAC A++",
  fees: "₹1,70,000 – ₹2,60,000",
  duration: "2 Years",
  specializations: [
    "Artificial Intelligence (AI)",
    "ESG Management",
    "Finance",
    "Marketing",
    "Human Resource Management"
  ],
  courses: [
    "MBA in Artificial Intelligence (AI)",
    "MBA in ESG Management",
    "MBA in Finance",
    "MBA in Marketing",
    "MBA in Human Resource Management"
  ],
  highlights: [
    "NIRF Top 10 University",
    "Industry-Relevant Curriculum",
    "Flexible Online Learning",
    "Career Support Services",
    "Global Exposure"
  ],
  rating: 4.4,
  link: "https://unifostedu.com/amrita",
  tag: "NIRF Top 10",
  tagColor: "#be185d",
},
  {
  rank: 5,
  name: "Sikkim Manipal University (SMU-DE)",
  logo: "📚",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹1,20,000",
  duration: "2 Years",
  specializations: [
    "Marketing",
    "Finance",
    "HR",
    "Systems",
    "Operations and Supply Chain Management",
    "Healthcare Management"
  ],
  courses: [
    "MBA in Marketing",
    "MBA in Finance",
    "MBA in Human Resource Management",
    "MBA in Systems Management",
    "MBA in Operations and Supply Chain Management",
    "MBA in Healthcare Management"
  ],
  highlights: [
    "Dual Specialization",
    "UGC-DEB Approved",
    "Online Learning"
  ],
  rating: 4.2,
  link: "https://manipaluniversity.edu.in/online-mba",
  tag: "Best Value",
  tagColor: "#7c3aed"
},
 {
  rank: 6,
  name: "Uttaranchal University Online",
  logo: "🏔️",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹1,40,000",
  duration: "2 Years",
  specializations: [
    "Marketing",
    "Digital Marketing",
    "Human Resource",
    "Business Analytics",
    "Finance",
    "International Business",
    "Information Technology Management",
    "Logistics & Supply Chain Management"
  ],
  courses: [
    "MBA in Marketing",
    "MBA in Digital Marketing",
    "MBA in Human Resource Management",
    "MBA in Business Analytics",
    "MBA in Finance",
    "MBA in International Business",
    "MBA in Information Technology Management",
    "MBA in Logistics & Supply Chain Management"
  ],
  highlights: [
    "UGC-DEB Approved",
    "Industry-Oriented Curriculum",
    "Flexible Online Learning"
  ],
  rating: 3.9,
  link: "https://uudoon.ac.in/online-mba",
  tag: "Affordable",
  tagColor: "#16a34a"
},
  {
    rank: 7,
    name: "Chandigarh University Online",
    logo: "🔖",
    accreditation: "UGC-DEB, NAAC A+",
    fees: "₹95,000 – ₹1,20,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "IT Management", "Retail", "Logistics"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing",
      "MBA in Human Resource Management",
      "MBA in IT Management",
      "MBA in Retail Management",
      "MBA in Logistics & Supply Chain",
    ],
    highlights: ["QS Ranked", "Placement Cell", "International Exposure"],
    rating: 4.1,
    link: "https://cuchd.in/online-mba",
    tag: "QS Ranked",
    tagColor: "#1d4ed8",
  },
  {
    rank: 8,
    name: "Jain University Online",
    logo: "📖",
    accreditation: "UGC-DEB, NAAC A++",
    fees: "₹1,20,000 – ₹1,50,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "Analytics", "Supply Chain", "Entrepreneurship"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing Management",
      "MBA in Human Resource Management",
      "MBA in Business Analytics",
      "MBA in Supply Chain Management",
      "MBA in Entrepreneurship & Leadership",
    ],
    highlights: ["Mentorship Program", "Industry Tie-ups", "Global Exposure"],
    rating: 4.1,
    link: "https://jainuniversity.ac.in/online-mba",
    tag: "Emerging Top",
    tagColor: "#0d9488",
  },
  {
    rank: 9,
    name: "DY Patil Vidyapeeth Online",
    logo: "🎯",
    accreditation: "UGC-DEB, NAAC A++",
    fees: "₹1,00,000 – ₹1,30,000",
    duration: "2 Years",
    specializations: ["Healthcare Mgmt", "Finance", "Marketing", "HR", "IT", "Operations"],
    courses: [
      "MBA in Healthcare Management",
      "MBA in Finance",
      "MBA in Marketing",
      "MBA in Human Resource Management",
      "MBA in IT Management",
      "MBA in Operations Management",
    ],
    highlights: ["Healthcare Focus", "Expert Faculty", "Weekend Batches"],
    rating: 4.0,
    link: "https://dpu.edu.in/online-mba",
    tag: "Healthcare MBA",
    tagColor: "#9333ea",
  },
  {
    rank: 10,
    name: "OP Jindal Global University Online",
    logo: "⚖️",
    accreditation: "UGC-DEB, NAAC A",
    fees: "₹2,00,000 – ₹2,50,000",
    duration: "2 Years",
    specializations: ["Finance", "Strategy", "Analytics", "HR", "Global Business", "Law & Business"],
    courses: [
      "MBA in Finance",
      "MBA in Strategy & Leadership",
      "MBA in Business Analytics",
      "MBA in Human Resource Management",
      "MBA in Global Business",
      "MBA in Law & Business",
    ],
    highlights: ["QS Ranked India Top 50", "Global Faculty", "International Curriculum"],
    rating: 4.3,
    link: "https://online.jgu.edu.in/mba",
    tag: "Global MBA",
    tagColor: "#b45309",
  },
  {
    rank: 11,
    name: "Kurukshetra University Online",
    logo: "🏺",
    accreditation: "UGC-DEB, NAAC A+",
    fees: "₹40,000 – ₹60,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "Tourism", "IT", "Retail"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing Management",
      "MBA in Human Resource Management",
      "MBA in Tourism Management",
      "MBA in IT Management",
      "MBA in Retail Management",
    ],
    highlights: ["Central University", "Lowest Fees", "UGC Approved"],
    rating: 3.8,
    link: "https://kuk.ac.in/online-mba",
    tag: "Govt. University",
    tagColor: "#15803d",
  },
  {
    rank: 12,
    name: "Shoolini University Online",
    logo: "🌿",
    accreditation: "UGC-DEB, NAAC A+",
    fees: "₹85,000 – ₹1,05,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "Pharma Management", "Analytics", "Agri-Business"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing",
      "MBA in Human Resource Management",
      "MBA in Pharmaceutical Management",
      "MBA in Business Analytics",
      "MBA in Agri-Business Management",
    ],
    highlights: ["Himachal Pradesh", "Research Oriented", "Pharma MBA Unique"],
    rating: 3.9,
    link: "https://shooliniuniversity.com/online-mba",
    tag: "Pharma Focused",
    tagColor: "#047857",
  },
  {
    rank: 13,
    name: "Vivekananda Global University Online",
    logo: "🔱",
    accreditation: "UGC-DEB, NAAC A",
    fees: "₹75,000 – ₹95,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "IT", "Operations", "Logistics"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing Management",
      "MBA in Human Resource Management",
      "MBA in IT Management",
      "MBA in Operations Management",
      "MBA in Logistics & Supply Chain",
    ],
    highlights: ["Jaipur Based", "Affordable Fees", "Industry Partnerships"],
    rating: 3.8,
    link: "https://vgu.ac.in/online-mba",
    tag: "Value For Money",
    tagColor: "#dc2626",
  },
  {
    rank: 14,
    name: "UPES Online",
    logo: "⚡",
    accreditation: "UGC-DEB, NAAC A",
    fees: "₹1,10,000 – ₹1,35,000",
    duration: "2 Years",
    specializations: ["Oil & Gas Mgmt", "Power Mgmt", "Analytics", "Finance", "Marketing", "HR"],
    courses: [
      "MBA in Oil & Gas Management",
      "MBA in Power Management",
      "MBA in Business Analytics",
      "MBA in Finance",
      "MBA in Marketing",
      "MBA in Human Resource Management",
    ],
    highlights: ["Energy Sector Specialist", "Industry Projects", "Dehradun Based"],
    rating: 4.0,
    link: "https://online.upes.ac.in/mba",
    tag: "Energy Sector",
    tagColor: "#ca8a04",
  },
  {
    rank: 15,
    name: "Sharda University Online",
    logo: "🌸",
    accreditation: "UGC-DEB, NAAC A+",
    fees: "₹90,000 – ₹1,15,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "Analytics", "International Business", "IT"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing Management",
      "MBA in Human Resource Management",
      "MBA in Business Analytics",
      "MBA in International Business",
      "MBA in IT Management",
    ],
    highlights: ["Greater Noida Campus", "International Tie-ups", "Career Cell"],
    rating: 4.0,
    link: "https://shardaonline.ac.in/mba",
    tag: "International MBA",
    tagColor: "#db2777",
  },
  {
    rank: 16,
    name: "NMIMS Global Access Online",
    logo: "🏙️",
    accreditation: "UGC-DEB, NAAC A++",
    fees: "₹1,50,000 – ₹1,90,000",
    duration: "2 Years",
    specializations: ["Finance", "Marketing", "HR", "Operations", "IT", "Retail"],
    courses: [
      "MBA in Finance",
      "MBA in Marketing",
      "MBA in Human Resource Management",
      "MBA in Operations Management",
      "MBA in IT Management",
      "MBA in Retail Management",
    ],
    highlights: ["Mumbai Based Premium", "Industry Mentors", "Strong Alumni Network"],
    rating: 4.4,
    link: "https://online.nmims.edu/mba",
    tag: "Mumbai Premium",
    tagColor: "#7c3aed",
  },
];

const relatedLinks = [
  { title: "Amity Online MBA Program", url: "https://amityonline.com/mba" },
  { title: "Manipal Online MBA Fees & Courses", url: "https://onlinemanipal.com/mba" },
  { title: "LPU Online MBA Specializations", url: "https://online.lpu.in/mba" },
  { title: "Amrita Online MBA Admission 2026", url: "https://online.amrita.edu/mba" },
  { title: "SMU Distance MBA Courses", url: "https://manipaluniversity.edu.in/online-mba" },
  { title: "Uttaranchal University Online MBA", url: "https://uudoon.ac.in/online-mba" },
  { title: "Chandigarh University Online MBA", url: "https://cuchd.in/online-mba" },
  { title: "Jain University Online MBA", url: "https://jainuniversity.ac.in/online-mba" },
  { title: "DY Patil Online MBA Admission", url: "https://dpu.edu.in/online-mba" },
  { title: "OP Jindal Global University Online MBA", url: "https://online.jgu.edu.in/mba" },
  { title: "Kurukshetra University Online MBA", url: "https://kuk.ac.in/online-mba" },
  { title: "Shoolini University Online MBA", url: "https://shooliniuniversity.com/online-mba" },
  { title: "Vivekananda Global University Online MBA", url: "https://vgu.ac.in/online-mba" },
  { title: "UPES Online MBA Programs", url: "https://online.upes.ac.in/mba" },
  { title: "Sharda University Online MBA", url: "https://shardaonline.ac.in/mba" },
  { title: "NMIMS Global Access Online MBA", url: "https://online.nmims.edu/mba" },
  { title: "UGC-DEB Approved Universities List", url: "https://deb.ugc.ac.in" },
  { title: "Online MBA vs Regular MBA – Difference", url: "/online-mba-vs-regular-mba" },
  { title: "MBA Specializations in India 2026", url: "/mba-specializations-india" },
  { title: "MBA Admission Process India 2026", url: "/mba-admission-process-india" },
  { title: "Online MBA Salary & Career Scope", url: "/online-mba-salary-career-scope" },
];

const faqs = [
  {
    q: "Is an Online MBA degree as valid as a Regular MBA?",
    a: "Yes, an Online MBA from a UGC-DEB approved university holds equal validity to a Regular MBA. It is accepted by government and private sector employers alike.",
  },
  {
    q: "What is the minimum eligibility for Online MBA?",
    a: "A graduation degree (Bachelor's) in any stream with at least 50% marks is required. Some universities admit students with 45%. Fresh graduates as well as working professionals can apply.",
  },
  {
    q: "What is the average Online MBA fee in India?",
    a: "Fees range from ₹40,000 (Kurukshetra University) to ₹2,50,000 (OP Jindal). The average is approximately ₹1,00,000 – ₹1,50,000 per year.",
  },
  {
    q: "Which Online MBA specialization is best in 2026?",
    a: "Finance, Business Analytics, Digital Marketing, and Supply Chain Management are the most in-demand specializations in 2026. MBA in IT Management is also an excellent option for tech professionals.",
  },
  {
    q: "Do Online MBA graduates get placement support?",
    a: "Yes, top universities like Amity, Manipal, LPU, NMIMS, and Amrita provide placement assistance. Average salary packages range from ₹5–15 LPA depending on experience and specialization.",
  },
  {
    q: "Which is the most affordable Online MBA in this list?",
    a: "Kurukshetra University offers the most affordable Online MBA at ₹40,000–₹60,000 total fees. Uttaranchal University and Vivekananda Global University are also budget-friendly options under ₹1,00,000.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= Math.floor(rating)
              ? styles.starFilled
              : star - 0.5 <= rating
              ? styles.starHalf
              : styles.starEmpty
          }
        >
          ★
        </span>
      ))}
      <span className={styles.ratingNum}>{rating}</span>
    </div>
  );
}

export default function BestOnlineMBAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [openCourses, setOpenCourses] = useState<number | null>(null);

  const specializations = ["All", "Finance", "Marketing", "HR", "Analytics", "IT", "Healthcare"];

  const filtered =
    filter === "All"
      ? universities
      : universities.filter((u) => u.specializations.includes(filter));

  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>📊 Updated June 2026</div>
        <h1 className={styles.heroTitle}>
          Best Online MBA Universities
          <span className={styles.heroAccent}> in India 2026</span>
        </h1>
        <p className={styles.heroSubtitle}>
          UGC-DEB Approved • NAAC Accredited • 100% Recognized Degrees
        </p>
        <p className={styles.heroDesc}>
          Compare India's top <strong>16 Online MBA universities</strong> — fees,
          rankings, specializations, and admission process. Trusted by{" "}
          <strong>2 lakh+ students</strong> making their MBA decision.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>16</span>
            <span className={styles.statLabel}>Top Universities</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>₹40K</span>
            <span className={styles.statLabel}>Min. Fees</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>20+</span>
            <span className={styles.statLabel}>Specializations</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>UGC Approved</span>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* QUICK INTRO */}
        <section className={styles.introSection}>
          <h2 className={styles.sectionHeading}>Online MBA in India 2026 – Overview</h2>
          <p>
            Online MBA (Master of Business Administration) has become the most
            popular postgraduate program in India, especially for{" "}
            <strong>working professionals</strong> and career changers.
            After UGC-DEB (University Grants Commission – Distance Education Bureau)
            approval, Online MBA holds the same recognition as a Regular MBA.
          </p>
          <p>
            In 2026, <strong>200+ UGC-approved universities</strong> offer Online MBA
            in India. We have selected the{" "}
            <strong>Top 16 Online MBA Universities</strong> based on research,
            rankings, fee structure, faculty quality, and placement records.
          </p>
          <div className={styles.quickTips}>
            <div className={styles.tip}>
              <span>✅</span>
              <p>Verify UGC-DEB approval</p>
            </div>
            <div className={styles.tip}>
              <span>✅</span>
              <p>Check NAAC accreditation</p>
            </div>
            <div className={styles.tip}>
              <span>✅</span>
              <p>Choose specialization wisely</p>
            </div>
            <div className={styles.tip}>
              <span>✅</span>
              <p>Review placement records</p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section className={styles.filterSection}>
          <h2 className={styles.sectionHeading}>Filter by Specialization</h2>
          <div className={styles.filters}>
            {specializations.map((s) => (
              <button
                key={s}
                className={`${styles.filterBtn} ${filter === s ? styles.filterActive : ""}`}
                onClick={() => setFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        {/* UNIVERSITY CARDS */}
        <section className={styles.uniSection}>
          <h2 className={styles.sectionHeading}>
            Top {filtered.length} Online MBA Universities in India 2026
          </h2>
          <div className={styles.uniGrid}>
            {filtered.map((uni) => (
              <article key={uni.rank} className={styles.uniCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.rankBadge}>#{uni.rank}</div>
                  <span
                    className={styles.tagBadge}
                    style={{ backgroundColor: uni.tagColor }}
                  >
                    {uni.tag}
                  </span>
                </div>
                <div className={styles.uniLogo}>{uni.logo}</div>
                <h3 className={styles.uniName}>{uni.name}</h3>
                <StarRating rating={uni.rating} />
                <div className={styles.uniMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Accreditation</span>
                    <span className={styles.metaValue}>{uni.accreditation}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Total Fees</span>
                    <span className={styles.metaValue}>{uni.fees}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{uni.duration}</span>
                  </div>
                </div>
                <div className={styles.specList}>
                  {uni.specializations.map((s) => (
                    <span key={s} className={styles.specTag}>{s}</span>
                  ))}
                </div>

                {/* Courses toggle */}
                <div className={styles.coursesBox}>
                  <button
                    className={styles.coursesToggle}
                    onClick={() => setOpenCourses(openCourses === uni.rank ? null : uni.rank)}
                  >
                    <span>📋 View MBA Courses Offered</span>
                    <span>{openCourses === uni.rank ? "▲" : "▼"}</span>
                  </button>
                  {openCourses === uni.rank && (
                    <ul className={styles.coursesList}>
                      {uni.courses.map((c) => (
                        <li key={c} className={styles.courseItem}>🎓 {c}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <ul className={styles.highlights}>
                  {uni.highlights.map((h) => (
                    <li key={h} className={styles.highlightItem}>✓ {h}</li>
                  ))}
                </ul>
                <a
                  href={uni.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                >
                  Visit University →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className={styles.tableSection}>
          <h2 className={styles.sectionHeading}>
            Online MBA Universities Comparison Table 2026
          </h2>
          <div className={styles.tableWrapper}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th className={styles.compTableThFirst}>Rank</th>
                  <th className={styles.compTableTh}>University</th>
                  <th className={styles.compTableTh}>Accreditation</th>
                  <th className={styles.compTableTh}>Fees (Total)</th>
                  <th className={styles.compTableTh}>Duration</th>
                  <th className={styles.compTableTh}>Rating</th>
                  <th className={styles.compTableThLast}>Apply</th>
                </tr>
              </thead>
              <tbody>
                {universities.map((uni) => (
                  <tr key={uni.rank} className={styles.compTableRow}>
                    <td className={styles.compTableTd}><strong>#{uni.rank}</strong></td>
                    <td className={styles.compTableTd}>{uni.name}</td>
                    <td className={styles.compTableTd}><span className={styles.accBadge}>{uni.accreditation}</span></td>
                    <td className={styles.compTableTd}><strong>{uni.fees}</strong></td>
                    <td className={styles.compTableTd}>{uni.duration}</td>
                    <td className={styles.compTableTd}>⭐ {uni.rating}</td>
                    <td className={styles.compTableTd}>
                      <a
                        href={uni.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.tableLink}
                      >
                        Apply
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ADMISSION PROCESS */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionHeading}>Online MBA Admission Process 2026</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processCardTitle}>Check Eligibility</h3>
              <p className={styles.processCardText}>
                A graduation (Bachelor's degree) in any stream with minimum
                50% marks is required. Some universities also admit students with 45%.
              </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processCardTitle}>Select University & Specialization</h3>
              <p className={styles.processCardText}>
                Choose a university based on your career goals, budget, and
                preferred specialization. Always verify UGC-DEB approval before applying.
              </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processCardTitle}>Apply Online</h3>
              <p className={styles.processCardText}>
                Visit the university's official website, fill out the online
                application form, upload required documents, and pay the application fee.
              </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processCardTitle}>Pay Fees & Enroll</h3>
              <p className={styles.processCardText}>
                After admission confirmation, pay the fees. Once you receive
                your login credentials, access the LMS (Learning Management System).
              </p>
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className={styles.linksSection}>
          <h2 className={styles.sectionHeading}>Online MBA Resources & Related Links</h2>
          <p className={styles.linksSub}>
            Important links for MBA programs, admission details, and career guidance:
          </p>
          <div className={styles.linksGrid}>
            {relatedLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                className={styles.resourceLink}
              >
                <span className={styles.linkIcon}>🔗</span>
                {link.title}
              </a>
            ))}
          </div>
        </section>

        {/* WHY ONLINE MBA */}
        <section className={styles.whySection}>
          <h2 className={styles.sectionHeading}>Why Choose an Online MBA? – Benefits 2026</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>💰</div>
              <h3 className={styles.whyCardTitle}>Cost Effective</h3>
              <p className={styles.whyCardText}>
                60–70% lower fees than a regular MBA with the same quality education.
                Working professionals can continue earning while completing their degree.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⏰</div>
              <h3 className={styles.whyCardTitle}>Flexible Schedule</h3>
              <p className={styles.whyCardText}>
                Study anytime, anywhere. Freedom to complete your MBA alongside a
                full-time job. Both self-paced and live session options available.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🏅</div>
              <h3 className={styles.whyCardTitle}>Equal Recognition</h3>
              <p className={styles.whyCardText}>
                A UGC-DEB approved Online MBA degree is equally valid as a Regular MBA,
                accepted across both government and private sectors.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🌐</div>
              <h3 className={styles.whyCardTitle}>Global Networking</h3>
              <p className={styles.whyCardText}>
                Network with pan-India and international students. Access alumni
                networks and industry expert sessions throughout your program.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📈</div>
              <h3 className={styles.whyCardTitle}>Career Growth</h3>
              <p className={styles.whyCardText}>
                Average 30–40% salary hike after MBA. Better prepared for management
                roles and leadership positions across industries.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🎯</div>
              <h3 className={styles.whyCardTitle}>20+ Specializations</h3>
              <p className={styles.whyCardText}>
                Build expertise in niche areas like Business Analytics, FinTech,
                Healthcare Management, Oil & Gas, and Pharmaceutical Management.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionHeading}>
            Frequently Asked Questions – Online MBA FAQs
          </h2>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className={styles.faqA}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>Start Your Online MBA Journey</h2>
          <p className={styles.ctaText}>
            Choose the best Online MBA program from India's top 16 universities.
            Transform your career with a UGC-approved degree, flexible schedule,
            and affordable fees.
          </p>
          <div className={styles.ctaBtns}>
            <a
              href="https://deb.ugc.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              View UGC-DEB Approved List
            </a>
            <a href="/mba-specializations-india" className={styles.ctaSecondary}>
              Compare Specializations
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}