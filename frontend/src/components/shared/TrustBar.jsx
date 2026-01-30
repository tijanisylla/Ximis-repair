import { Award, Clock, DollarSign, MapPin } from 'lucide-react';
import { TRUST_INDICATORS } from '../../data/business';

const iconMap = {
  Award,
  Clock,
  DollarSign,
  MapPin
};

export const TrustBar = () => {
  return (
    <div 
      className="bg-slate-900/50 border-y border-white/10 py-6"
      data-testid="trust-bar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {TRUST_INDICATORS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={index}
                className="flex items-center gap-3 group"
                data-testid={`trust-item-${index}`}
              >
                <div className="w-10 h-10 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/20 transition-colors">
                  <Icon className="w-5 h-5 text-neon-blue" />
                </div>
                <span className="font-heading text-sm md:text-base tracking-wider uppercase text-slate-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
