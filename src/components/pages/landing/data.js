// Centralized data and helpers for the Landing page

import { FaBook, FaUniversity, FaGraduationCap, FaBriefcase, FaBookOpen, FaGlobe, FaUserTie, FaCompass } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

export const heroSlides = [
  {
    src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327967/slider-1_pjehj7.webp",
    alt: "Compare before you decide",
    width: 1200,
    height: 800,
    title: "Your Gateway to Success",
    subtitle: "Compare • Choose • Succeed",
    description: "Find the perfect online degree program from India's top-ranked universities. Get expert guidance to make informed decisions for your academic future.",
  },
  {
    src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762602023/slider-2_ritvxe.webp",
    alt: "Your One-Stop Platform for Online Universities",
    width: 1200,
    height: 800,
    title: "Transform Your Future",
    subtitle: "Online Education Excellence",
    description: "Access world-class education from anywhere, anytime. Study with industry experts and get recognized degrees from UGC-approved universities.",
  },
  {
    src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762602052/slider-3_o7o8qw.webp",
    alt: "Search • Compare • Choose • Succeed",
    width: 1200,
    height: 800,
    title: "Smart Education Choices",
    subtitle: "Expert Guidance • Best Programs",
    description: "Get personalized counseling from education experts. Compare courses, fees, and career prospects to choose the best program for your goals.",
  },
  {
    src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762602053/slider-4_jloprr.webp",
    alt: "Compare universities with Unifost",
    width: 1200,
    height: 800,
    title: "Ye College Ya Woh College?",
    subtitle: "Compare on Unifost!",
    description: "Compare fees, rankings, courses, and location — instantly. Make data-driven decisions with our comprehensive university comparison tool.",
  },
];

export const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular", icon: FaGraduationCap, duration: "2 Years", students: "PG", color: "from-blue-500 to-purple-600" },
  { title: "MSC Online", desc: "Advanced science and technology programs", tag: "Science", icon: FaBook, duration: "2 Years", students: "PG", color: "from-teal-500 to-cyan-600" },
  { title: "MCA Online", desc: "Advance in tech with flexible learning", tag: "Top Rated", icon: FaBook, duration: "2 Years", students: "PG", color: "from-green-500 to-teal-600" },
  { title: "M.Com Online", desc: "Deepen commerce expertise", tag: "Best Value", icon: FaBriefcase, duration: "2 Years", students: "PG", color: "from-orange-500 to-red-600" },
  { title: "MA Online", desc: "Explore diverse specializations", tag: "Literature", icon: FaBookOpen, duration: "2 Years", students: "PG", color: "from-purple-500 to-pink-600" },
  { title: "MAJMC Online", desc: "Master journalism and mass communication", tag: "Media", icon: FaGlobe, duration: "2 Years", students: "PG", color: "from-indigo-500 to-blue-600" },
  { title: "BBA Online", desc: "Management fundamentals for the digital age", tag: "Career Starter", icon: MdPeople, duration: "3 Years", students: "UG", color: "from-emerald-500 to-green-600" },
  { title: "BCA Online", desc: "Build a career in software development", tag: "Trending", icon: FaBook, duration: "3 Years", students: "UG", color: "from-cyan-500 to-blue-600" },
  { title: "B.Com Online", desc: "Commerce education for business world", tag: "Business", icon: FaBriefcase, duration: "3 Years", students: "UG", color: "from-amber-500 to-orange-600" },
  { title: "BA Online", desc: "Liberal arts foundation for diverse careers", tag: "Arts", icon: FaBookOpen, duration: "3 Years", students: "UG", color: "from-rose-500 to-pink-600" },
  { title: "BAJMC Online", desc: "Journalism and mass communication basics", tag: "Media", icon: FaGlobe, duration: "3 Years", students: "UG", color: "from-violet-500 to-purple-600" },
];

export const stats = [
  { number: "5K+", label: "Students Enrolled", icon: MdPeople, color: "from-blue-500 to-teal-600" },
  { number: "25+", label: "Partner Universities", icon: FaUniversity, color: "from-blue-500 to-teal-600" },
  { number: "100%", label: "Success Rate", icon: FaUniversity, color: "from-blue-500 to-teal-600" },
  { number: "24/7", label: "Support Available", icon: MdPeople, color: "from-blue-500 to-teal-600" },
];

export const features = [
  { title: "Expert Counseling", description: "Get personalized guidance from education experts", icon: FaUserTie, color: "from-blue-500 to-teal-600" },
  { title: "Compare Programs", description: "Side-by-side comparison of courses and universities", icon: FaCompass, color: "from-blue-500 to-teal-600" },
  { title: "Flexible Learning", description: "Study at your own pace from anywhere", icon: FaGlobe, color: "from-blue-500 to-teal-600" },
  { title: "Career Support", description: "Get assistance with job placement and career guidance", icon: FaBriefcase, color: "from-blue-500 to-teal-600" },
];

