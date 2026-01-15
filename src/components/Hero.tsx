import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants/index';
import { ExternalLink, Play } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            
            {/* Background Decorativo - Ambos no Topo para evitar o corte visual */}
            {/* Glow Rosa à Esquerda */}
            <div className="absolute top-[-15%] left-[-5%] w-[60%] h-[60%] bg-tiktok-pink/20 blur-[140px] rounded-full animate-pulse-slow" />
            
            {/* Glow Ciano à Direita */}
            <div className="absolute top-[-15%] right-[-5%] w-[60%] h-[60%] bg-tiktok-cyan/20 blur-[140px] rounded-full animate-pulse-slow" />

            {/* Opcional: Um terceiro glow central muito suave para unir as duas cores */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-r from-tiktok-pink/5 to-tiktok-cyan/5 blur-[100px]" />

            <div className="container mx-auto px-4 z-10 text-center">
                {/* ... resto do seu código (motion.div, h1, etc) permanece igual ... */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-6 uppercase tracking-widest">
                        Criador de Conteúdo Digital
                    </span>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
                        TORNANDO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiktok-cyan via-white to-tiktok-pink">
                            IDEIAS EM REALIDADE
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
                        Explora o universo de conteúdos criativos do Willian07
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href={SOCIAL_LINKS.find(s => s.platform === 'tiktok')?.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-tiktok-cyan transition-colors"
                        >
                            <Play fill="black" size={20} />
                            Ver no TikTok
                        </motion.a>

                        <motion.a
                            href="#videos"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-zinc-900 text-white border border-zinc-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-colors"
                        >
                            Conteúdo Recente
                            <ExternalLink size={18} className="text-zinc-500" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Indicador de Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >

            </motion.div>
        </section>
    );
};