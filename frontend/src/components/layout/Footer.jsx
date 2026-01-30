import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, ArrowUpRight } from 'lucide-react';
import { BUSINESS, IMAGES } from '../../data/business';

// Car silhouette SVG component
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

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-brand-dark border-t border-white/5"
      data-testid="footer"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${IMAGES.chicagoSkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/98 to-brand-dark" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <CarLogo className="w-20 h-14 text-brand-maroon" />
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-brand-cream">XIMI'S</h3>
                  <p className="text-[10px] text-brand-gold tracking-[0.3em] uppercase font-medium">Auto Repair</p>
                </div>
              </div>
              <p className="text-brand-cream/60 text-sm leading-relaxed">
                Chicago's trusted destination for professional auto repair and premium car wash services since day one.
              </p>
              <a 
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-cream/60 hover:text-brand-gold transition-colors group"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@ximis_auto_repair</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-semibold tracking-wide text-brand-cream">Contact</h4>
              <div className="space-y-5">
                <a 
                  href={BUSINESS.phoneLink}
                  className="flex items-start gap-4 group"
                  data-testid="footer-phone"
                >
                  <div className="w-10 h-10 bg-brand-maroon/10 border border-brand-maroon/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-maroon/20 transition-colors">
                    <Phone className="w-4 h-4 text-brand-maroon" />
                  </div>
                  <div>
                    <p className="text-brand-cream font-medium group-hover:text-brand-gold transition-colors">{BUSINESS.phone}</p>
                    <p className="text-brand-cream/50 text-xs mt-0.5">Available 24/7</p>
                  </div>
                </a>
                <a 
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  data-testid="footer-address"
                >
                  <div className="w-10 h-10 bg-brand-maroon/10 border border-brand-maroon/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-maroon/20 transition-colors">
                    <MapPin className="w-4 h-4 text-brand-maroon" />
                  </div>
                  <div>
                    <p className="text-brand-cream font-medium group-hover:text-brand-gold transition-colors">{BUSINESS.address.street}</p>
                    <p className="text-brand-cream/50 text-xs mt-0.5">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-maroon/10 border border-brand-maroon/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-maroon" />
                  </div>
                  <div>
                    <p className="text-brand-cream font-medium">Open {BUSINESS.hours}</p>
                    <p className="text-brand-cream/50 text-xs mt-0.5">Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-semibold tracking-wide text-brand-cream">Services</h4>
              <ul className="space-y-3">
                {['Diagnostics', 'Brake Service', 'Oil Change', 'Engine Repair', 'Car Wash', 'Full Detailing'].map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      <span className="w-1 h-1 bg-brand-maroon rounded-full group-hover:w-2 transition-all" />
                      <span className="ml-2">{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-semibold tracking-wide text-brand-cream">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'All Services' },
                  { to: '/specials', label: 'Current Specials' },
                  { to: '/book', label: 'Book Appointment' },
                  { to: '/contact', label: 'Contact & Location' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      <span className="w-1 h-1 bg-brand-maroon rounded-full group-hover:w-2 transition-all" />
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <a 
                    href={BUSINESS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-maroon rounded-full group-hover:w-2 transition-all" />
                    <span className="ml-2">Get Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-brand-cream/40 text-sm">
                &copy; {currentYear} {BUSINESS.name}. All rights reserved.
              </p>
              <p className="text-brand-cream/40 text-sm text-center md:text-right">
                {BUSINESS.address.full} <span className="text-brand-maroon mx-2">|</span> {BUSINESS.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
