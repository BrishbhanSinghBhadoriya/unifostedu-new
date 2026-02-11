const BLOG_API_ENDPOINT =
  process.env.NEXT_PUBLIC_BLOG_API_ENDPOINT ||
  "https://unifost-edu-blog.vercel.app/api/blogs";

const DEFAULT_REVALIDATE_SECONDS = 1800; // 30 minutes
const FETCH_TIMEOUT_MS = 15000; // 15 seconds
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch the full list of blogs from the remote API.
 * Works in both server and client environments.
 * Includes retry logic for transient 5xx errors and network failures.
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

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

      const response = await fetch(BLOG_API_ENDPOINT, {
        ...fetchOptions,
        signal: signal || controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const payload = await response.json();
        if (payload?.success && Array.isArray(payload.data)) {
          return payload.data;
        }
        return [];
      }

      if (response.status >= 500 && attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * attempt);
        continue;
      }

      if (!response.ok) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`Blog API returned ${response.status}: ${response.statusText}`);
        }
        return [];
      }
    } catch (err) {
      if (attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * attempt);
      } else {
        if (process.env.NODE_ENV === "development") {
          console.warn("Blog API fetch failed after retries:", err.message);
        }
        return [];
      }
    }
  }

  return [];
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

