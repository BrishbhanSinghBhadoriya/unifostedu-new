import React from 'react';
import { Metadata } from 'next';

// ─── Full Page SEO Metadata ───────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core Meta Tags ──────────────────────────────────────────────────────────
  title: {
    default: 'How to Choose the University for Online Courses | Complete Guide 2026',
    template: '%s | UniFost – Online University Guide',
  },
  description:
    'Learn how to choose the perfect online university for your career goals. Expert tips on accreditation (NAAC, UGC, AICTE), faculty credentials, placement support, fees, and red flags to avoid. Make the right choice today.',
  keywords: [
    'how to choose online university',
    'best online universities India',
    'UGC approved online universities',
    'NAAC accredited universities',
    'online MBA selection guide',
    'online degree programs India',
    'distance education vs online education',
    'online university accreditation check',
    'top online universities 2026',
    'choose online course India',
    'online university placement support',
    'AICTE approved online courses',
  ],
  authors: [{ name: 'UniFost', url: 'https://unifostedu.com' }],
  creator: 'UniFost',
  publisher: 'UniFost Education',
  category: 'Education',

  // ── Robots / Indexing ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical URL ────────────────────────────────────────────────────────────
  alternates: {
    canonical: 'https://unifostedu.com/blog/how-to-choose-university-online-courses',
    languages: {
      'en-IN': 'https://unifostedu.com/blog/how-to-choose-university-online-courses',
    },
  },

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    type: 'article',
    siteName: 'UniFost Education',
    url: 'https://unifostedu.com/blog/how-to-choose-university-online-courses',
    title: 'How to Choose the University for Online Courses – Complete Guide 2026',
    description:
      'A practical, expert-written guide to selecting the right online university in India. Covers accreditation, faculty quality, placement data, red flags, and a step-by-step decision framework.',
    images: [
      {
        url: 'https://unifostedu.com/images/blogs/choose-online-university.webp',
        width: 1200,
        height: 630,
        alt: 'How to Choose the Right Online University in India – UniFost Guide 2026',
        type: 'image/webp',
      },
      {
        url: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327035/b6_yvhxua.webp',
        width: 1200,
        height: 630,
        alt: 'Online University Selection – UniFost',
        type: 'image/webp',
      },
    ],
    locale: 'en_IN',
    // Article-specific Open Graph fields
    publishedTime: '2026-03-19T00:00:00.000Z',
    modifiedTime: '2026-06-01T00:00:00.000Z',
    section: 'Education',
    tags: [
      'online university',
      'UGC recognition',
      'NAAC accreditation',
      'online MBA',
      'distance education',
      'India education',
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@unifostedu',
    creator: '@unifostedu',
    title: 'How to Choose the University for Online Courses | 2026 Guide',
    description:
      'Expert tips on picking the right online university in India – accreditation, faculty, placement, and more. Read the full guide.',
    images: {
      url: 'https://unifostedu.com/images/blogs/choose-online-university.webp',
      alt: 'UniFost – How to Choose Online University',
    },
  },

  // ── Verification Tags (add your actual codes) ────────────────────────────────
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_CODE',
    // bing: 'YOUR_BING_CODE',
  },

  // ── App Links / PWA ──────────────────────────────────────────────────────────
  applicationName: 'UniFost',
  referrer: 'origin-when-cross-origin',

  // ── Icons ────────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e3a8a' },
    ],
  },
};

