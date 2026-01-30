import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Wrench, ExternalLink } from 'lucide-react';
import { BUSINESS, IMAGES } from '../../data/business';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-midnight border-t border-white/10"
      data-testid="footer"
    >
      {/* Chicago Skyline Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${IMAGES.chicagoSkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neon-blue flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-white">XIMI'S</h3>
                  <p className="text-xs text-slate-400 tracking-widest uppercase">Auto Repair</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Chicago's trusted auto repair and car wash destination. Professional service, honest pricing, 24/7 availability.
              </p>
              <a 
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@ximis_auto_repair</span>
              </a>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white">Contact</h4>
              <div className="space-y-4">
                <a 
                  href={BUSINESS.phoneLink}
                  className="flex items-start gap-3 text-slate-400 hover:text-neon-blue transition-colors group"
                  data-testid="footer-phone"
                >
                  <Phone className="w-5 h-5 mt-0.5 group-hover:text-neon-blue" />
                  <div>
                    <p className="text-white font-medium">{BUSINESS.phone}</p>
                    <p className="text-sm">Call Anytime</p>
                  </div>
                </a>
                <a 
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-neon-blue transition-colors group"
                  data-testid="footer-address"
                >
                  <MapPin className="w-5 h-5 mt-0.5 group-hover:text-neon-blue" />
                  <div>
                    <p className="text-white font-medium">{BUSINESS.address.street}</p>
                    <p className="text-sm">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <Clock className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Open {BUSINESS.hours}</p>
                    <p className="text-sm">Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white">Services</h4>
              <ul className="space-y-3">
                {['Diagnostics', 'Brake Service', 'Oil Change', 'Engine Repair', 'Car Wash', 'Detailing'].map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-slate-400 hover:text-neon-blue transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-6">
              <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-neon-blue transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-neon-blue transition-colors text-sm">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link to="/specials" className="text-slate-400 hover:text-neon-blue transition-colors text-sm">
                    Specials & Offers
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="text-slate-400 hover:text-neon-blue transition-colors text-sm">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-neon-blue transition-colors text-sm">
                    Contact & Location
                  </Link>
                </li>
                <li>
                  <a 
                    href={BUSINESS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-neon-blue transition-colors text-sm inline-flex items-center gap-1"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                &copy; {currentYear} {BUSINESS.name}. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                {BUSINESS.address.full} | {BUSINESS.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
