# Next.js 15 Rendering Strategy & SEO Guide for UNIFOST

## 📊 Page Type Analysis & Rendering Strategy Table

| Page Type | Route Example | Rendering Strategy | Reason | Revalidate/Cache |
|-----------|---------------|-------------------|---------|------------------|
| **Homepage** | `/` | **SSG** | Static content, rarely changes | `revalidate: 86400` (24h) |
| **University Pages** | `/manipal`, `/amity-university-online` | **SSG** | Static university info, changes infrequently | `revalidate: 604800` (7 days) |
| **Course Pages** | `/courses/[slug]` | **ISR** | Course data updates occasionally | `revalidate: 86400` (24h) |
| **Blog Posts** | `/blog/[slug]` | **ISR** | New posts added regularly | `revalidate: 3600` (1h) |
| **Static Blog** | `/blog/WorkingMBA` | **SSG** | Static blog pages | `revalidate: 604800` (7 days) |
| **Compare Page** | `/compare` | **SSG** | Static comparison tool | `revalidate: 86400` (24h) |
| **Search Page** | `/search` | **CSR** | User interactions, filters | `cache: "no-store"` |
| **Course Search** | `/coursesearch` | **CSR** | Dynamic filtering | `cache: "no-store"` |
| **Dashboard** | `/dashboard` | **SSR** | User-specific data | `cache: "no-store"` |
| **API Routes** | `/api/v1/enquiry` | **SSR** | Dynamic form submissions | N/A |
| **Book Demo** | `/bookdemo` | **SSG** | Static form page | `revalidate: 86400` |
| **About/Services** | `/about`, `/services` | **SSG** | Static content | `revalidate: 604800` |
| **FAQs** | `/faqs` | **SSG** | Static FAQ content | `revalidate: 604800` |
| **Privacy** | `/privacy` | **SSG** | Legal static content | `revalidate: 2592000` (30 days) |

---

## 🔧 Implementation Guide by Page Type

### 1. **SSG (Static Site Generation) - University Pages**

**Example: `/manipal/page.jsx`**

```jsx
// app/manipal/page.jsx
import { Metadata } from 'next';
import Manipal from './page';

// Static metadata
export const metadata: Metadata = {
  title: 'Manipal University Online | Accredited Online Degrees | UNIFOST',
  description: 'Explore globally recognized online programs from Manipal University Jaipur Online. Flexible learning, expert mentorship, and career-focused degrees with UGC & AICTE approvals.',
  keywords: [
    'Manipal Online',
    'Manipal University Jaipur',
    'MUJ Online',
    'Online MBA Manipal',
    'Online BBA Manipal',
    'Online MCA Manipal',
    'UGC Approved',
    'NAAC A+'
  ],
  alternates: {
    canonical: 'https://unifostedu.com/manipal',
  },
  openGraph: {
    title: 'Manipal University Online | Accredited Online Degrees',
    description: 'Globally recognized online undergraduate and postgraduate programs with flexible, industry-relevant learning.',
    url: 'https://unifostedu.com/manipal',
    siteName: 'UNIFOST',
    images: [
      {
        url: 'https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp',
        width: 1200,
        height: 630,
        alt: 'Manipal University Jaipur Online',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manipal University Online | Accredited Online Degrees',
    description: 'Enroll in UGC and AICTE approved online courses at Manipal University Jaipur.',
    images: ['https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 604800; // 7 days

export default function ManipalPage() {
  return <Manipal />;
}
```

---

### 2. **ISR (Incremental Static Regeneration) - Course Pages**

**Example: `/courses/[slug]/page.jsx`**

```jsx
// app/courses/[slug]/page.jsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import courseData from '@/data/courseData.json';

// Generate static params at build time
export async function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each course
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const course = courseData[slug];

  if (!course) {
    return {
      title: 'Course Not Found | UNIFOST',
      description: 'The requested course page could not be found.',
    };
  }

  return {
    title: `${course.title} | Online ${course.name} Programs in India | UNIFOST`,
    description: course.description,
    keywords: course.keywords || [],
    alternates: {
      canonical: `https://unifostedu.com/courses/${slug}`,
    },
    openGraph: {
      title: `${course.title} | UNIFOST`,
      description: course.description,
      url: `https://unifostedu.com/courses/${slug}`,
      siteName: 'UNIFOST',
      images: [
        {
          url: course.image || 'https://unifostedu.com/images/default-course.webp',
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: [course.image || 'https://unifostedu.com/images/default-course.webp'],
    },
  };
}

