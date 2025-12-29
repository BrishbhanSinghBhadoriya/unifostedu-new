import { optimizeCloudinary } from '@/utils/cloudinary'
import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
   <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-4xl font-bold mb-6">
          About <span className="text-orange-600">Manipal University Jaipur</span>
        </h3>
        <div className="prose prose-lg text-gray-700 space-y-4">
          <p>
            Manipal University Jaipur (MUJ) is a premier institution offering globally recognized online degrees through Online Manipal. 
            Established in 2011, MUJ has quickly become one of India's leading universities with NAAC A+ accreditation and UGC approval.
          </p>
          <p>
            With over 100,000+ learners worldwide, Manipal Online delivers industry-relevant education through flexible learning models. 
            Our online programs in MBA, BBA, MCA, BCA, M.Com, B.Com, and MA are designed for working professionals who want to upskill 
            without career breaks.
          </p>
          <p>
            Manipal University Jaipur's online degrees are WES-accredited and accepted globally for employment and higher education. 
            Students benefit from live classes, recorded sessions, expert faculty, placement assistance, and membership in the 
            200,000+ strong Manipal alumni network spanning 50+ countries.
          </p>
        </div>
      </div>
      <div>
        <Image width={100} height={100}src={optimizeCloudinary("https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp")} alt="Manipal University Jaipur Campus" className="w-full h-auto object-cover rounded-2xl border-2 border-gray-200" />
      </div>
    </div>
  </div>
</section>
  )
}

export default About