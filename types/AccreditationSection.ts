
type Benefit = {
  title: string;
  description: string;
  iconSvg: string;
};


type Accreditation = {
  src: string;
  alt: string;
  name: string;
};

type Stat = {
  label: string;
  value: string | number;
  color: string;
  bg: string;
};


type Recognition = {
  src: string;
  alt: string;
  name: string;
};


type SuccessStory = {
  name: string;
  initials: string;
  color: string;
  text: string;
};


type AccreditationSectionProps = {
  title: string;
  description: string;

  stats?: Stat[];
  benefits?: Benefit[];
  accreditations?: Accreditation[];
  internationalRecognition?: Recognition[];
  successStories?: SuccessStory[];

  trust?: {
    text: string;
    subtext?: string;
  };
};

export type { AccreditationSectionProps };
