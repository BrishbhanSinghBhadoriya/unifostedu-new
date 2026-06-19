"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const universities = [
  {
    rank: 1,
    name: "Amity University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amitylogo_nfe7fa.webp",
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
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg",
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
    "Retail Management",
    "Business Analytics"
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
    "MBA in Retail Management",
    "MBA in Business Analytics"
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
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329087/lpulogo_vdgb4x.png",
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
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1770874326/amrita_rq4xlg.jpg",
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
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
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
  logo: "/images/uu_logo.webp",
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
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328967/cu-logo_gunzgp.png",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹2,20,000",
  duration: "2 Years",
  specializations: [
    "Human Resource Management (HRM)",
    "Marketing",
    "International Business (IB)",
    "Entrepreneurship",
    "Finance",
    "Information Technology (IT)",
    "Logistics and Supply Chain Management (LSCM)",
    "Retail Management",
    "Operation Management",
    "Banking and Insurance",
    "Hospital Management",
    "Event Management",
    "Media Management",
    "Travel and Tourism Management",
    "Airlines & Airport Management",
    "Digital Marketing",
    "Data Science & Artificial Intelligence",
    "International Relations",
    "FinTech",
    "General Management",
    "Business Analytics",
    "Disaster Management",
    "Brand Management"
  ],
  courses: [
    "MBA in Human Resource Management",
    "MBA in Marketing",
    "MBA in International Business",
    "MBA in Entrepreneurship",
    "MBA in Finance",
    "MBA in Information Technology",
    "MBA in Logistics and Supply Chain Management",
    "MBA in Retail Management",
    "MBA in Operation Management",
    "MBA in Banking and Insurance",
    "MBA in Hospital Management",
    "MBA in Event Management",
    "MBA in Media Management",
    "MBA in Travel and Tourism Management",
    "MBA in Airlines & Airport Management",
    "MBA in Digital Marketing",
    "MBA in Data Science & Artificial Intelligence",
    "MBA in International Relations",
    "MBA in FinTech",
    "MBA in General Management",
    "MBA in Business Analytics",
    "MBA in Disaster Management",
    "MBA in Brand Management"
  ],
  highlights: [
    "QS Ranked University",
    "Placement Assistance",
    "International Exposure"
  ],
  rating: 4.1,
  link: "https://cuchd.in/online-mba",
  tag: "QS Ranked",
  tagColor: "#1d4ed8"
},
  {
  rank: 8,
  name: "Jain University Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png",
  accreditation: "UGC-DEB, NAAC A++",
  fees: "₹1,96,000 – ₹2,50,000",
  duration: "2 Years",
  specializations: [
    "Human Resource Management and Finance",
    "Finance and Marketing",
    "Marketing and Human Resource Management",
    "Marketing and Business Analytics",
    "Finance and Business Analytics",
    "Human Resource and Business Analytics",
    "Project Management",
    "Retail Management and Quick Commerce",
    "Information Technology Management",
    "Healthcare Management",
    "Supply Chain Management",
    "Production and Operations Management",
    "Business Intelligence and Analytics",
    "Entrepreneurship and Venture Creation",
    "International Finance",
    "Data Science and Analytics",
    "E-commerce",
    "Artificial Intelligence and Human Resource Management",
    "Digital Marketing",
    "Banking and Finance",
    "Technology Management",
    "General Management",
    "AI-Driven Marketing",
    "AI-Driven Finance",
    "AI-Driven Business Strategy",
    "AI-Driven Human Resource Management"
  ],
  courses: [
    "MBA in Human Resource Management and Finance",
    "MBA in Finance and Marketing",
    "MBA in Marketing and Human Resource Management",
    "MBA in Marketing and Business Analytics",
    "MBA in Finance and Business Analytics",
    "MBA in Human Resource and Business Analytics",
    "MBA in Project Management",
    "MBA in Retail Management and Quick Commerce",
    "MBA in Information Technology Management",
    "MBA in Healthcare Management",
    "MBA in Supply Chain Management",
    "MBA in Production and Operations Management",
    "MBA in Business Intelligence and Analytics",
    "MBA in Entrepreneurship and Venture Creation",
    "MBA in International Finance",
    "MBA in Data Science and Analytics",
    "MBA in E-commerce",
    "MBA in Artificial Intelligence and Human Resource Management",
    "MBA in Digital Marketing",
    "MBA in Banking and Finance",
    "MBA in Technology Management",
    "MBA in General Management",
    "MBA in AI-Driven Marketing",
    "MBA in AI-Driven Finance",
    "MBA in AI-Driven Business Strategy",
    "MBA in AI-Driven Human Resource Management"
  ],
  highlights: [
    "Mentorship Program",
    "Industry Tie-ups",
    "Global Exposure"
  ],
  rating: 4.1,
  link: "https://jainuniversity.ac.in/online-mba",
  tag: "Emerging Top",
  tagColor: "#0d9488"
},
 {
  rank: 9,
  name: "DY Patil Vidyapeeth Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328967/dypatillogo_c8uqm7.png",
  accreditation: "UGC-DEB, NAAC A++",
  fees: "₹1,89,400",
  duration: "2 Years",
  specializations: [
    "Marketing Management",
    "Human Resource Management",
    "Finance Management",
    "IT Management",
    "Project Management",
    "Operations Management",
    "Hospital Administration & Healthcare Management",
    "International Business Management",
    "FinTech Management",
    "Business Analytics Management",
    "Artificial Intelligence & Machine Learning Management",
    "Logistics, Materials & Supply Chain Management",
    "Blockchain Management",
    "Digital Marketing Management",
    "Agri-Business Management"
  ],
  courses: [
    "MBA in Marketing Management",
    "MBA in Human Resource Management",
    "MBA in Finance Management",
    "MBA in IT Management",
    "MBA in Project Management",
    "MBA in Operations Management",
    "MBA in Hospital Administration & Healthcare Management",
    "MBA in International Business Management",
    "MBA in FinTech Management",
    "MBA in Business Analytics Management",
    "MBA in AI & Machine Learning Management",
    "MBA in Logistics & Supply Chain Management",
    "MBA in Blockchain Management",
    "MBA in Digital Marketing Management",
    "MBA in Agri-Business Management"
  ],
  highlights: ["Healthcare Focus", "Expert Faculty", "Weekend Batches"],
  rating: 4.0,
  link: "https://dpu.edu.in/online-mba",
  tag: "Healthcare MBA",
  tagColor: "#9333ea"
},

