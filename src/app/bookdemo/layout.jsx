export const metadata = {
  title: "Book Demo | Free Counseling Session | UNIFOST",
  description: "Book a free demo session with our education experts. Get personalized guidance for your online degree journey and career planning.",
  keywords: "Book Demo, Free Counseling, Education Consultation, Career Guidance, Online Degree Demo, Educational Planning",
  openGraph: {
    title: "Book Demo | Free Counseling Session | UNIFOST",
    description: "Book a free demo session with our education experts. Get personalized guidance for your online degree journey.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"],
  },
   alternates: {
    canonical: "https://unifostedu.com/bookdemo",
  },
};

export default function BookDemoLayout({ children }) {
  return (
    <div>
      {children}
      <section className="max-w-3xl mx-auto p-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">Why Book a Free Demo with UNIFOST?</h2>
        <p>
          At UNIFOST, we understand that choosing the right university and course for your online
          degree is a big decision. Our free demo and counseling session is designed to guide you
          step by step, whether you are a fresh graduate exploring higher studies or a working
          professional looking to upgrade your career. During the session, our expert education
          counselors will help you compare universities, understand eligibility requirements, review
          course structures, and clarify the admission process.
        </p>
        <p className="mt-3">
          You will also get insights into career opportunities after completing popular programs
          like Online MBA, BBA, BCA, and MCA from top UGC-approved universities such as Amity,
          Manipal, Jain, and many others. With more than a decade of expertise in educational
          guidance, UNIFOST ensures that every student receives personalized advice tailored to
          their goals. Our demo session also covers financial planning, fee structure explanation,
          scholarship information, and placement support opportunities available with different
          universities.
        </p>
        <p className="mt-3">
          Book your free demo today and take the first step towards a brighter future with trusted
          guidance and the right online degree program.
        </p>
      </section>
    </div>
  );
}

