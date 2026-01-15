import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { STATS } from '../constants/index';

// Sub-componente para cada cartão de estatística
const StatCard = ({ value, label, suffix }: { value: number; label: string; suffix?: string }) => {
  const count = useMotionValue(0);
  // Arredonda o valor da animação para números inteiros
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  // Deteta quando o elemento entra na visualização do utilizador
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação só acontece uma vez
    threshold: 0.5,    // Ativa quando 50% do componente estiver visível
  });

  useEffect(() => {
    if (inView) {
      // Anima de 0 até o valor definido nas constantes
      animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800 backdrop-blur-sm hover:border-tiktok-cyan/50 transition-colors"
    >
      <div className="flex text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">
        <motion.span>{rounded}</motion.span>
        <span className="text-tiktok-pink">{suffix}</span>
      </div>
      <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">
        {label}
      </p>
    </motion.div>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-10 bg-black relative">
      {/* Detalhe visual de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.numericValue}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};