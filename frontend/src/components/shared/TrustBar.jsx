import { Award, Clock, Shield, MapPin, FileCheck } from 'lucide-react';
import { TRUST_INDICATORS } from '../../data/business';

const iconMap = {
  Award,
  Clock,
  Shield,
  MapPin,
  FileCheck
};

export const TrustBar = () => {
  return (
    <div 
      className="bg-muted/30 border-y border-border py-8 lg:py-10"
      data-testid="trust-bar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {TRUST_INDICATORS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={index}
                className="flex items-start gap-4 group"
                data-testid={`trust-item-${index}`}
              >
                <div className="w-12 h-12 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-maroon/20 group-hover:border-brand-maroon/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-brand-maroon" />
                </div>
                <div>
                  <span className="font-heading text-base font-semibold text-foreground block">
                    {item.text}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5 block">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
