import React from 'react';
import { Product } from '../types.ts';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onOpen: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpen }) => {
  const hasDiscount = !!product.originalPriceInstallment;

  const calculateDiscount = (original?: string, current?: string) => {
    if (!original || !current) return 0;
    const parse = (val: string) => {
      // Extract the numeric part after "R$ "
      const match = val.match(/R\$\s*([\d.,]+)/);
      if (!match) return 0;
      return parseFloat(match[1].replace(/\./g, '').replace(',', '.'));
    };
    const orig = parse(original);
    const curr = parse(current);
    if (!orig || !curr) return 0;
    return Math.round(((orig - curr) / orig) * 100);
  };

  const discountPercentage = calculateDiscount(product.originalPriceInstallment, product.priceInstallment);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-700"
      onClick={onOpen}
    >
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {hasDiscount && discountPercentage > 0 && (
            <span className="bg-red-600 text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.1em] px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 md:p-8">
        <div className="flex justify-between items-start mb-2 md:mb-3">
          <h3 className="text-lg md:text-2xl font-serif text-stone-800 group-hover:text-gold transition-colors leading-tight flex-grow">{product.name}</h3>
        </div>
        
        <p className="text-stone-500 text-[10px] md:text-xs leading-relaxed mb-6 md:mb-8 line-clamp-2 italic font-light">
          {product.description}
        </p>
        
        <div className="flex flex-col border-t border-stone-100 pt-5 md:pt-6">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              {hasDiscount && (
                <span className="text-stone-500 text-[11px] md:text-[13px] line-through mb-1 font-bold opacity-80">
                  De: {product.originalPriceInstallment}
                </span>
              )}
              <div className="flex items-baseline gap-1.5">
                <span className="text-[8px] md:text-[9px] text-stone-400 uppercase tracking-[0.1em] font-bold mb-1">12x de</span>
                <span className="text-xl md:text-3xl font-black text-stone-900 tracking-tighter">
                  {product.priceInstallment.split('de ')[1]}
                </span>
              </div>
              <span className="text-[9px] text-gold font-bold uppercase tracking-widest mt-1">
                Investimento Exclusivo
              </span>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white p-3 rounded-full flex items-center justify-center transition-all shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;