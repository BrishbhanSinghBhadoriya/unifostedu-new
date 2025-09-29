export async function generateMetadata({ params }) {
  const { slug } = params;

  
  const defaultMeta = {
    title: "Online Courses in India | UNIFOST",
    description:
      "Discover UGC-approved online degree programs in India. Compare MBA, MCA, BBA, BCA, and more with expert admission guidance.",
    keywords:
      "Online Courses India, Online MBA, Online MCA, Online BBA, Online BCA, Distance Learning, UGC Approved Degrees",
    canonical: `https://unifostedu.com/courses/${slug}`,
    image: "/images/uni.webp",
  };

  return {
    title: defaultMeta.title,
    description: defaultMeta.description,
    keywords: defaultMeta.keywords,
    openGraph: {
      title: defaultMeta.title,
      description: defaultMeta.description,
      url: defaultMeta.canonical,
      siteName: "UNIFOST",
      images: [defaultMeta.image],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@unifost",
      creator: "@unifost",
      title: defaultMeta.title,
      description: defaultMeta.description,
      images: [defaultMeta.image],
    },
    alternates: {
      canonical: defaultMeta.canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default function CourseLayout({ children }) {
  return (
    <div>
      {children}

      {/*  SEO Content Block (helps Google ranking) */}
      <section className="max-w-4xl mx-auto p-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">Why Choose Online Courses with UNIFOST?</h2>
        <p>
          At <strong>UNIFOST</strong>, we specialize in guiding students and working professionals
          towards the best UGC-approved online degree programs in India. Whether you are looking
          for an <strong>Online MBA, MCA, BBA, BCA, B.Com, or M.Com</strong>, our experts help you
          compare top universities like <strong>Amity, Manipal, NMIMS, Jain, and LPU</strong>.
        </p>
        <p className="mt-3">
          Our platform is designed to make your admission journey smooth — from understanding{" "}
          <strong>eligibility requirements</strong> to comparing <strong>fee structures</strong> and
          career opportunities after graduation. UNIFOST ensures you make the right decision by
          providing <strong>personalized counseling</strong>, <strong>placement assistance</strong>,
          and <strong>scholarship guidance</strong>.
        </p>
        <p className="mt-3">
          By choosing an online degree through UNIFOST, you not only get flexibility but also the
          assurance of a <strong>UGC-recognized qualification</strong> that is valued by top
          employers across industries. Start your academic journey today with trusted guidance and
          take a step towards a brighter future.
        </p>
      </section>

      {/* JSON-LD Schema for Organization (helps SEO rich results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "UNIFOST",
            url: "https://unifostedu.com",
            logo: "https://unifostedu.com/images/logo.webp",
            sameAs: [
              "https://www.facebook.com/unifost",
              "https://twitter.com/unifost",
              "https://www.linkedin.com/company/unifost",
            ],
          }),
        }}
      />
    </div>
  );
}
