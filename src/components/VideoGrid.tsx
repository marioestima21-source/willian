import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_VIDEOS } from '../constants/index';
import { SiTiktok } from 'react-icons/si';
import { Play } from 'lucide-react';

export const VideoGrid: React.FC = () => {
  return (
    <section id="videos" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Secção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              CONTEÚDO <span className="text-tiktok-cyan">VIRAL</span>
            </h2>
            <p className="text-zinc-500 mt-2 max-w-md">
              Os vídeos mais vistos e os momentos que marcaram a comunidade.
            </p>
          </div>
          <a 
            href="#contact" 
            className="text-sm font-bold text-tiktok-pink hover:underline underline-offset-4"
          >
            Quero um vídeo para a minha marca →
          </a>
        </div>

        {/* Grelha de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              {/* Thumbnail com Overlay */}
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
              />
              
              {/* Gradiente de fundo para legibilidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Botão Play Central (aparece no hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Play fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Informações do Vídeo */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <SiTiktok className="text-tiktok-cyan text-sm" />
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">TikTok</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight mb-4">
                  {video.title}
                </h3>
                
                <a 
                  href={`https://www.tiktok.com/video/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-tiktok-cyan transition-colors"
                >
                  Assistir no App
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};