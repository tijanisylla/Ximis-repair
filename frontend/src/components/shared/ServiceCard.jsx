import { Phone } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button } from '../ui/button';
import { BUSINESS } from '../../data/business';

export const ServiceCard = ({ service, variant = 'default' }) => {
  const IconComponent = Icons[service.icon] || Icons.Wrench;
  
  return (
    <div 
      className={`group relative bg-card border border-border transition-all duration-500 card-hover ${
        variant === 'compact' ? 'p-5' : 'p-6 lg:p-8'
      }`}
      data-testid={`service-card-${service.id}`}
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-brand-maroon to-transparent transform rotate-45 origin-right translate-y-6 -translate-x-2" />
      </div>

      {/* Icon */}
      <div className="w-14 h-14 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center mb-5 group-hover:bg-brand-maroon/20 group-hover:border-brand-maroon/40 transition-all duration-300">
        <IconComponent className="w-6 h-6 text-brand-maroon group-hover:scale-110 transition-transform" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-semibold tracking-wide text-foreground mb-3">
        {service.name}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* CTA */}
      {variant !== 'compact' && (
        <a href={BUSINESS.phoneLink}>
          <Button 
            variant="outline" 
            className="w-full border-border text-muted-foreground hover:bg-brand-maroon hover:text-white hover:border-brand-maroon font-medium text-xs tracking-wide transition-all duration-300"
            data-testid={`service-cta-${service.id}`}
          >
            <Phone className="w-3 h-3 mr-2" />
            Call for Pricing
          </Button>
        </a>
      )}

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-maroon to-brand-gold group-hover:w-full transition-all duration-500" />
    </div>
  );
};
