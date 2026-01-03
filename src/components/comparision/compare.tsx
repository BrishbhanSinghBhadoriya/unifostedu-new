'use client';

import React, { useEffect, useMemo, useState, ReactElement } from 'react';
import { 
  FaClock, 
  FaGraduationCap, 
  FaBook, 
  FaBriefcase, 
  FaCertificate,
  FaBolt,
  FaTrophy
} from 'react-icons/fa6';
import { IconType } from 'react-icons';

interface DegreeOption {
  id: string;
  label: string;
  icon: IconType;
}

interface Badge {
  text: string;
  type: 'roi' | 'trending' | 'global' | 'new';
}

interface Course {
  id: string;
  label: string;
  icon: string;
  specialization?: string;
  badge?: Badge;
}

interface FormData {
  degree: string;
  course: string;
  specialization: string;
  budget: string;
  qualification: string;
  score: string;
}

interface ProgressWidths {
  [key: number]: string;
}

const Compare: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('PG Courses');
  const [selectedCourse, setSelectedCourse] = useState<string>('Online MBA');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('Not decided yet');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedQualification, setSelectedQualification] = useState<string>('');
  const [lastDegreeScore, setLastDegreeScore] = useState<string>('');

  const degreeOptions = useMemo<DegreeOption[]>(() => ([
    { id: 'PG Courses', label: 'PG Courses', icon: FaGraduationCap },
    { id: 'UG Courses', label: 'UG Courses', icon: FaBook },
    { id: 'Job Guarantee', label: 'Job Guarantee', icon: FaBriefcase },
    { id: 'Skilling & Certificate', label: 'Skilling & Certificate', icon: FaCertificate }
  ]), []);

  const pgCourses = useMemo<Course[]>(() => [
    { id: 'Online MBA', label: 'Online MBA', icon: '🎓', specialization: 'Human Resource Management and Finance, Finance and Marketing, Marketing and Resource Management, Marketing and Business Analytics, Finance and Business Analytics, Human Resource and Business Analytics, Project Management, Retail Management and Quick Commerce, Information Technology Management, Healthcare Management, Supply Chain, Production and Operations Management, Business Intelligence and Analytics, Entrepreneurship and Venture Creation, International Finance, Data Science and Analytics, E-commerce, Artificial Intelligence and Human Resource Management, Digital Marketing, Banking and Finance, Technology Management, General Management, AI-Driven Marketing, AI-Driven Finance, AI-Driven Business Strategy, AI-Driven Human Resource Management' },
    { id: 'Online MCA', label: 'Online MCA', icon: '💻', specialization: 'DevOps, Natural Language Processing & Large Language Models Development, Computer Science and IT, Data Analytics, Cyber Security, Full Stack Development, Cloud Computing, Data Science, Artificial Intelligence' },
    { id: 'Online MSc', label: 'Online M.Sc', icon: '🔬', specialization: 'Mathematics, Physics, Chemistry, Biology, Computer Science, Electronics, Biotechnology, Environmental Science, Geology' },
    { id: 'Online MCom', label: 'Online M.Com', icon: '📄', specialization: 'General, Accounting, Finance' },
    { id: 'Online MA', label: 'Online MA', icon: '📚', specialization: 'English, Journalism & Mass Communication, Political Science' },
    { id: 'Online MAJMC', label: 'Online MAJMC', icon: '📰', specialization: 'Journalism & Mass Communication' },
  ], []);

  const ugCourses = useMemo<Course[]>(() => [
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

  const courseOptions = useMemo<Record<string, Course[]>>(() => ({
    default: pgCourses,
    'PG Courses': pgCourses,
    'UG Courses': ugCourses,
  }), [pgCourses, ugCourses]);

  const budgetOptions = useMemo<string[]>(() => [
    'Less than 1 Lakh',
    '1 Lakh to 2.5 Lakh',
    '2.5 Lakh to 4.2 Lakh',
    '4.2 Lakh to 6 Lakh',
    '6 Lakh +'
  ], []);

  const qualificationOptions = useMemo<string[]>(() => [
    'Postgraduate',
    'College Graduate',
    'Completed 12th',
    'Completed 10th',
    'Diploma Holder'
  ], []);

  const scoreOptions = useMemo<string[]>(() => [
    'Below 50%',
    '50% - 60%',
    '60% - 70%',
    '70% - 80%',
    '80% - 90%',
    'Above 90%'
  ], []);

  const selectedCourseMeta = useMemo<Course | undefined>(() => {
    const lists = Object.values(courseOptions);
    return lists.flat().find((course) => course.id === selectedCourse);
  }, [courseOptions, selectedCourse]);

  const rawSpecializations = useMemo<string[]>(() => {
    if (!selectedCourseMeta?.specialization) return [];
    const source = selectedCourseMeta.specialization;
    const list = Array.isArray(source) ? source : source.split(',');
    return list
      .map((spec) => (typeof spec === 'string' ? spec.trim() : ''))
      .filter(Boolean);
  }, [selectedCourseMeta]);

  const specializationsForSelectedCourse = useMemo<string[]>(() => {
    if (!rawSpecializations.length) return [];
    const unique = Array.from(new Set(rawSpecializations));
    return ['Not decided yet', ...unique];
  }, [rawSpecializations]);

  const shouldAskSpecialization: boolean = rawSpecializations.length > 0;

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
    if (selectedQualification) {
      url.searchParams.set('qualification', selectedQualification);
    } else {
      url.searchParams.delete('qualification');
    }
    if (lastDegreeScore) {
      url.searchParams.set('score', lastDegreeScore);
    } else {
      url.searchParams.delete('score');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }, [selectedCategory, selectedCourse, selectedSpecialization, selectedBudget, selectedQualification, lastDegreeScore, shouldAskSpecialization]);

  const renderBadge = (badge?: Badge): ReactElement | null => {
    if (!badge) return null;
    const badgeColors: Record<Badge['type'], string> = {
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

  const getProgressValue = (): string => {
    if (step >= 6) return '100% Complete';
    if (step === 5) return '85% Complete';
    if (step === 4) return '70% Complete';
    if (step === 3) return '55% Complete';
    if (step === 2) return '35% Complete';
    return '15% Complete';
  };

  const progressWidths: ProgressWidths = {
    1: '15%',
    2: '35%',
    3: '55%',
    4: '70%',
    5: '85%',
    6: '100%',
  };

  const progressValue: string = getProgressValue();

  const renderProgress = (): ReactElement => (
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

  const renderHeading = (title: string): ReactElement => (
    <div className="flex flex-col items-center gap-4 mb-3">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
        {title}
      </h1>
      <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
    </div>
  );

  const renderDegreeStep = (): ReactElement => (
    <>
      {renderHeading('Which degree are you interested in?')}
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-10">
        {degreeOptions.map((option) => {
          const isSelected = selectedCategory === option.id;

          return (
            <button
              key={option.id}
              onClick={() => {
                setSelectedCategory(option.id);
                setStep(2);
              }}
              className={`rounded-2xl border-2 px-4 py-6 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer h-full flex items-center justify-center ${
                isSelected
                  ? 'border-green-500 bg-green-50 text-green-700 shadow'
                  : 'border-gray-200 text-gray-700 hover:border-green-200 hover:shadow'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </>
  );

  const renderCourseStep = (): ReactElement => {
    const currentList = courseOptions[selectedCategory] || courseOptions.default;

    return (
      <>
        {renderHeading('Which course would you like to pursue?')}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-10">
          {currentList.map((course) => {
            const isActive = selectedCourse === course.id;
         
            return (
              <div key={course.id} className="relative">
                {renderBadge(course.badge)}
                <button
                  onClick={() => {
                    setSelectedCourse(course.id);
                    const meta = currentList.find(c => c.id === course.id);
                    const hasSpecs = meta?.specialization && meta.specialization.length > 0;
                    setStep(hasSpecs ? 3 : 4);
                  }}
                  className={`w-full rounded-2xl border-2 px-4 py-6 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer h-full flex items-center justify-center ${
                    isActive
                      ? 'border-green-500 bg-green-50 text-green-700 shadow'
                      : 'border-gray-200 text-gray-700 hover:border-green-200 hover:shadow'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{course.icon}</span>
                    <span>{course.label}</span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const renderSpecializationStep = (): ReactElement => {
    return (
      <>
        {renderHeading('Have a particular specialization in mind?')}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-10">
          {specializationsForSelectedCourse.map((spec) => {
            const isSelected = selectedSpecialization === spec;
            return (
              <button
                key={spec}
                onClick={() => {
                  setSelectedSpecialization(spec);
                  setStep(4);
                }}
                className={`rounded-2xl border-2 px-4 py-6 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer h-full flex items-center justify-center ${
                  isSelected
                    ? 'border-green-500 bg-green-50 text-green-700 shadow'
                    : 'border-gray-200 text-gray-700 hover:border-green-200 hover:shadow'
                }`}
              >
                {spec}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  const renderBudgetStep = (): ReactElement => (
    <>
      {renderHeading('Choose the total course fees you have in mind!')}
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-10">
        {budgetOptions.map((budget) => {
          const isSelected = selectedBudget === budget;
          return (
            <button
              key={budget}
              onClick={() => {
                setSelectedBudget(budget);
                setStep(5);
              }}
              className={`rounded-2xl border-2 px-4 py-6 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer h-full flex items-center justify-center ${
                isSelected
                  ? 'border-green-500 bg-green-50 text-green-700 shadow'
                  : 'border-gray-200 text-gray-700 hover:border-green-200 hover:shadow'
              }`}
            >
              {budget}
            </button>
          );
        })}
      </div>
    </>
  );

  const renderQualificationStep = (): ReactElement => (
    <>
      {renderHeading('Your Highest Qualification?')}
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-10">
        {qualificationOptions.map((qual) => {
          const isSelected = selectedQualification === qual;
          return (
            <button
              key={qual}
              onClick={() => {
                setSelectedQualification(qual);
                setStep(6);
              }}
              className={`rounded-2xl border-2 px-4 py-6 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer h-full flex items-center justify-center ${
                isSelected
                  ? 'border-green-500 bg-green-50 text-green-700 shadow'
                  : 'border-gray-200 text-gray-700 hover:border-green-200 hover:shadow'
              }`}
            >
              {qual}
            </button>
          );
        })}
      </div>
    </>
  );

  const renderScoreStep = (): ReactElement => (
    <>
      {renderHeading('Your Last Degree Percentage/Score?')}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-10">
        {scoreOptions.map((score) => {
          const isSelected = lastDegreeScore === score;
          return (
            <button
              key={score}
              onClick={() => {
                setLastDegreeScore(score);
              }}
              className={`rounded-2xl border-2 px-4 py-6 text-center text-sm sm:text-base font-semibold transition-all cursor-pointer h-full flex items-center justify-center ${
                isSelected
                  ? 'border-green-500 bg-green-50 text-green-700 shadow'
                  : 'border-gray-200 text-gray-700 hover:border-green-200 hover:shadow'
              }`}
            >
              {score}
            </button>
          );
        })}
      </div>

      <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center border border-green-200">
        <p className="text-gray-700 text-sm mb-2">🎓 Almost There!</p>
        <p className="text-gray-800 font-medium text-lg mb-4">
          Click <span className="text-green-600 font-bold">Submit</span> to get your personalized university recommendations
        </p>
        <button
          onClick={() => {
            const formData: FormData = {
              degree: selectedCategory,
              course: selectedCourse,
              specialization: selectedSpecialization,
              budget: selectedBudget,
              qualification: selectedQualification,
              score: lastDegreeScore
            };
            console.log('Form submitted:', formData);
            alert('Form submitted! Check console for data.');
          }}
          className="w-full sm:w-auto px-12 py-4 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg cursor-pointer rounded-lg font-semibold transition-all"
        >
          Submit
        </button>
      </div>
    </>
  );

  const renderActions = (): ReactElement | null => {
    if (step === 1) return null;

    const backSteps: Record<number, number> = {
      2: 1,
      3: 2,
      4: shouldAskSpecialization ? 3 : 2,
      5: 4,
      6: 5
    };

    return (
      <div className="w-full flex justify-start mt-8">
        <button
          onClick={() => setStep(backSteps[step])}
          className="px-8 py-4 text-base border-2 border-orange-300 text-orange-500 hover:bg-orange-50 rounded-lg font-semibold transition-all"
        >
          Back
        </button>
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
        {step === 5 && renderQualificationStep()}
        {step === 6 && renderScoreStep()}
        {renderActions()}
      </div>
    </div>
  );
};

export default Compare;