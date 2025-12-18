type Benefit = {
  title: string;
  description: string;
  iconSvg: string;
};

// Accreditation type
type Accreditation = {
  src: string;
  alt: string;
  name: string;
};
type Stat = {
  label: string;
  value: string | number;
};

type Recognition = {
  title: string;
  description: string;
};

type SuccessStory = {
  name: string;
  story: string;
  image: string;
};
type AccreditationSectionProps = {
  title: string;
  description: string;
  stats: Stat[];
  benefits: Benefit[];
  accreditations: Accreditation[];
  internationalRecognition: Recognition[];
  trustText?: string;
  successStories: SuccessStory[];
};

export type { AccreditationSectionProps };