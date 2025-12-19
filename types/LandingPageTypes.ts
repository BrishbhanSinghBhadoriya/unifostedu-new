// Base interfaces for common properties
interface BaseEntity {
    isActive: boolean;
    order: number;
  }
  
  interface EntityWithId extends BaseEntity {
    _id: string;
  }
  
  // Slide interface
  export interface Slide extends BaseEntity {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    subtitle: string;
    description: string;
    onOpenModal: (type: string) => void;
  }
  
  // University Logo interface
  export interface UniversityLogo extends EntityWithId {
    name: string;
    logo: string;
    slug: string;
  }
  
  // Steps interface
  export interface Step {
    id: number;
    title: string;
    subtitle: string;
    position: string;
    color: string;
    icon: string;
  }
  
  // Course interface
  export interface Course extends BaseEntity {
    title: string;
    subtitle: string;
    desc: string;
    tag: string;
    iconKey: string;
    duration: string;
    level: string;
    color: string;
  }
  
  // University interface
  export interface University {
    name: string;
    location: string;
    NIRF: number | string;
    rating: number;
    image: string;
    specializations: string[];
    fee: string;
    duration: string;
    accreditation: string;
  }
  
  // Feature interface
  export interface Feature extends EntityWithId {
    title: string;
    description: string;
    iconKey: string;
    color: string;
  }
  
  // College interface
  export interface College {
    _id: string;
    name: string;
    logo: string;
    ranking: string;
    location: string;
    fee: string;
    courses: string[];
    description: string;
    link: string;
  }
  
  // FAQ interface
  export interface FAQ extends BaseEntity {
    question: string;
    answer: string;
    category: string;
  }
  
  // City interface
  export interface City extends EntityWithId {
    city: string;
    state: string;
    img: string;
    students: string;
  }
  
  // Accreditation Logo interface
  export interface AccreditationLogo extends EntityWithId {
    name: string;
    imageUrl: string;
  }
  
  export interface LandingData {
    heroSlides?: Slide[];
    courses?: Course[];
    features?: Feature[];
    cities?: City[];
    accreditationLogos?: AccreditationLogo[];
    universityLogos?: UniversityLogo[];
    faqs?: FAQ[];
    colleges?: College[];
    workflowSteps?: Step[];
  }
  
  export interface LandingPageProps {
    data?: LandingData;
  }