'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { FaClock, FaGraduationCap, FaBook, FaBriefcase, FaCertificate, FaBolt, FaTrophy } from 'react-icons/fa6';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import universitiesData from '@/data/Universities.json';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
interface Badge  { text: string; type: 'roi' | 'trending' | 'global' | 'new' }
interface Course { id: string; label: string; icon: string; specialization?: string; jobGuarantee?: boolean; badge?: Badge }

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
const formatFee = (n: number) =>
  n >= 100000 ? `₹${(n / 100000).toFixed(1)} L` : `₹${(n / 1000).toFixed(0)}K`;

const StarRating = ({ rating }: { rating: number }) => (
  <span className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-200'} style={{ fontSize: 14 }}>★</span>
    ))}
  </span>
);

// ─────────────────────────────────────────────────────────────
// Filter util — per-course, per-specialization aware
// ─────────────────────────────────────────────────────────────
function getFilteredUniversities(selection: {
  category: string; course: string; specialization: string;
  budget: string; qualification: string; score: string;
}) {
  const { category, course, specialization, budget, qualification, score } = selection;

  const results: any[] = [];

  (universitiesData.universities as any[]).forEach((uni) => {
    // 1. Find the exact course this university offers
    const matchedCourse = uni.courses?.find((c: any) => c.id === course);
    if (!matchedCourse) return;

    // 2. Category check
    if (!uni.filters.categories.includes(category)) return;

    // 3. Find matched specialization (if user selected one)
    let matchedSpec: any = null;
    if (specialization && specialization !== 'Not decided yet') {
      matchedSpec = matchedCourse.specializations?.find(
        (s: any) =>
          s.name.toLowerCase().includes(specialization.toLowerCase()) ||
          specialization.toLowerCase().includes(s.name.toLowerCase())
      );
      // If specialization is selected but not found in this course → skip
      if (!matchedSpec) return;
    }

    // 4. Determine fees to show — spec fees > course base fees
    const feesToShow = matchedSpec
      ? matchedSpec.fees
      : matchedCourse.baseFees;

    // 5. Budget check using resolved fees
    if (budget) {
      const feeAvg = (feesToShow.min + feesToShow.max) / 2;
      const inBudget = checkBudget(feeAvg, budget);
      if (!inBudget) return;
    }

    // 6. Qualification + score check
    if (qualification && !uni.filters.qualifications.includes(qualification)) return;
    if (score        && !uni.filters.scores.includes(score)) return;

    // 7. Push result with resolved data
    results.push({
      ...uni,
      // Override fees and duration with matched course/spec data
      fees:            feesToShow,
      duration:        matchedSpec?.duration ?? matchedCourse.duration,
      matchedCourse:   matchedCourse.label,
      matchedSpec:     matchedSpec?.name ?? null,
      defaultProgram:  matchedCourse.defaultProgram,
    });
  });

  // Fallback: at least 3 results
  if (results.length < 3) {
    const fallback = (universitiesData.universities as any[])
      .map((uni) => {
        const fc = uni.courses?.[0];
        return {
          ...uni,
          fees:          fc?.baseFees ?? { min: 0, max: 0 },
          duration:      fc?.duration ?? '2 Years',
          matchedCourse: fc?.label ?? '',
          matchedSpec:   null,
          defaultProgram: fc?.defaultProgram ?? 'MBA',
        };
      })
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
    return fallback;
  }

  return results.sort((a, b) => b.rating - a.rating);
}

