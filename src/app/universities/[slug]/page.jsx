import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const universityData = {
  amity: {
    name: 'Amity University Online',
    logo: '/images/amitylogo.jpg',
    description:
      'Amity University Online is recognized as one of the top private universities in India...',
    ranking: 'Top 10',
    location: 'Noida, Uttar Pradesh',
    established: '2005',
    fee: '₹1.2L - ₹2.5L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: [
      'UGC recognized',
      'NAAC A+ accreditation',
      'Industry partnerships',
      'Placement assistance',
      'Expert faculty',
      'Modern infrastructure',
    ],
    highlights: [
      'Over 100,000+ students worldwide',
      'Strong industry connections',
      'Innovative learning methods',
      'Comprehensive support services',
    ],
  },
  manipal: {
    name: 'Manipal University Online',
    logo: '/images/manipallogo.jpg',
    description:
      'Manipal University Online is a pioneer in digital learning...',
    ranking: 'Top 5',
    location: 'Manipal, Karnataka',
    established: '1953',
    fee: '₹1.5L - ₹3L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'MA', 'BA'],
    features: [
      'UGC recognized',
      'NAAC A++ accreditation',
      'International partnerships',
      'Career development',
      'Research focus',
      'Global alumni network',
    ],
    highlights: [
      '70+ years of excellence',
      'International collaborations',
      'Research-driven approach',
      'Strong placement record',
    ],
  },
};

function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// (metadata is generated below; keeping a single generateMetadata export)

export default async function UniversityPage({ params }) {
  const { slug } = params;

  let university = universityData[slug];
  if (!university) {
    const all = Object.values(universityData);
    university = all.find((u) => slugify(u.name) === slug);
  }
  if (!university) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Image
              width={100}
              height={100}
              src={university.logo}
              alt={`${university.name} logo`}
              className="w-20 h-20 object-contain rounded-lg mr-6"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {university.name}
              </h1>
              <p className="text-xl text-gray-600">{university.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Ranking</h3>
              <p className="text-[#00ffe0] font-bold">{university.ranking}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-[#00ffe0] font-bold">{university.location}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Established</h3>
              <p className="text-[#00ffe0] font-bold">
                {university.established}
              </p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Fee Range</h3>
              <p className="text-[#00ffe0] font-bold">{university.fee}</p>
            </div>
          </div>
        </div>

        {/* Courses & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Available Courses
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {university.courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg text-center"
                >
                  <span className="font-semibold text-gray-900">{course}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {university.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#00ffe0] mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            University Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {university.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#00ffe0] mr-3 mt-1">🏆</span>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center">
          <Link
            href="/bookdemo"
            className="bg-[#00ffe0] text-[#001e3c] px-8 py-3 rounded-full font-semibold hover:bg-[#00e6cc] transition-colors mr-4"
          >
            Book Demo
          </Link>
          <Link
            href="/listofcollege"
            className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
          >
            Explore More Universities
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  let university = universityData[slug];
  if (!university) {
    const all = Object.values(universityData);
    university = all.find((u) => slugify(u.name) === slug);
  }
  if (!university) return {};

  // Dynamic, unique title
  const pageTitle = `${university.name} Online | ${university.courses.join(', ')} Courses, Fees & Admission in ${university.location}`;

  const pageDescription = `${university.name} offers online programs (${university.courses.join(
    ', '
  )}) with NAAC/UGC recognition. Learn from expert faculty, benefit from placement support, and study flexibly from ${university.location}.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://unifostedu.com/universities/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: [university.logo],
      url: `https://unifostedu.com/universities/${slug}`,
    },
  };
}

// Provide static params for export builds
export function generateStaticParams() {
  const params = [];
  Object.keys(universityData).forEach((key) => {
    params.push({ slug: key });
    const u = universityData[key];
    const slugified = slugify(u.name);
    if (slugified !== key) params.push({ slug: slugified });
  });
  return params;
}

