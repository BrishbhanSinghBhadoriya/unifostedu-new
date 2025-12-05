import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, GraduationCap } from 'lucide-react/dist/cjs/lucide-react';



const Scholarship = () => {
  return (
    <div>
         <div   id="Scholarship">
                      <div >
                        <section
                        
                          className="bg-white py-12 px-6 md:px-20"
                        >
                          <div className="max-w-5xl mx-auto text-gray-800">
                            <h2 className="text-3xl font-bold text-center mb-10">
                              🎓 Amity Online Scholarship & Fee Concession Details
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
                              Amity online scholarship programs support professionals, defence personnel, alumni, and high achievers
                              with fee waivers up to 100%. Combine scholarships with the Amity University Online fees structure and
                              EMI plans to make your online MBA or BBA even more affordable.
                            </p>
        
                            {/* Scholarship Table */}
                            <h3 className="text-2xl font-semibold mb-4">
                              Scholarship Categories
                            </h3>
                            <div className="overflow-x-auto mb-8">
                              <table className="min-w-full border border-gray-300">
                                <thead className="bg-yellow-100 text-gray-900">
                                  <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left">
                                      Select Category
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">
                                      Scholarship Credit
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">
                                      Eligibility Criteria
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      Divyaang (for Persons with Special Needs)
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      20%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      Valid certificate of disability as per government
                                      norms.
                                    </td>
                                  </tr>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      Defence Personnel
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      20%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      Minimum 2 years of service in the defence forces
                                      with a valid Identity Card number.
                                    </td>
                                  </tr>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      Amity University Alumni
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      20%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      Amity University UG/PG alumni.
                                    </td>
                                  </tr>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      Merit-Based
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      20%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      Academic excellence with minimum 85% aggregate in
                                      the previous qualification.
                                    </td>
                                  </tr>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      Sports Scholarship (CHAMPS)
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      30% – 100%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      State, national, or international-level
                                      sportspersons with valid sports federation
                                      affiliation.
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
        
                            {/* Other Fee Concessions Table */}
                            <h3 className="text-2xl font-semibold mb-4">
                              💰 Other Fee Concessions
                            </h3>
                            <div className="overflow-x-auto mb-6">
                              <table className="min-w-full border border-gray-300">
                                <thead className="bg-yellow-100 text-gray-900">
                                  <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left">
                                      Concession Type
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">
                                      Discount
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">
                                      Eligibility Criteria
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      On Full Fee Payment
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      8% – 12%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      Upon upfront payment of the full program fee.
                                    </td>
                                  </tr>
                                  <tr className="hover:bg-yellow-50 transition duration-200">
                                    <td className="border border-gray-300 px-4 py-3">
                                      On Annual Fee Payment
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      5%
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                      Upon upfront payment of the annual program fee.
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
        
                            {/* Note */}
                            <p className="text-gray-600 mt-4 text-sm">
                              🔍 <strong>Note:</strong> Scholarship approval is subject
                              to verification of documents.
                            </p>
                          </div>
                        </section>
        
                        <section id="AdmissionProcedure" className="relative py-20 bg-white">
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
                              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                                Admissions for <strong>Amity University Online</strong>{" "}
                                programs are open <strong>throughout the year</strong>,
                                offering complete flexibility to learners from diverse
                                backgrounds. The university follows{" "}
                                <strong>multiple admission cycles</strong> annually,
                                enabling students to choose the session that best fits
                                their academic or professional schedule.
                              </p>
        
                              <div className="bg-gray-50 p-6 rounded-xl shadow-sm mt-6 max-w-3xl mx-auto">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                  📅 Important Admission Dates
                                </h4>
                                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                  <li>
                                    <strong>January Intake:</strong> Applications open
                                    in <strong>December</strong>
                                  </li>
                                  <li>
                                    <strong>April Intake:</strong> Applications open in{" "}
                                    <strong>March</strong>
                                  </li>
                                  <li>
                                    <strong>July Intake:</strong> Applications open in{" "}
                                    <strong>June</strong>
                                  </li>
                                  <li>
                                    <strong>October Intake:</strong> Applications open
                                    in <strong>September</strong>
                                  </li>
                                </ul>
                              </div>
        
                              <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                                Students can apply directly for programs such as
                                <strong> Online MBA</strong>,{" "}
                                <strong>Online BBA</strong>, <strong>Online BCA</strong>
                                ,<strong>Online BA</strong>, <strong>Online MCA</strong>
                                , and <strong>Online M.Com </strong>
                                Fill the Enquiry Form  And  Apply Now  Form   .
        
                                    <Button
                          onClick={() => setOpenModal({ type: "enquiry" })}
                          size="sm"
                          className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-[#452971] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-1.5 md:py-2 whitespace-nowrap cursor-Pointer"
                        >
                          <span className="hidden sm:inline">Enquire Now</span>
                          <span className="sm:hidden">Enquire</span>
                         
                        </Button>
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
                                      <span className="text-3xl md:text-4xl font-bold">
                                        {step.number}
                                      </span>
                                      <span className="text-xs md:text-sm uppercase font-semibold mt-1">
                                        Step
                                      </span>
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                                      {step.title}
                                    </h4>
                                    <p className="text-gray-700 text-sm md:text-base">
                                      {step.desc}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </section>
                      </div>
                      <section id="UpcomingSessions" className="bg-gradient-to-br from-indigo-50 to-white py-16 px-6 md:px-12">
                        <div className="max-w-5xl mx-auto text-center">
                          {/* Title Section */}
                          <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-indigo-700 mb-6"
                          >
                            Upcoming and Ongoing Sessions
                          </motion.h2>
        
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
                          >
                            Amity Online runs four academic sessions every year to
                            ensure continuous learning opportunities. Students can join
                            at any cycle and start their academic journey early. The
                            flexible admission process allows learners to begin without
                            waiting for a full year.
                          </motion.p>
        
                          {/* Session Cards */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              viewport={{ once: true }}
                              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                              <CalendarDays className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                January 2026 Batch
                              </h3>
                              <p className="text-gray-600">
                                <strong>Applications now open</strong> for the January
                                2026 intake. Secure your spot in India’s top-ranked
                                online university.
                              </p>
                            </motion.div>
        
                            {/* Card 2 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              viewport={{ once: true }}
                              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                              <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                April 2026 Batch
                              </h3>
                              <p className="text-gray-600">
                                <strong>Pre-registration ongoing</strong>. Get early
                                access and stay ahead in your learning goals.
                              </p>
                            </motion.div>
        
                            {/* Card 3 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              viewport={{ once: true }}
                              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                              <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                July 2026 Batch
                              </h3>
                              <p className="text-gray-600">
                                <strong>Early bird scholarships</strong> are now
                                available for the July session. Enroll early and save
                                your academic year!
                              </p>
                            </motion.div>
                          </div>
        
                          {/* Bottom Note */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            viewport={{ once: true }}
                            className="mt-12 text-gray-700 text-base max-w-3xl mx-auto"
                          >
                            Ongoing sessions also allow mid-term enrollments for select
                            programs. Amity Online’s flexible academic calendar ensures
                            students can join anytime without losing an academic year.
                          </motion.p>
                        </div>
        
                        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => setOpenModal({ type: "enquiry" })}
            size="lg"
            className="bg-yellow-400 text-black border border-black 
                       hover:text-white hover:bg-[#452971] 
                       text-sm sm:text-base px-6 sm:px-8 py-2.5 
                       rounded-lg shadow-md transition-all duration-300
                       hover:scale-105 cursor-pointer"
          >
            <span className="hidden sm:inline">Enquire Now</span>
            <span className="sm:hidden">Enquire</span>
          </Button>
        </div>
        
                      </section>
                    </div>
        
    </div>
  )
}

export default Scholarship