// ISR with revalidation
export const revalidate = 86400; // Revalidate every 24 hours
export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = courseData[slug];

  if (!course) {
    notFound();
  }

  // Fetch additional data if needed (with caching)
  const universities = await fetch(
    `https://api.unifostedu.com/api/courses/${slug}/universities`,
    {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  ).then((res) => res.json());

  return <CoursePageContent course={course} universities={universities} />;
}
```

---

### 3. **ISR (Incremental Static Regeneration) - Blog Posts**

**Example: `/blog/[slug]/page.jsx`**

```jsx
// app/blog/[slug]/page.jsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Fetch blog posts from CMS or API
async function getBlogPost(slug: string) {
  const res = await fetch(
    `https://api.unifostedu.com/api/blog/${slug}`,
    {
      next: { revalidate: 3600 }, // Revalidate every hour
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateStaticParams() {
  // Fetch all blog slugs at build time
  const posts = await fetch(
    'https://api.unifostedu.com/api/blog/slugs',
    { next: { revalidate: 3600 } }
  ).then((res) => res.json());

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | UNIFOST',
    };
  }

  return {
    title: `${post.title} | UNIFOST Blog`,
    description: post.excerpt || post.description,
    keywords: post.tags || [],
    authors: [{ name: post.author || 'UNIFOST Team' }],
    alternates: {
      canonical: `https://unifostedu.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://unifostedu.com/blog/${slug}`,
      siteName: 'UNIFOST',
      images: [
        {
          url: post.featuredImage || 'https://unifostedu.com/images/blog-default.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author || 'UNIFOST'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || 'https://unifostedu.com/images/blog-default.webp'],
    },
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
```

---

### 4. **CSR (Client-Side Rendering) - Search Pages**

**Example: `/search/page.jsx`**

```jsx
// app/search/page.jsx
'use client'; // Client component

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const metadata = {
  title: 'Search Courses & Universities | UNIFOST',
  description: 'Search and compare online courses and universities in India.',
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setLoading(true);
      // Client-side fetch (no caching needed)
      fetch(`/api/v1/search?query=${query}`, {
        cache: 'no-store',
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Search Results</h1>
      {loading ? <p>Loading...</p> : <SearchResults results={results} />}
    </div>
  );
}
```

---

### 5. **SSR (Server-Side Rendering) - Dashboard**

**Example: `/dashboard/page.jsx`**

```jsx
// app/dashboard/page.jsx
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Dashboard | UNIFOST',
  description: 'Your personalized dashboard',
  robots: {
    index: false, // Don't index dashboard
    follow: false,
  },
};

// Force server-side rendering (no caching)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getUserData() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');

  if (!token) {
    return null;
  }

  // Fetch user data (no caching)
  const res = await fetch('https://api.unifostedu.com/api/user/profile', {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    cache: 'no-store', // Always fetch fresh data
  });

  return res.json();
}

export default async function DashboardPage() {
  const userData = await getUserData();

  if (!userData) {
    redirect('/login');
  }

  return <DashboardContent userData={userData} />;
}
```

---

## 🔍 SEO Best Practices

### 1. **Metadata Structure**

```jsx
// Example: Complete metadata for a university page
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: 'University Name | Online Programs | UNIFOST',
    template: '%s | UNIFOST',
  },
  description: 'SEO-optimized description (150-160 characters)',
  keywords: ['keyword1', 'keyword2'], // Optional but useful

  // Canonical URL
  alternates: {
    canonical: 'https://unifostedu.com/university-name',
  },

  // Open Graph
  openGraph: {
    title: 'University Name | Online Programs',
    description: 'OG description',
    url: 'https://unifostedu.com/university-name',
    siteName: 'UNIFOST',
    images: [
      {
        url: 'https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/university_bzfla5.webp',
        width: 1200,
        height: 630,
        alt: 'University Name',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'University Name | Online Programs',
    description: 'Twitter description',
    images: ['https://unifostedu.comhttps://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/university_bzfla5.webp'],
    creator: '@unifost',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional
  authors: [{ name: 'UNIFOST' }],
  publisher: 'UNIFOST',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
```

### 2. **Structured Data (JSON-LD)**

```jsx
// Add to page component
export default function UniversityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'University Name',
    url: 'https://unifostedu.com/university-name',
    logo: 'https://unifostedu.com/images/university-logo.webp',
    description: 'University description',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'City',
      addressRegion: 'State',
    },
    sameAs: [
      'https://www.facebook.com/university',
      'https://www.linkedin.com/company/university',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  );
}
```

---

## 📄 Enhanced Sitemap Configuration

```jsx
// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://unifostedu.com';

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coursesearch`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // University routes (fetch from API or static list)
  const universities = [
    'amity-university-online',
    'manipal',
    'mahe-online',
    'lpu-online',
    'ku-online',
    'cuonline',
    'nmims',
    'smu',
    'jain',
    'dypatil',
    'sharda',
    'shoolini',
    'vgu',
    'upes',
    'opjindal',
    'uu',
  ];

  const universityRoutes = universities.map((uni) => ({
    url: `${baseUrl}/${uni}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Course routes
  const courses = [
    'mba-online',
    'mca-online',
    'bba-online',
    'bca-online',
    'mcom-online',
    'bcom-online',
    'ma-online',
    'ba-online',
    'msc-online',
    'majmc-online',
    'bajmc-online',
  ];

  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog routes (fetch from API)
  const blogPosts = await fetch(
    'https://api.unifostedu.com/api/blog/slugs',
    { next: { revalidate: 3600 } }
  )
    .then((res) => res.json())
    .catch(() => []);

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...universityRoutes,
    ...courseRoutes,
    ...blogRoutes,
  ];
}
```

---

## 🤖 Enhanced Robots.txt

```jsx
// app/robots.js
export default function robots() {
  const baseUrl = 'https://unifostedu.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/temp/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
```

---

## 🚀 Optimization Tips

### 1. **Image Optimization**

```jsx
import Image from 'next/image';

// Optimized image component
<Image
  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/university_bzfla5.webp"
  alt="University Name"
  width={1200}
  height={630}
  priority // For above-the-fold images
  placeholder="blur" // Add blur placeholder
  blurDataURL="data:image/jpeg;base64,..." // Base64 encoded blur
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy" // For below-the-fold images
/>
```

### 2. **Lazy Loading Components**

```jsx
import dynamic from 'next/dynamic';

// Lazy load heavy components
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    loading: () => <Skeleton />,
    ssr: false, // If component doesn't need SSR
  }
);
```

### 3. **LCP (Largest Contentful Paint) Improvements**

```jsx
// Preload critical resources
<link
  rel="preload"
  href="/fonts/main-font.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>

// Preconnect to external domains
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

// DNS prefetch
<link rel="dns-prefetch" href="https://api.unifostedu.com" />
```

### 4. **Fetch Options Summary**

| Use Case | Fetch Option | Example |
|----------|--------------|---------|
| **Static Data** | `revalidate: 86400` | University info |
| **Semi-Dynamic** | `revalidate: 3600` | Course listings |
| **Real-time** | `cache: 'no-store'` | User dashboard |
| **Force Static** | `export const dynamic = 'force-static'` | About page |
| **Force Dynamic** | `export const dynamic = 'force-dynamic'` | Dashboard |

---

## 📝 Canonical URLs Best Practice

```jsx
// In layout.jsx or page.jsx
export const metadata = {
  alternates: {
    canonical: 'https://unifostedu.com/current-page',
  },
};

// For dynamic pages
export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  
  // Remove query params from canonical for clean URLs
  const canonical = `https://unifostedu.com/${slug}`;
  
  return {
    alternates: {
      canonical,
    },
  };
}
```

---

## ✅ Checklist for Each Page Type

### SSG Pages (University, Static Content)
- [ ] `export const dynamic = 'force-static'`
- [ ] `export const revalidate = 604800` (or appropriate value)
- [ ] Complete metadata with OG tags
- [ ] Structured data (JSON-LD)
- [ ] Canonical URL set
- [ ] Images optimized with Next/Image

### ISR Pages (Courses, Blog)
- [ ] `generateStaticParams()` implemented
- [ ] `export const revalidate = 86400` (or appropriate)
- [ ] `generateMetadata()` for SEO
- [ ] Dynamic params handled
- [ ] Fallback for new params

### CSR Pages (Search, Filters)
- [ ] `'use client'` directive
- [ ] Proper loading states
- [ ] Error handling
- [ ] No sensitive data in client components

### SSR Pages (Dashboard, User Data)
- [ ] `export const dynamic = 'force-dynamic'`
- [ ] `cache: 'no-store'` for fetches
- [ ] Authentication checks
- [ ] `robots: { index: false }` for private pages

---

## 🎯 Quick Reference

### Revalidate Times
- **Homepage**: 24 hours (86400)
- **University Pages**: 7 days (604800)
- **Course Pages**: 24 hours (86400)
- **Blog Posts**: 1 hour (3600)
- **Static Content**: 30 days (2592000)

### Priority Levels (Sitemap)
- **Homepage**: 1.0
- **Course/University Pages**: 0.9
- **Comparison/Search**: 0.9
- **Blog Posts**: 0.7
- **About/Services**: 0.8

---

## 📚 Additional Resources

- [Next.js 15 App Router Docs](https://nextjs.org/docs/app)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)
- [Web Vitals](https://web.dev/vitals/)
