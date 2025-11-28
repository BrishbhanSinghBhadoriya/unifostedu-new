'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { 
  FaClock, 
  FaGraduationCap, 
  FaUserTie, 
  FaAward, 
  FaBook, 
  FaBriefcase, 
  FaGlobe, 
  FaCertificate,
  FaCheckCircle,
  FaBolt,
  FaTrophy,
  FaSearch,
  FaHeart,
  FaBell
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Compare = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('PG Courses');
  const [selectedCourse, setSelectedCourse] = useState('Online MBA');
  const [selectedSpecialization, setSelectedSpecialization] = useState('Not decided yet');
  const [specializationSearch, setSpecializationSearch] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const degreeOptions = useMemo(() => ([
    { id: 'PG Courses', label: 'PG Courses', icon: FaGraduationCap },
    { id: 'UG Courses', label: 'UG Courses', icon: FaBook },
    { id: 'Job Guarantee', label: 'Job Guarantee', icon: FaBriefcase },
    { id: 'Skilling & Certificate', label: 'Skilling & Certificate', icon: FaCertificate }
  ]), []);

  const pgCourses = useMemo(() => [
    { id: 'Online MBA', label: 'Online MBA', icon: '🎓',specialization: 'Human Resource Management and Finance, Finance and Marketing, Marketing and Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Information Technology Management, Healthcare Management, Supply Chain, Production and Operations Management, Business Intelligence and Analytics, Entrepreneurship and Venture Creation, International Finance, Data Science and Analytics, E-commerce, Artificial Intelligence and Human Resource Management, Digital Marketing, Banking and Finance, Technology Management, General Management, AI-Driven Marketing, AI-Driven Finance, AI-Driven Business Strategy, AI-Driven Human Resource Management,'},
  
    { id: 'Online MCA', label: 'Online MCA', icon: '💻',specialization: 'DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence' },
  
    { id: 'Online MSc', label: 'Online M.Sc', icon: '🔬',specialization: 'Mathematics, Physics, Chemistry, Biology, Computer Science, Electronics, Biotechnology, Environmental Science, Geology, etc.',specializationList: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Electronics', 'Biotechnology', 'Environmental Science', 'Geology', 'etc.'] },
  
    { id: 'Online MCom', label: 'Online M.Com', icon: '📄',specialization: 'General, Accounting, Finance',specializationList: ['General', 'Accounting', 'Finance'] },
  
    { id: 'Online MA', label: 'Online MA', icon: '📚',specialization: 'English, Journalism & Mass Communication, Political Science',specializationList: ['English', 'Journalism & Mass Communication', 'Political Science'] },
  
    { id: 'Online MAJMC', label: 'Online MAJMC', icon: '📰',specialization: 'Journalism & Mass Communication',specializationList: ['Journalism & Mass Communication'] },
  ], []);
  

  const ugCourses = useMemo(() => [
      { id: 'BCA+MCA', label: 'BCA+MCA Integrated Online Course', badge: { text: 'Saves 6 Months', type: 'roi' }, icon: '🧮' },
      { id: 'BBA+MBA', label: 'BBA+MBA Integrated Online Course', badge: { text: 'Saves 6 Months', type: 'roi' }, icon: '📊' },
      { id: 'BCom+MBA', label: 'B.Com+MBA Integrated Online Course', badge: { text: 'Saves 6 Months', type: 'roi' }, icon: '📑' },
      { id: 'Online BBA', label: 'Online BBA', icon: '📈' },
      { id: 'Online BCA', label: 'Online BCA', badge: { text: 'Trending', type: 'trending' }, icon: '💾' },
      { id: 'Working BTech', label: 'B.Tech for Working Professionals', badge: { text: 'Flexible B.Tech', type: 'global' }, icon: '🛠️' },
      { id: 'BTech Diploma', label: 'B.Tech After Diploma', icon: '🎓' },
      { id: 'Part Time BTech', label: 'Part-Time B.Tech', icon: '🧭' },
      { id: 'Online BCom', label: 'Online B.Com', icon: '💼' },
      { id: 'Online BA', label: 'Online BA', icon: '📚' },
      { id: 'Online BSc', label: 'Online B.Sc', icon: '🔬' },
      { id: 'UG MBA Diploma', label: 'Online MBA after Diploma', badge: { text: 'New', type: 'new' }, icon: '🆕' },
      { id: 'Distance BBA', label: 'Distance BBA', icon: '🧮' },
      { id: 'Distance BCA', label: 'Distance BCA', icon: '🖥️' },
      { id: 'BBA Honours', label: 'Online BBA Honours', icon: '🎖️' },
      { id: 'Distance BA', label: 'Distance BA', icon: '📘' },
      { id: 'BA Honours', label: 'Online BA Honours', icon: '🏛️' },
      { id: 'Distance BCom', label: 'Distance B.Com', icon: '📒' },
      { id: 'Distance BSc', label: 'Distance B.Sc', icon: '⚗️' },
      { id: 'BBA Dual', label: 'Online BBA Dual', icon: '👥' },
      { id: 'BCom Honours', label: 'Online B.Com Honours', icon: '✏️' },
      { id: 'BSc Honours', label: 'Online BSc Honours', icon: '📜' },
  ], []);

  const courseOptions = useMemo(() => ({
    default: pgCourses,
    'PG Courses': pgCourses,
    'UG Courses': ugCourses,
  }), [pgCourses, ugCourses]);

  const budgetOptions = useMemo(() => [
    'Less than 1 Lakh',
    '1 Lakh to 2.5 Lakh',
    '2.5 Lakh to 4.2 Lakh',
    '4.2 Lakh to 6 Lakh',
    '6 Lakh +'
  ], []);

  const specializationList = useMemo(() => [
    'Not decided yet',
    'Finance',
    'Business Analytics',
    'Healthcare Management',
    'Hospital Management',
    'HR',
    'Operations',
    'Marketing',
    'Information Technology',
    'Digital Marketing',
    'Pharmaceutical Management',
    'Logistics And Supply Chain (Dual)',
    'Data Science',
    'Project Management',
    'Entrepreneurship and Leadership (Dual)',
    'General',
    'Hospitality Management',
    'Marketing And Finance (Dual)',
    'Hospital Administration & Healthcare (Dual)',
    'International Business Management',
    'Retail Management',
    'Agri-Business Management',
    'Generative AI',
    'Oil and Gas Management (Dual)',
    'Banking and Insurance',
    'Power Management',
    'Production and Operation (Dual)',
    'International Finance',
    'HRM and Finance (Dual)',
    'Quality Management',
    'Fintech Management',
    'HR Analytics',
    'Cyber Security',
    'Digital Marketing & E-Commerce (Dual)',
    'Supply Chain Management',
    'Banking and Finance (Dual)',
    'International Finance with ACCA'
  ], []);
  const selectedCourseMeta = useMemo(() => {
    const lists = Object.values(courseOptions);
    return lists.flat().find((course) => course.id === selectedCourse);
  }, [courseOptions, selectedCourse]);

  const rawSpecializations = useMemo(() => {
    if (!selectedCourseMeta?.specialization) return [];
    const source = selectedCourseMeta.specialization;
    const list = Array.isArray(source) ? source : source.split(',');
    return list
      .map((spec) => (typeof spec === 'string' ? spec.trim() : ''))
      .filter(Boolean);
  }, [selectedCourseMeta]);

  const specializationsForSelectedCourse = useMemo(() => {
    if (!rawSpecializations.length) return [];
    const unique = Array.from(new Set(rawSpecializations));
    return ['Not decided yet', ...unique];
  }, [rawSpecializations]);

  const shouldAskSpecialization = rawSpecializations.length > 0;

  useEffect(() => {
    if (!shouldAskSpecialization) {
      setSelectedSpecialization('Not decided yet');
      return;
    }
    setSelectedSpecialization((prev) => {
      if (prev && specializationsForSelectedCourse.includes(prev)) {
        return prev;
      }
      return specializationsForSelectedCourse[0] || 'Not decided yet';
    });
  }, [shouldAskSpecialization, specializationsForSelectedCourse]);

  useEffect(() => {
    const list = courseOptions[selectedCategory] || courseOptions.default;
    if (list.length) {
      setSelectedCourse(list[0].id);
    }
  }, [selectedCategory, courseOptions]);

  useEffect(() => {
    if (step === 4 && !selectedBudget && budgetOptions.length) {
      setSelectedBudget(budgetOptions[0]);
    }
  }, [step, selectedBudget, budgetOptions]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('degree', selectedCategory);
    url.searchParams.set('course', selectedCourse);
    if (shouldAskSpecialization && selectedSpecialization) {
      url.searchParams.set('specialization', selectedSpecialization);
    } else {
      url.searchParams.delete('specialization');
    }
    if (selectedBudget) {
      url.searchParams.set('budget', selectedBudget);
    } else {
      url.searchParams.delete('budget');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }, [selectedCategory, selectedCourse, selectedSpecialization, selectedBudget, shouldAskSpecialization]);

  
 
  const renderBadge = (badge) => {
    if (!badge) return null;
    const badgeColors = {
      roi: 'from-green-400 to-emerald-500',
      trending: 'from-blue-400 to-blue-500',
      global: 'from-purple-400 to-purple-500',
      new: 'from-pink-400 to-pink-500',
    };

    return (
      <span className={`absolute top-3 left-3 text-xs font-semibold text-white px-2 py-0.5 rounded-full bg-gradient-to-r ${badgeColors[badge.type] || 'from-indigo-400 to-indigo-500'}`}>
        <FaBolt className="inline-block mr-1 text-[10px]" />
        {badge.text}
      </span>
    );
  };

  const getProgressValue = () => {
    if (step >= 4) return '30% Complete';
    if (step === 3) return '20% Complete';
    if (step === 2) return '10% Complete';
    return '0% Complete';
  };
  const progressWidths = {
    1: '0%',
    2: '10%',
    3: '20%',
    4: '30%',
  };
  const progressValue = getProgressValue();

  const renderProgress = () => (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto w-full px-4 py-4">
        <div className="flex items-center gap-3 text-sm font-medium text-gray-600 mb-2">
          <FaTrophy className="text-green-500" />
          <span>{progressValue}</span>
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

  const renderHeading = (title) => (
    <div className="flex flex-col items-center gap-4 mb-3">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
        {title}
      </h1>
      <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
    </div>
  );

  const renderDegreeStep = () => (
    <>
      {renderHeading('Which degree are you interested in?')}
      <div className="flex items-center gap-2 mb-5 text-sm sm:text-base">
        <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
        <p className="text-gray-700 text-center">
          <span className="font-semibold text-green-600">Select</span> the degree you are interested in
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full mb-8 sm:mb-12">
        {degreeOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = selectedCategory === option.id;

          return (
            <button
              key={option.id}
              onClick={() => setSelectedCategory(option.id)}
              className={`
                relative p-4 sm:p-6 rounded-xl border-2 transition-all duration-300
                bg-white hover:shadow-lg hover:scale-105
                ${isSelected 
                  ? 'border-green-500 bg-green-50 shadow-md' 
                  : 'border-gray-200 hover:border-green-300'
                }
              `}
            >
              <div className={`
                flex items-center justify-center mb-3 sm:mb-4
                ${isSelected ? 'text-green-600' : 'text-gray-600'}
              `}>
                <IconComponent className="text-3xl sm:text-4xl md:text-5xl" />
              </div>

              <p className={`
                text-xs sm:text-sm md:text-base font-semibold text-center
                ${isSelected ? 'text-green-700' : 'text-gray-700'}
              `}>
                {option.label}
              </p>

              {isSelected && (
                <div className="absolute top-2 right-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </>
  );

  const renderCourseStep = () => {
    const currentList = courseOptions[selectedCategory] || courseOptions.default;
    console.log("currentList",currentList);

    return (
      <>
        {renderHeading('Which course would you like to pursue?')}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full mb-10 cursor-pointer">
          {currentList.map((course) => {
          const isActive = selectedCourse === course.id;
         
          return (
            <button
              key={course.label}
              onClick={() => {setSelectedCourse(course.id)
                console.log("selectedCourse",selectedCourse);
              }}
              className={`relative p-4 sm:p-5 rounded-2xl border-2 bg-white text-left shadow-sm transition-all cursor-pointer
                ${isActive ? 'border-green-400 shadow-lg bg-green-50' : 'border-gray-200 hover:border-orange-200 hover:shadow-md'}`}
            >
                
              {renderBadge(course.badge)}
              {isActive && (
                <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold text-green-600">
                  <FaCheckCircle className="text-green-500" />
                  Selected
                </div>
              )}
              <div className="flex flex-col items-start gap-3">
                <span className="text-3xl">{course.icon}</span>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{course.label}</p>
              </div>
            </button>
          );
          })}
        </div>
      </>
    );
  };

  const renderSpecializationStep = () => {
    const search = specializationSearch.toLowerCase();
    const filteredSpecializations = specializationsForSelectedCourse.filter((spec) =>
      spec.toLowerCase().includes(search)
    );

    return (
      <>
        {renderHeading('Have a particular specialization in mind?')}
        <div className="w-full max-w-3xl mb-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={specializationSearch}
              onChange={(e) => setSpecializationSearch(e.target.value)}
              placeholder="Search Specialization"
              className="w-full rounded-full border border-gray-200 py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full justify-center mb-10">
          {filteredSpecializations.map((spec) => {
            const isSelected = selectedSpecialization === spec;
            const isDefault = spec === 'Not decided yet';
            return (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-5 py-3 rounded-full border text-sm sm:text-base font-semibold transition-all 
                  ${isSelected
                    ? 'border-green-500 text-green-600 bg-green-50 shadow-md'
                    : 'border-gray-200 text-gray-700 bg-white hover:border-green-200 hover:shadow'}`
                }
              >
                {isDefault && <FaHeart className="inline-block mr-2 text-green-500" />}
                {spec}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  const renderBudgetStep = () => (
    <>
      {renderHeading('Choose the total course fees you have in mind!')}
      <div className="flex items-center justify-center gap-2 mb-8 text-blue-600 font-semibold text-sm sm:text-base">
        <FaBell />
        EMI Options Also Available
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-10 ">
        {budgetOptions.map((budget) => {
          const isSelected = selectedBudget === budget;
          return (
            <button
              key={budget}
              onClick={() => setSelectedBudget(budget)}
              className={`rounded-2xl border-2 px-6 py-4 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'border-orange-400 bg-orange-50 text-orange-600 shadow'
                  : 'border-gray-200 text-gray-700 hover:border-orange-200 hover:shadow'
              }`}
            >
              {budget}
            </button>
          );
        })}
      </div>

     
    </>
  );

  const renderActions = () => {
    
    if (step === 1) {
      return (
        <div className="w-full flex flex-col items-center gap-4">
     
          <Button
            onClick={() => setStep(2)}
            className="w-full sm:w-auto min-w-[300px] bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg font-semibold py-4 sm:py-6 px-8 sm:px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Next
          </Button>
        </div>
      );
    }

    if (step === 2) {
      const nextStep = shouldAskSpecialization ? 3 : 4;
      return (
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Button
            variant="outline"
            onClick={() => setStep(1)}
            className="w-full sm:w-auto px-10 py-6 text-lg border-2 border-orange-300 text-orange-500 hover:bg-orange-50"
          >
            Back
          </Button>
        
          <Button
            onClick={() => setStep(nextStep)}
            className="w-full sm:w-auto px-10 py-6 text-lg bg-green-500 hover:bg-green-600 text-white shadow-lg cursor-pointer"
          >
            Next
          </Button>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Button
            variant="outline"
            onClick={() => setStep(2)}
            className="w-full sm:w-auto px-10 py-6 text-lg border-2 border-orange-300 text-orange-500 hover:bg-orange-50"
          >
            Back
          </Button>
         
          <Button
            onClick={() => setStep(4)}
            className="w-full sm:w-auto px-10 py-6 text-lg bg-green-500 hover:bg-green-600 text-white shadow-lg cursor-pointer"
          >
            Next
          </Button>
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Button
          variant="outline"
          onClick={() => setStep(shouldAskSpecialization ? 3 : 2)}
          className="w-full sm:w-auto px-10 py-6 text-lg border-2 border-orange-300 text-orange-500 hover:bg-orange-50"
        >
          Back
        </Button>
       
        <Button
          onClick={() => console.log('Flow completed')}
          className="w-full sm:w-auto px-10 py-6 text-lg bg-green-500 hover:bg-green-600 text-white shadow-lg cursor-pointer"
        >
          Next
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="w-full bg-gradient-to-r from-green-500 to-green-600 py-3 px-4 flex items-center justify-center gap-2 text-white text-sm sm:text-base font-medium">
        <FaClock className="text-lg" />
        <p>Your best match is just 2 minutes away!</p>
      </div>

      {step >= 2 && renderProgress()}

      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto w-full">
        {step === 1 && renderDegreeStep()}
        {step === 2 && renderCourseStep()}
        {step === 3 && renderSpecializationStep()}
        {step === 4 && renderBudgetStep()}
        {renderActions()}
      </div>
    </div>
  );
};

export default Compare;
