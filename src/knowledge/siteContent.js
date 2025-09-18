// Lightweight site knowledge base for RAG-style answers in ChatbotWidget
// Content sourced from existing landing copy and FAQs

export const siteDocs = [
  {
    id: 'about-unifost',
    title: 'About Unifost',
    text:
      'Unifost is an EdTech platform that helps students choose the right online degree through expert counseling. We guide you to compare courses, fees, rankings, and accredited universities (UGC/AICTE/NAAC).',
  },
  {
    id :'amity',
    title : 'Amity',
    text : 'Amity is a platform that helps students choose the right online degree through expert counseling. We guide you to compare courses, fees, rankings, and accredited universities (UGC/AICTE/NAAC).',
  },
  {
    id: 'services-video-call',
    title: 'Video Call Counseling',
    text:
      'Virtual learning guidance by counselors to compare accredited online university programs, fees, placements, and to get personalized advice. You can book a free counseling video call.',
  },
  {
    id: 'services-home-demo',
    title: 'Home Demo Counseling',
    text:
      'Personalized in-home session for students and parents with trusted university comparisons, timelines, and admissions guidance.',
  },
  {
    id: 'services-career-planning',
    title: 'Career Planning',
    text:
      'Strategic career roadmap aligned with in-demand skills. We help shortlist programs like MBA, BBA, MCA, BCA, M.Com, B.Com, BA, MA from top universities.',
  },
  // FAQs from Landing.jsx
  {
    id: 'faq-ugc-approved',
    title: 'Are online degrees UGC-approved and recognized?',
    text:
      'Yes. All online university degrees we recommend are UGC-approved and fully recognized. They have the same value as traditional campus programs and are accepted by employers, government organizations, and for higher studies.',
  },
  {
    id: 'faq-counseling-benefits',
    title: 'How does counseling help choose online degrees?',
    text:
      'Our career counseling provides personalized guidance based on goals, background, and industry needs. Experts help select UGC-approved programs that match your aspirations.',
  },
  {
    id: 'faq-benefits',
    title: 'Benefits of UGC-approved online degrees',
    text:
      'Same value as campus programs with flexibility, cost-effectiveness, and support. Study while working with comprehensive counseling and admission assistance.',
  },
  {
    id: 'faq-apply',
    title: 'How to apply through Unifost',
    text:
      'Contact our counselors. We guide end-to-end: university selection, document preparation, application submission, and admission guidance.',
  },
  {
    id: 'faq-courses',
    title: 'Available courses',
    text:
      'Wide range of UGC-approved online courses: MBA, BBA, MCA, BCA, B.Com, M.Com, BA, MA, and more from top-ranked universities.',
  },
  {
    id: 'faq-online-vs-regular',
    title: 'Difference between online and regular degrees',
    text:
      'UGC-approved online degrees have the same value and recognition as regular degrees. Main difference is delivery mode with more flexibility.',
  },
  {
    id: 'faq-cost',
    title: 'Program costs',
    text:
      'Costs vary by university and program, typically ₹1–4 lakhs for complete programs. Counselors help compare costs to find the best value.',
  },
  {
    id: 'faq-support',
    title: 'Support during the program',
    text:
      'We provide academic guidance, career counseling, placement assistance, networking opportunities, and 24/7 technical support throughout your journey.',
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


