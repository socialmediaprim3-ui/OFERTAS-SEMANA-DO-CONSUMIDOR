
import React, { useState } from 'react';
import { motion } from 'motion/react';
import ProductCard from './components/ProductCard.tsx';
import ProductModal from './components/ProductModal.tsx';
import { PRODUCTS } from './constants.tsx';
import { Product } from './types.ts';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] relative text-stone-100">
      {/* Premium Abstract Background - Scrolling with content */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep Black Base with Subtle Texture - Repeated for 5 blocks */}
        {[...Array(5)].map((_, blockIndex) => (
          <div key={blockIndex} className="relative w-full h-[100vh] min-h-[900px]">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#050505]" />
            
            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ 
                   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
                 }} 
            />

            {/* Metallic Gold Curved Waves - Hidden in the first block */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id={`metallicGold-${blockIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8E6E3A" />
                  <stop offset="25%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#F9E498" />
                  <stop offset="75%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8E6E3A" />
                </linearGradient>
                <filter id={`glow-${blockIndex}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {blockIndex !== 0 && (
                <g>
                  {/* Abstract Gold Accents - Multiple random-ish lines */}
                  {[...Array(6)].map((_, i) => {
                    // Deterministic "random" values based on blockIndex and line index
                    const seed = (blockIndex + 1) * (i + 1);
                    const yStart = (seed * 137) % 900;
                    const yEnd = (seed * 263) % 900;
                    const xMid = (seed * 419) % 1440;
                    const yMid = (seed * 571) % 900;
                    const strokeWidth = (seed % 3 === 0) ? 1 : (seed % 5 === 0 ? 8 : 2);
                    const opacity = (seed % 4 === 0) ? 0.1 : (seed % 3 === 0 ? 0.4 : 0.2);
                    
                    const path = `M-100,${yStart} Q${xMid},${yMid} 1540,${yEnd}`;
                    
                    return (
                      <React.Fragment key={i}>
                        {/* Glow for thicker lines */}
                        {strokeWidth > 4 && (
                          <motion.path
                            initial={{ opacity: 0 }}
                            animate={{ opacity: opacity * 0.5 }}
                            transition={{ duration: 3, delay: i * 0.1 }}
                            d={path}
                            stroke="#D4AF37"
                            strokeWidth={strokeWidth * 2.5}
                            fill="none"
                            filter={`url(#glow-${blockIndex})`}
                            strokeLinecap="round"
                          />
                        )}
                        <motion.path
                          initial={{ opacity: 0 }}
                          animate={{ opacity: opacity }}
                          transition={{ duration: 2.5, delay: i * 0.15 }}
                          d={path}
                          stroke={strokeWidth > 1 ? `url(#metallicGold-${blockIndex})` : "#F9E498"}
                          strokeWidth={strokeWidth}
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={seed % 7 === 0 ? "10,20" : "none"}
                        />
                      </React.Fragment>
                    );
                  })}

                  {/* Additional Sharp Accents */}
                  {[...Array(3)].map((_, i) => {
                    const seed = (blockIndex + 2) * (i + 5);
                    const x1 = (seed * 191) % 1440;
                    const y1 = (seed * 283) % 900;
                    const x2 = x1 + ((seed * 347) % 400) - 200;
                    const y2 = y1 + ((seed * 461) % 400) - 200;
                    
                    return (
                      <motion.line
                        key={`line-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 4, delay: 1 + i * 0.3 }}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </g>
              )}
            </svg>

            {/* Soft Lighting & Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_transparent_0%,_rgba(0,0,0,0.7)_100%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />
          </div>
        ))}
      </div>

      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#8E6E3A] via-[#F9E498] to-[#8E6E3A] text-black py-2 overflow-hidden whitespace-nowrap border-b border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
          className="inline-flex items-center"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] px-8">
                Ofertas do Mês do Consumidor - Condições válidas por tempo limitado
              </span>
              <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
            </div>
          ))}
        </motion.div>
      </div>

      <main className="flex-grow relative z-10">
        <section id="catalog" className="max-w-7xl mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-6"
            >
               <div className="w-24 h-px bg-gold/10"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-white mb-2 uppercase tracking-tight"
            >
              Mês do <span className="text-gold italic font-normal">Consumidor</span>
            </motion.h2>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              src="https://i.imgur.com/doVW6Vd.png"
              alt="Prime Home Decor Logo"
              className="h-10 md:h-32 mx-auto mb-16 object-contain"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-400 max-w-3xl mx-auto font-light text-sm md:text-xl leading-relaxed px-2 md:px-0"
            >
              A maior liquidação anual de mobiliário de alto padrão. Peças exclusivas com condições de aquisição nunca antes vistas. Eleve o padrão do seu ambiente com investimentos reduzidos por tempo limitado.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpen={() => handleOpenProduct(product)} 
              />
            ))}
          </div>

          {/* Trust Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-24">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors border border-white/10">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-white mb-2">Qualidade Artesanal</h4>
              <p className="text-stone-400 text-sm font-light">Cada peça é produzida com materiais nobres e acabamento manual.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors border border-white/10">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-white mb-2">Entrega Premium</h4>
              <p className="text-stone-400 text-sm font-light">Logística especializada para garantir a integridade do seu investimento.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors border border-white/10">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-white mb-2">Compra Segura</h4>
              <p className="text-stone-400 text-sm font-light">Atendimento personalizado para total segurança em sua aquisição.</p>
            </div>
          </div>
          
          <div className="mt-32 text-center">
             <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Prime Home Decor</p>
             <div className="w-12 h-px bg-gold mx-auto opacity-40"></div>
          </div>
        </section>
      </main>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;
