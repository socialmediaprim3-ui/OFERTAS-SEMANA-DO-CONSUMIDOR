
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-prime-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between gap-8">
        {/* Brand Logo Image */}
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/efihvgg.png" 
            alt="Prime Home Decor" 
            className="h-20 md:h-28 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </div>
        
        {/* Search Bar */}
        <div className="flex-grow max-w-xl hidden md:block">
          <div className="bg-[#9b7135] rounded-lg h-10 flex items-center px-6 relative group cursor-pointer transition-all hover:brightness-110 shadow-inner">
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">O QUE DESEJA PROCURAR?</span>
            <div className="absolute right-4 text-white">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold text-white/90 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-[#9b7135] transition-colors border-b border-transparent hover:border-[#9b7135] pb-1">Início</a>
          <a href="#catalog" className="hover:text-[#9b7135] transition-colors border-b border-transparent hover:border-[#9b7135] pb-1">Coleção</a>
        </nav>

        <button className="lg:hidden p-2 text-[#9b7135]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
