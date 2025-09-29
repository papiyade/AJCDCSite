export interface Commission {
  id: number;
  nom: string;
  description: string;
  icon: string;
}

export interface Evenement {
  id: number;
  titre: string;
  date: string;
  resume: string;
  jour: 'vendredi' | 'samedi' | 'dimanche';
}

export interface GalerieImage {
  id: number;
  url: string;
  alt: string;
  original: string;
  thumbnail: string;
}

export interface ContactForm {
  nom: string;
  email: string;
  message: string;
}