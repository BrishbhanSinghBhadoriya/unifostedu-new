"use client";
import Link from "next/link";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const UniversityList = [
  {
    name: "Amity University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amitylogo_nfe7fa.webp",
    ranking: "NIRF-29",
    location: "Noida, UP",
    fee: "₹99,000 - ₹2,99,000",
    courses: ["MBA", "MCA", "M.Sc", "M.Com", "MA", "MAJMC", "BBA", "BCA", "B.Com", "BA", "BAJMC"],
    description: "One of India's leading private universities with comprehensive online programs.",
    link: "/amity",
  },
  {
    name: "Manipal University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg",
    ranking: "NIRF-73",
    location: "Jaipur, Rajasthan",
    fee: "₹99,000 - ₹1,75,000",
    courses: ["MBA", "MCA", "M.Com", "BBA", "BCA", "B.Com"],
    description: "Pioneer in online education with industry-aligned curriculum.",
    link: "/manipal",
  },
  {
    name: "Manipal Academic of Higher Education",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg",
    ranking: "NIRF-73",
    location: "Jaipur, Rajasthan",
    fee: "₹1,80,000 - ₹2,94,000",
    courses: ["BBA", "B.Com"],
    description: "Top-ranked institution offering high-quality online education.",
    link: "/mahe-online",
  },
  {
    name: "Lovely Professional University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329087/lpulogo_vdgb4x.png",
    ranking: "NIRF-38",
    location: "Phagwara, Punjab",
    fee: "₹80,000 - ₹2,00,000",
    courses: ["MBA", "MCA", "M.Sc", "M.Com", "MA", "BBA", "BCA", "B.Com", "BA"],
    description: "Known for practical learning and strong industry connections.",
    link: "/lpu-online",
  },
  {
    name: "University of Petroleum and Energy Studies Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327864/upeslogo_o2apk7.webp",
    ranking: "NIRF-41",
    location: "Dehradun, Uttarakhand",
    fee: "₹1,50,000 - ₹2,20,000",
    courses: ["MBA", "MCA", "BBA", "BCA"],
    description: "Specialized online programs with strong industry relevance.",
    link: "/upes",
  },
  {
    name: "Narsee Monjee Institute of Management Studies Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327723/nmimslogo_sqp2fz.webp",
    ranking: "NIRF-21",
    location: "Mumbai, Maharashtra",
    fee: "₹94,000 - ₹1,96,000",
    courses: ["MBA", "BBA", "B.Com"],
    description: "Premier management institute with strong online offerings.",
    link: "/nmims",
  },
  {
    name: "Sharda University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/shardalogos_fecyer.webp",
    ranking: "NIRF-87",
    location: "Greater Noida, UP",
    fee: "₹50,000 - ₹1,60,000",
    courses: ["MBA", "M.Com", "MCA", "MA", "BBA", "BCA", "B.Com", "BA"],
    description: "Affordable quality education with modern online infrastructure.",
    link: "/sharda",
  },
  {
    name: "Dr. DY Patil Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatillogo_uxdfid.webp",
    ranking: "NIRF-63",
    location: "Navi Mumbai, Maharashtra",
    fee: "₹1,40,000 - ₹1,89,400",
    courses: ["MBA", "MCA", "BBA"],
    description: "Established university with diverse online program portfolio.",
    link: "/dypatil",
  },
  {
    name: "Jain University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327240/jainlogo_ey9e8p.webp",
    ranking: "NIRF-77",
    location: "Bangalore, Karnataka",
    fee: "₹80,000 - ₹2,16,000",
    courses: ["MBA", "MCA", "M.Com", "M.Sc", "MA", "BBA", "BCA", "B.Com"],
    description: "Innovative learning approaches with strong academic foundation.",
    link: "/jain",
  },
  {
    name: "Chandigarh University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp",
    ranking: "NIRF-36",
    location: "Chandigarh",
    fee: "₹75,000 - ₹2,10,000",
    courses: ["MBA", "MCA", "M.Sc", "MA", "MAJMC", "BBA", "BCA", "B.Com", "BA", "BAJMC"],
    description: "Northern India's prominent university with online programs.",
    link: "/cuOnline",
  },
  {
    name: "Sikkim Manipal University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
    ranking: "NIRF-73",
    location: "Sikkim",
    fee: "₹75,000 - ₹1,10,000",
    courses: ["MBA", "MCA", "M.Com", "MA", "BBA", "BCA", "B.Com", "BA"],
    description: "One of India's leading private universities with comprehensive online programs.",
    link: "/smu",
  },
  {
    name: "VGU Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgu1_ieijw9.webp",
    ranking: "NIRF-73",
    location: "Jaipur, Rajasthan",
    fee: "₹72,000 - ₹2,40,000",
    courses: ["MBA", "MCA", "M.Sc", "BBA", "BCA", "B.Com", "BA", "MAJMC"],
    description: "Leading private university with diverse online programs.",
    link: "/vgu",
  },
  {
    name: "Uttaranchal University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp",
    ranking: "NIRF-73",
    location: "Dehradun, Uttarakhand",
    fee: "₹72,000 - ₹1,40,000",
    courses: ["MBA", "MCA", "BBA", "BCA", "B.Com", "BA", "MA"],
    description: "One of India's leading private universities with comprehensive online programs.",
    link: "/uu",
  },
  {
    name: "Kurukshetra University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327280/ku_xu5nkx.webp",
    ranking: "NIRF-73",
    location: "Kurukshetra, Haryana",
    fee: "₹54,036 - ₹1,19,845",
    courses: ["MBA", "M.Com", "MCA", "MA", "BBA", "BCA", "B.Com", "BA"],
    description: "One of India's leading private universities with comprehensive online programs.",
    link: "/ku-online",
  },
  {
    name: "OP Jindal University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp",
    ranking: "NIRF-73",
    location: "Sonipat, Haryana",
    fee: "₹90,000 - ₹3,00,000",
    courses: ["MBA", "BBA"],
    description: "One of India's leading private universities with comprehensive online programs.",
    link: "/opjindal",
  },
  {
    name: "Shoolini University Online",
    logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327856/shoolini_txvq6k.webp",
    ranking: "NIRF-73",
    location: "Solan, Himachal Pradesh",
    fee: "₹42,000 - ₹1,40,000",
    courses: ["MBA", "M.Sc", "MA", "MAJMC", "BBA", "BCA", "B.Com", "BA", "BAJMC"],
    description: "One of India's leading private universities with comprehensive online programs.",
    link: "/shoolini",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type University = (typeof UniversityList)[number];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function UniversityListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Top Partner{" "}
            <span className="text-[#00ffe0]">Universities</span> in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top universities offering online programs across India.
            Compare rankings, fees, and course offerings to find your perfect
            fit. We are partnered with top universities in India to provide you
            the best online programs.
          </p>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UniversityList.map((college: University, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                {/* Logo + Name */}
                <div className="flex items-center mb-4">
                  <Image
                    width={100}
                    height={100}
                    loading="lazy"
                    src={college.logo}
                    alt={`${college.name} logo`}
                    className="w-16 h-16 object-contain rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {college.name}
                    </h2>
                    <p className="text-sm text-gray-600">{college.location}</p>
                  </div>
                </div>

                {/* Ranking + Fee */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
                    {college.ranking}
                  </span>
                  <span className="text-gray-700 font-medium">{college.fee}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {college.description}
                </p>

                {/* Courses */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Available Courses:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course: string, courseIndex: number) => (
                      <span
                        key={courseIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={college.link}
                  className="block w-full bg-[#00ffe0] text-[#001e3c] text-center py-2 px-4 rounded-lg font-semibold hover:bg-[#00e6cc] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can not find what you are looking for? Contact our counselors for
            personalized guidance.
          </p>
          <Link
            href="/bookdemo"
            className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
          >
            Get Free Counseling
          </Link>
        </div>
      </div>
    </div>
  );
}