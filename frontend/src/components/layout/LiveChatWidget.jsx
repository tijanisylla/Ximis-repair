import { useState } from 'react';
import { MessageCircle, X, Phone, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { BUSINESS } from '../../data/business';

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block" data-testid="live-chat-widget">
      {/* Chat Window */}
      <div 
        className={`absolute bottom-16 left-0 w-80 bg-brand-charcoal border border-white/10 shadow-premium transition-all duration-300 origin-bottom-left ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
        data-testid="chat-window"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-brand-maroon">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-white">XIMI'S Support</h4>
              <p className="text-xs text-white/70">We reply instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div className="bg-brand-dark/50 p-4 border-l-2 border-brand-maroon">
            <p className="text-brand-cream/80 text-sm leading-relaxed">
              Hi! Thanks for reaching out. For the fastest response, give us a call - we're available 24/7.
            </p>
          </div>
          <p className="text-brand-cream/50 text-xs">
            Our team is ready to assist with any auto repair or car wash questions.
          </p>
          <a href={BUSINESS.phoneLink} className="block">
            <Button className="w-full bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium">
              <Phone className="w-4 h-4 mr-2" />
              Call {BUSINESS.phone}
            </Button>
          </a>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-brand-dark/50">
          <div className="flex items-center gap-2 bg-brand-dark border border-white/10 px-3 py-2">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent text-sm text-brand-cream placeholder:text-brand-cream/30 outline-none"
              disabled
            />
            <Send className="w-4 h-4 text-brand-cream/30" />
          </div>
          <p className="text-center text-[10px] text-brand-cream/30 mt-2">
            Live chat coming soon
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-brand-charcoal text-brand-cream border border-white/10' 
            : 'bg-brand-maroon text-white shadow-maroon hover:bg-brand-maroon-light'
        }`}
        aria-label="Toggle chat"
        data-testid="chat-toggle"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
