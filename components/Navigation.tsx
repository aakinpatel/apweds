
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Guest Lens', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Live', href: '#live' },
    { name: 'Travel', href: '#travel' },
    { name: 'Q&A', href: '#qa' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Remove the '#' to find by ID
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Fixed header height offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
        >
          {/* Mini Editorial Logo (Matching Footer Style) */}
          <div className="relative flex items-center justify-center p-2">
            
            {/* Subtle Rotating Ring */}
            <div className={`absolute inset-0 border rounded-full animate-[spin_12s_linear_infinite] transition-colors duration-300 ${isScrolled ? 'border-wedding-800/20' : 'border-wedding-100/20'}`}></div>
            
            {/* Typography */}
            <div className="flex items-baseline gap-1 relative z-10 px-1">
              <span 
                className={`font-serif text-2xl md:text-3xl leading-none transition-colors duration-300 ${isScrolled ? 'text-wedding-800' : 'text-wedding-100'}`} 
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}
              >
                A
              </span>

              <span 
                className={`font-serif text-sm md:text-base italic relative -top-0.5 transition-colors duration-300 ${isScrolled ? 'text-wedding-600' : 'text-wedding-300'}`} 
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                &
              </span>

              <span 
                className={`font-serif text-2xl md:text-3xl leading-none transition-colors duration-300 ${isScrolled ? 'text-wedding-800' : 'text-wedding-100'}`} 
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}
              >
                P
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs lg:text-sm uppercase tracking-widest hover:text-wedding-500 transition-colors ${
                isScrolled ? 'text-wedding-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-wedding-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-wedding-800' : 'text-wedding-800 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-wedding-50 shadow-lg py-6 flex flex-col items-center space-y-6 border-t border-wedding-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-wedding-800 text-lg font-serif"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
