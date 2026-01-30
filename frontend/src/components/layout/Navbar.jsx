import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { BUSINESS } from '../../data/business';

// Car silhouette SVG component matching the logo
const CarLogo = ({ className = "" }) => (
  <svg viewBox="0 0 120 40" className={className} fill="currentColor">
    <path d="M10,30 Q5,30 5,25 L5,22 Q5,20 8,18 L25,15 Q35,12 50,12 L80,12 Q95,12 105,18 L112,22 Q115,24 115,26 L115,30 Q115,32 110,32 L100,32 Q98,32 96,30 Q94,28 90,28 Q86,28 84,30 Q82,32 80,32 L40,32 Q38,32 36,30 Q34,28 30,28 Q26,28 24,30 Q22,32 20,32 L10,32 Q5,32 5,30 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"/>
    <circle cx="30" cy="30" r="6" fill="currentColor" opacity="0.3"/>
    <circle cx="90" cy="30" r="6" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/specials', label: 'Specials' },
    { path: '/book', label: 'Book Now' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-maroon text-white py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="font-medium tracking-wide">{BUSINESS.promo} All Services</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">Open {BUSINESS.hours}</span>
          <span className="text-white/40">|</span>
          <a 
            href={BUSINESS.phoneLink} 
            className="font-semibold hover:text-brand-gold transition-colors"
            data-testid="promo-phone-link"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`fixed top-[42px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
              data-testid="navbar-logo"
            >
              <div className="relative">
                <CarLogo className="w-16 h-12 text-brand-maroon group-hover:text-brand-gold transition-colors duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-bold tracking-tight text-brand-cream leading-none">
                  XIMI'S
                </h1>
                <p className="text-[10px] text-brand-gold tracking-[0.3em] uppercase font-medium">Auto Repair</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors group ${
                    isActive(link.path)
                      ? 'text-brand-gold'
                      : 'text-brand-cream/80 hover:text-brand-cream'
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-maroon transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={BUSINESS.phoneLink} data-testid="navbar-call-btn">
                <Button 
                  className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-6 py-5 transition-all duration-300 btn-premium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {BUSINESS.phone}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-brand-cream hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          data-testid="mobile-menu"
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-lg font-medium tracking-wide transition-colors border-b border-white/5 ${
                  isActive(link.path)
                    ? 'text-brand-gold'
                    : 'text-brand-cream/80 hover:text-brand-cream'
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={BUSINESS.phoneLink} 
              className="block pt-4"
              data-testid="mobile-call-btn"
            >
              <Button className="w-full bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide py-5">
                <Phone className="w-4 h-4 mr-2" />
                Call {BUSINESS.phone}
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
