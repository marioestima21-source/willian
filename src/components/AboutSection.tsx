import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400", size: "tall" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400", size: "short" },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400", size: "short" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400", size: "wide" },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: BENTO GRID INTERATIVO */}
          <div className="grid grid-cols-2 gap-4 auto-rows-[100px] md:auto-rows-[120px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-3xl overflow-hidden border border-zinc-800 group
                  ${img.size === 'tall' ? 'row-span-3' : ''}
                  ${img.size === 'wide' ? 'col-span-2 row-span-2' : ''}
                  ${img.size === 'short' ? 'row-span-2' : ''}
                `}
              >
                <motion.img 
                  src={img.src} 
                  alt="Trabalho de Willian"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* LADO DIREITO: TEXTO WILLIAN DOS SANTOS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              WILLIAN <br />
              <span className="text-tiktok-cyan">DOS SANTOS</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Mais do que um criador, sou um <span className="text-white font-medium italic">storyteller digital</span>. 
                A minha missão é transformar a forma como as marcas comunicam com as novas gerações.
              </p>
              <p>
                Com um olho clínico para estética e outro no algoritmo, foco-me em produzir 
                conteúdo que não apenas atrai visualizações, mas que gera <span className="text-tiktok-pink font-bold">retenção e comunidade</span>. 
                Cada pixel e cada frame é pensado para impactar.
              </p>
            </div>

            {/* Stats Rápidas de Perfil */}
            <div className="grid grid-cols-2 gap-6 mt-12 border-t border-zinc-800 pt-8">
              <div>
                <h4 className="text-white font-black text-2xl tracking-tighter">PORTUGAL</h4>
                <p className="text-zinc-500 text-sm uppercase">Base Atual</p>
              </div>
              <div>
                <h4 className="text-white font-black text-2xl tracking-tighter">CREATIVE DIR.</h4>
                <p className="text-zinc-500 text-sm uppercase">Foco Principal</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};