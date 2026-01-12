export interface Stat {
  id: number;
  label: string;
  value: string; // Ex: "1.2M"
  numericValue: number; // Para a animação (ex: 1200000)
  suffix?: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail?: string;
}

export interface SocialLink {
  platform: 'tiktok' | 'instagram' | 'youtube' | 'twitter';
  url: string;
}