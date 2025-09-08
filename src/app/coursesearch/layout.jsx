export const metadata = {
  title: "Course Search | Find Your Perfect Online Degree | UNIFOST",
  description: "Search and discover the best online degree programs from top universities. Find courses that match your career goals with our comprehensive course search tool.",
  keywords: "Course Search, Online Degree Search, University Course Finder, Online Education Search, Degree Program Search, Course Discovery",
  openGraph: {
    title: "Course Search | Find Your Perfect Online Degree | UNIFOST",
    description: "Search and discover the best online degree programs from top universities. Find courses that match your career goals.",
    images: ["/images/uni.jpg"],
  },
   alternates: {
    canonical: "https://unifostedu.com/coursesearch",
  },
};

export default function CourseSearchLayout({ children }) {
  return (
    <>
      {children}
      <section className="max-w-4xl mx-auto px-4 py-8 text-gray-700 leading-relaxed">
        <h1 className="text-2xl font-bold mb-4">
          Find the Best Online Degree Programs with UNIFOST
        </h1>
        <p>
          At UNIFOST, our <strong>course search tool</strong> helps students and working 
          professionals discover top <em>online degree programs</em> from reputed universities. 
          Whether you’re looking for an MBA, MCA, BBA, or specialized master’s degree, our platform 
          makes it easy to explore, compare, and choose the right course for your career growth.
        </p>
        <p className="mt-3">
          Our course listings include details on <strong>university rankings, fees, eligibility, 
          accreditations, and placement support</strong>. With over 200+ programs from UGC-DEB 
          approved universities, you can make an informed decision about your higher education journey. 
          Use filters to narrow down results by stream, specialization, or location, and take the first 
          step towards achieving your professional goals.
        </p>
        <p className="mt-3">
          Start your search today and unlock new opportunities with flexible, affordable, and 
          globally recognized online education through UNIFOST.
        </p>
      </section>
    </>
  );
}

