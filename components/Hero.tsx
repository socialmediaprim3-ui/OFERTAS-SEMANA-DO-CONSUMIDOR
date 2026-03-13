
import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Living Room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-3 py-2 px-4 bg-gold/10 backdrop-blur-md border border-gold/30 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em]">Oportunidade Única: Semana do Consumidor</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-8 tracking-tighter"
          >
            A Arte de <br />
            <span className="text-gold italic font-normal">Viver Bem.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-stone-300 text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-xl border-l border-gold/30 pl-8"
          >
            Curadoria exclusiva de poltronas clássicas com condições que transcendem o comum. Design atemporal para quem não abre mão da excelência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a 
              href="#catalog"
              className="bg-gold text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-stone-900 transition-all shadow-2xl transform hover:-translate-y-1"
            >
              Explorar Coleção
            </a>
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Ofertas válidas por</span>
              <span className="text-gold text-sm font-serif italic">Tempo Limitado</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="flex flex-col items-end gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/50" />
          <span className="text-gold/50 text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-rl] rotate-180">Scroll to Discover</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
