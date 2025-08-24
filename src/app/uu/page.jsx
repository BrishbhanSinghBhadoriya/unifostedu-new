'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  FaCheckCircle,
  FaFileAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBuilding,
  FaGlobe,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptop
} from 'react-icons/fa';

// Reusable Enquire Button Component
const EnquireCard = ({ course, duration, eligibility, fees, specialization, image }) => {
  const router = useRouter();  
  const university = "Uttaranchal University";

  const handleClick = () => {
     router.push(`/enquiry?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <img src={image} alt={course} className="h-48 w-full object-cover" />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{course}</h3>
          <div className="flex items-center text-sm text-blue-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <p className="text-sm text-gray-600 mb-2"><strong className="text-gray-800">Eligibility:</strong> {eligibility}</p>
          {fees && <p className="text-sm text-gray-600 mb-2"><strong className="text-gray-800">Fees:</strong> {fees}</p>}
          {specialization && <p className="text-sm text-gray-600"><strong className="text-gray-800">Specialization:</strong> {specialization}</p>}
        </div>
        <div className="mt-5">
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center block font-semibold hover:opacity-90 transition w-full shadow-md hover:shadow-lg"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

const UU = () => {
  // Using data from the uu.pdf file
  const ugCourses = [
  {
    course: "Bachelor of Arts (BA)",
    duration: "3 Years",
    eligibility: "10+2 pass from a recognized board",
    fees: "₹72,000",
    image: "/ba.jpeg",
  },
  {
    course: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    eligibility: "10+2 pass from a recognized board",
    fees: "₹1,20,000",
    image: "/bba.jpg",
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    eligibility: "10+2 pass from a recognized board",
    fees: "₹1,20,000",
    image: "/bca.jpeg",
  },
];

const pgCourses = [
  {
    course: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility:
      "Graduation in any field from a recognized university with a minimum of 40% marks in aggregate OR below 40% with eligibility test",
    fees: "₹1,40,000",
    image: "/mba.jpeg",
  },
  {
    course: "Executive MBA",
    duration: "2 Years",
    eligibility:
      "Graduation in any field from a recognized university with relevant work experience (specific criteria may vary)",
    fees: "₹1,40,000",
    image: "/mca.jpeg",
  },
  {
    course: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility:
      "Graduate in Computer Applications/CS/IT/Engineering with 50% marks (45% reserved) OR Graduate with Mathematics at 10+2 or graduation level. If not studied, must complete a bridge course.",
    fees: "₹1,20,000",
    image: "/mca1.jpeg",
  },
];
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Future with <span className="text-yellow-300">UU University</span>
            </h1>
            
            <div className="mb-6 p-4 bg-blue-800 rounded-lg border-l-4 border-yellow-400">
              <p className="font-semibold">🎓 UGC Recognized Programs | 🌍 Global Learning Community | 💼 Industry-Relevant Curriculum</p>
            </div>

            <p className="text-lg mb-6">
              UU University offers world-class online education designed for working professionals and students seeking flexible learning options. Our programs combine academic excellence with practical skills to prepare you for success in today's competitive job market.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-700 px-4 py-2 rounded-full">
                <FaCheckCircle className="mr-2 text-green-300" />
                <span>100% Online Learning</span>
              </div>
              <div className="flex items-center bg-blue-700 px-4 py-2 rounded-full">
                <FaCheckCircle className="mr-2 text-green-300" />
                <span>Placement Assistance</span>
              </div>
              <div className="flex items-center bg-blue-700 px-4 py-2 rounded-full">
                <FaCheckCircle className="mr-2 text-green-300" />
                <span>Expert Faculty</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/uu-uni.webp" // You'll need to add this image
              alt="UU University"
              className="w-full rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50,000+", label: "Students Enrolled" },
            { number: "200+", label: "Expert Faculty" },
            { number: "95%", label: "Satisfaction Rate" },
            { number: "100+", label: "Corporate Partners" },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-blue-700">Academic Programs</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of UGC-recognized programs designed to meet industry demands
          </p>
        </div>
    
        {/* UG Cards */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-200">Undergraduate Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* PG Cards */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 pb-2 border-b-2 border-blue-200">Postgraduate Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pgCourses.map((item, index) => (
              <EnquireCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose <span className="text-blue-700">UU University</span>?</h2>
          <p className="text-xl text-gray-600">Discover the advantages of learning with us</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaGlobe className="text-3xl" />,
              title: "Global Recognition",
              text: "Our degrees are recognized worldwide, opening doors to international opportunities."
            },
            {
              icon: <FaChalkboardTeacher className="text-3xl" />,
              title: "Expert Faculty",
              text: "Learn from industry veterans and academic experts with real-world experience."
            },
            {
              icon: <FaLaptop className="text-3xl" />,
              title: "Cutting-Edge Curriculum",
              text: "Our programs are regularly updated to reflect the latest industry trends and technologies."
            },
            {
              icon: <FaBookOpen className="text-3xl" />,
              title: "Flexible Learning",
              text: "Study at your own pace with 24/7 access to learning materials and recorded lectures."
            },
            {
              icon: <FaCertificate className="text-3xl" />,
              title: "Placement Support",
              text: "Comprehensive career services including resume building, interview prep, and job placement."
            },
            {
              icon: <FaUniversity className="text-3xl" />,
              title: "Robust Alumni Network",
              text: "Join a network of successful professionals across various industries worldwide."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-full">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Platform Features */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced <span className="text-yellow-300">Learning Platform</span></h2>
            <p className="text-xl text-blue-200">Experience seamless learning with our state-of-the-art digital campus</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Interactive Live Classes", icon: "🎥" },
                  { title: "24/7 Access to Resources", icon: "📚" },
                  { title: "Doubt Clearing Sessions", icon: "💬" },
                  { title: "Online Assessment", icon: "📝" },
                  { title: "Peer Collaboration", icon: "👥" },
                  { title: "Mobile Learning App", icon: "📱" },
                ].map((feature, index) => (
                  <div key={index} className="bg-blue-800 p-4 rounded-lg flex items-center">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/learning-platform.png" 
                  alt="Learning Platform" 
                  className="rounded-xl shadow-2xl border-4 border-blue-700 max-w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                  Experience The Future of Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple <span className="text-blue-700">Admission Process</span></h2>
            <p className="text-xl text-gray-600">Get started on your educational journey in just a few steps</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Submit Application",
                  description: "Fill out the online application form with your details"
                },
                {
                  step: "02",
                  title: "Document Verification",
                  description: "Upload required documents for verification"
                },
                {
                  step: "03",
                  title: "Fee Payment",
                  description: "Pay the application and program fees online"
                },
                {
                  step: "04",
                  title: "Start Learning",
                  description: "Access your student portal and begin classes"
                }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-3/4 w-1/2 h-1 bg-blue-200 z-0"></div>
                  )}
                  
                  {/* Step circle */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-2xl font-bold text-blue-800">{item.step}</span>
                  </div>
                  
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our <span className="text-blue-700">Students Say</span></h2>
            <p className="text-xl text-gray-600">Hear from our successful alumni</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                course: "MBA Graduate",
                text: "The flexibility of UU's online MBA allowed me to balance my job and studies. The curriculum was practical and immediately applicable to my work."
                
              },
              {
                name: "Rahul Verma",
                course: "BCA Student",
                text: "The faculty support and learning resources are exceptional. I've gained valuable skills that helped me secure an internship at a tech company."
                
              },
              {
                name: "Anjali Patel",
                course: "Executive MBA",
                text: "As a working professional, the Executive MBA program was perfect for upgrading my skills without taking a career break. Highly recommended!"
                
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of students who have advanced their careers with UU University's online programs</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
              Explore Programs
            </button>
            <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300">
              Speak to an Advisor
            </button>
          </div>
          
          <p className="mt-8 text-blue-200">Applications for the next batch are now open. Limited seats available.</p>
        </div>
      </section>
    </>
  );
};

export default UU;