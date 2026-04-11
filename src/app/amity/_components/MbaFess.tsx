import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, Users, Award, Phone, Mail, MapPin, 
  ArrowRight, CheckCircle, TrendingUp, Calendar, DollarSign, 
  CreditCard, Wallet, Gift, ChevronUp, FileText, Menu, X, ChevronDown 
} from "lucide-react";
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
import Headers from "./Headers";

const sectionItems = [
  { id: "hero", label: "Overview" },
  { id: "fee-structure", label: "Fee Structure" },
  { id: "payment-options", label: "Payment Options" },
  { id: "scholarships", label: "Scholarships" },
  { id: "specializations", label: "Specializations" },
  
  { id: "eligibility", label: "Eligibility" },
  { id: "admission", label: "Admission Process" },
  { id: "comparison", label: "Comparison" },
  { id: "faqs", label: "FAQs" }
];

const feeBreakdown = [
  { semester: "Semester 1", standard: "₹49,750", dual: "₹74,750" },
  { semester: "Semester 2", standard: "₹49,750", dual: "₹74,750" },
  { semester: "Semester 3", standard: "₹49,750", dual: "₹74,750" },
  { semester: "Semester 4", standard: "₹49,750", dual: "₹74,750" },
  { semester: "Total", standard: "₹1,99,000", dual: "₹2,99,000" }
];

const scholarships = [
  {
    name: "Merit-Based Scholarship",
    eligibility: "≥85% in graduation",
    benefit: "Up to 20% waiver",
    savings: "₹39,800"
  },
  {
    name: "Sports Scholarship (CHAMPS)",
    eligibility: "State/National/International level",
    benefit: "30% - 100% scholarship",
    savings: "Up to ₹1,99,000"
  },
  {
    name: "Defence Personnel",
    eligibility: "Defence officers/dependents",
    benefit: "20% discount",
    savings: "₹39,800"
  },
  {
    name: "Divyaang Scholarship",
    eligibility: "Valid disability certificate",
    benefit: "20% discount",
    savings: "₹39,800"
  },
  {
    name: "Alumni Scholarship",
    eligibility: "Amity University alumni",
    benefit: "20% scholarship",
    savings: "₹39,800"
  }
];

const faqs = [
  {
    q: "Is the Amity Online MBA fee negotiable?",
    a: "The fee is set for all applicants. However, you can lower costs through scholarships, early payment discounts, and lump sum payment benefits."
  },
  {
    q: "Can I pay fees in installments without EMI?",
    a: "Yes, you can choose semester-wise and annual payment options without any interest or EMI charges."
  },
  {
    q: "Are there any hidden charges?",
    a: "No. Amity is transparent. The program fee includes all academic expenses, such as study materials, exams, and digital resources."
  },
  {
    q: "Can I get an education loan for Amity Online MBA?",
    a: "Yes, Amity partners with banks and NBFCs. The zero-cost EMI functions like an education loan without interest."
  },
  {
    q: "Is the fee the same for all specializations?",
    a: "No. Standard specializations cost ₹1,99,000, while dual specializations and International Finance cost ₹2,99,000."
  }
];

