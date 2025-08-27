'use client';

import React, { useState } from 'react';
import { FaRocket, FaGraduationCap, FaHome, FaRoute, FaVideo, FaGlobe, FaClock, FaShieldAlt, FaDollarSign, FaCalendarAlt, FaCheckCircle, FaArrowRight, FaStar, FaUsers, FaAward, FaHeadset } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

export default function Services() {
  const [activeService, setActiveService] = useState('online-degree');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted'); // 'getStarted' | 'videoCall'

  const services = [
    {
      id: 'online-degree',
      title: 'Video Call Counseling',
      subtitle: 'Virtual guidance for digital learning',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-purple-600',
      ctaButton: 'Schedule Video Call',
      features: [
        'Connect with education experts virtually',
        'Find the perfect online program for your career goals',
        '150+ Accredited Programs available',
        'Access to top online degrees from recognized institutions',
        'Flexible scheduling for working professionals',
        'Expert financial aid guidance'
      ],
      highlights: [
        { icon: FaGlobe, text: 'Virtual Convenience', subtitle: 'From anywhere, anytime' },
        { icon: FaAward, text: '150+ Accredited Programs', subtitle: 'Access to top online degrees' },
        { icon: FaClock, text: 'Flexible Scheduling', subtitle: 'Sessions designed for working professionals' },
        { icon: FaDollarSign, text: 'Financial Aid Guidance', subtitle: 'Expert advice on scholarships and payment options' }
      ]
    },
    {
      id: 'home-demo',
      title: 'Home Demo Counseling',
      subtitle: 'Personalized in-home sessions',
      icon: FaHome,
      color: 'from-green-500 to-teal-600',
      ctaButton: 'Book Home Demo',
      features: [
        'Personalized one-on-one sessions at your home',
        'Hands-on learning experience before commitment',
        'Comfortable environment for better focus',
        'Family involvement in decision making',
        'Real-time demonstration of learning platforms',
        'Immediate feedback and Q&A sessions'
      ],
      highlights: [
        { icon: FaHome, text: 'Home Comfort', subtitle: 'Learn in your familiar environment' },
        { icon: FaUsers, text: 'Family Involvement', subtitle: 'Include family in decisions' },
        { icon: FaVideo, text: 'Live Demonstrations', subtitle: 'See platforms in action' },
        { icon: FaHeadset, text: 'Personal Attention', subtitle: 'Undivided counselor focus' }
      ]
    },
    {
      id: 'career-planning',
      title: 'Career Planning',
      subtitle: 'Strategic career roadmap',
      icon: FaRoute,
      color: 'from-orange-500 to-red-600',
      ctaButton: 'Get Started Today',
      features: [
        'Comprehensive career assessment and analysis',
        'Industry trend analysis and future predictions',
        'Personalized career roadmap development',
        'Skill gap identification and improvement plan',
        'Resume building and interview preparation',
        'Long-term career progression strategies'
      ],
      highlights: [
        { icon: FaRoute, text: 'Strategic Roadmap', subtitle: 'Clear path to your goals' },
        { icon: FaCheckCircle, text: 'Skill Assessment', subtitle: 'Identify and bridge gaps' },
        { icon: FaStar, text: 'Industry Insights', subtitle: 'Stay ahead of trends' },
        { icon: FaUsers, text: 'Expert Mentorship', subtitle: 'Guidance from industry professionals' }
      ]
    }
  ];

  const currentService = services.find(service => service.id === activeService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c] to-[#003b6c] opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaRocket className="text-5xl text-[#00ffe0] mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              TRANSFORMING EDUCATION
            </h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Your Future Starts<br />
            <span className="text-[#00ffe0]">With Our Guidance</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            We provide personalized education solutions that help you achieve your academic and career goals
          </p>
          <button 
            onClick={() => { setModalType('getStarted'); setShowEnquiryModal(true); }}
            className="bg-[#00ffe0] text-[#001e3c] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
              OUR SERVICES
            </h2>
            <h3 className="text-2xl text-gray-600 mb-8">
              Choose Your Path to Success
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the service that best matches your educational needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  activeService === service.id ? 'ring-4 ring-[#00ffe0] ring-opacity-50' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl p-8 text-white text-center h-full flex flex-col justify-between`}>
                  <div>
                    <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/90 mb-6">{service.subtitle}</p>
                  </div>
                  <div className="flex items-center justify-center text-white/90 hover:text-white transition-colors">
                    <span className="mr-2">Learn more</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentService && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${currentService.color} p-12 text-white text-center`}>
                <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <currentService.icon className="text-4xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{currentService.title}</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  {currentService.subtitle}
                </p>
              </div>
          
              {/* Service Content */}
              <div className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#001e3c] mb-6">What You'll Get</h3>
                    <div className="space-y-4">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <FaCheckCircle className="text-[#00ffe0] text-xl mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#001e3c] mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentService.highlights.map((highlight, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className={`bg-gradient-to-br ${currentService.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <highlight.icon className="text-white text-xl" />
                          </div>
                          <h4 className="font-bold text-[#001e3c] mb-1">{highlight.text}</h4>
                          <p className="text-sm text-gray-600">{highlight.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-12 text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => { 
                        if (currentService.id === 'home-demo') {
                          setModalType('homeDemo');
                        } else if (currentService.id === 'career-planning') {
                          setModalType('getStarted');
                        } else {
                          setModalType('videoCall');
                        }
                        setShowEnquiryModal(true); 
                      }}
                      className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] px-8 py-4 rounded-full text-xl font-bold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      {currentService.ctaButton}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference that personalized guidance makes in your educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001e3c] mb-3">Expert Counselors</h3>
              <p className="text-gray-600">Qualified professionals with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001e3c] mb-3">Trusted Partners</h3>
              <p className="text-gray-600">Only accredited institutions and programs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001e3c] mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance when you need it</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001e3c] mb-3">Proven Results</h3>
              <p className="text-gray-600">Thousands of successful student placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#001e3c] to-[#003b6c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Book your free counseling session today and take the first step towards achieving your educational and career goals.
          </p>
          <button 
            onClick={() => { setModalType('getStarted'); setShowEnquiryModal(true); }}
            className="bg-[#00ffe0] text-[#001e3c] px-10 py-5 rounded-full text-2xl font-bold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Book Free Session Now
          </button>
        </div>
      </section>

      {/* Enquiry Modal (Unified) */}
      <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal}>
        <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10 p-4 sm:p-6 z-[30001] bg-white rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
              {modalType === 'videoCall' ? 'Book a Video Call' : 
               modalType === 'homeDemo' ? 'Schedule Home Demo' : 
               'Get Started with Unifost'}
            </DialogTitle>
          </DialogHeader>
          <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} />
        </DialogContent>
      </Dialog>
    </div>
  );
}