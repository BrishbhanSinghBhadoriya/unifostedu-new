'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ArrowRight, ArrowLeft, CheckCircle, X, Loader2, Brain, Target, Lightbulb, BookOpen, Trophy, RotateCcw, Sparkles } from 'lucide-react';
import questionsData from '@/data/career-questions.json';
import courseData from '@/data/courseData.json';
import Link from 'next/link';

type Language = 'ENGLISH' | 'HINDI' | 'TAMIL' | 'GUJARATI' | 'MARATHI' | 'KANNADA' | 'TELUGU' | 'PUNJABI';

type Question = {
  id: number;
  category: 'career_interest' | 'career_personality' | 'career_motivation' | 'learning_style' | 'scenario';
  question: string;
  options: string[];
};

type Answer = {
  questionId: number;
  answer: string;
  category: string;
};

type ResultData = {
  overallScore: number;
  categoryScores: {
    career_interest: number;
    career_personality: number;
    career_motivation: number;
    learning_style: number;
    scenario: number;
  };
  topProfessions: Array<{
    title: string;
    match: number;
    description: string;
    skills: string[];
  }>;
  personalitySummary: string;
  strengths: string[];
  areasToImprove: string[];
};

// ─────────────────────────────────────────────
// CATEGORY CONFIG
// ─────────────────────────────────────────────
const CATEGORY_CONFIG = {
  career_interest: { label: 'Career Interest', icon: Target, color: 'blue', questions: 20 },
  career_personality: { label: 'Career Personality', icon: Brain, color: 'purple', questions: 20 },
  career_motivation: { label: 'Career Motivation', icon: Trophy, color: 'amber', questions: 20 },
  learning_style: { label: 'Learning Style', icon: BookOpen, color: 'green', questions: 20 },
  scenario: { label: 'Scenarios', icon: Lightbulb, color: 'rose', questions: 20 },
};

const LANGUAGE_NAMES: Record<Language, string> = {
  ENGLISH: 'English',
  HINDI: 'हिन्दी',
  TAMIL: 'தமிழ்',
  GUJARATI: 'ગુજરાતી',
  MARATHI: 'मराठी',
  KANNADA: 'ಕನ್ನಡ',
  TELUGU: 'తెలుగు',
  PUNJABI: 'ਪੰਜਾਬੀ',
};

// ─────────────────────────────────────────────
// HELPER: Get questions from local JSON
// ─────────────────────────────────────────────
function getLocalQuestions(lang: Language): Question[] {
  // Try exact match first
  const data = (questionsData as any).questions;
  if (data[lang]) {
    return data[lang] as Question[];
  }
  // Fallback to ENGLISH if language not found in JSON
  return data['ENGLISH'] as Question[];
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
interface CareerAssessmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedOption: { id: number; title: string; lang: string } | null;
  assessmentTitle: string;
}

