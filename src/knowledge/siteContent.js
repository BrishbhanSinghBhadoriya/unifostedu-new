// Lightweight site knowledge base for RAG-style answers in ChatbotWidget
// Content sourced from existing landing copy and FAQs

export const siteDocs = [
  // Brand & Platform
  {
    id: 'about-unifost',
    title: 'About UNIFOST',
    text:
      "UNIFOST is an EdTech platform helping students choose the right UGC-approved online degree with expert counseling. We enable comparison of courses, fees, rankings, and accredited universities, and provide end-to-end admission support.",
  },
  {
    id: 'what-we-offer',
    title: 'What services does UNIFOST provide?',
    text:
      'Personalized counseling, university and course comparison, application assistance, scholarship/EMI guidance, career planning, and ongoing student support. Modes: video call, home demo, and in-centre guidance where available.',
  },

  // Services
  {
    id: 'services-video-call',
    title: 'Video Call Counseling',
    text:
      'One-on-one virtual session with counselors to shortlist universities, understand eligibility, fees, and placements. Flexible scheduling for working professionals with post-call action plan.',
  },
  {
    id: 'services-home-demo',
    title: 'Home Demo Counseling',
    text:
      'In-person guided session at your location for students and parents. Compare programs live, clarify timelines, required documents, and next steps before applying.',
  },
  {
    id: 'services-career-planning',
    title: 'Career Planning',
    text:
      'Structured roadmap aligned to your goals and skill gaps. We map roles, skills, and suitable programs (MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, etc.) with timelines and budget.',
  },

  // Accreditation & Recognition
  {
    id: 'faq-ugc-approved',
    title: 'Are online degrees UGC-approved and recognized?',
    text:
      'Yes. We list only UGC-entitled online programs from accredited universities (NAAC/A+/A, AICTE where applicable). Online degrees carry the same recognition as regular degrees for jobs and higher studies.',
  },
  {
    id: 'online-vs-distance',
    title: 'Online vs Distance: what is the difference?',
    text:
      'Online uses LMS, live/recorded classes, proctored exams, and continuous assessment. Distance historically used self-learning material with limited interaction. Recognition for UGC-entitled online degrees equals regular degrees.',
  },

  // Courses & Universities
  {
    id: 'available-courses',
    title: 'What courses can I apply for?',
    text:
      'Popular options: MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and domain specializations. We also cover top universities like Amity, Manipal, NMIMS, UPES, LPU, Sharda, VGU, Jain, DY Patil, etc.',
  },
  {
    id: 'compare-feature',
    title: 'How does university comparison work?',
    text:
      'Use Compare to select 2–4 universities and see fees, eligibility, NAAC grade, approvals, curriculum highlights, and placement support side-by-side. Counselors explain trade-offs based on your profile.',
  },
  {
    id: 'ranking-approach',
    title: 'How are rankings and recommendations decided?',
    text:
      'We consider accreditation (NAAC/NIRF), faculty & curriculum, student support, LMS quality, flexibility, fees/value, and placement/industry links. Final recommendation is personalized to your goals and budget.',
  },

  // Admissions & Eligibility
  {
    id: 'eligibility',
    title: 'General eligibility for online degrees',
    text:
      'UG programs: 10+2 or equivalent from a recognized board; PG programs: any recognized UG degree (discipline-specific requirements may apply). Work experience may be preferred for some MBAs.',
  },
  {
    id: 'documents-required',
    title: 'Documents required for application',
    text:
      'Government ID, 10th/12th/UG marksheets and certificates, passport photo, signature, caste/domicile certificates if applicable, and work-experience proofs for specific programs.',
  },
  {
    id: 'admission-process',
    title: 'Admission process with UNIFOST',
    text:
      'Book counseling → shortlist universities → document check → application form submission → fee payment/EMI setup → university verification → LMS access and orientation.',
  },
  {
    id: 'timelines',
    title: 'Admission timelines & intakes',
    text:
      'Most universities have 2 intakes a year (Jan/Feb and Jul/Aug). Some run rolling admissions with monthly batches. Apply early to avoid seat closure or late fees.',
  },

  // Fees, Scholarships & EMI
  {
    id: 'fees-range',
    title: 'Typical fee range',
    text:
      'Total program fee generally ranges from ₹60,000 to ₹2.5 lakh for UG and ₹80,000 to ₹4 lakh for PG depending on the university and specialization. We help optimize value for money.',
  },
  {
    id: 'scholarships-emi',
    title: 'Scholarships, discounts, and EMI options',
    text:
      'Universities may offer early-bird or merit scholarships. We help with no-cost EMI/financing where available and advise the most affordable route without compromising quality.',
  },

  // Learning Experience & Exams
  {
    id: 'lms-and-classes',
    title: 'How will I study online?',
    text:
      'You learn through an LMS with live classes, recorded sessions, e-content, discussion forums, assignments, and proctored exams. Attendance is tracked through platform engagement.',
  },
  {
    id: 'exams-and-centres',
    title: 'Exams, proctoring, and centres',
    text:
      'Most programs conduct online proctored exams. Some universities allow test centres for select courses. Continuous assessment through assignments/quizzes contributes to final grades.',
  },

  // Outcomes & Support
  {
    id: 'placements',
    title: 'Placement and career support',
    text:
      'Universities offer career services: resume building, mock interviews, job portals, and industry sessions. UNIFOST supports with counseling, upskilling advice, and networking guidance.',
  },
  {
    id: 'student-support',
    title: 'Support during the program',
    text:
      'We assist throughout your journey with academic guidance, administrative escalations, timeline reminders, and help with re-registrations or exam scheduling.',
  },

  // Getting Started
  {
    id: 'how-to-apply',
    title: 'How to apply via UNIFOST',
    text:
      'Share your goals with our counselors, compare shortlisted options, upload documents securely, and complete the application with our step-by-step support until you get LMS access.',
  },
  {
    id: 'contact-and-availability',
    title: 'Where does UNIFOST operate?',
    text:
      'We serve students across India through online and phone support. Video counseling is available nationwide, and home demo sessions are available in selected cities.',
  },
];

export function retrieveRelevantDocs(query, limit = 3) {
  if (!query) return [];
  const q = query.toLowerCase();
  const terms = q
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const termSet = new Set(terms);

  const scored = siteDocs.map((doc) => {
    const text = `${doc.title} ${doc.text}`.toLowerCase();
    let score = 0;
    for (const t of termSet) {
      if (text.includes(t)) score += 1;
    }
    // Boost for exact phrase containment
    if (text.includes(q)) score += 2;
    return { doc, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.doc);
}


