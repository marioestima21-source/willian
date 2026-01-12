 import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
// Importando o ícone do TikTok
import { SiTiktok } from 'react-icons/si'; 
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tiktokUrl = SOCIAL_LINKS.find(s => s.platform === 'tiktok')?.url || '#';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/90 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO ATUALIZADA: WILLIAN07 + ÍCONE */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-3"
        >
          <div className="bg-white p-1.5 rounded-lg group-hover:bg-tiktok-cyan transition-colors">
            <SiTiktok className="text-black text-xl" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            WILLIAN<span className="text-tiktok-pink">07</span>
          </span>
        </motion.a>

        {/* Desktop Navigation (igual ao anterior) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <motion.a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-tiktok-pink text-white px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(254,44,85,0.4)]"
          >
            Seguir
          </motion.a>
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Menu Mobile (simplificado para o exemplo) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden"
          >
             {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};