{
  rank: 10,
  name: "OP Jindal Global University Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329099/opjindallogo_vksxpm.png",
  accreditation: "UGC-DEB, NAAC A",
  fees: "₹1,80,000 – ₹3,00,000",
  duration: "12 Months",
  specializations: [
    "Business Analytics",
    "Business & Law",
    "Finance",
    "Human Resource Management",
    "Marketing",
    "Strategy & Leadership",
    "Supply Chain & Operations",
    "AI for Business",
    "Digital Finance"
  ],
  courses: [
    "MBA in Business Analytics",
    "MBA in Business & Law",
    "MBA in Finance",
    "MBA in Human Resource Management",
    "MBA in Marketing",
    "MBA in Strategy & Leadership",
    "MBA in Supply Chain & Operations",
    "MBA in AI for Business",
    "MBA in Digital Finance"
  ],
  highlights: ["QS Ranked India Top 50", "Global Faculty", "International Curriculum"],
  rating: 4.3,
  link: "https://online.jgu.edu.in/mba",
  tag: "Global MBA",
  tagColor: "#b45309"
},

{
  rank: 11,
  name: "Kurukshetra University Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹98,545",
  duration: "2 Years",
  specializations: ["General Management"],
  courses: ["MBA in General Management"],
  highlights: ["Central University", "Lowest Fees", "UGC Approved"],
  rating: 3.8,
  link: "https://kuk.ac.in/online-mba",
  tag: "Govt. University",
  tagColor: "#15803d"
},

