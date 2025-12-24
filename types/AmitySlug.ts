// Database Types (JSON se aane wala data)
export interface CourseDataFromJSON {
  "bba-online": CourseDetails;
  "bca-online": CourseDetails;
  "bcom-online": CourseDetails;
  "ba-online": CourseDetails;
  "mba-online": CourseDetails;
  "mca-online": CourseDetails;
  "mcom-online": CourseDetails;
  "ma": CourseDetails;
  "msc": CourseDetails;
  "integrated_programs": IntegratedProgramDetails;
}

// Course Details Interface
export interface CourseDetails {
  about: About;
  approval: Approval;
  whoCanApply: WhoCanApply;
  specializations: Specialization[];
  courseFees: CourseFees;
  certifications: Certifications;
  syllabus_curriculum: SyllabusCurriculum;
  placementPartners: PlacementPartners;
  faq: FAQ[];
  faqImage?: string;
  studentReview: StudentReview;
  specializationImage?: string;
}

// About Section
export interface About {
  heroImage?: string;
  title: string;
  university: string;
  description: string;
  duration: string;
  mode: string;
  learningMethod: string[];
  keyBenefits: string[];
}

// Approval Section
export interface Approval {

  ugc_deb: ApprovalBody;
  naac: NaacGrade;
  aicte?: ApprovalBody;
  aiu?: ApprovalBody;
  degreeRecognition: string[];
  image?: string;
}

export interface ApprovalBody {
  status: string;
  description: string;
  icon?: string;
}

export interface NaacGrade {
  grade: string;
  description: string;
}

// Who Can Apply Section
export interface WhoCanApply {
  description?: string;
  eligibility: string;
  minimumMarks: string;
  entranceExam?: string;
  ageLimit?: string;
  preferredSubjects?: string;
  preferredBackground?: string;
  idealCandidates: string[];
  documentsRequired: string[];
  whyChooseSpecilization?: string[];
  image?: string;
}

// Specialization
export interface Specialization {
  name: string;
  fee: string;
  description: string;
}

// Course Fees
export interface CourseFees {
  feeRange?: string;
  semesterWiseApprox?: string;
  paymentOptions?: string[];
  loanPartners?: string[];
  feeIncludes?: string[];
  image?: string;
}

// Certifications
export interface Certifications {
  degreeAwarded: string;
  description?: string;
  certificateValidity: string[];
  additionalCertificates?: string[];
  verification?: string;
  whyThisCertificateMatters?: string[];
  image?: string;
}

// Syllabus & Curriculum
export interface SyllabusCurriculum {
  image?: string;
  year1?: string[];
  year2?: string[];
  year3?: string[]; 
  semester1?: string[];
  semester2?: string[];
  semester3?: string[];
  semester4?: string[];
  curriculumHighlights?: string[]; 
  evaluationPattern: EvaluationPattern;
}

export interface EvaluationPattern {
  internalAssessment: string;
  finalExam: string;
  examMode: string;
}

// Placement Partners
export interface PlacementPartners {
  image?: string;
  title?: string;
  description?: string;
  topRecruiters: string[];
  jobRoles?: string[];
  averageSalary: string;
  careerSupport?: string[];
  placementHighlights?:string[];
}

// FAQ
export interface FAQ {
  question: string;
  answer: string;
}

// Student Review
export interface StudentReview {
  studentsHand?: {
      name: string;
      rating: number;
      review: string;
    }[];
  averageRating: number;
  positiveFeedback: string[];
  studentCount?: string;
  image?: string;
}

// Integrated Programs
export interface IntegratedProgramDetails {
  about: About;
  approval: Approval;
  whoCanApply: WhoCanApply;
  programs: IntegratedPrograms;
  courseFees: CourseFees;
  programStructure: ProgramStructure;
  placementPartners: PlacementPartners;
  faq: FAQ[];
  studentReview: StudentReview;
}

export interface IntegratedPrograms {
  bba_mba: IntegratedProgram;
  bca_mca: IntegratedProgram;
  bcom_mba: IntegratedProgram;
}

export interface IntegratedProgram {
  name: string;
  degreesAwarded: string[];
  totalFee: string;
  individualFees: string;
  savings: string;
  duration: string;
  description: string;
  specializations: string;
  careerOptions: string[];
}

export interface ProgramStructure {
  years1to3: string;
  years4to5: string;
  transitionProcess: string;
  evaluationPattern: EvaluationPattern;
}

// Frontend mein use karne ke liye Transformed Types
export interface Course {
  id: string;
  title: string;
  university: string;
  description: string;
  duration: string;
  mode: string;
  feeRange?: string;
  averageRating: number;
  specializations: Specialization[];
}

export interface CourseListItem {
  id: string;
  title: string;
  duration: string;
  feeRange: string;
  rating: number;
  specializations: number;
}

// Helper function to transform data
export function transformCourseData(
  courseId: string,
  data: CourseDetails
): Course {
  return {
    id: courseId,
    title: data.about.title,
    university: data.about.university,
    description: data.about.description,
    duration: data.about.duration,
    mode: data.about.mode,
    feeRange: data.courseFees.feeRange,
    averageRating: data.studentReview.averageRating,
    specializations: data.specializations,
  };
}

// Props Types for Components
export interface CourseCardProps {
  course: Course;
  onClick?: (courseId: string) => void;
}

export interface CourseDetailProps {
  courseId: string;
  courseData: CourseDetails;
}

export interface SpecializationListProps {
  specializations: Specialization[];
  onSelect?: (specialization: Specialization) => void;
}

export interface FAQListProps {
  faqs: FAQ[];
  
}

export interface PlacementInfoProps {
  placementData: PlacementPartners;
}

// Slug Client Props - CORRECT TYPE
export interface SlugClientProps {
  courseData: CourseDetails | IntegratedProgramDetails;
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface CoursesAPIResponse extends APIResponse<CourseDataFromJSON> {}

// Filter & Search Types
export interface CourseFilters {
  duration?: string[];
  feeRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  mode?: string[];
}

export interface SearchParams {
  query: string;
  filters?: CourseFilters;
  sortBy?: "rating" | "fee" | "duration";
  sortOrder?: "asc" | "desc";
}