const MbaFees = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpenModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25,
      rootMargin: "-45% 0px -45% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionItems.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <Headers />
        <div className="min-h-screen bg-white pt-24 md:pt-20">
      {/* Top Section Nav */}
      <nav className="bg-white shadow-sm md:mt-15 mt-12 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl md:mx-auto px-4 py-2 md:py-3 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
            {sectionItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap text-sm md:text-base px-3 md:px-4 py-2 rounded-full border transition-colors ${
                  activeSection === item.id
                    ? "bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden border border-gray-200 rounded-lg"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
              {sectionItems.map((item) => (
                <button
                  key={`mobile-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg border transition-colors ${
                    activeSection === item.id
                      ? "bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

     

      <div className="max-w-screen-3xl mx-auto flex flex-col gap-6">

       

        {/* Main Content - Single Scrollable Slide */}
        <main className="flex-1">
          {/* Hero Section */}
          <section id="hero" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full mb-4">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold">QS #7 Asia Pacific | UGC-DEB Approved</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Amity Online MBA Fees 2025-26
                  <span className="block text-yellow-600 mt-2">Complete Fee Structure & Payment Options</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                  Transparent pricing, flexible payment plans, and scholarships up to 100% for India's only QS-ranked online MBA program
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setOpenModal(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer">
                    Apply Now 
                  </button>
                  <button onClick={()=>setOpenModal(true)} className="border-2 border-gray-300 hover:border-indigo-400 px-8 py-3 rounded-full font-semibold cursor-pointer">
                    Download Brochure
                  </button>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: DollarSign, label: "Starting at", value: "₹1,99,000" },
                  { icon: CreditCard, label: "Zero-Cost EMI", value: "₹8,292/mo" },
                  { icon: Gift, label: "Scholarships", value: "Up to 100%" },
                  { icon: Users, label: "Alumni", value: "25,000+" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                  >
                    <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Fee Structure Section */}
          <section id="fee-structure" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Amity Online MBA Fee Structure 2025-26</h2>
                <p className="text-lg text-gray-600">Transparent pricing with no hidden charges</p>
              </motion.div>

              {/* Fee Cards */}
              <div className="grid md:grid-cols-2 gap-10 mb-12">
                {[
                  { title: "Standard MBA", fee: "₹1,99,000", semester: "₹49,750/semester", duration: "2 years (4 semesters)" },
                  { title: "Dual Specialization", fee: "₹2,99,000", semester: "₹74,750/semester", duration: "2 years (4 semesters)", popular: true },
                 
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative bg-white border-2 rounded-2xl p-6 ${
                      plan.popular ? "border-yellow-400 shadow-lg" : "border-gray-200"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{plan.fee}</div>
                    <div className="text-gray-600 mb-4">{plan.semester}</div>
                    <div className="text-sm text-gray-500 mb-6">{plan.duration}</div>
                    <button onClick={()=> setOpenModal(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold cursor-pointer">
                      View Details
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Semester Breakdown Table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 overflow-x-auto"
              >
                <h3 className="text-2xl font-bold mb-6">Semester-Wise Fee Breakdown</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-gray-300 px-4 py-3 text-left">Semester</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Standard MBA</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Dual Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeBreakdown.map((row, i) => (
                      <tr key={i} className={i === feeBreakdown.length - 1 ? "font-bold bg-gray-100" : "hover:bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3">{row.semester}</td>
                        <td className="border border-gray-300 px-4 py-3">{row.standard}</td>
                        <td className="border border-gray-300 px-4 py-3">{row.dual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>

          {/* Payment Options */}
          <section id="payment-options" className="py-16 bg-gradient-to-br from-indigo-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Payment Options</h2>
                <p className="text-lg text-gray-600">Choose the payment plan that suits your financial situation</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Wallet,
                    title: "Semester-Wise Payment",
                    desc: "Pay ₹49,750 per semester",
                    benefit: "Manageable quarterly payments"
                  },
                  {
                    icon: Calendar,
                    title: "Annual Payment",
                    desc: "₹99,500 per year",
                    benefit: "Save ~5% (₹10,000 savings)"
                  },
                  {
                    icon: DollarSign,
                    title: "Lump Sum Payment",
                    desc: "₹1,79,000 - ₹1,89,000",
                    benefit: "Save 8-12% (up to ₹23,880)"
                  },
                  {
                    icon: CreditCard,
                    title: "Zero-Cost EMI",
                    desc: "Starting at ₹8,292/month",
                    benefit: "No interest, flexible tenure"
                  }
                ].map((option, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <option.icon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-2xl font-semibold text-indigo-600 mb-2">{option.desc}</p>
                    <p className="text-gray-600">{option.benefit}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-yellow-600" />
                  Maximum Savings Tip
                </h3>
                <p className="text-gray-700">
                  Combine lump sum payment (save up to ₹23,880) with merit scholarship (20% off = ₹39,800) for total savings of up to ₹63,680!
                </p>
              </motion.div>
            </div>
          </section>

          {/* Scholarships Section */}
          <section id="scholarships" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Scholarship Opportunities</h2>
                <p className="text-lg text-gray-600">Financial assistance for deserving students</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarships.map((scholarship, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-lg font-bold">{scholarship.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold">Eligibility:</span> {scholarship.eligibility}
                      </p>
                      <p className="text-indigo-600 font-semibold">{scholarship.benefit}</p>
                      <p className="text-green-600 font-bold">Save up to {scholarship.savings}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Specializations */}
          <section id="specializations" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">18+ Specializations Available</h2>
                <p className="text-lg text-gray-600">All at the same competitive fee structure</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "General Management",
                  "Marketing & Sales",
                  "Human Resource Management",
                  "Finance & Accounting",
                  "Operations Management",
                  "Business Analytics",
                  "Data Science",
                  "IT Management",
                  "Digital Marketing",
                  "Digital Entrepreneurship",
                  "International Business",
                  "International Finance (ACCA)",
                  "Hospital Management",
                  "Retail Management",
                  "Hospitality Management",
                  "Insurance Management",
                  "Petroleum & Natural Gas",
                  "HR Analytics"
                ].map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                    <p className="font-semibold">{spec}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ROI Analysis */}
          <section id="roi" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Return on Investment</h2>
                <p className="text-lg text-gray-600">Why Amity Online MBA is worth every rupee</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Investment</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Total Fee</p>
                        <p className="text-gray-600">₹1,99,000 to ₹2,99,000</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Time Investment</p>
                        <p className="text-gray-600">2 years (part-time)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wallet className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Opportunity Cost</p>
                        <p className="text-gray-600">Minimal (continue working)</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-green-600">Returns</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Salary Increase</p>
                        <p className="text-gray-600">32% average (Financial Times)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Starting Salary Range</p>
                        <p className="text-gray-600">₹6-10 LPA</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Top Packages</p>
                        <p className="text-gray-600">Up to ₹29 LPA</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Global Recognition</p>
                        <p className="text-gray-600">WES, WASC approved</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-indigo-600 text-white rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-4">ROI Timeline: 1-2 Years</h3>
                <p className="text-lg">
                  With a 32% average salary increase, most graduates recover their investment within 12-24 months while continuing to earn
                </p>
              </motion.div>
            </div>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="py-16 bg-gradient-to-br from-purple-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Criteria</h2>
                <p className="text-lg text-gray-600">Check if you qualify for admission</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-indigo-600" />
                    Academic Requirements
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Minimum Qualification</p>
                        <p className="text-gray-600">Bachelor's degree in any discipline</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Minimum Marks</p>
                        <p className="text-gray-600">40% aggregate (10+2+3 or 10+2+4)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">University</p>
                        <p className="text-gray-600">Recognized by UGC or equivalent</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-indigo-600" />
                    Special Categories
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">MBA with Campus Immersion</p>
                        <p className="text-gray-600">Minimum 50% + 3 years work experience</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Foreign Graduates</p>
                        <p className="text-gray-600">Valid degree + AIU equivalence certificate</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Language Proficiency</p>
                        <p className="text-gray-600">Adequate understanding of English</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Admission Process */}
          <section id="admission" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Easy 4-Step Admission Process</h2>
                <p className="text-lg text-gray-600">Get started in minutes with our streamlined process</p>
              </motion.div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute top-32 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "01",
                      title: "Online Application",
                      desc: "Fill the form and upload documents",
                      icon: FileText
                    },
                    {
                      step: "02",
                      title: "Document Verification",
                      desc: "Submit required certificates",
                      icon: CheckCircle
                    },
                    {
                      step: "03",
                      title: "Fee Payment",
                      desc: "Choose your payment plan",
                      icon: CreditCard
                    },
                    {
                      step: "04",
                      title: "Start Learning",
                      desc: "Access LMS and begin classes",
                      icon: GraduationCap
                    }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="text-center relative z-10"
                    >
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-28 h-28 rounded-full flex flex-col items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl font-bold text-white">{step.step}</span>
                        <span className="text-xs uppercase font-semibold text-white mt-1">Step</span>
                      </div>
                      <step.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">Important Admission Dates</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-indigo-600">JULY 2026 Session Admission Start</p>
                    <p className="text-gray-600">Applications open: December 2025</p>
                    <p className="text-gray-600">Deadline: January 31, 2026</p>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-600">July 2026 Session</p>
                    <p className="text-gray-600">Applications open: June 2026</p>
                    <p className="text-gray-600">Deadline: August 31, 2026</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Comparison */}
          <section id="comparison" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Fee Comparison with Other Online MBAs</h2>
                <p className="text-lg text-gray-600">See how Amity Online stacks up</p>
              </motion.div>

              <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <th className="px-6 py-4 text-left">University</th>
                      <th className="px-6 py-4 text-left">Total Fee</th>
                      <th className="px-6 py-4 text-left">Duration</th>
                      <th className="px-6 py-4 text-left">Recognition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Amity Online",
                        fee: "₹1.99-2.99 L",
                        duration: "2 Years",
                        recognition: "QS #7 Asia Pacific",
                        highlight: true
                      },
                      {
                        name: "NMIMS Online",
                        fee: "₹3.50-4.00 L",
                        duration: "2 Years",
                        recognition: "AACSB Accredited"
                      },
                      {
                        name: "Manipal Online",
                        fee: "₹2.50-3.00 L",
                        duration: "2 Years",
                        recognition: "UGC-DEB Approved"
                      },
                      {
                        name: "DY Patil Online",
                        fee: "₹2.00-2.50 L",
                        duration: "2 Years",
                        recognition: "UGC-DEB Approved"
                      },
                      {
                        name: "Jain Online",
                        fee: "₹2.25-2.75 L",
                        duration: "2 Years",
                        recognition: "UGC-DEB Approved"
                      }
                    ].map((uni, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-200 ${
                          uni.highlight ? "bg-yellow-50 font-semibold" : "hover:bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4">{uni.name}</td>
                        <td className="px-6 py-4">{uni.fee}</td>
                        <td className="px-6 py-4">{uni.duration}</td>
                        <td className="px-6 py-4">{uni.recognition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 grid md:grid-cols-4 gap-6"
              >
                {[
                  { label: "Only QS-Ranked", value: "✓" },
                  { label: "WASC Accredited", value: "✓" },
                  { label: "Lower Fees", value: "✓" },
                  { label: "300+ Partners", value: "✓" }
                ].map((edge, i) => (
                  <div key={i} className="bg-white border-2 border-indigo-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{edge.value}</div>
                    <p className="text-sm font-semibold">{edge.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">Get answers to common queries about fees and payment</p>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-lg pr-4">{faq.q}</span>
                      {openFAQ === i ? (
                        <ChevronUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFAQ === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Join 25,000+ students who chose Amity Online MBA for quality education at transparent pricing
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setOpenModal(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 cursor-pointer">
                    Apply Now 
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setOpenModal(true)} className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-full font-bold text-lg cursor-pointer">
                    Download Fee Brochure
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                 <div className="w-32 h-10 bg-white rounded flex items-center justify-center mb-4">
                 <img 
                 src="images/logos/amitylogo.jpg" 
                 alt="Amity Online" 
                 className="h-8 object-contain"
                 />
                </div>

                  <p className="text-gray-400 text-sm">
                    Transforming lives through quality education and innovation
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {["Fee Structure", "Payment Options", "Scholarships", "Specializations", "Admission"].map((link) => (
                      <li key={link}>
                        <button
                          onClick={() => scrollToSection(link.toLowerCase().replace(/\s+/g, "-"))}
                          className="hover:text-white transition-colors"
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 7042646766</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@unifostedu.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Noida, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2025 Amity University Online. All rights reserved.</p>
                <p className="mt-2">
                  Disclaimer: Fee structures and policies may change. Always confirm current information from official sources.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <ApplyEnquiryModal
        open={openModal}
        onOpenChange={setOpenModal}
        title="Start Your Application"
        subtitle="Fill in your details and our counselor will contact you within 24 hours"
        universityName="Amity University Online"
        defaultProgram="MBA"
        formType="apply"
      />
    </div>
    </div>
  )
}

export default MbaFees