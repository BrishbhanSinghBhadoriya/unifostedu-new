import React from 'react';
import Head from 'next/head';

const SEOOptimizer = ({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl, 
  ogImage = '/uni.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  children 
}) => {
  const fullTitle = title ? `${title} | UNIFOST - Online University Degrees & Career Guidance` : 'UNIFOST | Online University Degrees & Career Counseling | India\'s Trusted EdTech Platform';
  const fullDescription = description || 'Get UGC-approved online university degrees from top Indian universities. Expert career counseling, home demo sessions, and guidance for MBA, BBA, MCA, BCA, BCom, BA, and more.';
  const fullKeywords = [
    'Online University Degrees India',
    'Online MBA Programs India', 
    'Online BBA Courses India',
    'Online MCA Programs India',
    'Online BCA Courses India',
    'Online BCom Programs India',
    'Online BA Courses India',
    'UGC Approved Online Degrees',
    'Career Counseling India',
    'Online Education Platform',
    'Distance Learning India',
    'University Admissions Guidance',
    ...keywords
  ].join(', ');

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={fullKeywords} />
        <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
        <meta name="author" content="UNIFOST" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        {canonicalUrl && (
          <link rel="canonical" href={canonicalUrl} />
        )}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl || 'https://www.unifostedu.com'} />
        <meta property="og:image" content={`https://www.unifostedu.com${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="UNIFOST" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content="@unifost" />
        <meta name="twitter:creator" content="@unifost" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content={`https://www.unifostedu.com${ogImage}`} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#001e3c" />
        <meta name="msapplication-TileColor" content="#001e3c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="UNIFOST" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
        
        {/* Additional Performance Optimizations */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Head>
      
      {children}
    </>
  );
};

export default SEOOptimizer;
