const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://unifostedu.com"     // <-- production domain
    : "http://localhost:3000";       // <-- dev domain

export async function getLandingData() {
  try {
    const res = await fetch(`${baseUrl}/api/v1/landingData`, {
      next: { revalidate: 43200 }
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
