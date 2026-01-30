import { Link } from 'react-router-dom';
import { Phone, Calendar, Tag, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BUSINESS, SPECIALS } from '../data/business';

const Specials = () => {
  return (
    <div className="min-h-screen bg-midnight pt-32 md:pt-40" data-testid="specials-page">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <span className="text-neon-red font-heading text-sm tracking-widest uppercase mb-2 block">Limited Time</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
          Special <span className="text-neon-red">Offers</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Save big on auto repair and car wash services. Check out our current promotions below.
        </p>
      </section>

      {/* Featured Promo */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20" data-testid="featured-promo">
        <div className="relative bg-gradient-to-br from-neon-red/20 to-transparent border border-neon-red/30 p-8 md:p-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-red/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-red/10 blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-neon-red/20 border border-neon-red/50 px-4 py-2 mb-6">
                <Tag className="w-4 h-4 text-neon-red" />
                <span className="font-heading text-sm tracking-widest uppercase text-neon-red">Featured Offer</span>
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                {BUSINESS.promo}
              </h2>
              <p className="font-heading text-xl tracking-wider uppercase text-slate-300 mb-6">
                All Services
              </p>
              <p className="text-slate-400 mb-6">
                New customers get 20% off their first service. Valid on all auto repair and car wash services. Cannot be combined with other offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneLink}>
                  <Button size="lg" className="w-full sm:w-auto bg-neon-red hover:bg-neon-red/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]">
                    <Phone className="w-5 h-5 mr-2" />
                    Claim Offer
                  </Button>
                </a>
                <Link to="/book">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-slate-300 hover:bg-white/10 font-heading tracking-wider uppercase transition-all">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-900 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-heading text-8xl md:text-9xl font-bold text-neon-red">20%</span>
                    <p className="font-heading text-2xl tracking-widest uppercase text-white mt-2">OFF</p>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neon-red" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-neon-red" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neon-red" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neon-red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Specials */}
      <section className="py-20 md:py-32 bg-slate-900/30" data-testid="other-specials">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-12 text-center">
            More Offers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALS.map((special) => (
              <div 
                key={special.id}
                className={`bg-slate-900/50 border p-6 ${
                  special.active 
                    ? 'border-white/10 hover:border-neon-blue transition-colors' 
                    : 'border-white/5 opacity-60'
                }`}
                data-testid={`special-card-${special.id}`}
              >
                {/* Status Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 ${
                  special.active 
                    ? 'bg-green-500/20 border border-green-500/50' 
                    : 'bg-slate-700/50 border border-slate-600'
                }`}>
                  {special.active ? (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  ) : (
                    <Clock className="w-3 h-3 text-slate-400" />
                  )}
                  <span className={`text-xs tracking-widest uppercase ${
                    special.active ? 'text-green-500' : 'text-slate-400'
                  }`}>
                    {special.active ? 'Active' : 'Coming Soon'}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-3xl font-bold tracking-tight text-white mb-1">
                  {special.title}
                </h3>
                <p className="font-heading text-sm tracking-wider uppercase text-neon-blue mb-4">
                  {special.subtitle}
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  {special.description}
                </p>
                <p className="text-slate-500 text-xs mb-6">
                  *{special.terms}
                </p>

                {/* CTA */}
                {special.active && (
                  <a href={BUSINESS.phoneLink}>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-slate-300 hover:bg-neon-blue hover:text-white hover:border-neon-blue font-heading tracking-wider text-xs uppercase transition-all"
                    >
                      <Phone className="w-3 h-3 mr-2" />
                      Claim This Offer
                    </Button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32" data-testid="specials-bottom-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-6">
            Questions About Our Offers?
          </h2>
          <p className="text-slate-300 mb-8">
            Call us anytime to learn more about our current promotions or to schedule your service.
          </p>
          <a href={BUSINESS.phoneLink}>
            <Button size="lg" className="bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-neon">
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS.phone}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Specials;
