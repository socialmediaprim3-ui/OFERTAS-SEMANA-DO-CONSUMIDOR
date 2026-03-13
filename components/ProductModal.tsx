import React, { useEffect } from 'react';
import { Product } from '../types.ts';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const calculateDiscount = (original?: string, current?: string) => {
    if (!original || !current) return 0;
    const parse = (val: string) => {
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#001220]/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-6xl max-h-[95vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col md:flex-row animate-scale-up border border-gold/20">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-stone-100 transition-colors border border-stone-200"
        >
          <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-1/2 aspect-square md:h-auto overflow-hidden bg-stone-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto bg-white flex flex-col">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[#9b7135] text-[10px] md:text-xs font-black uppercase tracking-widest">{product.style}</div>
              <div className="h-px w-6 md:w-8 bg-gold/30"></div>
              {discountPercentage > 0 && (
                <div className="bg-red-600 text-white text-[10px] md:text-[11px] font-black px-2 py-0.5 rounded uppercase">-{discountPercentage}% OFF</div>
              )}
            </div>
            <h2 className="text-2xl md:text-5xl font-serif text-[#001220] mb-6 md:mb-8 leading-tight font-bold tracking-tight">{product.name}</h2>
            
            <p className="text-stone-600 text-base md:text-lg leading-relaxed whitespace-pre-line font-light italic mb-8 md:mb-10">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-stone-100">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-stone-50 flex items-center justify-center rounded-lg border border-stone-100">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#9b7135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[8px] md:text-[10px] font-black text-stone-400 uppercase tracking-widest">Dimensões</h4>
                  <p className="text-xs md:text-sm font-bold text-[#001220]">{product.measures}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-stone-50 flex items-center justify-center rounded-lg border border-stone-100">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#9b7135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656l-1.172 1.172" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[8px] md:text-[10px] font-black text-stone-400 uppercase tracking-widest">Acabamento</h4>
                  <p className="text-xs md:text-sm font-bold text-[#001220]">{product.fabric}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 space-y-4">
            <div className="bg-stone-50 p-6 md:p-8 rounded-3xl border border-gold/20 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                <svg className="w-16 h-16 md:w-24 md:h-24 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="block text-[9px] md:text-[11px] text-gold uppercase tracking-[0.4em] font-black mb-3">Condição Exclusiva de Campanha</span>
              
              <div className="flex flex-col mb-4">
                {product.originalPriceInstallment && (
                  <span className="text-stone-500 text-sm md:text-base line-through font-bold opacity-80 mb-1">
                    De: {product.originalPriceInstallment}
                  </span>
                )}
                <div className="flex items-baseline gap-2 md:gap-3">
                  <span className="text-3xl md:text-6xl font-black text-stone-900 tracking-tighter drop-shadow-sm">
                    {product.priceInstallment}
                  </span>
                  <span className="text-stone-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">/ mensal</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-3 md:w-4 bg-stone-300"></div>
                <span className="text-[8px] md:text-[10px] text-stone-400 font-bold uppercase tracking-widest">Total à vista: {product.priceTotal}</span>
              </div>

              <button className="w-full bg-gold text-white py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] hover:bg-stone-900 transition-all shadow-xl flex items-center justify-center gap-3">
                Garantir esta Oferta
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <p className="text-center text-[8px] md:text-[10px] text-stone-400 uppercase tracking-widest font-bold">
              *Oferta válida enquanto durarem os estoques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;