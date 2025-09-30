'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EnquireCard from '@/components/EnquireCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaAward, FaGraduationCap, FaGlobe } from 'react-icons/fa';
import AccreditationSection from '@/components/AccreditationSection';
 import { 
  GraduationCap, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  Search
} from 'lucide-react';
import { FaBookOpen,  FaBook, FaUniversity, FaUserFriends, FaClipboardCheck,  FaUserTie, FaRobot, FaBriefcase } from "react-icons/fa";

import { Inter, Playfair_Display } from "next/font/google";
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
});




const AmityLandingPage = () => {
  const [openModal, setOpenModal] = useState(null);
    const ugCourses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,65,000- ₹2,25,000",
      specialization: "BBA (General, Data Analytics, Travel And Tourism Management, Professional Certificate in Business Analytics)",
      image: "/images/bba-online-image.webp",
      alt: "BBA from amity online university",
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹1,50,000 - ₹2,25,000",
      specialization: "BCA (General, Cloud and Security, Software Engineering, Data Science, Data Engineering(HCL Tech), Data Analytics, Software Engineering(HCL Tech))",
      image: "/images/bca-online-image.webp",
      alt: "BCA from amity online university",
    },
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹2,50,000",
      specialization: "B.Com (General, Hons, International Finance & Accounting)",
      image: "/images/bcom.webp",
      alt: "B.Com from amity online university",
    },
    {
      course: "Bachelor of Arts (BA)",
      duration: "3 Years",
      eligibility: "10+2 Pass",
      fees: "₹99,000 - ₹1,70,000",
      specialization: "BA (General, Journalism and Mass Communication, Native Languages(Kannada,Malayalam, Tamil, Telugu), Psychology, English, Sociology, Political Science, Economics)",
      image: "/images/ba.webp",
      alt: "BA from amity online university",
    
    },
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,99,000 - ₹2,99,000",
      specialization: "MBA (General, Information Technology Management, Dual Specialization, Human Resource Analytics, Data Science, Business Analytics, International Business Management, Digital Entrepreneurship, Digital Marketing Management, Entrepreneurship & Leadership Management, Finance & Accounting Management, Hospitality Management, Global Finance Market, Insurance Management, Marketing & Sales Management, Petroleum & Natural Gas, Production and Operations Management, Retail Management)",
      image: "/images/mba-online-image.webp",
      alt: "MBA from amity online university",
    },
    {
      course: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation in BCA/B.Sc(IT)",
      fees: "₹170,000- ₹2,50,000",
      specialization: "MCA (General, Cyber Security, Blockchain Technology, Machine Learning and Artificial Intelligence, Augmented Reality and Virtual Reality, Software Engineering)",
      image: "/images/mca-online-image.webp",
      alt: "MCA from amity online university",
    },
    {
      course: "Master of Commerce (M.Com)",
      duration: "2 Years",
      eligibility: "Graduation in Commerce",
      fees: "₹1,20,000",
      specialization: "General, Financial Management, Financial Technology",
      image: "/images/mcom-online-image.webp",
      alt: "M.Com from amity online university",
    },
    {
      course: "Master of Arts (MA)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹1,30,000 - ₹2,50,000",
      specialization: "MA (Psychology, Journalism and Mass Communication, Public Policy & Governance, English, Sociology)",
      image: "/images/ma1.webp",
      alt: "MA from amity online university",
    },
    {
      course: "Master of Science (M.Sc)",
      duration: "2 Years",
      eligibility: "Graduation",
      fees: "₹2,50,000",
      specialization: "Data Science",
      image: "/images/mcom-online-image.webp",
      alt: "M.Sc from amity online university",
    },
  ];

  const ug_pgCourses = [
    {
      course: "BBA + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,45,800",
      specialization: "BBA + MBA",
      image: "/images/mba-online-image.webp",
      alt: "BBA + MBA from amity online university",
    },
    {
      course: "BCA + MCA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹3,04,000",
      specialization: "BCA + MCA",
      image: "/images/mca-online-image.webp",
      alt: "BCA + MCA from amity online university",
    },
    {
      course: "B.Com + MBA",
      duration: "4.5-5 Years",
      eligibility: "10+2 With minimum 50%",
      fees: "₹2,83,100 - ₹3,05,000",
      specialization: "B.Com + MBA",
      image: "/images/mcom-online-image.webp",
      alt: "B.Com + MBA from amity online university",
    },
  ];

