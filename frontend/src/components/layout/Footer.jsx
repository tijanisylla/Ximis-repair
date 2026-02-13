import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, ArrowUpRight } from 'lucide-react';
import { BUSINESS, IMAGES } from '../../data/business';
import Logo from '@/assets/ximis_no-bg-LOGO.png';

// Branded logo image component
const CarLogo = ({ className = "" }) => (
  <img
    src={Logo}
    className={className}
    alt="XIMI'S Auto Repair logo"
    loading="lazy"
  />
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-background border-t border-border"
      data-testid="footer"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{
          backgroundImage: `url(${IMAGES.chicagoSkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <CarLogo className="w-[100px] h-auto object-contain" />
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">XIMI'S</h3>
                  <p className="text-[10px] text-brand-gold tracking-[0.3em] uppercase font-medium">Auto Repair</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chicago's trusted destination for professional auto repair and premium car wash services since day one.
              </p>
              <a 
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-gold transition-colors group"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@ximis_auto_repair</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-semibold tracking-wide text-foreground">Contact</h4>
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
                    <p className="text-foreground font-medium group-hover:text-brand-gold transition-colors">{BUSINESS.phone}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Available 24/7</p>
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
                    <p className="text-foreground font-medium group-hover:text-brand-gold transition-colors">{BUSINESS.address.street}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-maroon/10 border border-brand-maroon/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-maroon" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Open {BUSINESS.hours}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-semibold tracking-wide text-foreground">Services</h4>
              <ul className="space-y-3">
                {['Diagnostics', 'Brake Service', 'Oil Change', 'Engine Repair', 'Car Wash', 'Full Detailing'].map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-muted-foreground hover:text-brand-gold transition-colors text-sm inline-flex items-center gap-1 group"
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
              <h4 className="font-heading text-lg font-semibold tracking-wide text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'All Services' },
                  { to: '/specials', label: 'Current Specials' },
                  { to: '/book', label: 'Book Appointment' },
                  { to: '/contact', label: 'Contact & Location' },
                  { to: '/admin', label: 'Admin' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="text-muted-foreground hover:text-brand-gold transition-colors text-sm inline-flex items-center gap-1 group"
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
                    className="text-muted-foreground hover:text-brand-gold transition-colors text-sm inline-flex items-center gap-2 group"
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
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground/60 text-sm">
                &copy; {currentYear} {BUSINESS.name}. All rights reserved.
              </p>
              <p className="text-muted-foreground/60 text-sm text-center md:text-right">
                {BUSINESS.address.full} <span className="text-brand-maroon mx-2">|</span> {BUSINESS.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
