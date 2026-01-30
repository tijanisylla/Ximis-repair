import { Phone } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button } from '../ui/button';
import { BUSINESS } from '../../data/business';

export const ServiceCard = ({ service, variant = 'default' }) => {
  const IconComponent = Icons[service.icon] || Icons.Wrench;
  
  return (
    <div 
      className={`group relative bg-slate-900/50 border border-white/10 p-6 transition-all duration-300 hover:border-neon-blue hover:shadow-neon ${
        variant === 'compact' ? 'p-4' : 'p-6'
      }`}
      data-testid={`service-card-${service.id}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
        <IconComponent className="w-6 h-6 text-neon-blue" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg font-bold tracking-wide text-white mb-2">
        {service.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* CTA */}
      {variant !== 'compact' && (
        <a href={BUSINESS.phoneLink}>
          <Button 
            variant="outline" 
            className="w-full border-white/20 text-slate-300 hover:bg-neon-blue hover:text-white hover:border-neon-blue font-heading tracking-wider text-xs uppercase transition-all"
            data-testid={`service-cta-${service.id}`}
          >
            <Phone className="w-3 h-3 mr-2" />
            Call to Confirm Pricing
          </Button>
        </a>
      )}

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300" />
    </div>
  );
};
