
export interface Specialization {
  name: string;
  description: string;
  fee?: string;
}

export interface Eligibility {
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

export interface Curriculum {
  coreSubjects?: string[];
  learningApproach?: string[];
  learningMethods?: string[];
  additionalComponents?: string[];
  [key: string]: any;
}

export interface CourseFees {
  totalFee: string;
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
}

export interface ExaminationPattern {
  components: string[];
  platform?: string;
  features?: string[];
  weightage?: string;
  assessmentTypes?: string[];
  grading?: string | string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface About {
  description: string;
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
  deemedUniversity?: ApprovalData;
  ugc?: ApprovalData;
  aicte?: ApprovalData;
  nirf?: ApprovalData;
  qs?: ApprovalData;
  wes?: ApprovalData;
  dec?: ApprovalData;
  degreeRecognition?: string[];
  acceptance?: string;
  features?: string[];
  [key: string]: any;
}

export interface Scholarship {
  available?: boolean;
  details?: string;
}

export interface Program {
  name: string;
  fullName: string;
  duration: string;
  mode: string;
  totalFee: string;
  about: About;
  approval?: Approval;
  eligibility?: Eligibility;
  specializations?: Specialization[];
  curriculum?: Curriculum;
  courseFees?: CourseFees;
  certificate?: Certificate;
  admissionLoan?: AdmissionLoan;
  examinationPattern?: ExaminationPattern;
  faqs: FAQ[];
  scholarship?: Scholarship;
  
  // Optional fields for UI
  placementPartners?: any[];
  studentReview?: any[];
  faqImage?: string;
  specializationImage?: string;
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
