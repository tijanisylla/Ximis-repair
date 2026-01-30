import { Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';

export const StickyCallButton = () => {
  return (
    <a
      href={BUSINESS.phoneLink}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-neon-blue text-white rounded-full shadow-neon animate-pulse-glow transition-transform hover:scale-110 active:scale-95"
      aria-label="Call Now"
      data-testid="sticky-call-button"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};
