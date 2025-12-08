import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FaBook, FaBookOpen, FaBriefcase, FaClipboardCheck, FaRobot, FaUniversity, FaUserFriends, FaUserTie } from 'react-icons/fa';

const Resources = ({fadeIn, staggerChildren}) => {
    
  return (
    <div>
        <section className="py-16 bg-white px-6">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-1"
                  {...fadeIn}
                ></motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: <FaBookOpen className="text-2xl" />,
                      title: "Diverse learning mediums",
                      text: "E-books, printed & audio books, videos to suit all styles.",
                    },
                    {
                      icon: <FaUserTie className="text-2xl" />,
                      title: "Dedicated Academic Advisor",
                      text: "Experts to guide every step of your career.",
                    },
                    {
                      icon: <FaRobot className="text-2xl" />,
                      title: "AI-Professor AMI",
                      text: "Powered by ChatGPT-4 for better learning.",
                    },
                    {
                      icon: <FaBriefcase className="text-2xl" />,
                      title: "Career Services",
                      text: "Workshops, internships, resume support.",
                    },
                    {
                      icon: <FaBook className="text-2xl" />,
                      title: "Doorstep delivery",
                      text: "Only online university delivering physical books.",
                    },
                    {
                      icon: <FaUniversity className="text-2xl" />,
                      title: "Metaverse Campus",
                      text: "Explore campus in metaverse.",
                    },
                    {
                      icon: <FaUserFriends className="text-2xl" />,
                      title: "Offline Experiences",
                      text: "On-campus orientation and peer bonding.",
                    },
                    {
                      icon: <FaClipboardCheck className="text-2xl" />,
                      title: "Placement Opportunities",
                      text: "Resume prep and interview assistance.",
                    },
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

    </div>
  )
}

export default Resources