const SectionHeader = ({ icon: Icon, title, description }) => (
  <div className="text-center mb-12">
    <Icon className="mx-auto text-4xl text-orange-500 mb-4" />
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    course: '',
    state: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const courses = [
    'MBA (Master of Business Administration)',
    'BBA (Bachelor of Business Administration)', 
    'MCA (Master of Computer Applications)',
    'BCA (Bachelor of Computer Applications)',
    'M.Com (Master of Commerce)',
    'B.Com (Bachelor of Commerce)',
    'MA (Master of Arts)',
    'BA (Bachelor of Arts)'
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Chandigarh'
  ];

  const stats = [
    { number: '1.6L+', label: 'Students Enrolled', icon: Users },
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '100%', label: 'Placement Assistance', icon: CheckCircle },
    { number: '200+', label: 'Corporate Partners', icon: Globe }
  ];


  const features = [
    {
      icon: GraduationCap,
      title: 'UGC Approved Degrees',
      description: 'All programs are UGC approved and globally recognized for academic excellence'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Degrees recognized by WES, international universities and multinational corporations'
    },
    {
      icon: BookOpen,
      title: 'Flexible Learning',
      description: '24/7 access to learning materials with AI-powered personalized study plans'
    },
    {
      icon: Star,
      title: 'Industry Expert Faculty',
      description: 'Learn from experienced professionals and industry leaders'
    }
  ];

  const specializations = [
    { program: 'MBA', count: '18 Specializations', color: 'bg-blue-50 border-blue-200 text-blue-800',image:'/images/mbaSpecialization.webp'

     },
    { program: 'BBA', count: '12 Specializations', color: 'bg-green-50 border-green-200 text-green-800',image:'/images/bbaSpecialization.webp' },
    { program: 'MCA', count: '8 Specializations', color: 'bg-purple-50 border-purple-200 text-purple-800',image:'/images/mcaSpecialization.webp' },
    { program: 'BCA', count: '6 Specializations', color: 'bg-orange-50 border-orange-200 text-orange-800',image:'/images/bcaSpecialization.webp' }
  ];
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };
  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-[122px] h-10 relative">
                <Image src="/amity.svg" alt="Amity University Online" fill className="object-contain" priority />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 7042867717</span>
              </Button>
              <Button onClick={() => setOpenModal({ type: 'enquiry' })}
 className="bg-yellow-400 text-black border border-black ">
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-2 md:py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div 
            className="font-semibold flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 space-y-1 sm:space-y-0 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">August 2025 Admissions Open</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm md:text-base">Scholarships up to 15% Available</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm md:text-base">Limited Time Offer</span>
          </motion.div>
        </div>
      </div>
      
      
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-12 xl:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className={`flex-1 w-full lg:min-w-[300px] ${inter.className} order-2 lg:order-1`}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <Badge className="mb-3 md:mb-4 font-semibold px-3 md:px-4 py-2 border border-gray-300 bg-white flex items-center gap-2 w-fit">
                  <Image
                    src="/images/UGC_India_Logo_9d01833e1b.svg"
                    alt="UGC Approved"
                    width={24}
                    height={24}
                    className="md:w-[30px] md:h-[30px] rounded-full"
                  />
                  <span className="text-gray-500 text-sm md:text-base">UGC Approved</span>
                </Badge>

                {/* Heading */}
                <h1
                  className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2 md:mb-3`}
                >
                  India&apos;s Leading
                  <span className="block text-transparent bg-clip-text bg-yellow-600">
                    Online University
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 mb-5 md:mb-6 max-w-2xl leading-relaxed">
                  Transform your career with industry-relevant programs designed by experts.{" "}
                  <span className="font-semibold">Join 1.6 lakh+</span> professionals
                  who chose Amity for their educational journey.
                </p>

                {/* Program Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
                  {specializations.map((item, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Image */}
                      <div className="h-24 sm:h-32 md:h-40 w-full">
                        <img
                          src={item.image}
                          alt={item.program}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Text Section */}
                      <div className="bg-[#0d1b4c] text-white py-2 md:py-3 text-center">
                        <div className="font-bold text-sm md:text-lg">{item.program}</div>
                        <div className="text-xs md:text-sm opacity-90">{item.count}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer px-6 md:px-9 py-3 md:py-6 text-base md:text-lg rounded-full"
                    onClick={() => setOpenModal({ type: 'apply' })}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className=" cursor-pointer border-2 border-gray-300 hover:border-blue-400 px-6 md:px-9 py-3 md:py-6 text-base md:text-lg rounded-full"
                    onClick={() => setOpenModal({ type: 'enquiry' })}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Enquire Now
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:mt-30">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-yellow-500" />
                      <div className="text-lg md:text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <div className="flex-1 w-full lg:min-w-[250px] lg:max-w-[400px] order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 lg:h-[520px] xl:h-[680px]">
                  <Image
                    src="/images/girlImage.webp"
                    alt="Amity Campus"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section with Tabs */}
    <section className="py-12 md:py-16 bg-white px-4 md:px-6 font-[Inter] relative">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
  <div
    className="absolute inset-0 opacity-40"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
  ></div>

  <div className="max-w-7xl mx-auto relative z-10">
   <div className="bg-yellow-400 text-center mb-8 md:mb-12 p-6 rounded-lg">
  <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-2 text-black">
    Explore Our Programs
  </h2>
  <p className="text-black text-base md:text-lg">
    Find the perfect course to launch or advance your career.
  </p>
</div>


    {/* Shadcn Tabs */}
    <Tabs defaultValue="ug" className="w-full">
      <div className="flex justify-center mb-8 md:mb-12">
        <TabsList className="grid w-full max-w-md md:max-w-2xl grid-cols-3 bg-white p-5 rounded-full">
          <TabsTrigger
            value="ug"
            className="px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                       data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                       hover:bg-gray-50 data-[state=inactive]:text-gray-600"
          >
            Undergraduate
          </TabsTrigger>
          <TabsTrigger
            value="pg"
            className="px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                       data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                       hover:bg-gray-50 data-[state=inactive]:text-gray-600"
          >
            Postgraduate
          </TabsTrigger>
          <TabsTrigger
            value="integrated"
            className="px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300
                       data-[state=active]:bg-[#001F3F] data-[state=active]:text-white data-[state=active]:shadow-lg
                       hover:bg-gray-50 data-[state=inactive]:text-gray-600"
          >
            Integrated
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Tab Content */}
      <TabsContent value="ug" className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {ugCourses.map((item, index) => (
              <div key={`ug-${item.course}-${index}`} className="w-full">
                <EnquireCard
                  {...item}
                  universityName="Amity University Online"
                  uniqueId={`ug-${index}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="pg" className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {pgCourses.map((item, index) => (
              <div key={`pg-${item.course}-${index}`} className="w-full">
                <EnquireCard
                  {...item}
                  universityName="Amity University Online"
                  uniqueId={`pg-${index}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="integrated" className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {ug_pgCourses.map((item, index) => (
              <div key={`integrated-${item.course}-${index}`} className="w-full">
                <EnquireCard
                  {...item}
                  universityName="Amity University Online"
                  uniqueId={`integrated-${index}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  </div>
</section>

    
<div>
  <AccreditationSection
    title="Education with Global Recognition"
    description="Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide."
    stats={[
      { value: "95%", label: "Employment Rate Within 6 Months", color: "text-blue-700", bg: "bg-blue-50" },
      { value: "50+", label: "Countries with Alumni Network", color: "text-green-700", bg: "bg-green-50" },
      { value: "10+", label: "Industry Partnerships", color: "text-purple-700", bg: "bg-purple-50" },
    ]}
    benefits={[
      {
        title: "Global Mobility",
        description: "Our degrees are recognized internationally, enabling you to pursue opportunities worldwide.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>`,
      },
      {
        title: "Quality Assurance",
        description: "Rigorous accreditation processes ensure our programs meet the highest educational standards.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>`,
      },
      {
        title: "Industry Connections",
        description: "Our partnerships with leading organizations provide valuable networking and career opportunities.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>`,
      },
      {
        title: "Career Advancement",
        description: "Employers value accredited degrees, giving our graduates a competitive edge in the job market.",
        iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>`,
      },
    ]}
    accreditations={[
      { src: "/images/ugc.webp", alt: "UGC", name: "UGC" },
      { src: "/images/aicte.webp", alt: "AICTE", name: "AICTE" },
      { src: "/images/nirf.webp", alt: "NIRF", name: "NIRF" },
      { src: "/images/wes.webp", alt: "WES", name: "WES" },
      { src: "/images/aiu.webp", alt: "AIU", name: "AIU" },
      { src: "/images/acu.webp", alt: "ACU", name: "ACU" },
    ]}
    internationalRecognition={[
      { src: "/images/qs.webp", alt: "QS Ranking", name: "QS" },
      { src: "/images/wasc.webp", alt: "WASC Accreditation", name: "WASC" },
      { src: "/images/the.webp", alt: "Times Higher Education", name: "THE" },
      { src: "/images/qaa.webp", alt: "QAA UK", name: "QAA UK" },
    ]}
    successStories={[
      {
        name: "Aisha Sharma",
        initials: "AS",
        color: "bg-blue-100 text-blue-600",
        text: "The international recognition of my degree allowed me to secure a position with a leading tech firm in Singapore immediately after graduation.",
      },
      {
        name: "Rahul Mehta",
        initials: "RM",
        color: "bg-green-100 text-green-600",
        text: "The accreditation status of my program made the admission process to Stanford seamless. My credits transferred without any issues.",
      },
    ]}
    trust={{
      text: "Trusted by 25,000+ Students",
      subtext: "Our accreditations ensure quality education recognized globally",
    }}
  />
</div>
      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Amity University Online?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class education with cutting-edge technology and industry-relevant curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Why Choose Amity Online University?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Experience the perfect blend of academic excellence and digital innovation</p> */}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <FaBookOpen className="text-2xl" />, title: "Diverse learning mediums", text: "E-books, printed & audio books, videos to suit all styles." },
              { icon: <FaUserTie className="text-2xl" />, title: "Dedicated Academic Advisor", text: "Experts to guide every step of your career." },
              { icon: <FaRobot className="text-2xl" />, title: "AI-Professor AMI", text: "Powered by ChatGPT-4 for better learning." },
              { icon: <FaBriefcase className="text-2xl" />, title: "Career Services", text: "Workshops, internships, resume support." },
              { icon: <FaBook className="text-2xl" />, title: "Doorstep delivery", text: "Only online university delivering physical books." },
              { icon: <FaUniversity className="text-2xl" />, title: "Metaverse Campus", text: "Explore campus in metaverse." },
              { icon: <FaUserFriends className="text-2xl" />, title: "Offline Experiences", text: "On-campus orientation and peer bonding." },
              { icon: <FaClipboardCheck className="text-2xl" />, title: "Placement Opportunities", text: "Resume prep and interview assistance." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="text-blue-600 bg-blue-50 p-4 rounded-full mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Partnership Section */}
    <section className="py-12 md:py-16 bg-white text-black">
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Side - Image */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Image
        src="/images/hockey.webp"
        alt="Hockey Partnership"
        width={900}
        height={500}
        className="rounded-xl shadow-lg object-cover"
      />
    </motion.div>

    {/* Right Side - Content */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-left"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Strategic Partnership with Hockey India
      </h2>
      <p className="text-black text-base md:text-lg mb-6">
        Online Amity University has collaborated with Hockey India to empower
        players with world-class education and exclusive benefits:
      </p>

      {/* Bullet Points */}
      <ul className="space-y-3 text-black text-sm md:text-base">
        <li className="flex items-start">
          <ArrowRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" />
          Special scholarships for hockey athletes across India.
        </li>
        <li className="flex items-start">
          <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5" />
          Flexible online learning to balance sports & academics.
        </li>
        <li className="flex items-start">
          <ArrowRight className="w-5 h-5 text-black mr-2 mt-0.5" />
          Recognition from UGC & NAAC ensures credibility of the degree.
        </li>
      </ul>

      {/* CTA Button */}
      <div className="mt-6">
      
      </div>
    </motion.div>
  </div>
</section>
<div>
  <section className="relative py-20 bg-white">
    {/* Decorative Blobs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Admission Procedure
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A simple, transparent, and student-friendly admission process
          designed to help you begin your learning journey smoothly.
        </p>
      </motion.div>

      {/* 4-Step Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          Easy 4-Step Admission Process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 z-0 rounded-full"></div>

          {[
            {
              number: "01",
              title: "Application Form",
              desc: "Fill the online application form on the university portal.",
            },
            {
              number: "02",
              title: "Documents & Fee",
              desc: "Upload required documents and pay the application fee.",
            },
            {
              number: "03",
              title: "Confirmation",
              desc: "Receive confirmation and student login credentials.",
            },
            {
              number: "04",
              title: "Enrollment",
              desc: "Complete fee payment and begin your classes.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                {step.title}
              </h4>
              <p className="text-gray-700 text-sm md:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
</div>



      
      {/* Certificate + Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
              <Image 
                src="/images/amicri.webp" 
                alt="Amity University Certificate" 
                width={500} 
                height={350} 
                loading='lazy'
               
              />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[Poppins]">Globally Recognized Online Degree</h2>
            <p className="mb-6 text-gray-600 text-lg">Amity University online programs offer daily live classes, career assistance, and hands-on LMS learning with Ivy League tie-ups.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Benefits of Online Amity University</h3>
            <ul className="space-y-3">
              {[
                "Daily LIVE Classes by International Faculty",
                "Career Assistance & Virtual Job Fairs",
                "International Collaboration with Ivy League",
                "Immersive Learning via World-Class LMS",
                "Industry-Relevant Curriculum",
                "Flexible Learning Schedule"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
  {/* Hiring Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Our Hiring Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Top companies that recruit Amity Online University graduates</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              "/images/company.webp", "/images/company1.webp", "/images/company9.webp", 
              "/images/com10.webp", "/images/companany4.webp", 
              "/images/companany5.webp", "/images/adove.webp", "/images/samsung.webp",
              "/images/3.webp", "/images/4.webp", "/images/5.webp", 
              "/images/6.webp", "/images/7.webp", "/images/8.webp", "/images/9.webp"
            ].map((src, i) => (
              <motion.div 
                key={i} 
                className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-md transition-all border border-gray-100"
                whileHover={{ y: -5, scale: 1.05 }}
                variants={fadeIn}
              >
                <div className="relative w-full h-12">
                  <Image
                    src={src}
                    alt="Top companies hiring Amity University online graduates"
                    width={100}
                    height={100}
                    loading='lazy'
                 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">Begin Your Educational Journey with Amity Online</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with Amity University's UGC-entitled online degrees
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-[100px] md:w-[122px] h-8 md:h-10 relative">
                  <Image src="/amity.svg" alt="Amity University Online" fill className="object-contain" />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming lives through quality education and innovation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Services</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">services</a></li>
                <li><a href="/listofcollege" className="hover:text-white transition-colors">Explore Colleges</a></li>
              
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 7042867717</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">info@unifostedu.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Noida, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; 2025 UNIFOST. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Apply / Enquiry Modal */}
      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="/images/amityForm.webp"
          universityName="Amity University Online"
          defaultProgram="MBA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

export default AmityLandingPage;