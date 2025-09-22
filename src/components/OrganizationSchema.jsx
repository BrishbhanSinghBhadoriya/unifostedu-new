import React from 'react';

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "UNIFOST",
    "alternateName": "UniFost",
    "description": "India's leading EdTech platform providing online university degrees, career counseling, and personalized guidance for students seeking quality education.",
    "url": "https://unifostedu.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://unifostedu.com/favicon.ico",
      "width": 512,
      "height": 512
    },
    "image": "https://unifostedu.com/favicon.ico",
    "foundingDate": "2020",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Uttar Pradesh",
        "addressLocality": "Noida",
        "postalCode": "201301"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Uttar Pradesh",
      "addressLocality": "Noida",
      "postalCode": "201301"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+91 7042867717",
        "email": "info@unifostedu.com",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "telephone": "+91 7042867717",
        "email": "info@unifostedu.com"
      }
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Priyansh Mishra",
        "url": "https://www.linkedin.com/in/priyansh-mishra-14b9ba2a0/",
        "image": "https://unifostedu.com/priyansh.webp",
        "jobTitle": "Co-Founder & Director",
        "description": "Visionary leader committed to revolutionizing education through innovation and accessibility"
      },
      {
        "@type": "Person",
        "name": "Aman Pawar",
        "url": "https://www.linkedin.com/in/aman-pawar-a59b57218/",
        "image": "https://unifostedu.com/aman.webp",
        "jobTitle": "Co-Founder & Director",
        "description": "Driving force behind UniFost blending vision with action and passion with purpose"
      }
    ],
    "employee": {
      "@type": "QuantitativeValue",
      "value": "50",
      "unitText": "employees"
    },
    "numberOfEmployees": "50+",
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UNIFOST Educational Services",
      "description": "Comprehensive online education and career guidance services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Online University Degree Programs",
          "description": "UGC-approved online degree programs from top Indian universities",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Degree Guidance",
            "description": "Comprehensive support for selecting and enrolling in accredited online degree programs"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "description": "Varies by program and university"
          }
        },
        {
          "@type": "Offer",
          "name": "Career Counseling Services",
          "description": "Personalized career guidance and counseling for students",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Counseling",
            "description": "One-on-one sessions with expert counselors for education and career decisions"
          }
        },
        {
          "@type": "Offer",
          "name": "Home Demo Sessions",
          "description": "Trial sessions conducted at student convenience",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Demo",
            "description": "Experience learning firsthand before committing to any program"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/unifost",
      "https://www.facebook.com/unifostedu",
      "https://twitter.com/unifost",
      "https://www.instagram.com/unifostedu"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "500"
    },
  
    "knowsAbout": [
      "Online Education",
      "Career Counseling",
      "University Admissions",
      "Distance Learning",
      "Educational Technology",
      "Student Guidance",
      "Online Degree Programs",
      "Career Planning"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online MBA Programs",
          "description": "UGC-approved online MBA programs from top universities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online BBA Programs",
          "description": "Bachelor of Business Administration online programs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online MCA Programs",
          "description": "Master of Computer Applications online programs"
        }
      }
    ],
    "subjectOf": {
      "@type": "CreativeWork",
      "name": "UNIFOST - Transforming Education Through Technology",
      "description": "A comprehensive platform for online education and career guidance"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData)
      }}
    />
  );
};

export default OrganizationSchema;
