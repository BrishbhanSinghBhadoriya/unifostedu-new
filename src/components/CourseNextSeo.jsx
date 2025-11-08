"use client";
import React from 'react';
import { NextSeo } from 'next-seo';
import courseData from '@/data/courseData.json';

export default function CourseNextSeo({ slug }) {
  const course = courseData[slug];
  if (!course) return null;

  const siteUrl = 'https://unifostedu.com';
  const canonical = `${siteUrl}/courses/${slug}`;

  // Defaults if not present in JSON
  const seoTitle = course.metaTitle || `Online ${course.title} in India | UGC Approved Universities`;
  const seoDescription = course.metaDescription || course.description;
  const ogImageUrl = course.ogImage || `${siteUrl}https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp`;

  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      canonical={canonical}
      openGraph={{
        url: canonical,
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `${course.title} - UNIFOST`,
          },
        ],
        site_name: 'UNIFOST',
      }}
      twitter={{
        handle: '@unifost',
        site: '@unifost',
        cardType: 'summary_large_image',
      }}
    />
  );
}


