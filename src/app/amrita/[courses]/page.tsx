import React from 'react'
import coursesData from '@/data/amritacourse.json';
import { notFound } from 'next/navigation';
import SlugClient from './_components/SlugClient';
import type { Metadata } from 'next';

const BASE_URL = 'https://unifostedu.com';

// ── Dynamic Metadata per course slug ─────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ courses: string }> }
): Promise<Metadata> {
  const { courses } = await params;
  const course = coursesData.courses.find((c) => c.slug === courses);

  if (!course) {
    return {
      title: 'Course Not Found | Amrita University Online',
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${BASE_URL}/amrita/${course.slug}`;
  const title = `${course.title} | Amrita University Online 2026`;
  const description = `${course.tagline} Amrita Vishwa Vidyapeetham Online — NAAC A++, NIRF Rank 8, WES recognized. Fee: ₹${course.totalFee?.toLocaleString('en-IN')} | EMI ₹${course.emiPerMonth?.toLocaleString('en-IN')}/month. 100% placement support. Apply now.`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [
      `Amrita ${course.shortTitle} online`,
      `Amrita online ${course.shortTitle} fees`,
      `Amrita online ${course.shortTitle} admission 2026`,
      `Amrita online ${course.shortTitle} eligibility`,
      `Amrita online ${course.shortTitle} placement`,
      `Amrita Vishwa Vidyapeetham ${course.shortTitle}`,
      `NAAC A++ online ${course.shortTitle} India`,
      `UGC approved online ${course.shortTitle} Amrita`,
      `WES recognized online ${course.shortTitle}`,
      `best online ${course.shortTitle} India 2026`,
      `online ${course.shortTitle} NIRF rank 8`,
    ],
    alternates: { canonical: pageUrl, languages: { 'en-IN': pageUrl } },
    openGraph: {
      title: `${course.title} | Amrita University Online — NAAC A++`,
      description,
      url: pageUrl,
      siteName: 'Unifost Education',
      images: [
        {
          url: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762328966/amritalogo_lswo1a.png',
          width: 1200,
          height: 630,
          alt: `${course.title} — Amrita University Online`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.shortTitle} | Amrita University Online | NAAC A++ | NIRF 8`,
      description,
      images: ['https://res.cloudinary.com/didkrwhbu/image/upload/v1762328966/amritalogo_lswo1a.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    authors: [{ name: 'Unifost Education' }],
    publisher: 'Unifost Education',
    formatDetection: { email: false, address: false, telephone: false },
  };
}

// ── Static params for SSG ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  return coursesData.courses.map((course) => ({ courses: course.slug }));
}

// ── Page component ────────────────────────────────────────────────────────────
const CoursesPage = async ({ params }: { params: Promise<{ courses: string }> }) => {
  const { courses } = await params;
  const foundCourse = coursesData.courses.find((c) => c.slug === courses);

  if (!foundCourse) return notFound();

  // ── JSON-LD Course Schema ─────────────────────────────────────────────────
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: foundCourse.title,
    description: foundCourse.tagline,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Amrita Vishwa Vidyapeetham Online',
      sameAs: `${BASE_URL}/amrita`,
    },
    url: `${BASE_URL}/amrita/${foundCourse.slug}`,
    educationalLevel: foundCourse.slug.startsWith('online-b') ? 'Undergraduate' : 'Postgraduate',
    timeRequired: foundCourse.slug.startsWith('online-b') ? 'P3Y' : 'P2Y',
    inLanguage: 'en-IN',
    offers: {
      '@type': 'Offer',
      price: foundCourse.totalFee?.toString() ?? '170000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: `₹${foundCourse.semesterFee?.toLocaleString('en-IN')}/semester | EMI ₹${foundCourse.emiPerMonth?.toLocaleString('en-IN')}/month`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Amrita University Online', item: `${BASE_URL}/amrita` },
      { '@type': 'ListItem', position: 3, name: foundCourse.shortTitle, item: `${BASE_URL}/amrita/${foundCourse.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SlugClient course={foundCourse} />
    </>
  );
};

export default CoursesPage;
