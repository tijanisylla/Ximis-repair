import { Link } from 'react-router-dom';
import { Phone, Calendar, Tag, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BUSINESS, SPECIALS } from '../data/business';

const Specials = () => {
  return (
    <div className="min-h-screen bg-background pt-36 lg:pt-44" data-testid="specials-page">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Limited Time</span>
        <h1 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Special <span className="text-brand-maroon">Offers</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Save big on auto repair and car wash services. Check out our current promotions below.
        </p>
      </section>

      {/* Featured Promo */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24" data-testid="featured-promo">
        <div className="relative bg-gradient-to-br from-brand-maroon/20 via-card/50 to-card/50 border border-brand-maroon/20 p-10 lg:p-16 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-maroon/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-maroon/20 border border-brand-maroon/30 px-4 py-2 mb-8">
                <Tag className="w-4 h-4 text-brand-maroon" />
                <span className="font-medium text-sm tracking-wide text-brand-maroon">Featured Offer</span>
              </div>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
                {BUSINESS.promo}
              </h2>
              <p className="font-heading text-xl tracking-wide text-brand-gold mb-6">
                First Service
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                New customers get 20% off their first service. Valid on all auto repair and car wash services. Cannot be combined with other offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneLink}>
                  <Button size="lg" className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-10 transition-all duration-300 btn-premium">
                    <Phone className="w-5 h-5 mr-2" />
                    Claim Offer
                  </Button>
                </a>
                <Link to="/book">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-medium tracking-wide transition-all duration-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-card border border-border flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-heading text-7xl lg:text-8xl font-bold text-brand-maroon">20%</span>
                    <p className="font-heading text-xl tracking-[0.2em] uppercase text-foreground mt-2">OFF</p>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-brand-maroon" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-maroon" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-brand-maroon" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-brand-maroon" />
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-dark px-4 py-2 font-heading text-sm tracking-wide">
                  New Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Specials */}
      <section className="py-24 lg:py-32 bg-muted/30" data-testid="other-specials">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-14 text-center">
            More Offers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALS.map((special) => (
              <div 
                key={special.id}
                className={`bg-card border p-8 transition-all duration-300 ${
                  special.active 
                    ? 'border-border hover:border-brand-maroon/50 card-hover' 
                    : 'border-border/50 opacity-60'
                }`}
                data-testid={`special-card-${special.id}`}
              >
                {/* Status Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 mb-5 ${
                  special.active 
                    ? 'bg-green-500/10 border border-green-500/30' 
                    : 'bg-muted border border-border'
                }`}>
                  {special.active ? (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  ) : (
                    <Clock className="w-3 h-3 text-muted-foreground" />
                  )}
                  <span className={`text-xs tracking-wide ${
                    special.active ? 'text-green-500' : 'text-muted-foreground'
                  }`}>
                    {special.active ? 'Active' : 'Coming Soon'}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground mb-2">
                  {special.title}
                </h3>
                <p className="font-heading text-sm tracking-[0.15em] uppercase text-brand-gold mb-5">
                  {special.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {special.description}
                </p>
                <p className="text-muted-foreground/60 text-xs mb-6 border-l-2 border-brand-maroon/30 pl-3">
                  {special.terms}
                </p>

                {/* CTA */}
                {special.active && (
                  <a href={BUSINESS.phoneLink}>
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-brand-maroon hover:text-white hover:border-brand-maroon font-medium text-sm tracking-wide transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
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
      <section className="py-24 lg:py-32" data-testid="specials-bottom-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
            Questions About Our Offers?
          </h2>
          <p className="text-muted-foreground mb-10">
            Call us anytime to learn more about our current promotions or to schedule your service.
          </p>
          <a href={BUSINESS.phoneLink}>
            <Button size="lg" className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-10 transition-all duration-300 btn-premium">
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
