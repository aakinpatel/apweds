
import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { X, Mail } from 'lucide-react';

// Ultra-Premium Tochmoc Logo
// Design: "Architectural T" - Symbolizing Foundation, Stability, and Modern Design.
// Constructed of two distinct blocks (Lintel & Post) with negative space.
const TochmocLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="inline-flex flex-col items-center gap-3 group cursor-pointer transition-all duration-700 select-none focus:outline-none"
    title="Contact Tochmoc"
    aria-label="Designed by Tochmoc"
  >
    {/* Icon Container - Architectural T */}
    <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
        {/* Solid Square Frame for Stability */}
        <div className="absolute inset-0 border border-wedding-300/40 group-hover:border-wedding-200 transition-colors duration-500"></div>
        
        {/* The Mark: Architectural T */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-wedding-300 group-hover:text-wedding-100 transition-colors duration-500">
           {/* Top Slab (Lintel) */}
           <rect x="2" y="5" width="20" height="4" />
           {/* Vertical Column (Foundation) */}
           <rect x="10" y="11" width="4" height="11" />
        </svg>
    </div>

    {/* Typography */}
    <div className="flex flex-col items-center">
      <span className="font-serif text-wedding-300 tracking-[0.3em] text-[8px] font-semibold opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:text-wedding-100">
        TOCHMOC
      </span>
    </div>
  </button>
);

// Premium Monogram for Aakin & Palak (Matching Navigation Style)
const APLogo: React.FC = () => (
  <div className="flex justify-center items-center mb-12">
    {/* Scaled up version of the Navigation Logo */}
    <div className="relative flex items-center justify-center p-4">
      
      {/* Typography */}
      <div className="flex items-center gap-3 relative z-10">
        <span 
          className="font-display text-7xl md:text-8xl leading-none text-wedding-100 tracking-wide" 
        >
          A
        </span>

        <span 
          className="font-display text-3xl md:text-4xl relative top-1 text-wedding-300" 
        >
          &
        </span>

        <span 
          className="font-display text-7xl md:text-8xl leading-none text-wedding-100 tracking-wide" 
        >
          P
        </span>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-wedding-900 text-wedding-200 py-16 text-center border-t border-wedding-800/30 relative z-10 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pattern-overlay pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal animation="fade-up">
            
            <APLogo />
            
            <p className="uppercase tracking-[0.2em] text-xs mb-6 opacity-60 text-wedding-300">{WEDDING_DETAILS.date}</p>
            
            <p className="font-serif italic text-lg md:text-xl mb-12 max-w-md mx-auto text-wedding-100/80 leading-relaxed">
              "Every love story is beautiful, but ours is my favorite."
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6 pt-10 border-t border-wedding-800/50 w-full max-w-xs mx-auto">
              <p className="text-[9px] opacity-40 uppercase tracking-widest">
                &copy; 2022 Aakin & Palak
              </p>
              
              <div className="flex items-center gap-3 transition-colors duration-500">
                <span className="text-wedding-400 text-[10px] uppercase tracking-widest opacity-60">DESIGNED BY</span>
                <TochmocLogo onClick={() => setIsModalOpen(true)} />
              </div>
            </div>

          </ScrollReveal>
        </div>
      </footer>

      {/* Tochmoc Interactive Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in" 
                onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-wedding-50 rounded-sm shadow-2xl w-full max-w-sm text-center animate-fade-in-up border border-wedding-200 overflow-hidden">
                
                {/* Luxury Border Decoration */}
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-wedding-200 pointer-events-none opacity-50"></div>
                
                {/* Close Button */}
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 z-20 p-2 text-wedding-400 hover:text-wedding-800 hover:bg-wedding-100 rounded-full transition-all"
                >
                    <X size={20} />
                </button>

                {/* Modal Content */}
                <div className="px-10 py-12 relative z-10">
                    <div className="flex justify-center mb-8 text-wedding-400">
                        {/* Large Architectural Mark */}
                        <div className="relative w-24 h-24 flex items-center justify-center">
                            <div className="absolute inset-0 border border-wedding-800/20"></div>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" className="text-wedding-800">
                                <rect x="2" y="5" width="20" height="4" />
                                <rect x="10" y="11" width="4" height="11" />
                            </svg>
                        </div>
                    </div>
                    
                    <h3 className="font-serif text-3xl text-wedding-900 tracking-[0.2em] mb-10 font-bold">TOCHMOC</h3>

                    <div className="space-y-4">
                        <a 
                          href="mailto:tochmoc@gmail.com" 
                          className="flex items-center p-4 bg-white border border-wedding-100 hover:border-wedding-400 shadow-sm hover:shadow-md transition-all duration-500 group"
                        >
                            <div className="w-8 h-8 flex items-center justify-center text-wedding-400 group-hover:text-wedding-600 transition-all">
                                <Mail size={16} />
                            </div>
                            <div className="ml-4 text-left flex-1">
                                <span className="block text-[9px] uppercase tracking-widest text-wedding-400">Inquiries</span>
                                <span className="text-wedding-800 text-sm font-serif italic">tochmoc@gmail.com</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="bg-wedding-100/50 p-4 border-t border-wedding-200">
                    <p className="text-wedding-500 text-[10px] uppercase tracking-widest font-semibold">
                        Est. 2023
                    </p>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Footer;
