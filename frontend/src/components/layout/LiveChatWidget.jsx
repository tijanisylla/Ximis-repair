import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { BUSINESS } from '../../data/business';

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block" data-testid="live-chat-widget">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="absolute bottom-16 left-0 w-80 bg-slate-900 border border-white/10 shadow-2xl animate-fade-up"
          data-testid="chat-window"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neon-blue">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-white tracking-wide">XIMI'S Support</h4>
                <p className="text-xs text-white/80">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <div className="bg-slate-800 p-4 border-l-2 border-neon-blue">
              <p className="text-slate-300 text-sm">
                Hi there! Thanks for reaching out. For the fastest response, give us a call.
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              Our team is available 24/7 to assist with any questions about our auto repair or car wash services.
            </p>
            <a href={BUSINESS.phoneLink} className="block">
              <Button className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider">
                <Phone className="w-4 h-4 mr-2" />
                Call {BUSINESS.phone}
              </Button>
            </a>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-slate-950">
            <p className="text-center text-xs text-slate-500">
              Live chat coming soon
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 flex items-center justify-center transition-all ${
          isOpen 
            ? 'bg-slate-700 text-white' 
            : 'bg-neon-blue text-white shadow-neon hover:shadow-lg'
        }`}
        aria-label="Toggle chat"
        data-testid="chat-toggle"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
