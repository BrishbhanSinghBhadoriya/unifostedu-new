export async function getLandingData() {
  // Always use localhost for builds and development
  const baseUrl = "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/v1/landingData`, {
      next: { revalidate: 43200 },
      cache: 'force-cache'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return {};
  }
}