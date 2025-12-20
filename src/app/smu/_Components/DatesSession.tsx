import React from 'react';

type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const DatesSession: React.FC<IntroducationProps> = ({ setOpenModal }) => {
  return (
  <section id="dates and session" className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Admission Dates Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Admission Dates for Various UG & PG Programs
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Sikkim Manipal University Online Admission Schedule 2025–26</strong>
        </p>
  
        <div className="grid md:grid-cols-2 gap-10">
          {/* January 2026 Intake */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-black mb-4">
              January 2026 Intake
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• Application Opens: <strong>1st November 2025</strong></li>
              <li>• Last Date to Apply: <strong>Closing Soon</strong></li>
              <li>• Batch Commences: <strong>Open soon</strong></li>
            </ul>
          </div>
  
          {/* July 2026 Intake */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-black mb-4">
              July 2026 Intake
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• Application Opens: <strong>Not Display</strong></li>
              <li>• Last Date to Apply: <strong>Not Display</strong></li>
              <li>• Batch Commences: <strong>Not Display</strong></li>
            </ul>
          </div>
        </div>
  
        <p className="text-gray-700 text-lg leading-relaxed mt-8">
          Admissions are conducted on a <strong>first-come, first-served basis</strong> and depend on eligibility criteria.
          Students are encouraged to apply early for their preferred intake. The
          <strong> SMU Online admission portal </strong> offers real-time application tracking and dedicated counselor support throughout the process.
        </p>
      </div>
  
      {/* Fee Structure Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Fee Structure 2025–26
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white rounded-2xl shadow-md">
            <thead className="bg-gray-100 text-gray-800 text-lg font-semibold">
              <tr>
                <th className="py-3 px-6 text-left">Program</th>
                <th className="py-3 px-6 text-left">Duration</th>
                <th className="py-3 px-6 text-left">Total Fee (INR)</th>
                <th className="py-3 px-6 text-left">Installment Option</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-lg">
              
            
              <tr className="border-t">
                <td className="py-3 px-6">Online BA</td>
                <td className="py-3 px-6">3 Years</td>
                <td className="py-3 px-6">₹75,000 </td>
                <td className="py-3 px-6">Available</td>
              </tr>
               <tr className="border-t">
                <td className="py-3 px-6">Online BCom</td>
                <td className="py-3 px-6">3 Years</td>
                <td className="py-3 px-6">₹75,000</td>
                <td className="py-3 px-6">Available</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6">Online MBA</td>
                <td className="py-3 px-6">2 Years</td>
                <td className="py-3 px-6">₹1,10,000</td>
                <td className="py-3 px-6">Available</td>
              </tr>
               <tr className="border-t">
                <td className="py-3 px-6">Online MCom</td>
                <td className="py-3 px-6">2 Years</td>
                <td className="py-3 px-6">₹75,000</td>
                <td className="py-3 px-6">Available</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6">Online MCA</td>
                <td className="py-3 px-6">2 Years</td>
                <td className="py-3 px-6">₹98,000 </td>
                <td className="py-3 px-6">Available</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6">Online MA</td>
                <td className="py-3 px-6">2 Years</td>
                <td className="py-3 px-6">₹75,000 </td>
                <td className="py-3 px-6">Available</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <p className="text-gray-700 text-lg leading-relaxed mt-8">
          <strong>Sikkim Manipal University Online</strong> provides flexible financial options including
          <strong> EMI facilities, scholarships,</strong> and
          The transparent fee policy ensures students have a clear understanding of their total educational investment.
        </p>
      </div>
      <button 
      onClick={() => setOpenModal({ type: 'apply' })}
      className="w-full bg-gradient-to-r mb-12 from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
      >
      Apply Now
     </button>
    </div>
 
  
          {/* Why Choose Sikkim Manipal University */}
          <section className="relative py-20 bg-[#0B0B10] text-white overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />
  
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">
                {[
                  {value:'30+', label:'Years of academic\nexcellence and trust'},
                  {value:'50k+', label:'Successful alumni\nacross the globe'},
                  {value:'90%', label:'Student satisfaction\nand success rate'},
                  {value:'150+', label:'Corporate partners for\nplacements and internships'}
                ].map((s, i) => (
                  <div key={i} className="text-left">
                    <div className="font-queens text-5xl sm:text-6xl md:text-7xl leading-none">{s.value}</div>
                    <p className="mt-3 text-sm sm:text-base text-gray-300 whitespace-pre-line max-w-xs">{s.label}</p>
                  </div>
                ))}
              </div>
  
              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Why Students Choose SMU</h3>
  
              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Card 1 */}
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">UGC Approved Degrees</h4>
                  <p className="text-gray-600 text-sm">Graduate with UGC-entitled degrees that are recognized by employers and institutions nationwide.</p>
                </div>
  
                {/* Card 2 */}
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Advanced Learning Platform</h4>
                  <p className="text-gray-600 text-sm">Access comprehensive study materials, recorded lectures, and interactive sessions online.</p>
                </div>
  
                {/* Card 3 */}
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Expert Faculty</h4>
                  <p className="text-gray-600 text-sm">Learn from experienced professors and industry experts with decades of teaching experience.</p>
                </div>
  
                {/* Card 4 */}
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Career Services</h4>
                  <p className="text-gray-600 text-sm">Comprehensive placement support including resume building and interview preparation.</p>
                </div>
  
                {/* Card 5 */}
                <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Global Alumni Network</h4>
                  <p className="text-gray-600 text-sm">Join a network of 50,000+ alumni working in top companies across the world.</p>
                </div>
              </div>
            </div>
          </section>
           </section>
  )
}

export default DatesSession