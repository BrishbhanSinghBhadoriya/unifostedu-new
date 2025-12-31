import Link from "next/link";
import Image from "next/image";
import { fetchBlogs } from "@/lib/blogApi";


export const revalidate = 1800;

export const metadata = {
  title: "UNIFOST Blog | Latest Insights on Online Education",
  description:
    "Read the latest articles from UNIFOST on online degrees, university reviews, and career growth tips for working professionals.",
  metadataBase: new URL('https://unifostedu.com'),
  alternates: {
    canonical: "https://unifostedu.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function formatDate(date: string) {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const FALLBACK_BLOG_IMAGE =
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762932238/blog-images/a8cspd20trzfqocza1jw.png";

export default async function BlogIndexPage() {
  let blogs = [];

  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error("Failed to load blogs", error);
  }

  const sortedBlogs = blogs
    .filter((blog: any) => blog?.slug)
    .sort((a: any, b: any) => {
      const dateA = new Date(a.createdAt || a.updatedAt || 0).getTime();
      const dateB = new Date(b.createdAt || b.updatedAt || 0).getTime();
      return dateB - dateA;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pb-20">
      <div className="relative overflow-hidden bg-[#001e3c] text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-teal-300/20 to-blue-500/30" />
          <div className="absolute -top-32 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Fresh insights every week
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Unifost Blog: Your Guide to Online Learning Success
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl">
            Explore expert advice, university comparisons, and actionable tips
            for building your career with UGC-approved online degrees.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {sortedBlogs.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
              Blogs coming soon
            </h2>
            <p className="text-slate-600">
              We are preparing insightful content for you. Please check back
              later.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {sortedBlogs.map((blog: any) => (
              <Link
                key={blog._id || blog.slug}
                href={`/blog/${blog.slug}`}
                className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={blog.image || FALLBACK_BLOG_IMAGE}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 text-xs font-semibold text-white">
                    {blog.category && (
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    )}
                    {(blog.createdAt || blog.updatedAt) && (
                      <span className="bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                        {formatDate(blog.createdAt || blog.updatedAt)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-[#003b6c] transition-colors">
                    {blog.title}
                  </h2>
                  {blog.description && (
                    <p className="mt-3 text-sm sm:text-base text-slate-600 line-clamp-3">
                      {blog.description}
                    </p>
                  )}
                  <div className="mt-6 flex items-center justify-between text-sm font-medium text-[#003b6c]">
                    <span className="inline-flex items-center gap-2">
                      <span>Read Article</span>
                      <span aria-hidden="true">→</span>
                    </span>
                    {blog.author && (
                      <span className="text-slate-500">
                        By <span className="font-semibold">{blog.author}</span>
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

