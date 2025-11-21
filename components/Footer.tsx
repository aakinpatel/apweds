import React from 'react';
import { WEDDING_DETAILS } from '../constants';
import ScrollReveal from './ScrollReveal';

const TochmocLogo: React.FC = () => (
  <div className="inline-flex items-center gap-2 group cursor-pointer transition-all duration-500 select-none">
    <svg width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 group-hover:opacity-100 transition-all duration-500">
      {/* Minimalist Geometric Logo */}
      <rect x="10" y="10" width="80" height="80" rx="20" stroke="currentColor" strokeWidth="4" className="text-wedding-300" />
      <path d="M35 35 H65" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className="text-wedding-200" />
      <path d="M50 35 V65" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className="text-wedding-200" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" className="text-wedding-400 opacity-50" />
    </svg>
    <span className="font-serif text-wedding-200 tracking-[0.3em] text-[10px] font-bold opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:text-wedding-100 group-hover:tracking-[0.35em]">
      TOCHMOC
    </span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-wedding-900 text-wedding-200 py-12 text-center border-t border-wedding-800/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <h2 className="font-serif text-3xl mb-4 text-white tracking-wide">Aakin & Palak</h2>
          <p className="uppercase tracking-widest text-xs mb-8 opacity-60">{WEDDING_DETAILS.date}</p>
          <p className="font-serif italic text-lg mb-10 max-w-md mx-auto text-wedding-100/80">
            "We are so excited to celebrate this special day with our favorite people."
          </p>
          
          <div className="flex flex-col items-center justify-center gap-3 pt-8 border-t border-wedding-800/50">
            <p className="text-[10px] opacity-30 uppercase tracking-widest">
              &copy; 2024 Aakin & Palak Wedding
            </p>
            <div className="flex items-center gap-3 mt-1">
              <span className="font-serif italic text-wedding-400 text-xs opacity-70">Designed by</span>
              <TochmocLogo />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
