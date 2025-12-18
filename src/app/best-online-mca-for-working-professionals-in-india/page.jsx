'use client';

import React, { useState } from 'react';
import { 
  Check, 
  CheckCircle,
  Clock, 
  Laptop, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  Globe, 
  DollarSign, 
  Building,
  ChevronDown,
  ExternalLink,
  IndianRupee,
  ChevronRight,
  Play,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  Shield,
  TrendingUp,
  Zap,
  Bookmark,
  Calendar,
  Video,
  Code,
  Database,
  Cloud,
  Cpu,
  Lock,
  Network,
  Smartphone,
  FileCode,
  Server,
  BarChart,
  Users as UsersIcon,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import Link from 'next/link';
const OnlineMCADegreePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openModal, setOpenModal] = useState(null);
  const mcaOnlineData = {
  "mca-online": {
    "title": "MCA Online",
    "subtitle": "Master of Computer Applications",
    "description": "Advance your tech career with an industry-aligned MCA program offered by top online universities.",
    "duration": "3 Years",
    "fee": "₹1,00,000 - ₹2,50,000",
    "eligibility": "BCA/B.Sc (CS/IT) or Graduation with Mathematics/Computer Science ,related courses with 50% marks",
    "features": [
      "Hands-on projects",
      "Specializations in emerging tech",
      "Expert faculty from industry",
      "Flexible schedules",
      "Career support"
    ],
    "universities": [
      {
        "name": "Manipal University",
        "location": "Jaipur, Rajasthan",
        "NIRF": "N/A",
        "rating": 4.8,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp",
        "specializations": ["AI & Data Science", "Cyber Security", "Cloud Computing", "Comprehensive Emerging Technologies", "AI & ML"],
        "fee": "₹1,58,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Industry Projects", "Career Services", "Flexible Learning"]
      },
      {
        "name": "LPU Online",
        "location": "Punjab",
        "NIRF": "N/A",
        "rating": 4.5,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp",
        "specializations": ["Machine Learning & Artificial Intelligence (ML & AI)", "Data Science", "Cybersecurity", "Full Stack Web Development", "Augmented Reality/Virtual Reality (AR/VR) & Game Development"],
        "fee": "₹1,48,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Affordable Education", "Practical Curriculum", "Career Guidance"]
      },
      {
        "name": "Amity University",
        "location": "Noida, Uttar Pradesh",
        "NIRF": "29",
        "rating": 4.4,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        "specializations": ["Cyber Security","Data Science", "Blockchain", "AI/ML", "Networking","3 more"],
        "fee": "₹1,70,000-2,50,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Live Classes", "Placement Support", "Industry Faculty"]
      },
      {
        "name": "UPES Online",
        "location": "Dehradun, Uttarakhand",
        "NIRF": "N/A",
        "rating": 4.3,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp",
        "specializations": ["Artificial Intelligence and Machine Learning", "Cyber Security and Forensics", "Data Science"],
        "fee": "₹1,70,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Cyber Security","Data Science", "Blockchain", "AI/ML", "Networking"]
      },
      {
        "name": "Chandigarh University",
        "location": "Mohali, Punjab",
        "NIRF": "36",
        "rating": 4.3,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp",
        "specializations": ["Computer Science", "Data Science", "Software Engineering", "AI & ML","more"],
        "fee": "₹1,40,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Quality Education", "Industry Projects", "Career Support"]
      },
      {
        "name": "Jain University",
        "location": "Bangalore, Karnataka",
        "NIRF": "N/A",
        "rating": 4.4,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp",
        "specializations": ["DevOps", "Natuaral Language Processing & Large Language Models Development", "Computer Science and IT", "Data Analytics", "Cyber Security","Full Stack Development","Cloud Computing","Data Science","Artificial Intelligence"],
        "fee": "₹1,60,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Modern Curriculum", "Industry Projects", "Career Services"]
      },
      {
        "name": "DYPATIL University",
        "location": "Pune, Maharashtra",
        "NIRF": "N/A",
        "rating": 4.3,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp",
        "specializations": ["General"],
        "fee": "₹1,40,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Industry Connect", "Practical Learning", "Career Support"]
      },
      {
        "name": "VGU",
        "location": "Jaipur, Rajasthan",
        "NIRF": "N/A",
        "rating": 4.1,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgu1_ieijw9.webp",
        "specializations": ["Software Engineering & Development", "Data Science & Analytics", "Cyber Security", "Cloud & Devops", "web & App Development", "Blockchain & Emerging Technologies", "Database Management"],
        "fee": "₹1,50,000",
        "duration": "3 Years",
        "accreditation": "UGC Approved",
        "features": ["Quality Education", "Industry Projects", "Career Support"]
      },
      {
        "name": "Sharda University",
        "location": "Greater Noida, Uttar Pradesh",
        "NIRF": "N/A",
        "rating": 4.2,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp",
        "specializations": ["Data Science", "Computer Science and Information Technology"],
        "fee": "₹1,00,000",
        "duration": "3 Years",
        "accreditation": "UGC Approved",
        "features": ["Experienced Faculty", "Industry Exposure", "Career Guidance"]
      },
      {
        "name": "Kurukshetra University",
        "location": "Kurukshetra, Haryana",
        "NIRF": "N/A",
        "rating": 4.1,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327281/k-uni_xnjbyz.webp",
        "specializations": ["Computer Science", "Data Science", "AI & ML", "Software Engineering"],
        "fee": "₹76,667",
        "duration": "3 Years",
        "accreditation": "UGC Approved",
        "features": ["Affordable Education", "Quality Learning", "Career Guidance"]
      },
      {
        "name": "Sikkim Manipal University",
        "location": "Gangtok, Sikkim",
        "NIRF": "N/A",
        "rating": 4.2,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp",
        "specializations": ["General"],
        "fee": "₹98,000",
        "duration": "2 Years",
        "accreditation": "UGC Approved",
        "features": ["Expert Faculty", "Career Services", "Flexible Learning"]
      },
      {
        "name": "Uttaranchal University",
        "location": "Dehradun, Uttarakhand",
        "NIRF": "N/A",
        "rating": 4.1,
        "image": "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp",
        "specializations": ["General"],
        "fee": "₹1,20,000",
        "duration": "3 Years",
        "accreditation": "UGC Approved",
        "features": ["Quality Education", "Industry Projects", "Career Support"]
      }
    ]
  }
};
 
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState('rating');

  const { title, subtitle, description, features, universities } = mcaOnlineData['mca-online'];

  const sortedUniversities = [...universities].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'fee') {
      const feeA = parseInt(a.fee.replace(/[^0-9]/g, '')) || 0;
      const feeB = parseInt(b.fee.replace(/[^0-9]/g, '')) || 0;
      return feeA - feeB;
    }
    return a.name.localeCompare(b.name);
  });

  const displayedUniversities = showAll ? sortedUniversities : sortedUniversities.slice(0, 6);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'bg-green-100 text-green-800';
    if (rating >= 4.0) return 'bg-blue-100 text-blue-800';
    if (rating >= 3.5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getNIRFColor = (nirf) => {
    if (nirf === 'N/A') return 'bg-gray-100 text-gray-800';

    const rank = parseInt(nirf);
    if (rank <= 50) return 'bg-green-100 text-green-800';
    if (rank <= 100) return 'bg-blue-100 text-blue-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  const programHighlights = [
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "100% Flexibility", 
      description: "Study at your own pace with recorded lectures available 24/7. No fixed classroom timings or rigid schedules.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      title: "Learn While Working", 
      description: "Designed for full-time employees. No need to quit your job or take a career break.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      title: "Industry-Relevant Curriculum", 
      description: "Updated curriculum covering latest technologies like AI, Cloud Computing, Cybersecurity, and Data Science.",
      color: "from-purple-500 to-violet-500"
    },
    { 
      icon: <FaRupeeSign className="w-8 h-8" />, 
      title: "Affordable & Accessible", 
      description: "Lower cost than traditional programs. No hostel fees, travel expenses, or hidden charges.",
      color: "from-amber-500 to-orange-500"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "Employer Recognized", 
      description: "Valued by top companies for discipline, commitment, and time management skills.",
      color: "from-red-500 to-pink-500"
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: "Study Anywhere", 
      description: "Access from metro cities, small towns, or villages. No relocation required.",
      color: "from-indigo-500 to-blue-700"
    }
  ];

  const curriculumSubjects = [
    {
      category: "Programming & Coding",
      icon: <Code className="w-6 h-6" />,
      subjects: [
        "Python Programming",
        "Java & Advanced Java",
        "C++ & Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Advanced Programming Concepts"
      ],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Software Development",
      icon: <FileCode className="w-6 h-6" />,
      subjects: [
        "Software Engineering",
        "Web Technologies (HTML5, CSS3, JavaScript)",
        "Full-Stack Development",
        "Mobile App Development",
        "Agile & DevOps Practices"
      ],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Advanced Technologies",
      icon: <Cpu className="w-6 h-6" />,
      subjects: [
        "Cloud Computing (AWS, Azure, GCP)",
        "Artificial Intelligence & Machine Learning",
        "Cybersecurity & Ethical Hacking",
        "Internet of Things (IoT)",
        "Blockchain Fundamentals"
      ],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Data Management",
      icon: <Database className="w-6 h-6" />,
      subjects: [
        "SQL & Advanced Database Management",
        "NoSQL Databases (MongoDB, Cassandra)",
        "Data Analytics & Visualization",
        "Big Data & Hadoop Ecosystem",
        "Data Warehousing & Mining"
      ],
      color: "bg-amber-100 text-amber-800"
    },
    {
      category: "IT Management",
      icon: <Server className="w-6 h-6" />,
      subjects: [
        "IT Project Management",
        "IT Infrastructure Management",
        "Network Administration",
        "System Administration",
        "IT Service Management"
      ],
      color: "bg-red-100 text-red-800"
    },
    {
      category: "Emerging Technologies",
      icon: <Zap className="w-6 h-6" />,
      subjects: [
        "Data Science & Predictive Analytics",
        "Deep Learning & Neural Networks",
        "Cloud Security",
        "Microservices Architecture",
        "Containerization (Docker, Kubernetes)"
      ],
      color: "bg-cyan-100 text-cyan-800"
    }
  ];

  const careerOpportunities = [
    { role: "Software Developer", icon: <Code />, salary: "₹6-15 LPA", demand: "High" },
    { role: "System Analyst", icon: <BarChart />, salary: "₹8-18 LPA", demand: "High" },
    { role: "Database Administrator", icon: <Database />, salary: "₹7-16 LPA", demand: "High" },
    { role: "Cloud Engineer", icon: <Cloud />, salary: "₹9-20 LPA", demand: "Very High" },
    { role: "Web Developer", icon: <FileCode />, salary: "₹5-12 LPA", demand: "High" },
    { role: "IT Project Manager", icon: <UsersIcon />, salary: "₹12-25 LPA", demand: "High" },
    { role: "Mobile App Developer", icon: <Smartphone />, salary: "₹6-14 LPA", demand: "High" },
    { role: "Cybersecurity Analyst", icon: <Lock />, salary: "₹8-18 LPA", demand: "Very High" },
    { role: "Data Scientist", icon: <Cpu />, salary: "₹10-22 LPA", demand: "Very High" },
    { role: "Technical Consultant", icon: <MessageSquare />, salary: "₹8-20 LPA", demand: "High" },
    { role: "Network Engineer", icon: <Network />, salary: "₹6-15 LPA", demand: "High" },
    { role: "AI/ML Engineer", icon: <Cpu />, salary: "₹12-25 LPA", demand: "Very High" }
  ];

  const programStructure = [
    { 
      semester: "Semester 1", 
      subjects: ["Programming Fundamentals", "Discrete Mathematics", "Computer Organization", "Operating Systems", "Web Technologies"], 
      focus: "Foundation Building",
      projects: ["Basic Web Application", "Algorithm Implementation"]
    },
    { 
      semester: "Semester 2", 
      subjects: ["Data Structures", "Database Management", "Object-Oriented Programming", "Software Engineering", "Computer Networks"], 
      focus: "Core Concepts",
      projects: ["Database Design Project", "Network Simulation"]
    },
    { 
      semester: "Semester 3", 
      subjects: ["Advanced Algorithms", "Cloud Computing", "Mobile Computing", "Cyber Security", "Elective I"], 
      focus: "Advanced Technologies",
      projects: ["Cloud Deployment", "Mobile App Development"]
    },
    { 
      semester: "Semester 4", 
      subjects: ["Artificial Intelligence", "Big Data Analytics", "Project Work", "Elective II", "Elective III"], 
      focus: "Specialization & Projects",
      projects: ["Capstone Project", "Industry Internship"]
    }
  ];

  const electives = [
    { name: "Machine Learning & Deep Learning", category: "AI/ML" },
    { name: "Internet of Things", category: "Emerging Tech" },
    { name: "Blockchain Technology", category: "Emerging Tech" },
    { name: "DevOps & CI/CD", category: "Development" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Business Intelligence", category: "Data" },
    { name: "Quantum Computing Basics", category: "Advanced" }
  ];

  const targetAudience = [
    { category: "IT Professionals", description: "Working in IT wanting promotions or skill upgrades", count: "40%" },
    { category: "Recent Graduates", description: "BCA, B.Sc. IT, CS graduates starting careers", count: "25%" },
    { category: "Career Changers", description: "Engineers/non-IT professionals switching to IT", count: "20%" },
    { category: "Entrepreneurs", description: "Tech entrepreneurs needing formal education", count: "10%" },
    { category: "International Students", description: "NRIs/foreign students wanting Indian degree", count: "5%" }
  ];

  const placementSupport = [
    { service: "Resume Building", description: "Professional resume crafting with ATS optimization", icon: <FileCode /> },
    { service: "Interview Preparation", description: "Mock interviews with industry experts", icon: <MessageSquare /> },
    { service: "Technical Tests", description: "Practice tests for coding interviews", icon: <Code /> },
    { service: "Career Counseling", description: "One-on-one career guidance sessions", icon: <UsersIcon /> },
    { service: "Internship Assistance", description: "Guaranteed internship opportunities", icon: <Briefcase /> },
    { service: "Job Portal Access", description: "Exclusive access to job portal with 500+ companies", icon: <Globe /> }
  ];

  const keyFeatures = [
    { title: "Live Interactive Sessions", description: "Weekly live classes with faculty", icon: <Video /> },
    { title: "Recorded Lectures", description: "Access recordings anytime, anywhere", icon: <Play /> },
    { title: "Virtual Labs", description: "Cloud-based labs for practical learning", icon: <Server /> },
    { title: "24/7 Doubt Support", description: "Round-the-clock academic support", icon: <HelpCircle /> },
    { title: "Peer Learning", description: "Collaborative projects and discussions", icon: <Users /> },
    { title: "Industry Projects", description: "Real-world projects from companies", icon: <Target /> }
  ];

  const admissionProcess = [
    { step: 1, title: "Application Form", description: "Fill online application with basic details" },
    { step: 2, title: "Document Submission", description: "Upload educational certificates and ID proof" },
    { step: 3, title: "Admission Offer", description: "Receive admission letter and fee structure" },
    { step: 4, title: "Fee Payment", description: "Pay fees and access learning platform" }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Software Engineer at TCS", quote: "This program helped me switch from support to development role with 60% salary hike.", avatar: "RK" },
    { name: "Priya Sharma", role: "Data Analyst at Amazon", quote: "Balanced my job and studies perfectly. The flexible schedule was a lifesaver.", avatar: "PS" },
    { name: "Amit Patel", role: "Cloud Engineer at Microsoft", quote: "Industry-relevant curriculum with hands-on projects made me job-ready.", avatar: "AP" },
    { name: "Sneha Reddy", role: "IT Manager at Infosys", quote: "The degree was recognized by my company and led to immediate promotion.", avatar: "SR" }
  ];

  const faqs = [
    { question: "Is the online MCA degree UGC recognized?", answer: "Yes, our program is recognized by UGC and approved by AICTE." },
    { question: "Can I attend classes on mobile?", answer: "Yes, our platform is mobile-responsive with dedicated apps for Android and iOS." },
    { question: "What is the duration of the program?", answer: "The program duration is 2 years (4 semesters) with flexible completion options." },
    { question: "Are there any offline requirements?", answer: "No, the entire program is 100% online including exams and project submissions." },
    { question: "What are the eligibility criteria?", answer: "Graduation in any discipline with Mathematics at 10+2 level or graduation level." },
    { question: "Is placement assistance provided?", answer: "Yes, we provide comprehensive placement support with 85% placement rate." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold text-gray-900">Online MCA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium">Overview</a>
              <a href="#curriculum" className="text-gray-700 hover:text-blue-600 font-medium">Curriculum</a>
              <a href="#careers" className="text-gray-700 hover:text-blue-600 font-medium">Careers</a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-600 font-medium">Admissions</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
            <button 
              onClick={() => setOpenModal({ type: 'apply' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-12 lg:mb-0">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="text-sm">UGC Recognized • AICTE Approved</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Best Online MCA Degree for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Working Professionals</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl">
                  Advance your IT career with India's #1 flexible online MCA program. 
                  Designed for working professionals who want quality education without compromising their jobs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Apply for January 2026 Batch
                  </button>
                  <button 
                    onClick={() => setOpenModal({ type: 'enquiry' })}
                    className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Enquiry MCA Program 
                  </button>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>100% Online</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>Flexible Schedule</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>Industry Projects</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>Placement Assistance</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-white/20">
                      <span className="text-blue-200">Duration</span>
                      <span className="font-semibold">2 Years</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/20">
                      <span className="text-blue-200">Mode</span>
                      <span className="font-semibold">100% Online</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/20">
                      <span className="text-blue-200">Eligibility</span>
                      <span className="font-semibold">Graduation</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/20">
                      <span className="text-blue-200">Next Batch</span>
                      <span className="font-semibold">January, 2026</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/20">
                      <span className="text-blue-200">Average Salary</span>
                      <span className="font-semibold">₹8-15 LPA</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 rounded-lg font-bold transition duration-300">
                    Download Detailed Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Working Professionals Enrolled</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Hiring Partners</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Learning Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Online MCA?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Designed specifically for working professionals who need flexibility without compromising quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Covering all essential subjects with hands-on projects and industry-relevant content
            </p>
          </div>

          {/* Curriculum Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {['all', 'programming', 'development', 'advanced', 'data', 'management'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                    activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {curriculumSubjects.map((subjectGroup, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center mb-4"> 
                    <div className={`p-2 rounded-lg ${subjectGroup.color} mr-3`}>
                      {subjectGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{subjectGroup.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {subjectGroup.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Learning Outcomes:</span> Hands-on projects, coding assignments, and industry case studies
                  </div>
                </div>
              </div>
            ))}
          </div>
      <section id="universities" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 mr-2" />
            <span className="font-medium">Top Online Programs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}: <span className="text-blue-600">{subtitle}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {description}
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {universities.length} Universities Offering Online MCA
            </h3>
            <p className="text-gray-600">UGC Approved • Industry-aligned Curriculum • Flexible Learning</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Highest Rating</option>
                <option value="fee">Lowest Fee</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedUniversities.map((university, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                expandedCard === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* University Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getRatingColor(university.rating)}`}>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {university.rating}/5
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getNIRFColor(university.NIRF)}`}>
                    NIRF {university.NIRF}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{university.name}</h3>
                  <div className="flex items-center text-white/90 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{university.location}</span>
                  </div>
                </div>
              </div>

              {/* University Details */}
              <div className="p-6">
                {/* Fee and Duration */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="flex items-center text-gray-600 mb-1">
                      <IndianRupee className="w-5 h-5" />
                      <span className="ml-1 text-sm">Total Fee</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{university.fee}</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="flex items-center text-gray-600 mb-1 justify-center">
                      <Clock className="w-5 h-5 mr-1" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{university.duration}</div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-700 font-semibold mb-3">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Specializations Offered
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {university.specializations.slice(0, 3).map((spec, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                    {university.specializations.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        +{university.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-700 font-semibold mb-3">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Key Features
                  </div>
                  <div className="space-y-2">
                    {university.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accreditation */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="font-medium text-gray-900">Accreditation</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {university.accreditation}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => toggleCard(index)}
                    className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
                  >
                    {expandedCard === index ? 'Show Less' : 'View Details'}
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${expandedCard === index ? 'rotate-180' : ''}`} />
                  </button>
                  <button  onClick={() => setOpenModal({ type: 'apply' })} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center">
                    Apply Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedCard === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-purple-600" />
                      Full Specializations List
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {university.specializations.map((spec, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-900 mb-2 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" />
                        Placement & Career Support
                      </h5>
                      <p className="text-blue-800 text-sm">
                        This program includes comprehensive placement assistance, resume building, 
                        interview preparation, and access to exclusive job portals with top companies.
                      </p>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <button onClick={()=> setOpenModal({type:'apply'})} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Download University Brochure →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {universities.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 flex items-center mx-auto"
            >
              {showAll ? 'Show Less Universities' : `View All ${universities.length} Universities`}
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Information Footer */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Program Eligibility</h4>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Minimum 50% marks in graduation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>BCA/B.Sc (CS/IT) or related field</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Why Choose Online MCA?</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>No career break required</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Learn from top industry experts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>UGC recognized degrees</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Need Guidance?</h4>
              <p className="text-blue-100 mb-4">
                Our education counselors can help you choose the right university based on your career goals and budget.
              </p>
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold w-full transition duration-300">
                Get Free Counseling
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>

          {/* Program Structure */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Program Structure (4 Semesters)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programStructure.map((semester, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">{semester.semester}</h4>
                    <div className="text-sm text-blue-600 font-medium mt-1">{semester.focus}</div>
                  </div>
                  <div className="space-y-3">
                    {semester.subjects.map((subject, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        {subject}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs font-medium text-gray-500 mb-2">Projects:</div>
                    <div className="text-sm text-gray-700">{semester.projects.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="careers" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Opportunities & Placements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unlock high-paying roles in top companies with our comprehensive placement support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {careerOpportunities.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {job.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.demand === 'Very High' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {job.demand} Demand
                  </span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{job.role}</h4>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaRupeeSign className="w-4 h-4 mr-1" />
                  <span className="font-medium">{job.salary}</span>
                </div>
                <button className="w-full text-center text-blue-600 hover:text-blue-800 font-medium text-sm py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition duration-300">
                  View Job Details
                </button>
              </div>
            ))}
          </div>

          {/* Placement Support */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Comprehensive Placement Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placementSupport.map((service, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition duration-300">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{service.service}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admissions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              6 easy steps to start your journey toward career advancement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
              
              <div className="space-y-8">
                {admissionProcess.map((step, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                            {step.step}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-12 h-12 bg-blue-100 border-4 border-white rounded-full flex items-center justify-center z-10">
                        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our next batch starting April 15, 2024. Limited seats available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg transition duration-300"
                >
                  Apply Now - Free Consultation
                </button>
                <button onClick=
                {() =>setOpenModal({ type: 'apply'})} className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-lg transition duration-300">
                  Talk to Admission Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="py-16 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* Contact Info */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Have questions about the program? Our admission counselors are here to help you make the right decision for your career.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
            <div>
              <div className="font-medium">Call Us</div>
              <div className="text-gray-300">+91 7042646766</div>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
            <div>
              <div className="font-medium">Email Us</div>
              <div className="text-gray-300">info@unifostedu.com</div>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
            <div>
              <div className="font-medium">Office Address</div>
              <div className="text-gray-300">
                Sector-16, LOGIX Park, Noida (UP), India
              </div>
            </div>
          </div>
           <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
              <span className="text-xl font-bold text-white">Online MCA University</span>
            </div>
        </div>
      </div>

      {/* University Quick Links */}
      <div>
  <h2 className="text-3xl font-bold mb-6">University Pages</h2>
  <p className="text-gray-300 mb-6">
    Explore top universities offering Online MCA programs.
  </p>

  {/* Grid – 1 column mobile, 2 columns on md+ */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <Link href="/Amity-University-Online">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Amity University Online</span>
      </div>
    </Link>

    <Link href="/manipal">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 text-white-400 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Manipal University Online</span>
      </div>
    </Link>

    <Link href="/lpu-online">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Lovely Professional University</span>
      </div>
    </Link>

    <Link href="/jain">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Jain University Online</span>
      </div>
    </Link>

    <Link href="/upes">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">UPES University Online</span>
      </div>
    </Link>

    <Link href="/cuOnline">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Chandigarh University Online</span>
      </div>
    </Link>

    <Link href="/dypatil">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Dy Patil University Online</span>
      </div>
    </Link>

    <Link href="/sharda">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Sharda University Online</span>
      </div>
    </Link>

    <Link href="/smu">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Sikkim Manipal University</span>
      </div>
    </Link>

    <Link href="/vgu">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Vivekananda Global University</span>
      </div>
    </Link>

    <Link href="/ku-online">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Kurukshetra University Online</span>
      </div>
    </Link>

    <Link href="/uu">
      <div className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <span className="text-blue-400 font-semibold text-base">Uttaranchal University</span>
      </div>
    </Link>

  </div>
</div>


    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
           
            <div className="text-sm">
              © 2026 Online MCA Degree Program. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">FAQ</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Application Modal */}
      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={
            openModal.type === "apply"
              ? "Start Your Application"
              : "Enquire Now"
          }
          subtitle={
            openModal.type === "apply"
              ? "Fill the quick form to begin your admission process"
              : "Share your details and our counselor will reach out"
          }
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1765519549/mcaCources_fhodam.jpg"
          universityName="Online MCA University"
          defaultProgram="Online MCA"
          formType={openModal.type === "apply" ? "getStarted" : "general"}
        />
      )}
    </div>
  );
};

export default OnlineMCADegreePage;