{
  rank: 12,
  name: "Shoolini University Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329091/shoolinilogo_jxkt71.png",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹1,40,000",
  duration: "2 Years",
  specializations: [
    "Marketing Management",
    "Operation & Supply Chain Management",
    "Agri Business Management",
    "Human Resource Management",
    "IT Management",
    "Biotechnology Management",
    "Financial Management",
    "Tourism Management",
    "Food Technology Management",
    "Digital Marketing",
    "Real Estate Management",
    "Pharma & Health Care Management",
    "Retail Management",
    "Direct Selling Management",
    "Banking & Insurance",
    "Data Science & Business Analytics"
  ],
  courses: [
    "MBA in Marketing Management",
    "MBA in Operation & Supply Chain Management",
    "MBA in Agri Business Management",
    "MBA in Human Resource Management",
    "MBA in IT Management",
    "MBA in Biotechnology Management",
    "MBA in Financial Management",
    "MBA in Tourism Management",
    "MBA in Food Technology Management",
    "MBA in Digital Marketing",
    "MBA in Real Estate Management",
    "MBA in Pharma & Health Care Management",
    "MBA in Retail Management",
    "MBA in Direct Selling Management",
    "MBA in Banking & Insurance",
    "MBA in Data Science & Business Analytics"
  ],
  highlights: ["Himachal Pradesh", "Research Oriented", "Pharma MBA Unique"],
  rating: 3.9,
  link: "https://shooliniuniversity.com/online-mba",
  tag: "Pharma Focused",
  tagColor: "#047857"
},

{
  rank: 13,
  name: "Vivekananda Global University Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329092/vgulogo_cg5pke.png",
  accreditation: "UGC-DEB, NAAC A",
  fees: "₹1,50,000 – ₹2,40,000",
  duration: "2 Years",
  specializations: [
    "Finance",
    "Marketing",
    "Human Resources",
    "Operations",
    "Business Analytics",
    "Information Technology Management",
    "Healthcare Management",
    "Agribusiness Management",
    "International Business"
  ],
  courses: [
    "MBA in Finance",
    "MBA in Marketing",
    "MBA in Human Resources",
    "MBA in Operations",
    "MBA in Business Analytics",
    "MBA in Information Technology Management",
    "MBA in Healthcare Management",
    "MBA in Agribusiness Management",
    "MBA in International Business"
  ],
  highlights: ["Jaipur Based", "Affordable Fees", "Industry Partnerships"],
  rating: 3.8,
  link: "https://vgu.ac.in/online-mba",
  tag: "Value For Money",
  tagColor: "#dc2626"
},

{
  rank: 14,
  name: "UPES Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329092/upeslogo_i1dwgp.png",
  accreditation: "UGC-DEB, NAAC A",
  fees: "₹1,90,920 – ₹2,40,000",
  duration: "2 Years",
  specializations: [
    "Oil & Gas Management",
    "Power Management",
    "Logistics & Supply Chain Management",
    "Business Analytics",
    "Finance",
    "Human Resource Management",
    "Infrastructure Management",
    "International Business",
    "Marketing Management",
    "Operations Management",
    "Financial Management",
    "Digital Business"
  ],
  courses: [
    "MBA in Oil & Gas Management",
    "MBA in Power Management",
    "MBA in Logistics & Supply Chain Management",
    "MBA in Business Analytics",
    "MBA in Finance",
    "MBA in Human Resource Management",
    "MBA in Infrastructure Management",
    "MBA in International Business",
    "MBA in Marketing Management",
    "MBA in Operations Management",
    "MBA in Financial Management",
    "MBA in Digital Business"
  ],
  highlights: ["Energy Sector Specialist", "Industry Projects", "Dehradun Based"],
  rating: 4.0,
  link: "https://online.upes.ac.in/mba",
  tag: "Energy Sector",
  tagColor: "#ca8a04"
},

