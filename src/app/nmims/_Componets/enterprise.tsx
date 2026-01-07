import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EnterprisePage = () => {
  const features = [
    {
      icon: "📚",
      title: "40 years of academic excellence",
      description: "Learn from the institute that has a legacy of empowering professionals with a career-oriented education offering exposure to current trends."
    },
    {
      icon: "🏆",
      title: "High corporate recognition",
      description: "With a Grade A++ NAAC Rating, NMIMS is one of the few universities that have been granted the status of Graded Autonomy by UGC."
    },
    {
      icon: "💼",
      title: "Experiential learning",
      description: "Access industry-focused specialisations, real-world case studies, business simulation projects and get hands-on industry experience."
    },
    {
      icon: "📱",
      title: "Study anytime anywhere",
      description: "Avail study material, lectures and courseware anytime, anywhere with \"Student Zone\" that can be accessed through phone or laptop."
    }
  ];

  const programs = [
    {
      icon: "📊",
      title: "Upgrade your workforce",
      description: "From Management to Digital Marketing, our programs equip professionals with high-demand skills needed to stay ahead in today's competitive landscape."
    },
    {
      icon: "🎓",
      title: "Educate your employees",
      description: "Drive business growth by equipping your team with industry-recognised skills. Close the talent gap, build a stronger workforce and create a culture that boosts retention and satisfaction."
    },
    {
      icon: "⚙️",
      title: "Customise a program",
      description: "With NMIMS CDOE, employees can access tailor-made programs or specialisations of their choice. Working professionals get the convenience of pursuing a program at their own pace."
    },
    {
      icon: "👥",
      title: "Hiring from us",
      description: "Hire business leaders of tomorrow from a talent pool of well-rounded professionals with strong managerial expertise across industries."
    }
  ];

  const partners = [
    "ACCENTURE", "TATA", "WIPRO", "INFOSYS", 
    "HCL", "AMAZON", "FLIPKART", "DELOITTE"
  ];

  const footerLinks = {
    quickLinks: [
      { name: "Student Portal", href: "/students" },
      { name: "All Programs", href: "/programs" },
      { name: "Career Services", href: "/career-services" },
      { name: "Admission Process", href: "/admission-process" },
      { name: "Alumni", href: "/alumni" }
    ],
    nmimsCdoe: [
      { name: "About NMIMS Online", href: "/about" },
      { name: "Awards", href: "/awards" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "Faculty", href: "/faculty" },
      { name: "Blog", href: "/blog" }
    ],
    support: [
      { name: "Locate Us", href: "/locate-us" },
      { name: "Help & Support", href: "/help-and-support" },
      { name: "FAQs", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" }
    ],
    programs: [
      { name: "MBA Online", href: "/programs/mba-online" },
      { name: "MBA WX", href: "/programs/mba-wx" },
      { name: "Bachelors", href: "/programs/bachelors" },
      { name: "Diploma Programs", href: "/programs/diploma" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-700">
            NMIMS
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="#educate" className="text-gray-700 font-medium hover:text-red-700 transition-colors">
                Educate Your Employees
              </Link>
            </li>
            <li>
              <Link href="#customise" className="text-gray-700 font-medium hover:text-red-700 transition-colors">
                Customise A Program
              </Link>
            </li>
            <li>
              <Link href="#hiring" className="text-gray-700 font-medium hover:text-red-700 transition-colors">
                Hiring From Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <h6 className="text-yellow-400 text-sm tracking-[0.3em] mb-5 uppercase">
            ENTERPRISE
          </h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Excellence Development<br />Partner For Enterprises
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Boost your business by empowering your workforce with exceptional leadership skills.
          </p>
        </div>
      </section>

      {/* Why Choose NMIMS Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1a1a2e]">
            Why Choose NMIMS To Professionally Upgrade Your Workforce?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-red-700 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1a1a2e]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a2e]">
            Programs We Offer
          </h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            Learn from an institute with a legacy of shaping professionals through career-focused education, 
            equipping them with the latest industry insights and trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-6xl">
                  {program.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#1a1a2e]">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a2e]">
            Few of Our Corporate Partners
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Build your organisation's talent pool as our partner.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="h-24 bg-gray-50 rounded-xl flex items-center justify-center font-bold text-gray-600 hover:scale-110 transition-transform duration-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-yellow-400 font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NMIMS CDOE */}
            <div>
              <h4 className="text-yellow-400 font-bold mb-6">NMIMS CDOE</h4>
              <ul className="space-y-3">
                {footerLinks.nmimsCdoe.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-yellow-400 font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-yellow-400 font-bold mb-6">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 NMIMS. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnterprisePage;