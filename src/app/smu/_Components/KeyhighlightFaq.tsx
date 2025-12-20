import { useState } from 'react';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const KeyhighlightFaq: React.FC<IntroducationProps> = ({ setOpenModal }) => {

     const faqData = [
      
      {
        question: "Is Sikkim Manipal University recognized by UGC?",
        answer:
          "Yes, Sikkim Manipal University (SMU) is recognized by the University Grants Commission (UGC) and approved by the Distance Education Bureau (UGC-DEB). All online programs offered by SMU are UGC-entitled and hold the same value as regular degrees.",
      },
      {
        question: "What online programs are offered by Sikkim Manipal University?",
        answer:
          "SMU offers a wide range of online undergraduate and postgraduate programs including MBA, MCA, B.Com, B.A., M.Com, and M.A. in various specializations. These programs are designed to provide flexibility while maintaining academic rigor.",
      },
      {
        question: "Are online degrees from SMU valid for government jobs?",
        answer:
          "Yes, online degrees from Sikkim Manipal University are valid for government jobs, competitive exams, and higher education. Being UGC-DEB approved, these degrees are recognized by government authorities and private organizations across India.",
      },
      {
        question: "What is the admission process for SMU online courses?",
        answer:
          "The admission process at SMU Online is completely online and straightforward. Candidates need to fill out the application form, submit required documents, and pay the application fee. The entire process can be completed from the comfort of your home.",
      },
      {
        question: "How much are the fees for online courses at SMU?",
        answer:
          "Fees for online programs at Sikkim Manipal University are affordable and vary by program. Undergraduate programs start from ₹75,000 while postgraduate programs range from ₹75,000 to ₹1,10,000 for the entire duration.",
      },
      {
        question: "Does SMU provide placement assistance?",
        answer:
          "Yes, Sikkim Manipal University offers comprehensive placement assistance to online students. This includes career counseling, resume building, interview preparation, and access to job opportunities through their placement cell.",
      },
      {
        question: "What is the duration of online programs?",
        answer:
          "Undergraduate programs at SMU Online typically span 3 years, while postgraduate programs have a duration of 2 years. The flexible learning approach allows students to complete programs at their own pace within the maximum time limit.",
      },
      {
        question: "Are the online degrees internationally recognized?",
        answer:
          "Yes, degrees from Sikkim Manipal University are recognized globally. SMU has a strong international presence and its degrees are accepted by employers and educational institutions worldwide.",
      },
      {
        question: "Can working professionals pursue online courses?",
        answer:
          "Absolutely! SMU Online programs are specifically designed for working professionals. The flexible schedule, recorded lectures, and online resources allow professionals to balance work and studies effectively.",
      },
      {
        question: "What is the difference between online and regular courses at SMU?",
        answer:
          "SMU Online programs provide the same UGC-entitled degree as regular programs. The key difference is the delivery mode - online programs offer flexibility while maintaining the same curriculum, faculty standards, and evaluation methods.",
      },
      {
        question: "Does the university offer scholarships for online programs?",
        answer:
          "Yes, Sikkim Manipal University offers various scholarships and financial aid options for deserving students. These include merit-based scholarships and special schemes for defense personnel and differently-abled students.",
      },
      {
        question: "Is technical support provided for online students?",
        answer:
          "Yes, SMU provides dedicated technical support to online students. From accessing the learning management system to attending live sessions, comprehensive support is available to ensure a smooth learning experience.",
      },
      {
     question: "What is the exam mode?",
     answer:"Examinations are AI-proctored and conducted online for complete flexibility."
    
      }
    ];
      const [openIndex, setOpenIndex] = useState<number | null>(null);
     
     const toggleFAQ = (index: number) => {
       setOpenIndex(prev => (prev === index ? null : index));
     };
  return (
    <section id="key-highlights" className="w-full bg-white py-14 text-gray-800">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
      Key Highlights of Sikkim Manipal University Online (SMU Online)
    </h2>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed text-gray-700 mb-10 text-center">
      Sikkim Manipal University Online (SMU Online) is one of India's leading universities 
      offering UGC-approved online degrees. With a perfect blend of quality education, modern 
      technology, and global recognition, SMU Online empowers learners through flexible and 
      career-focused programs such as Online MCom, Online BCom, Online MBA, and BBA.  
      Here's why SMU Online is trusted by students across India and abroad:
    </p>

    {/* Highlights List */}
    <div className="space-y-6">

      {/* Point 1 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">🎓</span>
        <p className="leading-relaxed">
          <strong>UGC-Approved Online Degrees:</strong>  
          All programs — including MCom, BCom, BBA, and Online MBA — are approved by UGC-DEB and 
          recognized by both government and private sectors.
        </p>
      </div>

      {/* Point 2 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">🏅</span>
        <p className="leading-relaxed">
          <strong>NAAC A+ Accredited University:</strong>  
          SMU holds an A+ grade from NAAC, ensuring high-quality academics and globally accepted standards.
        </p>
      </div>

      {/* Point 3 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">💻</span>
        <p className="leading-relaxed">
          <strong>Advanced Learning Management System (LMS):</strong>  
          Students get 24/7 access to e-books, quizzes, lectures, and recorded sessions through a modern LMS.
        </p>
      </div>

      {/* Point 4 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">🕒</span>
        <p className="leading-relaxed">
          <strong>Live & Recorded Classes:</strong>  
          Attend live interactive classes or watch recordings anytime — ideal for working professionals.
        </p>
      </div>

      {/* Point 5 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">🧠</span>
        <p className="leading-relaxed">
          <strong>AI-Proctored Examinations:</strong>  
          Secure and transparent online exams using advanced AI technology.
        </p>
      </div>

      {/* Point 6 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">🌍</span>
        <p className="leading-relaxed">
          <strong>Global Alumni Network:</strong>  
          Join a worldwide community of 50,000+ alumni working in top multinational companies.
        </p>
      </div>

      {/* Point 7 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">💼</span>
        <p className="leading-relaxed">
          <strong>Dedicated Placement Assistance:</strong>  
          Career counseling, virtual job fairs, and resume-building support to make students job-ready.
        </p>
      </div>

      {/* Point 8 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">💳</span>
        <p className="leading-relaxed">
          <strong>Flexible Fee Options:</strong>  
          Affordable fees with easy EMI options for programs like Online BCom and Online MCom.
        </p>
      </div>

      {/* Point 9 */}
      <div className="flex items-start gap-3">
        <span className="text-2xl">⚙️</span>
        <p className="leading-relaxed">
          <strong>Industry-Integrated Curriculum:</strong>  
          Courses developed with experts from IBM, TCS, and Deloitte to match real-world business needs.
        </p>
      </div>

    </div>

    {/* Closing Statement */}
    <p className="text-lg leading-relaxed text-gray-700 mt-10 text-center">
      SMU Online blends academic excellence with global exposure and modern digital learning. 
      Whether you choose BBA, MBA, BCom, or MCom — you graduate with confidence, industry-ready skills, 
      and a degree accepted worldwide.
    </p>

  </div>
  <section id="faqs" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-queens">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-[#f26722] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about Sikkim Manipal University Online Programs
              </p>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 flex justify-between items-center font-semibold text-gray-800 transition-all duration-300 group-hover:text-orange-700 text-lg"
                   >
                    <span className="pr-8">{faq.question}</span>
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#f26722] group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 py-6 text-gray-700 bg-white border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
</section>
  )
}

export default KeyhighlightFaq