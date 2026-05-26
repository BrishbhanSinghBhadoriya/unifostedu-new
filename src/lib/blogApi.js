const BLOG_API_ENDPOINT =
  typeof window !== "undefined"
    ? "/api/blogs"
    : (process.env.NEXT_PUBLIC_BLOG_API_ENDPOINT || "https://unifost-edu-blog.vercel.app/api/blogs");

const DEFAULT_REVALIDATE_SECONDS = 1800; // 30 minutes
const FETCH_TIMEOUT_MS = 15000; // 15 seconds
const MAX_RETRIES = 1; // Reduced from 3 to minimize console noise on server errors
const RETRY_DELAY_MS = 1000;

// Simple circuit breaker to avoid hitting a known-down API repeatedly in the same session
let isApiDown = false;
let lastCheckTime = 0;
const CIRCUIT_BREAKER_COOLDOWN = 60000; // 1 minute

// Fallback data to use when API is down
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

  // Circuit breaker check
  const now = Date.now();
  if (isApiDown && now - lastCheckTime < CIRCUIT_BREAKER_COOLDOWN) {
    return FALLBACK_BLOGS;
  }

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
          isApiDown = false; // Reset circuit breaker on success
          return payload.data;
        }
        return FALLBACK_BLOGS;
      }

      // If we get a 500, trigger the circuit breaker
      if (response.status >= 500) {
        isApiDown = true;
        lastCheckTime = now;
        
        if (attempt < MAX_RETRIES) {
          await sleep(RETRY_DELAY_MS * attempt);
          continue;
        }
      }

      if (!response.ok) {
        return FALLBACK_BLOGS;
      }
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      
      isApiDown = true;
      lastCheckTime = now;

      if (attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * attempt);
      } else {
        return FALLBACK_BLOGS;
      }
    }
  }

  return FALLBACK_BLOGS;
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

