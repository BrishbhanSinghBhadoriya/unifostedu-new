import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const OnlineRegular = () => {
  return (
    <div>
        <section
                      id="OnlineVsRegular"
                      className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-6 md:px-10"
                    >
                      <div className="max-w-6xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                          viewport={{ once: true }}
                          className="text-center mb-10"
                        >
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Amity University Online vs Regular Degrees
                          </h2>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            Compare the Amity University Online MBA and degree programmes with traditional on-campus study to see
                            why thousands of working professionals choose flexible e-learning without compromising government job
                            eligibility or placement support.
                          </p>
                        </motion.div>
        
                        <div className="overflow-x-auto">
                          <table className="w-full border border-gray-200 bg-white rounded-2xl shadow-sm">
                            <thead className="bg-yellow-100 text-gray-900">
                              <tr>
                                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold border border-gray-200">
                                  Key Factors
                                </th>
                                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold border border-gray-200">
                                  Amity University Online
                                </th>
                                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold border border-gray-200">
                                  Regular On-Campus Degree
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                {
                                  factor: "Accreditation & Validity",
                                  online: "UGC-entitled, NAAC A+ accredited; valid for government jobs and international admissions.",
                                  regular: "UGC-recognised; valid globally.",
                                },
                                {
                                  factor: "Learning Flexibility",
                                  online: "Live + recorded classes, LMS access 24x7, assessments designed for working professionals.",
                                  regular: "Fixed lecture schedules, mandatory campus attendance.",
                                },
                                {
                                  factor: "Fees Structure",
                                  online:
                                    "₹99,000–₹2,99,000 with EMIs, scholarships, and pay-per-semester options for online MBA & BBA.",
                                  regular: "₹2,50,000+ per year plus hostel and relocation costs.",
                                },
                                {
                                  factor: "Placement & Career Services",
                                  online: "Dedicated virtual career fairs, placement portal, global alumni community, LinkedIn mentoring.",
                                  regular: "On-campus drives for final-year students, alumni networks limited to campus batches.",
                                },
                                {
                                  factor: "Network & Exposure",
                                  online: "Pan-India cohort, international faculty, industry webinars, virtual campus tours.",
                                  regular: "Primarily campus cohort, in-person events.",
                                },
                              ].map((row, index) => (
                                <tr key={row.factor} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  <td className="px-4 py-3 border border-gray-200 text-sm md:text-base font-semibold text-gray-900">
                                    {row.factor}
                                  </td>
                                  <td className="px-4 py-3 border border-gray-200 text-sm md:text-base text-gray-700">
                                    {row.online}
                                  </td>
                                  <td className="px-4 py-3 border border-gray-200 text-sm md:text-base text-gray-700">
                                    {row.regular}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                          >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              Amity Online Degree Validity
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                              Amity University Online degrees are listed on the UGC-DEB portal and carry a NAAC A+ rating. They are
                              officially valid for UPSC, SSC, banking examinations, PSU roles, and for WES credential evaluation when
                              you apply abroad. Learners receive the same university transcript and convocation certificate.
                            </p>
                          </motion.div>
        
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                          >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              When to Choose Amity University Online
                            </h3>
                            <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                              <li>
                                <strong>Working professionals</strong> who need an online MBA near Delhi, Mumbai, Bangalore, or any
                                metro without quitting their job.
                              </li>
                              <li>
                                <strong>Fresh graduates</strong> seeking a cost-effective Amity University Online BBA or BCA with
                                placement assistance and industry certifications.
                              </li>
                              <li>
                                <strong>Government job aspirants</strong> who want a recognised Amity online degree while preparing
                                for competitive examinations.
                              </li>
                            </ul>
                          </motion.div>
                        </div>
                      </div>
                    </section>
    </div>
  )
}

export default OnlineRegular