import { Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';

export const StickyCallButton = () => {
  return (
    <a
      href={BUSINESS.phoneLink}
      className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 bg-brand-maroon text-white shadow-maroon transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Call Now"
      data-testid="sticky-call-button"
    >
      <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full animate-pulse" />
    </a>
  );
};
