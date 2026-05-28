export interface TimelineEvent {
  id: string;
  time: string;
  date: string;
  title: string;
  description: string;
  type: 'preparacao' | 'sinal' | 'militar' | 'politico' | 'popular';
  location: string;
  iconName: string;
  detailedText: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  date: string;
  author: string;
  description: string;
  category: 'ruas' | 'militares' | 'celebracao' | 'simbolos';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  birthDeath: string;
  bio: string;
  quote: string;
  fullStory: string;
  audioDuration: string; // duration of simulated audio tape playback
  accentColor: string; // custom representation color
}

export interface ImpactArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  before: {
    title: string;
    description: string;
    points: string[];
  };
  after: {
    title: string;
    description: string;
    points: string[];
  };
  stats?: {
    label: string;
    beforeVal: string;
    afterVal: string;
    neutral?: boolean;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
}