export const colleges = [
  { name: "Amity University Online", ranking: "NIRF-29", fee: "₹0.99L - ₹3.45L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp", rating: 4.8 },
  { name: "Manipal University Online", ranking: "NIRF-73", fee: "0.99L - ₹2.92L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal1_ako6mq.webp", rating: 4.6 },
  { name: "Lovely Professional University Online", ranking: "NIRF-38", fee: "₹0.80L - ₹2.0L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp", rating: 4.1 },
  { name: "University of Petroleum and Energy Studies Online", ranking: "NIRF-41", fee: "₹1.50L - ₹2.20L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp", rating: 4.4 },
  { name: "Narsee Monjee Institute of Management Studies Online", ranking: "NIRF-21", fee: "₹0.94L - ₹4.0L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp", rating: 4.5 },
  { name: "Sharda University Online", ranking: "NIRF-87", fee: "₹1.05L - ₹1.60L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp", rating: 4.1 },
  { name: "Dr. DY Patil Online", ranking: "NIRF-63", fee: "₹1.40L - ₹1.90L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp", rating: 4.4 },
  { name: "Jain University Online", ranking: "NIRF-77", fee: "₹1.30L - ₹2.16L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp", rating: 4.5 },
  { name: "Chandigarh University Online", ranking: "NIRF-36", fee: "₹1.0L - ₹2.10L", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp", rating: 4.7 },
];

export const cities = [
  { city: "Delhi", state: "Delhi", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327127/delhi_lwsbb7.webp", students: "25K+" },
  { city: "Mumbai", state: "Maharashtra", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327509/mumbai_qa5xkf.webp", students: "22K+" },
  { city: "Bangalore", state: "Karnataka", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327054/banglore_pbamae.webp", students: "20K+" },
  { city: "Chennai", state: "Tamil Nadu", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/chennai_azdhll.webp", students: "18K+" },
  { city: "Hyderabad", state: "Telangana", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/hyderabad_o0oe5o.webp", students: "16K+" },
  { city: "Pune", state: "Maharashtra", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327853/pune_iyjiw5.webp", students: "15K+" },
  { city: "Kolkata", state: "West Bengal", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327279/kolkata_ud7zmw.webp", students: "14K+" },
  { city: "Ahmedabad", state: "Gujarat", img: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/ahemdabad_qwi2xy.webp", students: "12K+" },
];

export const accreditationLogos = [
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wasc_emgnvc.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/iacbe_pujpjb.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327031/aacsb_s1rybc.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/iqas_bieryy.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/unwto_ddlwkk.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327582/nabh_uqzuzo.webp",
];

export const universityLogos = [
  { name: "Amity University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328966/amitylogo_jdzznl.jpg" },
  { name: "Manipal University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329087/manipallogo_rxujwr.webp" },
  { name: "LPU Online", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329087/lpulogo_vdgb4x.png" },
  { name: "UPES Online", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329092/upeslogo_i1dwgp.png" },
  { name: "NMIMS Online", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329088/nmimslogo_blukfn.jpg" },
  { name: "Sharda University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329091/shardalogo_cmsla3.png" },
  { name: "DY Patil", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328967/dypatillogo_c8uqm7.png" },
  { name: "Jain University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328981/jainlogo_ewfeoy.png" },
  { name: "Chandigarh University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762328967/cu-logo_gunzgp.png" },
  { name: "Shoolini University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329091/shoolinilogo_jxkt71.png" },
  { name: "VGU Online", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329092/vgulogo_cg5pke.png" },
  { name: "OP Jindal University", logo: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762329099/opjindallogo_vksxpm.png" },

];

export const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

export const getCourseHref = (title) => {
  const map = {
    "MBA Online": "/courses/mba-online",
    "MSC Online": "/courses/msc-online",
    "BBA Online": "/courses/bba-online",
    "MCA Online": "/courses/mca-online",
    "BCA Online": "/courses/bca-online",
    "M.Com Online": "/courses/mcom-online",
    "B.Com Online": "/courses/bcom-online",
    "MA Online": "/courses/ma-online",
    "BA Online": "/courses/ba-online",
    "MAJMC Online": "/courses/majmc-online",
    "BAJMC Online": "/courses/bajmc-online",
  };
  return map[title] || "/coursesearch";
};

export const getUniversityHref = (name) => {
  const n = name.toLowerCase();
  if (n.includes("amity")) return "/Amity-University-Online";
  if (n.includes("manipal")) return "/manipal";
  if (n.includes("lovely professional") || n.includes("lpu")) return "/lpu";
  if (n.includes("petroleum") || n.includes("upes")) return "/upes";
  if (n.includes("narsee monjee") || n.includes("nmims")) return "/nmims";
  if (n.includes("sharda")) return "/sharda";
  if (n.includes("dy patil") || n.includes("d.y.")) return "/dypatil";
  if (n.includes("jain")) return "/jain";
  if (n.includes("chandigarh")) return "/chandigarh";
  if (n.includes("jindal")) return "/opjindal";
  if (n.includes("vivekananda global") || n.includes("vgu")) return "/vgu";
  if (n.includes("shoolini")) return "/shoolini";
  return "/University-List";
};


