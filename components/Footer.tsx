
import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { X, Mail, Phone } from 'lucide-react';

// Ultra-Premium Tochmoc Logo
// Design: "North Star" Spark inside a Diamond Frame - Symbolizing brilliance and guidance.
const TochmocLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="inline-flex flex-col items-center gap-2 group cursor-pointer transition-all duration-700 select-none focus:outline-none"
    title="Contact Tochmoc"
    aria-label="Designed by Tochmoc"
  >
    {/* Icon Container */}
    <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-45">
        {/* Thin Diamond Frame */}
        <div className="absolute inset-0 border-[0.5px] border-wedding-300 rotate-45 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Central Spark/Star */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wedding-200 group-hover:text-wedding-50 transition-colors duration-500">
           <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" stroke="none"/>
        </svg>
    </div>

    {/* Typography */}
    <div className="flex flex-col items-center">
      <span className="font-serif text-wedding-200 tracking-[0.4em] text-[9px] font-medium opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:text-wedding-50">
        TOCHMOC
      </span>
    </div>
  </button>
);

// Premium Monogram for Aakin & Palak
const APLogo: React.FC = () => (
  <div className="flex justify-center items-center mb-12">
    <div className="relative group select-none">
      
      {/* Decorative Outer Ring with elegant styling */}
      <div className="w-44 h-44 rounded-full border-[1px] border-wedding-400/30 flex items-center justify-center relative transition-all duration-1000 group-hover:border-wedding-300/50 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]">
         {/* Inner thin ring */}
         <div className="w-36 h-36 rounded-full border-[0.5px] border-wedding-200/20"></div>
         
         {/* Decorative cardinal points */}
         <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-wedding-300 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
         <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-wedding-300 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
         <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-wedding-300 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
         <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-wedding-300 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
      </div>

      {/* Monogram Text Layered */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* A */}
        <span className="font-serif text-7xl text-transparent bg-clip-text bg-gradient-to-br from-wedding-50 via-wedding-100 to-wedding-400 italic transform -translate-x-3 translate-y-1 drop-shadow-sm z-10" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            A
        </span>
        
        {/* Connecting & */}
        <span className="font-serif text-2xl text-wedding-500/70 italic absolute z-20 mt-3 font-light">
           &
        </span>
        
        {/* P */}
        <span className="font-serif text-7xl text-transparent bg-clip-text bg-gradient-to-bl from-wedding-50 via-wedding-100 to-wedding-400 italic transform translate-x-3 translate-y-1 drop-shadow-sm z-10" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            P
        </span>
      </div>
      
      {/* Subtle glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 bg-wedding-300/10 blur-2xl rounded-full"></div>
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
                &copy; 2026 Aakin & Palak
              </p>
              
              <div className="flex flex-col items-center gap-2 transition-colors duration-500">
                <span className="font-serif italic text-wedding-400 text-xs opacity-50">Digital Experience By</span>
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
                        {/* Large Logo Version */}
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <div className="absolute inset-0 border border-wedding-300 rotate-45 opacity-100"></div>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wedding-600">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" stroke="none"/>
                            </svg>
                        </div>
                    </div>
                    
                    <h3 className="font-serif text-4xl text-wedding-900 tracking-[0.2em] mb-2">TOCHMOC</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-wedding-500 mb-10">Bespoke Digital Design</p>

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
                        
                        <a 
                          href="tel:+16066271501" 
                          className="flex items-center p-4 bg-white border border-wedding-100 hover:border-wedding-400 shadow-sm hover:shadow-md transition-all duration-500 group"
                        >
                            <div className="w-8 h-8 flex items-center justify-center text-wedding-400 group-hover:text-wedding-600 transition-all">
                                <Phone size={16} />
                            </div>
                            <div className="ml-4 text-left flex-1">
                                <span className="block text-[9px] uppercase tracking-widest text-wedding-400">Direct Line</span>
                                <span className="text-wedding-800 text-sm font-serif italic">+1 (606) 627-1501</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="bg-wedding-100/50 p-4 border-t border-wedding-200">
                    <p className="text-wedding-500 text-[10px] uppercase tracking-widest">
                        Est. 2025 • Excellence in Code
                    </p>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Footer;
