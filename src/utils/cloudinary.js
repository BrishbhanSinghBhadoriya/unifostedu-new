export function optimizeCloudinary(url) {
  if (!url) return url;

  if (!url.includes("upload/")) return url;

  if (url.includes("f_auto")) return url;

  return url.replace("upload/", "upload/f_auto,q_auto/");
}
