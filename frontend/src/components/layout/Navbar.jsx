import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { Button } from '../ui/button';
import { BUSINESS } from '../../data/business';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/specials', label: 'Specials' },
    { path: '/book', label: 'Book Now' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      data-testid="navbar"
    >
      {/* Promo Banner */}
      <div className="bg-neon-red text-white text-center py-2 px-4">
        <p className="text-sm font-medium tracking-wide">
          LIMITED TIME: <span className="font-bold">{BUSINESS.promo}</span> All Services | Call Now: 
          <a 
            href={BUSINESS.phoneLink} 
            className="underline ml-1 hover:text-white/80 transition-colors"
            data-testid="promo-phone-link"
          >
            {BUSINESS.phone}
          </a>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            data-testid="navbar-logo"
          >
            <div className="w-10 h-10 bg-neon-blue flex items-center justify-center group-hover:shadow-neon transition-shadow">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg md:text-xl font-bold tracking-tight text-white leading-none">
                XIMI'S
              </h1>
              <p className="text-xs text-slate-400 tracking-widest uppercase">Auto Repair</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-sm tracking-wider uppercase transition-colors ${
                  isActive(link.path)
                    ? 'text-neon-blue'
                    : 'text-slate-300 hover:text-white'
                }`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={BUSINESS.phoneLink} data-testid="navbar-call-btn">
              <Button 
                className="bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-6 transition-all hover:shadow-neon"
              >
                <Phone className="w-4 h-4 mr-2" />
                {BUSINESS.phone}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden bg-midnight border-t border-white/10"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-heading text-lg tracking-wider uppercase py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-neon-blue'
                    : 'text-slate-300'
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
              <Button className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase">
                <Phone className="w-4 h-4 mr-2" />
                Call {BUSINESS.phone}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
