import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';
import LogoImg from '@/assets/ximis_no-bg-LOGO.png';
import { useTheme } from '../ThemeProvider';
import { BUSINESS } from '../../data/business';

// Actual logo image – same max size as original SVG so navbar doesn't change
const CarLogo = ({ className = "" }) => (
  <img
    src={LogoImg}
    alt="XIMI'S Auto Repair"
    className={className}
    loading="eager"
  />
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
              <div className="relative h-12 w-16 flex items-center shrink-0">
                <CarLogo className="max-h-100 w-auto object-contain object-left" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-bold tracking-tight text-foreground leading-none">
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
                      : 'text-foreground/80 hover:text-foreground'
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

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 border border-border hover:border-brand-maroon rounded-none transition-all duration-300 hover:bg-brand-maroon/10"
                aria-label="Toggle theme"
                data-testid="theme-toggle"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-brand-gold" />
                ) : (
                  <Moon className="w-5 h-5 text-brand-maroon" />
                )}
              </button>

              <a href={BUSINESS.phoneLink} data-testid="navbar-call-btn">
                <Button 
                  className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-6 py-5 transition-all duration-300 btn-premium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {BUSINESS.phone}
                </Button>
              </a>
            </div>

            {/* Mobile: Theme Toggle & Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 border border-border hover:border-brand-maroon transition-colors"
                aria-label="Toggle theme"
                data-testid="mobile-theme-toggle"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-brand-gold" />
                ) : (
                  <Moon className="w-5 h-5 text-brand-maroon" />
                )}
              </button>
              <button
                className="p-2 text-foreground hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                data-testid="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-t border-border transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          data-testid="mobile-menu"
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-lg font-medium tracking-wide transition-colors border-b border-border/50 ${
                  isActive(link.path)
                    ? 'text-brand-gold'
                    : 'text-foreground/80 hover:text-foreground'
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
