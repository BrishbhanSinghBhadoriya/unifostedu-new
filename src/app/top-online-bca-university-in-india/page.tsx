'use client'
import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, DollarSign, Target, Briefcase, Code, Globe, Rocket,  CheckCircle, ChevronDown, Menu, X } from 'lucide-react';
import Image from "next/image";
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
export default function OnlineBCAPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
 const [openModal, setOpenModal] =
  useState<{ type: string; program?: string } | null>(null);


 useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.id;

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Online BCA India</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'features', 'universities', 'curriculum', 'careers'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              
            <button onClick={() => setOpenModal(null)}
              
               className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['home', 'features', 'universities', 'curriculum', 'careers'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-purple-600 font-medium"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full font-medium">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Top Online BCA Universities<br />in India 🎓
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Build Your IT Career with Flexible, Affordable & Industry-Ready Education in 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('universities')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                Explore Universities
              </button>
              <button 
                onClick={() => scrollToSection('curriculum')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Target className="w-12 h-12" />, value: '100%', label: 'Online Learning' },
              { icon: <Briefcase className="w-12 h-12" />, value: '95%', label: 'Placement Support' },
              { icon: <DollarSign className="w-12 h-12" />, value: '₹30K+', label: 'Starting Salary' },
              { icon: <Clock className="w-12 h-12" />, value: '24/7', label: 'Learning Access' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className="w-full bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
          Why the Demand for Top Online BCA Universities in India Is Increasing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          The demand for <strong>Top Online BCA Universities in India</strong> is rising rapidly as 
          students look for flexible, affordable, and career-focused education in computer applications. 
          With digital learning becoming more common, many universities now offer online BCA programs 
          that provide the same value as regular on-campus degrees. Students prefer these universities 
          because they offer <strong>recognized degrees, expert faculty, modern online learning platforms, 
          and strong placement support</strong> for IT careers.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Choosing the right university from the <strong>Top Online BCA Universities in India</strong> is 
          important for developing essential IT skills such as programming, networking, cloud computing, 
          data analytics, AI, cybersecurity, and more. With the growth of remote work and online jobs, 
          students can study from home while gaining high-quality education and practical training.
        </p>

        <p className="text-gray-700 leading-relaxed">
          These universities also provide updated study materials, interactive digital classes, virtual 
          labs, and dedicated teacher support that helps students understand real-world concepts. Whether 
          a student is a fresher, a working professional, or someone switching careers, 
          <strong> Top Online BCA Universities in India</strong> offer a flexible and effective path to a 
          strong future in the IT industry.
        </p>
      </div>
    </section>
      {/* Why Choose Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
               Why Students Prefer Online BCA Universities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits that make online BCA the smart choice for thousands of students
            </p>
          </div>
           <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Why Students Prefer Top Online BCA Universities in India
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-700 leading-relaxed mb-5">
          Students today understand how important it is to earn a degree that is 
          <strong> UGC-recognized, trusted by employers, and aligned with the latest industry needs</strong>. 
          The Top Online BCA Universities in India offer programs that combine theoretical knowledge with 
          practical hands-on training, helping students become job-ready from day one. Because these universities 
          focus on real experience and technical skills, they are considered the best choice for building a strong 
          future in the IT sector.
        </p>

        {/* Flexibility Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ✔ Flexibility for Working Professionals
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Many students searching for the Top Online BCA Universities in India are working professionals 
            who cannot quit their jobs. Online BCA programs offer live classes, recorded lectures, and self-paced 
            study options, making education convenient. This flexibility allows students to manage both work and 
            learning without stress.
          </p>
        </div>

        {/* Affordable Fee Structure */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ✔ Affordable Fee Structure
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Top Online BCA Universities in India are popular because of their affordable fee structure. 
            Students don’t need to worry about hostel costs, travel expenses, or extra charges. The low-cost 
            online education model helps thousands of students access quality learning without financial pressure.
          </p>
        </div>

        {/* Modern & Industry-Focused Curriculum */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ✔ Modern and Industry-Focused Curriculum
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            These universities follow an updated curriculum that matches current IT industry requirements. 
            Students learn essential skills such as:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Python and Java programming</li>
            <li>Web development</li>
            <li>Data structures</li>
            <li>Cloud computing</li>
            <li>Cybersecurity</li>
            <li>Database management</li>
            <li>Basics of machine learning</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-3">
            These skills prepare students for careers in software development, data analysis, cybersecurity, 
            cloud technology, and many other IT fields.
          </p>
        </div>

        {/* Placement & Internship Support */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ✔ Placement and Internship Support
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Most Top Online BCA Universities in India offer strong placement and internship support. They 
            provide resume-building sessions, mock interviews, technical workshops, and career counseling. 
            Many universities collaborate with companies to offer internships and job opportunities, helping 
            students gain real experience. Regular recruitment drives make it easier for students to connect 
            with employers and start their careers confidently.
          </p>
        </div>
      </div>
    </section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: 'Flexible Learning',
                desc: 'Study anytime, anywhere with recorded lectures and live classes scheduled for working professionals.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <DollarSign className="w-12 h-12" />,
                title: 'Affordable Fees',
                desc: 'Low-cost programs without hostel or travel expenses. Quality education accessible to all.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'Industry-Ready Skills',
                desc: 'Learn Python, Java, Cloud Computing, Cybersecurity, AI, and more with hands-on projects.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Placement Support',
                desc: 'Resume building, mock interviews, internships, and job fairs to kickstart your career.',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: 'Virtual Labs',
                desc: 'Practice programming, networking, and cloud setup with online virtual laboratories.',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Global Recognition',
                desc: 'UGC-approved degrees recognized in India and internationally for higher studies and jobs.',
                gradient: 'from-teal-500 to-green-500'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🏛️ Top Online BCA Universities in India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from India's best universities offering quality online BCA programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Amity University Online",
          img: "/images/amitylogo.jpg",
          color: "from-blue-600 to-blue-800",
          specs: [
            "BCA in Data Science",
            "BCA in Cloud Computing",
            "BCA in Cybersecurity",
            "BCA in Software Engineering",
          ],
        },
        {
          name: "Jain University Online",
          img: "/images/jain.png",
          color: "from-green-600 to-green-800",
          specs: [
            "Full Stack Development",
            "Mobile App Development",
            "AI & Machine Learning",
            "Data Analytics",
          ],
        },
        {
          name: "Chandigarh University",
          img: "/images/cu-logo.webp",
          color: "from-purple-600 to-purple-800",
          specs: [
            "BCA General",
            "Cloud Computing",
            "Cybersecurity",
            "Blockchain Basics",
          ],
        },
        {
          name: "Manipal University Jaipur",
          img: "/images/man-uni.webp",
          color: "from-red-600 to-red-800",
          specs: [
            "Software Development",
            "Networking & Security",
            "Data Science",
            "AI Fundamentals",
          ],
        },
        {
          name: "LPU Online",
          img: "/images/lpu.webp",
          color: "from-yellow-600 to-orange-600",
          specs: ["BCA General"],
        },
        {
          name: "UPES Online",
          img: "/images/upes.webp",
          color: "from-pink-600 to-rose-800",
          specs: [
            "BCA in Cloud Computing",
            "UI/UX Fundamentals",
            "Cybersecurity",
            "DevOps",
          ],
        },
        {
          name: "DY Patil University",
          img: "/images/dypatil.webp",
          color: "from-indigo-600 to-indigo-800",
          specs: ["Computer Applications", "Web Development", "Database Admin"],
        },
        {
          name: "Shoolini University",
          img: "/images/shoolini-uni.webp",
          color: "from-indigo-600 to-indigo-800",
          specs: [
            "Data Science",
            "Web Technologies",
            "AI Concepts",
            "Cybersecurity",
          ],
        },
        {
          name: "Sharda University",
          img: "/images/sharda.webp",
          color: "from-indigo-600 to-indigo-800",
          specs: ["BCA General", "Cloud Computing", "Networking Basics"],
        },
        {
          name: "Vivekananda Global University",
          img: "/images/vgu-uni.webp",
          color: "from-indigo-600 to-indigo-800",
          specs: [
            "Full Stack Web Development",
            "Data Analytics",
            "Software Engineering",
          ],
        },
        {
          name: "Uttaranchal University",
          img: "/images/uu-uni.webp",
          color: "from-orange-600 to-yellow-600",
          specs: [
            "Cybersecurity",
            "Cloud Computing",
            "AI & ML Basics",
            "Web Development",
          ],
        },
      ].map((uni, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
        >
          {/* TOP IMAGE SECTION */}
          <div
            className={`h-48 bg-gradient-to-br ${uni.color} flex items-center justify-center`}
          >
            <Image
              src={uni.img}
              alt={uni.name}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {uni.name}
            </h3>

            {/* Features */}
            <ul className="space-y-3 mb-4">
              {[
                "UGC-DEB Approved",
                "Industry Expert Faculty",
                "Strong Placement Cell",
                "Interactive LMS",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* SPECIALIZATIONS */}
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Specializations:
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {uni.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📖 Complete BCA Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 3-year program covering all essential IT skills
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                sem: 'Semester 1',
                subjects: ['Computer Fundamentals', 'Programming in C', 'Mathematics I', 'Communication Skills', 'Digital Logic']
              },
              {
                sem: 'Semester 2',
                subjects: ['Data Structures', 'Operating Systems', 'Database Management', 'Mathematics II', 'OOP Concepts']
              },
              {
                sem: 'Semester 3',
                subjects: ['Web Technologies', 'Networking', 'Python Programming', 'Software Engineering', 'Computer Architecture']
              },
              {
                sem: 'Semester 4',
                subjects: ['Cloud Computing', 'Mobile App Development', 'Cybersecurity', 'Data Analytics', 'Linux & Shell Scripting']
              },
              {
                sem: 'Semester 5',
                subjects: ['Artificial Intelligence', 'Machine Learning Basics', 'Internet of Things', 'Elective Specializations', 'Minor Project']
              },
              {
                sem: 'Semester 6',
                subjects: ['Advanced Networking', 'Blockchain Fundamentals', 'Big Data Technologies', 'Major Project', 'Industry Internship']
              }
            ].map((semester, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-all">
                <h3 className="text-3xl font-bold text-purple-600 mb-6">🔶 {semester.sem}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {semester.subjects.map((subject, i) => (
                    <div key={i} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 hover:from-purple-100 hover:to-indigo-100 transition-colors">
                      <span className="text-gray-800 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="careers" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💼 Career Opportunities After BCA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career paths in the IT industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: '👨‍💻', title: 'Software Developer' },
              { icon: '🌐', title: 'Web Developer' },
              { icon: '📱', title: 'App Developer' },
              { icon: '🗄️', title: 'Database Admin' },
              { icon: '🔒', title: 'Cybersecurity Analyst' },
              { icon: '☁️', title: 'Cloud Engineer' },
              { icon: '📊', title: 'Data Analyst' },
              { icon: '🌍', title: 'Network Engineer' }
            ].map((career, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl p-6 text-center hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl">
                <div className="text-5xl mb-4">{career.icon}</div>
                <h3 className="text-lg font-semibold">{career.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ✅ Eligibility Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Completed 10+2 from recognized board',
                'Mathematics preferable (not mandatory)',
                'Minimum 45%-50% marks',
                'No age limit'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-green-50 rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            📝 Simple Admission Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
             
              { num: '2', text: 'Fill application form' },
              { num: '3', text: 'Upload documents' },
              { num: '4', text: 'Pay application fee' },
              { num: '5', text: 'Confirm admission' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <p className="text-gray-700 font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              🚀 Advanced Learning Technology
            </h2>
            <p className="text-xl opacity-90">
              Modern tools that power your online education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'Learning Management System', desc: 'Video lectures, e-books, assignments, forums, tests & quizzes' },
              { icon: '🔬', title: 'Virtual Labs', desc: 'Practice programming, networking & cloud setup online' },
              { icon: '🤖', title: 'AI-Based Analytics', desc: 'Track learning patterns, strengths & personalized guidance' },
              { icon: '📱', title: 'Mobile Learning Apps', desc: 'Study from anywhere with portable learning' },
              { icon: '☁️', title: 'Cloud-Based Storage', desc: 'Never lose access to study materials' },
              { icon: '🎥', title: '24/7 Recorded Classes', desc: 'Watch lectures anytime at your own pace' }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 hover:bg-opacity-20 transition-all">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="opacity-90">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your IT Career? 🚀
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join thousands of students building successful careers with Online BCA programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8" />
            <span className="text-2xl font-bold">Top Online BCA Universities in India</span>
          </div>
          <p className="text-gray-400 mb-6">Your Gateway to a Successful IT Career</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
          {openModal && (
  <ApplyEnquiryModal
    open={true}
    onOpenChange={(v) => {
      if (!v) setOpenModal(null);
    }}
    title="Enquire Now"
    subtitle="Share your details and our counselor will reach out"
    defaultProgram="BCA"
    formType="general"
    showImage={false}
  />
)}

    </div>
  );
}