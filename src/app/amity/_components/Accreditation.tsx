import AccreditationSection from '@/components/AccreditationSection'
import React from 'react'

const Accreditation = () => {
  return (
    <div>
        <AccreditationSection
              title="Education with Global Recognition"
              description="Our accredited programs open doors to international opportunities and ensure your qualifications are recognized worldwide."
              stats={[
                {
                  value: "95%",
                  label: "Employment Rate Within 6 Months",
                  color: "text-blue-700",
                  bg: "bg-blue-50",
                },
                {
                  value: "50+",
                  label: "Countries with Alumni Network",
                  color: "text-green-700",
                  bg: "bg-green-50",
                },
                {
                  value: "10+",
                  label: "Industry Partnerships",
                  color: "text-purple-700",
                  bg: "bg-purple-50",
                },
              ]}
              benefits={[
                {
                  title: "Global Mobility",
                  description:
                    "Our degrees are recognized internationally, enabling you to pursue opportunities worldwide.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>`,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Rigorous accreditation processes ensure our programs meet the highest educational standards.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>`,
                },
                {
                  title: "Industry Connections",
                  description:
                    "Our partnerships with leading organizations provide valuable networking and career opportunities.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>`,
                },
                {
                  title: "Career Advancement",
                  description:
                    "Employers value accredited degrees, giving our graduates a competitive edge in the job market.",
                  iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>`,
                },
              ]}
              accreditations={[
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp", alt: "UGC", name: "UGC" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp", alt: "AICTE", name: "AICTE" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp", alt: "NIRF", name: "NIRF" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp", alt: "WES", name: "WES" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp", alt: "AIU", name: "AIU" },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp", alt: "ACU", name: "ACU" },
              ]}
              internationalRecognition={[
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/qs_k5hl4c.webp",
                  alt: "QS Ranking", 
                  name: "QS" },
                {
                  src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wasc_emgnvc.webp",
                  alt: "WASC Accreditation",
                  name: "WASC",
                },
                {
                  src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/the_zp4hxg.webp",
                  alt: "Times Higher Education",
                  name: "THE",
                },
                { src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327853/qaa_anjp5o.webp", 
                  alt: "QAA UK",
                  name: "QAA UK" },
              ]}
              successStories={[
                {
                  name: "Aisha Sharma",
                  initials: "AS",
                  color: "bg-blue-100 text-blue-600",
                  text: "The international recognition of my degree allowed me to secure a position with a leading tech firm in Singapore immediately after graduation.",
                },
                {
                  name: "Rahul Mehta",
                  initials: "RM",
                  color: "bg-green-100 text-green-600",
                  text: "The accreditation status of my program made the admission process to Stanford seamless. My credits transferred without any issues.",
                },
              ]}
              trust={{
                text: "Trusted by 25,000+ Students",
                subtext:
                  "Our accreditations ensure quality education recognized globally",
              }}
            />
    </div>
  )
}

export default Accreditation