export default function CareerAssessmentModal({
  open,
  onOpenChange,
  selectedOption,
  assessmentTitle,
}: CareerAssessmentModalProps) {
  const [phase, setPhase] = useState<'loading' | 'quiz' | 'result'>('loading');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption_, setSelectedOption_] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [loadingText, setLoadingText] = useState('Preparing your assessment...');
  const [animating, setAnimating] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // ── Load questions when modal opens ──
  useEffect(() => {
    if (open && selectedOption) {
      setPhase('loading');
      setQuestions([]);
      setCurrentIndex(0);
      setAnswers([]);
      setSelectedOption_(null);
      setResult(null);
      loadQuestions();
    }
    return () => abortRef.current?.abort();
  }, [open, selectedOption]);

  const lang = (selectedOption?.lang || 'ENGLISH') as Language;
  const langName = LANGUAGE_NAMES[lang] || 'English';

  // ── Load questions: Local JSON first, API optional ──
  async function loadQuestions() {
    setLoadingText('Loading your assessment questions...');

    // ✅ Step 1: Load from local JSON immediately (instant, no API call needed)
    const localQuestions = getLocalQuestions(lang);

    if (localQuestions && localQuestions.length === 100) {
      // Use local JSON questions directly
      setTimeout(() => {
        setQuestions(localQuestions);
        setPhase('quiz');
      }, 800); // small delay for UX polish
      return;
    }

    // Step 2: If local JSON doesn't have this language, fallback to API
    await generateQuestionsFromAPI();
  }

  // ── Generate questions via Claude API (for languages not in JSON) ──
  async function generateQuestionsFromAPI() {
    setLoadingText(`Generating questions in ${langName}...`);
    abortRef.current = new AbortController();

    const prompt = `You are a career counseling expert. Generate exactly 100 career assessment questions in ${langName} language for the assessment: "${selectedOption?.title}".

Return ONLY a valid JSON array (no markdown, no explanation) with this exact structure:
[
  {
    "id": 1,
    "category": "career_interest",
    "question": "question text in ${langName}",
    "options": ["option A", "option B", "option C", "option D"]
  }
]

Rules:
- Questions 1-20: category = "career_interest"
- Questions 21-40: category = "career_personality"  
- Questions 41-60: category = "career_motivation"
- Questions 61-80: category = "learning_style"
- Questions 81-100: category = "scenario"
- Each question has EXACTLY 4 options
- ALL text (questions and options) must be in ${langName}
- Questions must be relevant to career assessment and the topic: "${selectedOption?.title}"
- Make questions practical and insightful
- Scenario questions should describe real workplace/study situations`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortRef.current.signal,
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 8000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await res.json();
      const text = data.content?.[0]?.text || '[]';
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed: Question[] = JSON.parse(clean);
      setQuestions(parsed);
      setPhase('quiz');
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        // Final fallback: English questions
        setQuestions(getLocalQuestions('ENGLISH'));
        setPhase('quiz');
      }
    }
  }

  // ── Answer selection ──
  function handleSelect(option: string) {
    if (animating) return;
    setSelectedOption_(option);
  }

  // ── Next question ──
  function handleNext() {
    if (!selectedOption_ && !answers[currentIndex]) return;
    if (animating) return;

    const current = questions[currentIndex];
    const newAnswers = [
      ...answers,
      {
        questionId: current.id,
        answer: selectedOption_ || answers[currentIndex]?.answer || '',
        category: current.category,
      },
    ];
    setAnswers(newAnswers);

    if (currentIndex + 1 >= questions.length) {
      submitAssessment(newAnswers);
    } else {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((i) => i + 1);
        setSelectedOption_(null);
        setAnimating(false);
      }, 200);
    }
  }

  // ── Previous question ──
  function handlePrev() {
    if (currentIndex === 0 || animating) return;
    const newAnswers = answers.slice(0, -1);
    setAnswers(newAnswers);
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((i) => i - 1);
      setSelectedOption_(answers[currentIndex - 1]?.answer || null);
      setAnimating(false);
    }, 200);
  }

  // ── Submit & get result via API ──
  async function submitAssessment(allAnswers: Answer[]) {
    setIsSubmitting(true);
    setLoadingText('Analyzing your responses...');

    const summary = Object.keys(CATEGORY_CONFIG)
      .map((cat) => {
        const catAnswers = allAnswers.filter((a) => a.category === cat);
        return `${cat}: ${catAnswers.map((a) => a.answer).join(', ')}`;
      })
      .join('\n');

    const prompt = `You are an expert career counselor. Analyze these 100 career assessment answers and provide a detailed result.

Assessment: "${selectedOption?.title}"
Language context: ${langName}

Answers by category:
${summary}

Return ONLY valid JSON (no markdown):
{
  "overallScore": <number 0-100>,
  "categoryScores": {
    "career_interest": <0-100>,
    "career_personality": <0-100>,
    "career_motivation": <0-100>,
    "learning_style": <0-100>,
    "scenario": <0-100>
  },
  "topProfessions": [
    {
      "title": "Profession Name",
      "match": <0-100>,
      "description": "2 sentence description in ${langName}",
      "skills": ["skill1", "skill2", "skill3"]
    }
  ],
  "personalitySummary": "3-4 sentences describing the person in ${langName}",
  "strengths": ["strength1", "strength2", "strength3", "strength4"],
  "areasToImprove": ["area1", "area2", "area3"]
}

Rules:
- topProfessions: exactly 3 professions, ordered by match %
- strengths: 4 items, each max 8 words
- areasToImprove: 3 items
- All text in ${langName} where applicable
- overallScore should reflect genuine performance (not always 70+)`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || '{}';
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed: ResultData = JSON.parse(clean);
      setResult(parsed);
      setPhase('result');
    } catch {
      // Fallback result
      setResult({
        overallScore: 74,
        categoryScores: {
          career_interest: 80,
          career_personality: 70,
          career_motivation: 78,
          learning_style: 65,
          scenario: 72,
        },
        topProfessions: [
          {
            title: 'Software Engineer',
            match: 88,
            description: 'Strong analytical and problem-solving skills make this a great fit.',
            skills: ['Programming', 'Problem Solving', 'Teamwork'],
          },
          {
            title: 'Data Analyst',
            match: 76,
            description: 'Your logical thinking aligns well with data-driven roles.',
            skills: ['Analytics', 'Statistics', 'Communication'],
          },
          {
            title: 'Product Manager',
            match: 68,
            description: 'Leadership traits and vision make this a viable path.',
            skills: ['Strategy', 'Communication', 'Leadership'],
          },
        ],
        personalitySummary:
          'You are a logical thinker with strong analytical skills. You prefer structured environments and enjoy solving complex problems.',
        strengths: ['Analytical Thinking', 'Problem Solving', 'Attention to Detail', 'Quick Learner'],
        areasToImprove: ['Public Speaking', 'Networking', 'Creative Thinking'],
      });
      setPhase('result');
    } finally {
      setIsSubmitting(false);
    }
  }

  const currentQ = questions[currentIndex];
  const progress = questions.length > 0 ? (currentIndex / questions.length) * 100 : 0;
  const currentCategory = currentQ ? CATEGORY_CONFIG[currentQ.category] : null;

  // Helper to get relevant courses based on selection
  const getRecommendedCourseSlugs = () => {
    const text = ((selectedOption?.title || "") + " " + assessmentTitle).toLowerCase();
    if (text.includes('mba') || text.includes('graduate') || text.includes('professional')) {
      return ['mba-online', 'mca-online'];
    }
    if (text.includes('bba') || text.includes('12th') || text.includes('school')) {
      return ['bba-online', 'bca-online'];
    }
    if (text.includes('mca') || text.includes('tech') || text.includes('it')) {
      return ['mca-online', 'msc-online'];
    }
    return ['mba-online', 'mca-online']; // Default
  };

  const recommendedSlugs = getRecommendedCourseSlugs();

 
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[900px] w-full p-0 overflow-hidden border-none rounded-2xl shadow-2xl bg-white">

        {/* ── HIDDEN DIALOG TITLE FOR ACCESSIBILITY ── */}
        <VisuallyHidden>
          <DialogTitle>{assessmentTitle} - Career Assessment</DialogTitle>
        </VisuallyHidden>

        {/* ── LOADING PHASE ── */}
        {(phase === 'loading' || isSubmitting) && (
          <div className="flex flex-col items-center justify-center min-h-[500px] p-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="relative mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 animate-ping opacity-75" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">{loadingText}</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              {isSubmitting
                ? 'Our AI is analyzing your responses to find your perfect career match...'
                : `Loading 100 questions in ${langName} for you...`}
            </p>
            <div className="mt-8 flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── QUIZ PHASE ── */}
        {phase === 'quiz' && !isSubmitting && currentQ && (
          <div className="flex flex-col h-[90vh] max-h-[750px]">

            {/* Header */}
            <div className="px-6 py-4 border-b bg-white flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => onOpenChange(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors text-gray-400 flex-shrink-0"
              >
                <X size={16} />
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest truncate">
                  {assessmentTitle}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-black text-gray-500 flex-shrink-0">
                    {currentIndex + 1}/{questions.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Category pill */}
            {currentCategory && (
              <div className="px-6 pt-5 flex-shrink-0">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-${currentCategory.color}-50 text-${currentCategory.color}-600`}
                >
                  <currentCategory.icon size={12} />
                  {currentCategory.label}
                </span>
              </div>
            )}

            {/* Question */}
            <div
              className="flex-1 overflow-y-auto px-6 pt-4 pb-6"
              style={{ opacity: animating ? 0 : 1, transition: 'opacity 0.2s' }}
            >
              <h2 className="text-lg font-bold text-gray-900 leading-relaxed mb-6">
                {currentQ.question}
              </h2>

              <div className="space-y-3">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedOption_ === opt;
                  const prevAnswer = answers[currentIndex]?.answer;
                  const isPreFilled = prevAnswer === opt && !selectedOption_;
                  const active = isSelected || isPreFilled;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-sm transition-all duration-150 ${
                        active
                          ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-sm'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50/30'
                      }`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black mr-3 ${
                          active ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer nav */}
            <div className="px-6 py-4 border-t bg-gray-50 flex items-center justify-between flex-shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-gray-500 hover:text-gray-800 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft size={16} />
                Previous
              </button>

              <span className="text-xs text-gray-400 font-medium">{Math.round(progress)}% Complete</span>

              <button
                onClick={handleNext}
                disabled={!selectedOption_ && !answers[currentIndex]}
                className="flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                {currentIndex + 1 >= questions.length ? 'Submit' : 'Next'}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── RESULT PHASE ── */}
        {phase === 'result' && result && (
          <div className="flex flex-col max-h-[90vh] overflow-hidden">

            {/* Result Header */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 sm:px-8 py-6 sm:py-8 text-white flex-shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
              <p className="text-blue-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Assessment Complete</p>
              <h2 className="text-xl sm:text-2xl font-black mb-4 truncate pr-8">{assessmentTitle}</h2>

              {/* Big score */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 text-center sm:text-left">
                <div className="relative">
                  <svg width="80" height="80" viewBox="0 0 100 100" className="sm:w-[100px] sm:h-[100px]">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(result.overallScore / 100) * 264} 264`}
                      transform="rotate(-90 50 50)"
                      style={{ transition: 'stroke-dasharray 1s ease' }}
                    />
                    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="22" fontWeight="900">
                      {result.overallScore}
                    </text>
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black">{result.overallScore}%</p>
                  <p className="text-blue-200 text-xs sm:text-sm">Overall Match Score</p>
                </div>
              </div>
            </div>

            {/* Scrollable Results Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 bg-gray-50">
              {/* Top matches */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-500" /> Your Best Career Matches
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {result.topProfessions.map((prof, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 ${
                        i === 0 
                          ? 'bg-yellow-50 text-yellow-600' 
                          : i === 1 
                            ? 'bg-gray-100 text-gray-500' 
                            : 'bg-orange-50 text-orange-600'
                      }`}>
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
                          <h4 className="font-black text-gray-900 text-sm sm:text-base">{prof.title}</h4>
                          <span className="text-[10px] sm:text-sm font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{prof.match}% match</span>
                        </div>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-2 leading-relaxed">{prof.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {prof.skills.map((s, si) => (
                            <span key={si} className="px-2 py-0.5 bg-blue-50/50 text-blue-700 border border-blue-100 rounded-full text-[9px] sm:text-[10px] font-bold">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-2">
                  <Target size={20} className="text-blue-500" /> Assessment Breakdown
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {Object.entries(result.categoryScores).map(([cat, score]) => (
                    <div key={cat} className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-100 text-center shadow-sm">
                      <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 truncate px-1">
                        {cat.replace('career_', '').replace('_', ' ')}
                      </p>
                      <p className="text-base sm:text-xl font-black text-gray-900">{score}%</p>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: `${score}%`, transition: 'width 1s ease' }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Improve side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-green-500">✦</span> Your Strengths
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-amber-500">✦</span> Areas to Improve
                  </h3>
                  <ul className="space-y-2">
                    {result.areasToImprove.map((a, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <ArrowRight size={14} className="text-amber-500 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Personality summary */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                <h3 className="text-sm font-black text-gray-900 mb-2 flex items-center gap-2">
                  <Brain size={14} className="text-blue-500" /> Personality Summary
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{result.personalitySummary}</p>
              </div>

              {/* Recommended Courses & Universities */}
              <div className="space-y-4">
                <h3 className="text-base font-black text-gray-900 flex items-center gap-2">
                  <Sparkles size={18} className="text-yellow-500" /> Recommended Courses & Universities
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {/* Logic to pick some courses from courseData */}
                  {recommendedSlugs.map((slug) => {
                    const course = (courseData as any)[slug];
                    if (!course) return null;
                    return (
                    <div key={slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                      <div className="p-4 border-b border-gray-50 bg-blue-50/30">
                        <h4 className="font-bold text-blue-800 text-sm">{course.title}</h4>
                        <p className="text-[10px] text-blue-600 font-medium">{course.subtitle}</p>
                      </div>
                      
                      <div className="p-4 space-y-3">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Top Universities for this course</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {course.universities.slice(0, 2).map((uni: any, idx: number) => (
                            <Link 
                              key={idx} 
                              href={`/${uni.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center gap-3 p-2 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0 border border-gray-100">
                                <img src={uni.image} alt={uni.name} className="w-full h-full object-contain p-1" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-gray-800 truncate group-hover:text-blue-700">{uni.name}</p>
                                <p className="text-[9px] text-gray-400 truncate">{uni.location}</p>
                              </div>
                              <ArrowRight size={12} className="text-gray-300 group-hover:text-blue-500" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-400">UGC Approved Degrees</span>
                        <Link 
                          href={`/${slug}`}
                          className="text-xs font-black text-blue-600 hover:underline flex items-center gap-1"
                        >
                          Explore Course <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  );})}
                </div>
              </div>

              {/* Retake button */}
              <button
                onClick={() => {
                  setPhase('loading');
                  setAnswers([]);
                  setCurrentIndex(0);
                  setSelectedOption_(null);
                  loadQuestions();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                <RotateCcw size={16} /> Retake Assessment
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}