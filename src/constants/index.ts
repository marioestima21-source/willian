import type { Stat, Video, SocialLink } from '../types/index';

export const STATS: Stat[] = [
  { id: 1, label: "Seguidores", value: "500K", numericValue: 500, suffix: "K+" },
  { id: 2, label: "Likes", value: "10M", numericValue: 10, suffix: "M" },
  { id: 3, label: "Views", value: "50M", numericValue: 50, suffix: "M+" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'tiktok', url: 'https://tiktok.com/@criador' },
  { platform: 'instagram', url: 'https://instagram.com/criador' },
];

// Adicionando a constante de vídeos para resolver o aviso do TS e popular o VideoGrid
export const FEATURED_VIDEOS: Video[] = [
  { 
    id: "73245678910", // ID real de um vídeo do TikTok
    title: "Review de Setup Gamer 2026", 
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    id: "73245678911", 
    title: "Dicas de Produtividade com IA", 
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    id: "73245678912", 
    title: "Como criar conteúdo viral", 
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" 
  },
];

export const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Vídeos", href: "#videos" },
  { label: "Sobre", href: "#about" },
  { label: "Contacto", href: "#contact" },
];