{
  rank: 15,
  name: "Sharda University Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329091/shardalogo_cmsla3.png",
  accreditation: "UGC-DEB, NAAC A+",
  fees: "₹1,40,000 – ₹1,96,000",
  duration: "2 Years",
  specializations: [
    "Data Science and Analytics",
    "Marketing",
    "Healthcare and Hospital Administration",
    "Human Resource Management",
    "Finance"
  ],
  courses: [
    "MBA in Data Science and Analytics",
    "MBA in Marketing",
    "MBA in Healthcare and Hospital Administration",
    "MBA in Human Resource Management",
    "MBA in Finance"
  ],
  highlights: ["Greater Noida Campus", "International Tie-ups", "Career Cell"],
  rating: 4.0,
  link: "https://shardaonline.ac.in/mba",
  tag: "International MBA",
  tagColor: "#db2777"
},

{
  rank: 16,
  name: "NMIMS Global Access Online",
  logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329088/nmimslogo_blukfn.jpg",
  accreditation: "UGC-DEB, NAAC A++",
  fees: "₹2,20,000",
  duration: "2 Years",
  specializations: [
    "Marketing Management",
    "Business Management",
    "Finance Management",
    "Human Resources Management",
    "Operations and Data Science Management",
    "Information Technology Management",
    "Business Analytics"
  ],
  courses: [
    "MBA in Marketing Management",
    "MBA in Business Management",
    "MBA in Finance Management",
    "MBA in Human Resources Management",
    "MBA in Operations and Data Science Management",
    "MBA in Information Technology Management",
    "MBA in Business Analytics"
  ],
  highlights: [
    "Mumbai Based Premium",
    "Industry Mentors",
    "Strong Alumni Network"
  ],
  rating: 4.4,
  link: "https://online.nmims.edu/mba",
  tag: "Mumbai Premium",
  tagColor: "#7c3aed"
}
];

const sliderImages = [
  {
    src: "https://res.cloudinary.com/deht3c1bt/image/upload/q_auto/f_auto/v1781612737/Gemini_Generated_Image_vkp8cwvkp8cwvkp8_ffsxgs.png",
    alt: "Best Online MBA Universities India 2026 – UGC Approved Programs",
  },
  {
    src: "https://res.cloudinary.com/deht3c1bt/image/upload/q_auto/f_auto/v1781612737/Gemini_Generated_Image_8tvyln8tvyln8tvy_gjfnce.png",
    alt: "Top Ranked Online MBA Colleges India – Compare Fees & Specializations",
  },
  {
    src: "https://res.cloudinary.com/deht3c1bt/image/upload/q_auto/f_auto/v1781612737/Gemini_Generated_Image_nyluzmnyluzmnylu_zgtwmn.png",
    alt: "Online MBA Admission 2026 – NAAC Accredited Universities",
  },
  {
    src: "https://res.cloudinary.com/deht3c1bt/image/upload/q_auto/f_auto/v1781612736/Gemini_Generated_Image_fn39zgfn39zgfn39_jlcfd2.png",
    alt: "UGC-DEB Online MBA Programs – Placement & Career Support",
  },
  {
    src: "https://res.cloudinary.com/deht3c1bt/image/upload/q_auto/f_auto/v1781612736/Gemini_Generated_Image_yn7uwyyn7uwyyn7u_fvrij3.png",
    alt: "Flexible Online MBA India 2026 – Study While Working",
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
    <div className={styles.stars} aria-label={`Rating: ${rating} out of 5`} role="img">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          aria-hidden="true"
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
      <span className={styles.ratingNum} aria-hidden="true">{rating}</span>
    </div>
  );
}

