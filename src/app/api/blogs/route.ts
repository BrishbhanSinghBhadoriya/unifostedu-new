import { NextResponse } from 'next/server';

const EXTERNAL_BLOG_API = "https://unifost-edu-blog.vercel.app/api/blogs";

const FALLBACK_BLOGS = [
  {
    _id: "fallback-1",
    title: "How to Choose the Right Online University",
    slug: "ChooseOnlineUniversity",
    description: "Expert tips on selecting the best online degree program for your career goals.",
    category: "Course Guide",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762932238/blog-images/a8cspd20trzfqocza1jw.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "fallback-2",
    title: "Top 5 Career Opportunities After an Online MBA",
    slug: "CareerAfterOnlineMBA",
    description: "Discover high-paying job roles you can land with an UGC-approved online MBA degree.",
    category: "Career & Outcomes",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762932238/blog-images/a8cspd20trzfqocza1jw.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "fallback-3",
    title: "Is an Online Degree Valid for Government Jobs?",
    slug: "JainUGCApproval",
    description: "Everything you need to know about UGC-DEB recognition and its validity in India.",
    category: "Student Help Guides",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762932238/blog-images/a8cspd20trzfqocza1jw.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_BLOG_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 1800 }
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    }

    // If external API fails, return fallback data with 200 OK to hide error from console
    return NextResponse.json({
      success: true,
      data: FALLBACK_BLOGS,
      isFallback: true
    });

  } catch (error) {
    // Silently handle error and return fallback
    return NextResponse.json({
      success: true,
      data: FALLBACK_BLOGS,
      isFallback: true
    });
  }
}
