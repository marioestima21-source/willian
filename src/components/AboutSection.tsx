import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../assets/me1.jpg"
import img2 from "../assets/me2.jpg"
import img3 from "../assets/me3.jpg"
import img4 from "../assets/pic-user.jpg"

const images = [
    { src: img1, size: "tall" },
    { src: img2, size: "short" },
    { src: img3, size: "short" },
    { src: img4, size: "wide" },
];

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-10 bg-black overflow-hidden">
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
                                <h4 className="text-white font-black text-2xl tracking-tighter">ANGOLA</h4>
                                <p className="text-zinc-500 text-sm uppercase">Base Atual</p>
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl tracking-tighter">CRIADOR DE CONTEUDOS.</h4>
                                <p className="text-zinc-500 text-sm uppercase">Foco Principal</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};