export const viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Article Schema
    {
      '@type': 'Article',
      '@id': 'https://unifostedu.com/blog/how-to-choose-university-online-courses#article',
      headline: 'How to Choose the University for Online Courses: A Complete Guide',
      description:
        'A comprehensive guide covering 6 critical factors to evaluate when choosing an online university in India — including accreditation, faculty quality, placement data, and common mistakes to avoid.',
      image: {
        '@type': 'ImageObject',
        url: 'https://unifostedu.com/images/blogs/choose-online-university.webp',
        width: 1200,
        height: 630,
      },
      datePublished: '2026-03-19',
      dateModified: '2026-06-01',
      author: {
        '@type': 'Organization',
        name: 'UniFost',
        url: 'https://unifostedu.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'UniFost Education',
        url: 'https://unifostedu.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://unifostedu.com/images/logo.png',
          width: 200,
          height: 60,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://unifostedu.com/blog/how-to-choose-university-online-courses',
      },
      articleSection: 'Education Guide',
      keywords:
        'online university, UGC recognition, NAAC accreditation, online MBA, distance education India',
      wordCount: 3500,
      inLanguage: 'en-IN',
    },

    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://unifostedu.com/blog/how-to-choose-university-online-courses#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://unifostedu.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://unifostedu.com/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Choose University for Online Courses',
          item: 'https://unifostedu.com/blog/how-to-choose-university-online-courses',
        },
      ],
    },

    // FAQPage Schema (matches the FAQ section in page.tsx)
    {
      '@type': 'FAQPage',
      '@id': 'https://unifostedu.com/blog/how-to-choose-university-online-courses#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does research for choosing an online university typically take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thorough research usually takes 2-4 weeks. Compare at least 5-7 universities before making a final decision.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I choose an online university based on rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rankings are one factor. Accreditation, placement, faculty expertise, and industry recognition matter more for online programs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is an online degree accepted by employers in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but only from UGC-recognized and AICTE-approved universities. Top companies now accept online degrees from reputable institutions like IGNOU, Manipal, and Lovely Professional University.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is UGC recognition and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "UGC recognition ensures the degree is valid in India and internationally. Without it, your degree won't be accepted for higher studies or government jobs.",
          },
        },
        {
          '@type': 'Question',
          name: 'What are the best online universities for MBA in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Top choices include Manipal University, Symbiosis, IIT Bombay Online Programs, Lovely Professional University, and NMIMS. Look for NAAC accreditation and industry partnerships for best career outcomes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I verify if an online university is genuine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Check UGC's official website, AICTE recognition, campus presence, alumni network, and placement records. Call their admission office directly and ask for references from current students.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I work while doing an online degree?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, that's the main advantage of online education. Most programs are designed for working professionals with flexible schedules and asynchronous learning options.",
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between online and distance education?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Online programs use digital platforms for live/recorded classes. Distance education uses printed materials and occasional in-person sessions. Online is more interactive and modern.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does an online degree cost in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Costs range from ₹50,000 (bachelor\'s at IGNOU) to ₹15+ lakhs (MBA at top universities). Most PG programs cost ₹2-8 lakhs. Compare fees against placement outcomes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are online certifications better than online degrees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Degrees are more valuable for career growth and higher studies. Certifications are good for skill building but do not carry the same weight as a formal degree from an accredited university.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do online universities conduct exams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Methods vary: proctored online exams, in-person exam centers, or a combination. Many universities have exam centers in major cities. Some conduct open-book and assignment-based assessments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents do I need to apply for an online degree?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typically: 10th/12th marksheet, bachelor\'s degree certificate (for postgraduate), passport, identity proof, and work experience letter. Some universities also conduct entrance tests.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is expensive always better for online university selection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Choose based on value for money, not price. A ₹2 lakh program might be better value than ₹5 lakh if it has better placements and accreditation.',
          },
        },
      ],
    },

    // HowTo Schema (matches the Step-by-Step section)
    {
      '@type': 'HowTo',
      '@id': 'https://unifostedu.com/blog/how-to-choose-university-online-courses#howto',
      name: 'How to Choose the Right Online University',
      description:
        'A step-by-step process to select the best online university for your career goals in India.',
      totalTime: 'P14D',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: '0',
      },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Define Your Goals Clearly',
          text: 'Determine what you want to achieve: career change, skill upgrade, higher salary, or promotion. Your goal determines the best university.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Shortlist Based on Accreditation',
          text: 'Check NAAC, UGC, and AICTE databases. Only consider accredited universities. This cuts your list by 70%.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Research Faculty Quality',
          text: 'Review faculty profiles, check LinkedIn and Google Scholar, verify PhD qualifications and industry experience.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Verify Placement Data',
          text: 'Request actual placement statistics and alumni contact info. Talk to recent graduates about their experience.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Test the Learning Platform',
          text: 'Ask for demo access. Try the LMS for 30 minutes and check if the technology meets your requirements.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Compare Final Options',
          text: 'Use a decision matrix to rate your top 3–4 universities across accreditation, faculty, placement, and cost.',
        },
        {
          '@type': 'HowToStep',
          position: 7,
          name: 'Talk to Current Students',
          text: 'Join social media groups of the university. Ask real questions and listen to real feedback before deciding.',
        },
        {
          '@type': 'HowToStep',
          position: 8,
          name: 'Make Your Decision',
          text: 'After thorough research, commit fully. Engage completely in your chosen program for best outcomes.',
        },
      ],
    },

    // WebSite Schema
    {
      '@type': 'WebSite',
      '@id': 'https://unifostedu.com#website',
      url: 'https://unifostedu.com',
      name: 'UniFost Education',
      description: 'India\'s trusted guide for online university selection and education advice.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://unifostedu.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-IN',
    },

    // Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://unifostedu.com#organization',
      name: 'UniFost Education',
      url: 'https://unifostedu.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://unifostedu.com/images/logo.png',
        width: 200,
        height: 60,
      },
      sameAs: [
        'https://twitter.com/unifostedu',
        'https://www.linkedin.com/company/unifost',
        'https://www.facebook.com/unifostedu',
        'https://www.instagram.com/unifostedu',
        'https://www.youtube.com/@unifostedu',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi'],
      },
    },
  ],
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function HowToChooseUniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Structured Data / JSON-LD ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Page Wrapper ────────────────────────────────────────────────────── */}
      {children}
    </>
  );
}