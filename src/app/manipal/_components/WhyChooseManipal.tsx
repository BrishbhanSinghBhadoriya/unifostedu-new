import React from 'react'

const WhyChooseManipal = () => {
  return (
   <section className="relative py-16 md:py-24 bg-[#0B0B10] text-white overflow-hidden">
  {/* Subtle grid pattern */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
      {[{value:'60+', label:'Countries and 2000+ towns &\ncities- our students span the globe'},
        {value:'100k+', label:'Learners have been empowered through Online Manipal'},
        {value:'93%', label:'Of students say their online degree has a positive ROI'},
        {value:'81%', label:'Of students find online is better than or equal to on-campus learning'}].map((s, i) => (
        <div key={i} className="text-left">
          <div className="font-queens text-5xl sm:text-6xl md:text-7xl leading-none">{s.value}</div>
          <p className="mt-3 text-sm sm:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Heading */}
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Students Choose Manipal Online</h3>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Card 1 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200">
        <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🏅</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Degree from top ranked Manipal universities</h4>
        <p className="text-gray-600 text-sm">Graduate with UGC-entitled, NAAC A+ accredited degrees trusted by employers.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200">
        <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">C</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Exclusive Coursera access</h4>
        <p className="text-gray-600 text-sm">Free access to 10K+ courses and professional certificates from global partners.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200">
        <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Scholarships up to 30%</h4>
        <p className="text-gray-600 text-sm">Avail scholarships under merit, defense, alumni, and other categories.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200">
        <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center mb-4">
          <span className="text-2xl">💳</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Easy financing options</h4>
        <p className="text-gray-600 text-sm">Improved affordability with flexible financing and no-cost EMIs.</p>
      </div>

      {/* Card 5 */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200">
        <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
          <span className="text-2xl">🎓</span>
        </div>
        <h4 className="text-xl font-semibold mb-2">Manipal alumni status</h4>
        <p className="text-gray-600 text-sm">Become part of a 200,000+ strong global alumni network.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default WhyChooseManipal