 import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { SiTiktok, SiInstagram, SiFacebook, SiYoutube, SiWhatsapp } from 'react-icons/si';

export const ContactForm: React.FC = () => {
  const socialLinks = [
    { icon: <SiTiktok />, href: "#", color: "hover:bg-[#FE2C55]", label: "TikTok" },
    { icon: <SiInstagram />, href: "#", color: "hover:bg-[#E4405F]", label: "Instagram" },
    { icon: <SiFacebook />, href: "#", color: "hover:bg-[#1877F2]", label: "Facebook" },
    { icon: <SiYoutube />, href: "#", color: "hover:bg-[#FF0000]", label: "YouTube" },
    { icon: <SiWhatsapp />, href: "#", color: "hover:bg-[#25D366]", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Glow de fundo para destaque */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-tiktok-pink/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LADO ESQUERDO: TEXTO E REDES SOCIAIS */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
              >
                VAMOS <br />
                <span className="text-tiktok-cyan">TRABALHAR?</span>
              </motion.h2>
              
              <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
                Estou sempre à procura de projetos inovadores e marcas que queiram 
                impactar o mundo digital. Se procuras autenticidade e resultados, 
                estás no sítio certo. <br /><br />
                <span className="text-white font-medium italic">Disponível para parcerias, publicidade e direção criativa.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-xl transition-all ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* LADO DIREITO: FORMULÁRIO "GLASS" */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2.5rem]"
            >
              <form className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nome ou Marca" 
                    className="w-full bg-black/40 border border-zinc-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-tiktok-pink transition-all font-sans"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Teu E-mail" 
                    className="w-full bg-black/40 border border-zinc-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-tiktok-pink transition-all font-sans"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Descreve a tua ideia..." 
                    rows={4}
                    className="w-full bg-black/40 border border-zinc-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-tiktok-pink transition-all font-sans resize-none"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(254, 44, 85, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 text-lg hover:bg-tiktok-cyan transition-colors"
                >
                  <Send size={20} />
                  Enviar Proposta
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};