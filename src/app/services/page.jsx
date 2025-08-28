'use client';

import React, { useState } from 'react';
import { FaRocket, FaGraduationCap, FaHome, FaRoute, FaVideo, FaGlobe, FaClock, FaShieldAlt, FaDollarSign, FaCalendarAlt, FaCheckCircle, FaArrowRight, FaStar, FaUsers, FaAward, FaHeadset } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EnquiryForm from "@/components/EnquiryForm";

export default function Services() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState('getStarted');

  const services = [
    {
      id: 'video-counseling',
      title: 'Video Call Counseling',
      subtitle: 'Virtual guidance for digital learning',
      icon: FaVideo,
      color: 'from-blue-500 to-purple-600',
      badge: 'Most Popular',
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
      badge: 'Premium Service',
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
      badge: 'Expert Guidance',
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

  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

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
            onClick={() => openModal('getStarted')}
            className="bg-[#00ffe0] text-[#001e3c] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Services Overview with Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
          
          <Tabs defaultValue="video-counseling" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="video-counseling" className="text-base font-semibold py-3">
                <FaVideo className="mr-2" />
                Video Call
              </TabsTrigger>
              <TabsTrigger value="home-demo" className="text-base font-semibold py-3">
                <FaHome className="mr-2" />
                Home Demo
              </TabsTrigger>
              <TabsTrigger value="career-planning" className="text-base font-semibold py-3">
                <FaRoute className="mr-2" />
                Career Planning
              </TabsTrigger>
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-12 text-white text-center relative`}>
                    {service.badge && (
                      <Badge className="absolute top-6 right-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                        {service.badge}
                      </Badge>
                    )}
                    <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="text-4xl" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Features */}
                      <div>
                        <h3 className="text-2xl font-bold text-[#001e3c] mb-6 flex items-center">
                          <FaCheckCircle className="text-[#00ffe0] mr-3" />
                          What You'll Get
                        </h3>
                        <div className="space-y-4">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <FaCheckCircle className="text-[#00ffe0] text-xl mt-1 flex-shrink-0" />
                              <p className="text-gray-700 font-medium">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h3 className="text-2xl font-bold text-[#001e3c] mb-6 flex items-center">
                          <FaStar className="text-[#00ffe0] mr-3" />
                          Key Benefits
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.highlights.map((highlight, index) => (
                            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                              <CardContent className="p-4 text-center">
                                <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                                  <highlight.icon className="text-white text-xl" />
                                </div>
                                <h4 className="font-bold text-[#001e3c] mb-1">{highlight.text}</h4>
                                <p className="text-sm text-gray-600">{highlight.subtitle}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12 text-center">
                      <button 
                        onClick={() => {
                          if (service.id === 'home-demo' || service.id === 'career-planning') {
                            openModal('getStarted');
                          } else {
                            openModal('videoCall');
                          }
                        }}
                        className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] px-8 py-4 rounded-full text-xl font-bold hover:from-[#00d4c4] hover:to-[#00ffe0] transform hover:scale-105 transition-all duration-300 shadow-2xl"
                      >
                        {service.ctaButton}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

     
     </div>
     </div>
     </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#001e3c] mb-3">Expert Counselors</h3>
                <p className="text-gray-600">Qualified professionals with years of experience</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#001e3c] mb-3">Trusted Partners</h3>
                <p className="text-gray-600">Only accredited institutions and programs</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaClock className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#001e3c] mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance when you need it</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#001e3c] mb-3">Proven Results</h3>
                <p className="text-gray-600">Thousands of successful student placements</p>
              </CardContent>
            </Card>
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
            onClick={() => openModal('getStarted')}
            className="bg-[#00ffe0] text-[#001e3c] px-10 py-5 rounded-full text-2xl font-bold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Book Free Session Now
          </button>
        </div>
      </section>

      {/* Enquiry Modal (Unified) */}
      {showEnquiryModal && (
        <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
          <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-2 lg:my-1 p-4 sm:p-6 z-[30001]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                {modalType === 'videoCall' ? 'Book a Video Call' : 'Get Started with Unifost'}
              </DialogTitle>
            </DialogHeader>
            <EnquiryForm onSubmitted={() => setShowEnquiryModal(false)} formType={modalType} />
          </DialogContent>
        </Dialog>
      )}
    </div>
   
  );
}