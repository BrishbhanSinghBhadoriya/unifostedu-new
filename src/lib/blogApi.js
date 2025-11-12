const BLOG_API_ENDPOINT =
  process.env.NEXT_PUBLIC_BLOG_API_ENDPOINT ||
  "https://unifost-edu-blog.vercel.app/api/blogs";

const DEFAULT_REVALIDATE_SECONDS = 1800; // 30 minutes

/**
 * Fetch the full list of blogs from the remote API.
 * Works in both server and clsdient environments.
 */
export async function fetchBlogs(options = {}) {
  const {
    revalidate = DEFAULT_REVALIDATE_SECONDS,
    cache,
    signal,
  } = options;

  const isServer = typeof window === "undefined";
  const fetchOptions = {};

  if (signal) {
    fetchOptions.signal = signal;
  }

  if (isServer) {
    fetchOptions.next = { revalidate };
    if (cache) {
      fetchOptions.cache = cache;
    }
  } else {
    fetchOptions.cache = cache || "no-store";
  }

  const response = await fetch(BLOG_API_ENDPOINT, fetchOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.statusText}`);
  }

  const payload = await response.json();

  if (!payload?.success || !Array.isArray(payload.data)) {
    return [];
  }

  return payload.data;
}

/**
 * Fetch a single blog using its slug.
 */
export async function fetchBlogBySlug(slug, options = {}) {
  if (!slug) return null;

  const blogs = await fetchBlogs(options);
  const normalizedSlug = String(slug).toLowerCase();

  return (
    blogs.find((blog) => blog.slug?.toLowerCase() === normalizedSlug) ||
    blogs.find((blog) => blog._id === slug)
  );
}

export { BLOG_API_ENDPOINT, DEFAULT_REVALIDATE_SECONDS };

