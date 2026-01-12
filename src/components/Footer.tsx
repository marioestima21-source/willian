import React from 'react';
import { motion } from 'framer-motion';
 
import { SiTiktok, SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-zinc-950 pt-24 pb-12 relative overflow-hidden border-t border-zinc-900">
            {/* Elemento Decorativo: Texto Vazado Gigante */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                <h2 className="text-[15vw] font-black text-transparent stroke-zinc-900 stroke-1 opacity-20 uppercase tracking-tighter whitespace-nowrap">
                    Willian dos Santos
                </h2>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Coluna 1: Branding */}
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-3xl font-black mb-6 tracking-tighter italic">
                            WILLIAN<span className="text-tiktok-pink">07</span>
                        </h3>
                        <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed">
                            Criando conteúdo que conecta pessoas e marcas através de narrativas visuais autênticas. O futuro do entretenimento é aqui.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
                        <ul className="space-y-4 text-zinc-400 font-medium">
                            <li><a href="#home" className="hover:text-tiktok-cyan transition-colors">Início</a></li>
                            <li><a href="#videos" className="hover:text-tiktok-cyan transition-colors">Portfólio</a></li>
                            <li><a href="#about" className="hover:text-tiktok-cyan transition-colors">Sobre Mim</a></li>
                            <li><a href="#contact" className="hover:text-tiktok-cyan transition-colors">Parcerias</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Redes Sociais */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Redes Sociais</h4>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: <SiTiktok />, color: 'hover:text-tiktok-cyan' },
                                { icon: <SiInstagram />, color: 'hover:text-pink-500' },
                                { icon: <SiFacebook />, color: 'hover:text-blue-600' },
                                { icon: <SiYoutube />, color: 'hover:text-red-600' }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5 }}
                                    className={`text-2xl text-zinc-600 transition-colors ${item.color}`}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Linha Final: Copyright e Botão Topo */}
                <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-sm font-medium">
                        © {new Date().getFullYear()} Willian dos Santos. Built with ❤️ in Angola.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:border-tiktok-cyan hover:text-tiktok-cyan transition-all"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>

            {/* CSS Inline para o efeito de "Stroke" no texto vazado */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .stroke-zinc-900 {
          -webkit-text-stroke: 1px #27272a;
        }
      `}} />
        </footer>
    );
};