export default function BestOnlineMBAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [expandedSpecs, setExpandedSpecs] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleSpecs = (rank: number) => {
    setExpandedSpecs((prev) => {
      const next = new Set(prev);
      next.has(rank) ? next.delete(rank) : next.add(rank);
      return next;
    });
  };

  const totalSlides = sliderImages.length;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const specializations = [
    "All",
    "Agri-Business Management",
    "AI & Machine Learning",
    "Artificial Intelligence",
    "Banking & Finance",
    "Banking & Insurance",
    "Blockchain Management",
    "Business Analytics",
    "Data Science",
    "Digital Business",
    "Digital Marketing",
    "Disaster Management",
    "E-commerce",
    "Energy & Power Management",
    "Entrepreneurship",
    "ESG Management",
    "Event Management",
    "Finance",
    "FinTech",
    "General Management",
    "Healthcare Management",
    "Human Resource Management",
    "Information Technology",
    "Infrastructure Management",
    "Insurance",
    "International Business",
    "Logistics & Supply Chain Management",
    "Marketing",
    "Media Management",
    "Oil & Gas Management",
    "Operations Management",
    "Pharma Management",
    "Project Management",
    "Real Estate Management",
    "Retail Management",
    "Strategy & Leadership",
    "Tourism Management",
  ];

  const filtered =
    filter === "All"
      ? universities
      : universities.filter((u) =>
          u.specializations.some((s) =>
            s.toLowerCase().includes(filter.toLowerCase()) ||
            filter.toLowerCase().includes(s.toLowerCase())
          )
        );

  return (
    <main className={styles.main} id="main-content">

      {/* SKIP TO CONTENT — agentic browsing + screen reader */}
      <a href="#university-cards" className={styles.skipLink}>
        Skip to university listings
      </a>

      {/* IMAGE SLIDER */}
      <div
        className={styles.sliderWrapper}
        role="region"
        aria-label="Featured online MBA banner images"
        aria-roledescription="carousel"
      >
        <div
          className={styles.sliderTrack}
          aria-live="polite"
          aria-atomic="true"
        >
          {sliderImages.map((img, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === currentSlide ? styles.slideActive : ""}`}
              aria-hidden={i !== currentSlide}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${totalSlides}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                className={styles.slideImage}
              />
              <div className={styles.slideOverlay} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <button
          className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
          onClick={goToPrev}
          aria-label="Previous slide"
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
          onClick={goToNext}
          aria-label="Next slide"
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>

        {/* Dots */}
        <div
          className={styles.sliderDots}
          role="group"
          aria-label="Slide navigation"
        >
          {sliderImages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === currentSlide ? styles.dotActive : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1} of ${totalSlides}`}
              aria-current={i === currentSlide ? "true" : undefined}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className={styles.slideCounter} aria-hidden="true">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroBadge} aria-hidden="true">📊 Updated June 2026</div>
        <h1 id="hero-heading" className={styles.heroTitle}>
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
        <div className={styles.heroStats} role="list" aria-label="Key statistics">
          <div className={styles.stat} role="listitem">
            <span className={styles.statNum} aria-label="16 top universities">16</span>
            <span className={styles.statLabel}>Top Universities</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat} role="listitem">
            <span className={styles.statNum} aria-label="Minimum fees 40 thousand rupees">₹40K</span>
            <span className={styles.statLabel}>Min. Fees</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat} role="listitem">
            <span className={styles.statNum} aria-label="More than 20 specializations">20+</span>
            <span className={styles.statLabel}>Specializations</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat} role="listitem">
            <span className={styles.statNum} aria-label="100 percent UGC approved">100%</span>
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
              <span aria-hidden="true">✅</span>
              <p>Verify UGC-DEB approval</p>
            </div>
            <div className={styles.tip}>
              <span aria-hidden="true">✅</span>
              <p>Check NAAC accreditation</p>
            </div>
            <div className={styles.tip}>
              <span aria-hidden="true">✅</span>
              <p>Choose specialization wisely</p>
            </div>
            <div className={styles.tip}>
              <span aria-hidden="true">✅</span>
              <p>Review placement records</p>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section className={styles.filterSection} aria-labelledby="filter-heading">
          <h2 id="filter-heading" className={styles.sectionHeading}>Filter by Specialization</h2>
          <div className={styles.filters} role="group" aria-label="Filter universities by specialization">
            {specializations.map((s) => (
              <button
                key={s}
                type="button"
                className={`${styles.filterBtn} ${filter === s ? styles.filterActive : ""}`}
                onClick={() => setFilter(s)}
                aria-pressed={filter === s}
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        {/* UNIVERSITY CARDS */}
        <section className={styles.uniSection} aria-labelledby="uni-section-heading">
          <h2 id="uni-section-heading" className={styles.sectionHeading}>
            Top {filtered.length} Online MBA Universities in India 2026
          </h2>
          <div className={styles.uniGrid} id="university-cards">
            {filtered.map((uni) => (
              <article
                key={uni.rank}
                className={styles.uniCard}
                aria-label={`${uni.name} – Rank ${uni.rank}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.rankBadge} aria-label={`Rank ${uni.rank}`}>#{uni.rank}</div>
                  <span
                    className={styles.tagBadge}
                    style={{ backgroundColor: uni.tagColor }}
                  >
                    {uni.tag}
                  </span>
                </div>
                <div className={styles.uniLogo}>
                  <Image
                    src={uni.logo}
                    alt={`${uni.name} official logo`}
                    width={120}
                    height={48}
                    loading="lazy"
                    sizes="120px"
                    className={styles.uniLogoImg}
                  />
                </div>
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
                <div className={styles.specList} aria-label="Specializations offered">
                  {(expandedSpecs.has(uni.rank)
                    ? uni.specializations
                    : uni.specializations.slice(0, 5)
                  ).map((s) => (
                    <span key={s} className={styles.specTag}>{s}</span>
                  ))}
                  {uni.specializations.length > 5 && (
                    <button
                      type="button"
                      className={styles.specMoreBtn}
                      onClick={() => toggleSpecs(uni.rank)}
                      aria-expanded={expandedSpecs.has(uni.rank)}
                      aria-label={
                        expandedSpecs.has(uni.rank)
                          ? `Show fewer specializations for ${uni.name}`
                          : `Show ${uni.specializations.length - 5} more specializations for ${uni.name}`
                      }
                    >
                      {expandedSpecs.has(uni.rank)
                        ? "See Less ▲"
                        : `+${uni.specializations.length - 5} More ▼`}
                    </button>
                  )}
                </div>

                <ul className={styles.highlights} aria-label="Key highlights">
                  {uni.highlights.map((h) => (
                    <li key={h} className={styles.highlightItem}>✓ {h}</li>
                  ))}
                </ul>
                <a
                  href={uni.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                  aria-label={`Visit ${uni.name} official website`}
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
                <span className={styles.linkIcon} aria-hidden="true">🔗</span>
                {link.title}
              </a>
            ))}
          </div>
        </section>

        {/* WHY ONLINE MBA */}
        <section className={styles.whySection} aria-labelledby="why-heading">
          <h2 id="why-heading" className={styles.sectionHeading}>Why Choose an Online MBA? – Benefits 2026</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">💰</div>
              <h3 className={styles.whyCardTitle}>Cost Effective</h3>
              <p className={styles.whyCardText}>
                60–70% lower fees than a regular MBA with the same quality education.
                Working professionals can continue earning while completing their degree.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">⏰</div>
              <h3 className={styles.whyCardTitle}>Flexible Schedule</h3>
              <p className={styles.whyCardText}>
                Study anytime, anywhere. Freedom to complete your MBA alongside a
                full-time job. Both self-paced and live session options available.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">🏅</div>
              <h3 className={styles.whyCardTitle}>Equal Recognition</h3>
              <p className={styles.whyCardText}>
                A UGC-DEB approved Online MBA degree is equally valid as a Regular MBA,
                accepted across both government and private sectors.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">🌐</div>
              <h3 className={styles.whyCardTitle}>Global Networking</h3>
              <p className={styles.whyCardText}>
                Network with pan-India and international students. Access alumni
                networks and industry expert sessions throughout your program.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">📈</div>
              <h3 className={styles.whyCardTitle}>Career Growth</h3>
              <p className={styles.whyCardText}>
                Average 30–40% salary hike after MBA. Better prepared for management
                roles and leadership positions across industries.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">🎯</div>
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
        <section className={styles.ctaSection} aria-labelledby="cta-heading">
          <h2 id="cta-heading" className={styles.ctaHeading}>Start Your Online MBA Journey</h2>
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
              aria-label="View UGC-DEB approved online MBA universities list (opens in new tab)"
            >
              View UGC-DEB Approved List
            </a>
            <a
              href="/mba-specializations-india"
              className={styles.ctaSecondary}
              aria-label="Compare online MBA specializations available in India"
            >
              Compare Specializations
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}