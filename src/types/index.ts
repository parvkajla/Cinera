export interface Film {
  id: string;
  title: string;
  category: 'Short Film' | 'Documentary' | 'Cinematic Story' | 'Experimental';
  year: string;
  duration: string;
  creator: string;
  role: string;
  synopsis: string;
  posterUrl: string;
  trailerUrl?: string;
  accolades?: string[];
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Screening' | 'Challenge' | 'Masterclass' | 'Workshop' | 'Festival';
  date: string;
  time: string;
  location: string;
  description: string;
  speakerOrHost?: string;
  badge?: string;
  registrationOpen: boolean;
}

export interface Discipline {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  description: string;
  featuredProject: string;
  skills: string[];
}

export interface FilmmakerQuote {
  id: string;
  quote: string;
  author: string;
  role: string;
  year: string;
  avatarUrl: string;
  filmTitle: string;
}

export interface BrandTouchpoint {
  id: string;
  channel: string;
  title: string;
  description: string;
  metric: string;
  imageUrl: string;
}
