export interface Specialization {
  name: string;
  description: string;
  fee?: string;
  image?: string;
  highlights?:string[]

  suitability?:string
}
export interface CourseData {
   title?: string;
  image?: string;
}
export interface Eligibility {
  description: string;
  qualification?: string;
  minimumMarks?: string;
  streams?: string[];
  entranceExam?: string;
  ageLimit?: string;
  idealCandidates?: string[];
  documentsRequired?: string[];
  workExperience?: string;
  education?: string;
  suitability?: string[];
}
// ===== Fee Policy Interfaces =====
export interface FeeNotes {
  noteText: string;
  fullFee: string;
  points: string[];
}

export interface FeeScholarshipPolicy {
  title: string;
  description: string;
}

export interface FeeCancellationPolicy {
  title: string;
  description: string;
}

export interface FeePolicy {
  notes: FeeNotes;
  scholarship: FeeScholarshipPolicy;
  cancellation: FeeCancellationPolicy;
}

export interface SemesterCurriculum {
  semester: string;
  subjects: string[];
}

export interface Curriculum {
  coreSubjects?: string[];
  learningApproach?: string[];
  learningMethods?: string[];
  additionalComponents?: string[];
  [key: string]: any;
}

export interface FeeStructure {
  type: string;
  amount: string;
  description: string;
}

export interface CourseFees {
  totalFee?:string;
  total?: string;
  annual?:string;
  semester?:string;
  feeIncludes?: string[];
  coverage?: string[];
  includes?: string[];
  paymentOptions?: string[];
}

export interface Certificate {
  degreeAwarded: string;
  issuedBy?: string;
  features?: string[];
  validity?: string[];
}

export interface AdmissionLoan {
  available: boolean;
  description?: string;
  coverage?: string[];
  features?: string[];
  note?: string;
  support?: string;
}

export interface ExaminationPattern {
  components: string[];
  platform?: string;
  features?: string[];
  weightage?: string;
  assessmentTypes?: string[];
  grading?: string | string[];
  format?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface About {
  description?: string;
  highlights?: string[];
  heroImage?: string; 
  title?: string;     
  keyBenefits?: string[]; 
}

export interface ApprovalData {
  status?: string;
  description?: string;
  grade?: string;
}

export interface Approval {
  ugcDeb?: ApprovalData;
  naac?: ApprovalData;
  deemedUniversity?: ApprovalData | string;
  ugc?: ApprovalData;
  aicte?: ApprovalData;
  nirf?: ApprovalData;
  qs?: ApprovalData;
  wes?: ApprovalData;
  dec?: ApprovalData;
  degreeRecognition?: string[];
  acceptance?: string;
  features?: string[];
  compliance?: string;
  aiu?: ApprovalData;
  [key: string]: any;
}

export interface Scholarship {
  available?: boolean;
  details?: string;
}

export interface Program {
  slug: string;
  name: string;
  fullName?: string;
  image?: string;
  duration?: string;
  samesters?: string[];
  mode?: string;
  totalFee?: string;
  about?: About | string;
  approval?: Approval | string;
  eligibility?: Eligibility | string;
  specializations?: Specialization[];
  curriculum?: Curriculum | SemesterCurriculum[];
  courseFees?: CourseFees;
  faqs?: FAQ[];
  scholarship?: Scholarship;
  [key: string]: any;
   feePolicy?: FeePolicy;
}

export type Programs = {
  [key: string]: Program;
};

export type University = {
  name: string;
  shortName: string;
  type: string;
  accreditation: {
    naac: string;
    ugc: string;
    aiu: string;
  };
};

export type CourseDataFromJSON = {
  university: University;
  programs: Programs;
};