// Budget range helper
function checkBudget(feeAvg: number, budget: string): boolean {
  switch (budget) {
    case 'Less than 1 Lakh':       return feeAvg < 100000;
    case '1 Lakh to 2.5 Lakh':    return feeAvg >= 100000 && feeAvg <= 250000;
    case '2.5 Lakh to 4.2 Lakh':  return feeAvg > 250000  && feeAvg <= 420000;
    case '4.2 Lakh to 6 Lakh':    return feeAvg > 420000  && feeAvg <= 600000;
    case '6 Lakh +':               return feeAvg > 600000;
    default: return true;
  }
}

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
const Compare: React.FC = () => {
  // ── Quiz state ──────────────────────────────────────────────
  const [step, setStep]                                     = useState(1);
  const [selectedCategory, setSelectedCategory]             = useState('PG Courses');
  const [selectedCourse, setSelectedCourse]                 = useState('Online MBA');
  const [selectedSpecialization, setSelectedSpecialization] = useState('Not decided yet');
  const [selectedBudget, setSelectedBudget]                 = useState('');
  const [selectedQualification, setSelectedQualification]   = useState('');
  const [lastDegreeScore, setLastDegreeScore]               = useState('');

  // ── Results state ───────────────────────────────────────────
  const [showResults, setShowResults]                       = useState(false);
  const [filteredUniversities, setFilteredUniversities]     = useState<any[]>([]);

  // ── Modal state ─────────────────────────────────────────────
  const [modalOpen, setModalOpen]                           = useState(false);
  const [activeUniversity, setActiveUniversity]             = useState<any>(null);
  const [preResultsEnquiryOpen, setPreResultsEnquiryOpen]   = useState(false);
  const [pendingResults, setPendingResults]                 = useState<any[] | null>(null);

  // ── Course data ─────────────────────────────────────────────
  // ── Course data ─────────────────────────────────────────────

const pgCourses = useMemo<Course[]>(() => [
  {
    id: 'Online MBA',
    label: 'Online MBA',
    icon: '🎓',
    badge: { text: 'Most Popular', type: 'roi' },
    desc: 'Develop leadership, business strategy, marketing and finance skills for managerial roles.',
    specialization: "General Management, Business Management, Marketing & Sales Management, Digital Marketing, Digital Marketing Management,  Finance & Accounting Management, Financial Management , Finance, International Finance, Insurance Management, Applied Finance, Banking and Insurance, Banking & Finance, Human Resource Management, Human Resource Analytics, Operations Management, Production and Operations Management, Supply Chain, Logistics & Supply Chain Management, Business Analytic, Data Science & Business Analytics, Data Scienc, Information Technology Management, IT Management,IT & FinTech,FinTech Management,AI & Machine Learning Management, Blockchain Management, Information System Management, International Business Management, International Business, International Relations, Healthcare Management, Hospital Management,Hospital Administration & Healthcare Management, Entrepreneurship & Leadership Management, Entrepreneurship & Venture Creation, Digital Entrepreneurship, Entrepreneurship, Leadership & Strategy, Retail Management, Retail Management & Quick Commerce, E-Commerce, Project Management, Hospitality Management-, Travel and Tourism Management, Airlines & Airport Management,Petroleum & Natural Gas, Oil & Gas Management, Power Management, Infrastructure Management, Agri-Business Management, Media Management, Event Management, Disaster Management , BFSI,Business Law, Biotech, Food Tech, Tourism, AI-Driven Finance, AI-Driven Marketing, AI-Driven Human Resources, AI-Driven Business Strategy ,Dual: HR & Finance, Dual: Finance & Marketing, Dual: Marketing & HR, Dual: Marketing & Business Analytics , Dual: Finance & Business Analytics , Dual: HR & Business Analytics , Dual: International Finance"
  },

  {
    id: 'Online MCA',
    label: 'Online MCA',
    icon: '💻',
    badge: { text: 'High Demand', type: 'roi' },
    desc: 'Advanced computer application program focusing on software development and modern technologies.',
    specialization: "General, Computer Science & IT, Blockchain Technology, Machine Learning & Artificial Intelligence, Augmented Reality & Virtual Reality, Software Engineering, Cyber Security, Cyber Security & Forensics, AI & Data Science, AI & ML, Cloud Computing, Cloud Computing (AWS Academy), Comprehensive Emerging Technologies, Full Stack Development, Full Stack Development, Data Analytics, Big Data & Data Mining, DevOps, General IT / Software Development, Data Science, Artificial Intelligence, Artificial Intelligence & Machine Learning, Natural Language Processing & Large Language Models Development, AR/VR & Game Development"
  },

  {
    id: 'Online MSc',
    label: 'Online M.Sc',
    icon: '🔬',
    badge: { text: 'Research Focus', type: 'roi' },
    desc: 'Postgraduate science program for research and specialized knowledge in scientific fields.',
    specialization: "Data Science, Business Analytics, Mathematics, Economics, Environmental Change & Sustainability"
  },

  {
    id: 'Online MCom',
    label: 'Online M.Com',
    icon: '📄',
    badge: { text: 'Finance Career', type: 'roi' },
    desc: 'Master program focused on accounting, finance, taxation and corporate management.',
    specialization: "General, Financial Management, Financial Technology, Accounting & Finance, Professional Accounting & Finance (CPA Accredited), Public Accounting, Commerce"
  },

  {
    id: 'Online MA',
    label: 'Online MA',
    icon: '📚',
    badge: { text: 'Academic Career', type: 'roi' },
    desc: 'Advanced studies in humanities and social sciences for research and academic careers.',
    specialization: "English, English Literature, Journalism & Mass Communication, Public Policy & Governance, Economics, Sociology, Political Science, History, TESOL (Teaching English to Speakers of Other Languages), Environmental Change & Sustainability, Public Policy"
  },

  {
    id: 'Online MAJMC',
    label: 'Online MAJMC',
    icon: '📰',
    badge: { text: 'Media Career', type: 'roi' },
    desc: 'Specialized program in journalism, digital media and mass communication.',
    specialization: 'Journalism & Mass Communication'
  },
], []);

const ugCourses = useMemo<Course[]>(() => [

  {
    id: 'Online BBA',
    label: 'Online BBA',
    icon: '📈',
    badge: { text: 'Business Career', type: 'roi' },
    desc: 'Learn business management, entrepreneurship and leadership skills for corporate careers.',
    specialization:"General, Finance, Finance & Accounting, Marketing Management, Marketing, Digital Marketing, Digital Marketing Management, Human Resource Management, Entrepreneurship, Entrepreneurship & Family Business, Data Analytics, Data Science & Analytics, Retail Management, Retail & E-Commerce, Operations Management, International Business, Logistics & Supply Chain Management, FinTech, Financial Technology, IT & System Management, Banking Financial Services & Insurance Management, Shipping & Logistics Management, E-Commerce Management, Business Analytics, Business Analytics (KPMG), Computer Science, Direct Selling, Travel & Tourism Management, Healthcare Management"
  },

  {
    id: 'Online BCA',
    label: 'Online BCA',
    icon: '💾',
    badge: { text: 'Trending Course', type: 'trending' },
    desc: 'Computer application program focused on programming, software development and IT careers.',
    specialization: "General, Computer Science & IT, Blockchain Technology, Machine Learning & Artificial Intelligence, Augmented Reality & Virtual Reality, Software Engineering, Cyber Security, Cyber Security & Forensics, AI & Data Science, AI & ML, Cloud Computing, Cloud Computing (AWS Academy), Comprehensive Emerging Technologies, Full Stack Development, Full Stack Development, Data Analytics, Big Data & Data Mining, DevOps, General IT / Software Development, Data Science, Artificial Intelligence, Artificial Intelligence & Machine Learning, Natural Language Processing & Large Language Models Development, AR/VR & Game Development"
  },

  {
    id: 'Online BCom',
    label: 'Online B.Com',
    icon: '💼',
    badge: { text: 'Commerce Stream', type: 'roi' },
    desc: 'Commerce program covering accounting, taxation, finance and business operations.',
    specialization: "General, Accounting & Finance, Professional Accounting & Finance (CPA Accredited), Public Accounting, Commerce"
  },

  {
    id: 'Online BA',
    label: 'Online BA',
    icon: '📚',
    badge: { text: 'Humanities', type: 'roi' },
    desc: 'Undergraduate program focused on humanities, social sciences and communication.',
    specialization: "English, English Literature, Journalism & Mass Communication, Public Policy & Governance, Economics, Sociology, Political Science, History, TESOL (Teaching English to Speakers of Other Languages), Environmental Change & Sustainability, Public Policy"
  },

  {
    id: 'Online BAJMC',
    label: 'Online BAJMC',
    icon: '📚',
    badge: { text: 'Media Studies', type: 'roi' },
    desc: 'Bachelor program in journalism, digital media and mass communication.',
    specialization: "Journalism & Mass Communication"
  },

  {
    id: 'Online BSc',
    label: 'Online B.Sc',
    icon: '🔬',
    badge: { text: 'Science Program', type: 'roi' },
    desc: 'Science program focusing on analytical thinking, research and technical knowledge.'
  }

], []);

  const ugPgCourses = useMemo<Course[]>(() => [

  {
    id: 'BCA+MCA',
    label: 'BCA+MCA Integrated',
    icon: '🧮',
    badge: { text: 'Saves 6 Months', type: 'roi' },
    desc: 'Integrated computer application program that saves time and accelerates IT career growth.'
  },

  {
    id: 'BBA+MBA',
    label: 'BBA+MBA Integrated',
    icon: '📊',
    badge: { text: 'Saves 6 Months', type: 'roi' },
    desc: 'Combined business program for fast-track management career development.'
  },

  {
    id: 'BCom+MBA',
    label: 'B.Com+MBA Integrated',
    icon: '📑',
    badge: { text: 'Saves 6 Months', type: 'roi' },
    desc: 'Integrated commerce and management program for finance and corporate leadership.'
  }

], []);
  const courseOptions = useMemo(() => ({
    default:      pgCourses,
    'PG Courses': pgCourses,
    'UG Courses': ugCourses,
   
    'UG+PG Courses': ugPgCourses,
  }), [pgCourses, ugCourses, ugPgCourses]);

  const budgetOptions        = ['Less than 1 Lakh', '1 Lakh to 2.5 Lakh', '2.5 Lakh to 4.2 Lakh', '4.2 Lakh to 6 Lakh', '6 Lakh +'];
  const qualificationOptions = ['Postgraduate', 'College Graduate', 'Completed 12th', 'Completed 10th', 'Diploma Holder'];
  const scoreOptions         = ['Below 50%', '50% - 60%', '60% - 70%', '70% - 80%', '80% - 90%', 'Above 90%'];

  const selectedCourseMeta = useMemo(() =>
    Object.values(courseOptions).flat().find(c => c.id === selectedCourse),
  [courseOptions, selectedCourse]);

  // ── Specializations: from JSON (only for selected course) ──
  // This gives the UNION of all specializations across universities for that course
  const specializationsFromJSON = useMemo(() => {
    const specs = new Set<string>();
    (universitiesData.universities as any[]).forEach((uni) => {
      const matched = uni.courses?.find((c: any) => c.id === selectedCourse);
      matched?.specializations?.forEach((s: any) => specs.add(s.name));
    });
    return Array.from(specs);
  }, [selectedCourse]);

  const rawSpecializations = useMemo(() => {
    // Prefer JSON-derived specializations (accurate per course)
    if (specializationsFromJSON.length > 0) return specializationsFromJSON;
    // Fallback to hardcoded list
    if (!selectedCourseMeta?.specialization) return [];
    return selectedCourseMeta.specialization.split(',').map((s: string) => s.trim()).filter(Boolean);
  }, [specializationsFromJSON, selectedCourseMeta]);

  const specializationsForSelectedCourse = useMemo(() =>
    rawSpecializations.length ? ['Not decided yet', ...Array.from(new Set(rawSpecializations))] : [],
  [rawSpecializations]);

  const shouldAskSpecialization = rawSpecializations.length > 0;

  useEffect(() => {
    if (!shouldAskSpecialization) { setSelectedSpecialization('Not decided yet'); return; }
    setSelectedSpecialization(prev =>
      specializationsForSelectedCourse.includes(prev) ? prev : specializationsForSelectedCourse[0] || 'Not decided yet'
    );
  }, [shouldAskSpecialization, specializationsForSelectedCourse]);

  useEffect(() => {
    const list = courseOptions[selectedCategory as keyof typeof courseOptions] || courseOptions.default;
    if (list.length) setSelectedCourse(list[0].id);
  }, [selectedCategory, courseOptions]);

  // ── Submit quiz ─────────────────────────────────────────────
  const handleQuizSubmit = () => {
    const results = getFilteredUniversities({
      category:       selectedCategory,
      course:         selectedCourse,
      specialization: selectedSpecialization,
      budget:         selectedBudget,
      qualification:  selectedQualification,
      score:          lastDegreeScore,
    });
    setPendingResults(results);
    setPreResultsEnquiryOpen(true);
  };

  // ── Open modal ──────────────────────────────────────────────
  const openModal = (university: any) => {
    setActiveUniversity(university);
    setModalOpen(true);
  };

  // ── Progress bar ────────────────────────────────────────────
  const progressWidths: Record<number, string> = { 1: '15%', 2: '35%', 3: '55%', 4: '70%', 5: '85%', 6: '100%' };

  const renderProgress = () => (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-2">
          <FaTrophy className="text-green-500" />
          <span>{progressWidths[step] || '0%'} Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 bg-gradient-to-r from-teal-400 via-green-400 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: progressWidths[step] || '0%' }}
          />
        </div>
      </div>
    </div>
  );

  const renderHeading = (title: string) => (
    <div className="flex flex-col items-center gap-3 mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">{title}</h1>
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
    </div>
  );

  const optionBtn = (
    isSelected: boolean,
    onClick: () => void,
    children: React.ReactNode,
    key: string,
  ) => (
    <button
      key={key}
      onClick={onClick}
      className={`rounded-2xl border-2 px-4 py-5 text-center text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2
        ${isSelected
          ? 'border-green-500 bg-green-50 text-green-700 shadow-md'
          : 'border-gray-200 text-gray-700 hover:border-green-300 hover:shadow'
        }`}
    >
      {children}
    </button>
  );

  const renderBadge = (badge?: Badge) => {
    if (!badge) return null;
    const colors: Record<string, string> = {
      roi:      'from-green-400 to-emerald-500',
      trending: 'from-blue-400 to-blue-500',
      global:   'from-purple-400 to-purple-500',
      new:      'from-pink-400 to-pink-500',
    };
    return (
      <span className={`absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-gradient-to-r ${colors[badge.type]}`}>
        <FaBolt className="inline mr-0.5 text-[8px]" />{badge.text}
      </span>
    );
  };

  const backSteps: Record<number, number> = { 2: 1, 3: 2, 4: shouldAskSpecialization ? 3 : 2, 5: 4, 6: 5 };

  // ── Step renders ────────────────────────────────────────────
  const renderStep1 = () => (
    <>
      {renderHeading('Which degree are you interested in?')}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {[
          { id: 'UG Courses',             label: 'UG Courses',             Icon: FaBook },
          { id: 'PG Courses',             label: 'PG Courses',             Icon: FaGraduationCap },
           { id: 'UG+PG Courses',             label: 'Integrated Courses',             Icon: FaBriefcase },


        ].map(o =>
          optionBtn(
            selectedCategory === o.id,
            () => { setSelectedCategory(o.id); setStep(2); },
            <><o.Icon className="text-base" />{o.label}</>,
            o.id,
          )
        )}
      </div>
    </>
  );

 const renderStep2 = () => {
  const list = courseOptions[selectedCategory as keyof typeof courseOptions] || courseOptions.default;

  return (
    <>
      {renderHeading('Which course would you like to pursue?')}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {list.map(c => (
          <div key={c.id} className="relative">
            {renderBadge(c.badge)}

            {optionBtn(
              selectedCourse === c.id,
              () => {
                setSelectedCourse(c.id);
                const meta = list.find(x => x.id === c.id);
                setStep(meta?.specialization ? 3 : 4);
              },

              <div className="flex flex-col items-center justify-center py-6 text-lg">
                <span className="text-3xl mb-2">{c.icon}</span>
                <span>{c.label}</span>
              </div>,

              c.id
            )}
          </div>
        ))}
      </div>
    </>
  );
};

  const renderStep3 = () => (
    <>
      {renderHeading('Have a particular specialization in mind?')}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {specializationsForSelectedCourse.map(s =>
          optionBtn(
            selectedSpecialization === s,
            () => { setSelectedSpecialization(s); setStep(4); },
            s,
            s,
          )
        )}
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      {renderHeading('Choose the total course fees you have in mind!')}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {budgetOptions.map(b =>
          optionBtn(
            selectedBudget === b,
            () => { setSelectedBudget(b); setStep(5); },
            b,
            b,
          )
        )}
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      {renderHeading('Your Highest Qualification?')}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {qualificationOptions.map(q =>
          optionBtn(
            selectedQualification === q,
            () => { setSelectedQualification(q); setStep(6); },
            q,
            q,
          )
        )}
      </div>
    </>
  );

  const renderStep6 = () => (
    <>
      {renderHeading('Your Last Degree Percentage / Score?')}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {scoreOptions.map(s =>
          optionBtn(
            lastDegreeScore === s,
            () => setLastDegreeScore(s),
            s,
            s,
          )
        )}
      </div>

      <div className="max-w-lg mx-auto bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-7 text-center">
        <p className="text-gray-600 text-sm mb-1">🎓 Almost There!</p>
        <p className="text-gray-800 font-semibold text-lg mb-5">
          Click <span className="text-green-600 font-bold">Find Universities</span> to see your best matches
        </p>
        <button
          onClick={handleQuizSubmit}
          className="w-full sm:w-auto px-12 py-4 text-base font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl shadow-lg shadow-green-200 transition-all hover:scale-[1.02]"
        >
          Find Universities →
        </button>
      </div>
    </>
  );

  const renderPreResultsEnquiry = () => (
    <Dialog open={preResultsEnquiryOpen} onOpenChange={(v) => setPreResultsEnquiryOpen(v)}>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Enquire to View Matches</DialogTitle>
        </DialogHeader>
        <EnquiryForm
          formType="getStarted"
          defaultProgram={selectedCourse}
          onSubmitted={() => {
            setPreResultsEnquiryOpen(false);
            if (pendingResults) {
              setFilteredUniversities(pendingResults);
              setShowResults(true);
              setPendingResults(null);
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );

  // ── Results page ────────────────────────────────────────────
  const renderResults = () => (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest text-green-500 uppercase mb-2">🎉 best matches</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {filteredUniversities.length} Universities Found
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            <strong>{selectedCourse}</strong> · {selectedCategory}
            {selectedSpecialization !== 'Not decided yet' && ` · ${selectedSpecialization}`}
            {selectedBudget && ` · ${selectedBudget}`}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((u: any, i: number) => (
            <div
              key={u.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-200 hover:-translate-y-1"
            >
              {/* Top accent strip */}
              <div style={{ height: 6, background: u.accent }} />

              <div className="p-5">
                {/* Logo + Name */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200" style={{ background: u.color }}>
                    <div className="relative w-full h-full">
                      <Image
                        src={u?.modal?.imageSrc || ''}
                        alt={u.name}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">{u.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">📍 {u.location}</p>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style={{ background: u.color, color: u.accent }}
                  >
                    {u.accreditation}
                  </span>
                </div>

                {/* Matched course + specialization badge */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                    📘 {u.matchedCourse}
                  </span>
                  {u.matchedSpec && (
                    <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                      🎯 {u.matchedSpec}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={u.rating} />
                  <span className="text-sm font-bold text-slate-700">{u.rating}</span>
                  <span className="text-xs text-slate-400">({u.reviews.toLocaleString()})</span>
                </div>

                {/* Fees + Duration */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">
                      {u.matchedSpec ? 'Specialization Fees' : 'Course Fees'}
                    </p>
                    <p className="text-sm font-extrabold text-slate-800 mt-0.5">
                      {formatFee(u.fees.min)} – {formatFee(u.fees.max)}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Duration</p>
                    <p className="text-sm font-extrabold text-slate-800 mt-0.5">⏱ {u.duration}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {u.highlights.map((h: string) => (
                    <span key={h} className="text-[10px] font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                      ✓ {h}
                    </span>
                  ))}
                  {u.emiAvailable && (
                    <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      💳 EMI Available
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => openModal(u)}
                  className="w-full py-3 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${u.accent}, ${u.accent}bb)` }}
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reset */}
        <p className="text-center text-slate-400 text-sm mt-12">
          Want to start a new search?{' '}
          <button
            onClick={() => {
              setShowResults(false);
              setStep(1);
              setSelectedBudget('');
              setSelectedQualification('');
              setLastDegreeScore('');
            }}
            className="text-green-600 font-bold underline"
          >
            Start Again ↩
          </button>
        </p>
      </div>

      {/* ── ApplyEnquiryModal ── */}
      {activeUniversity && (
        <ApplyEnquiryModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={activeUniversity.modal.title}
          subtitle={activeUniversity.modal.subtitle}
          imageSrc={activeUniversity.modal.imageSrc}
          mobileImageSrc={activeUniversity.modal.mobileImageSrc}
          universityName={activeUniversity.name}
          defaultProgram={activeUniversity.defaultProgram}
          formType={activeUniversity.modal.formType}
          showImage={activeUniversity.modal.showImage}
        />
      )}
    </div>
  );

  // ─────────────────────────────────────────────────────────────
  if (showResults) return renderResults();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-3 px-4 flex items-center justify-center gap-2 text-white text-sm font-semibold">
        <FaClock />
        <span>Your best match is just 2 minutes away!</span>
      </div>

      {step >= 2 && renderProgress()}

      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 py-10 max-w-5xl mx-auto w-full">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}
        {step === 6 && renderStep6()}

        {step > 1 && (
          <div className="w-full flex justify-start mt-6">
            <button
              onClick={() => setStep(backSteps[step])}
              className="px-7 py-3 text-sm font-bold border-2 border-orange-300 text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
      {renderPreResultsEnquiry()}
    </div>
  );
};

export default Compare;
