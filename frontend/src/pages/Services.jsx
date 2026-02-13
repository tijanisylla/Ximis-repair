import { Link } from 'react-router-dom';
import { Phone, Calendar, Wrench, Droplets, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/shared/ServiceCard';
import { BUSINESS, AUTO_REPAIR_SERVICES, CAR_WASH_SERVICES, IMAGES } from '../data/business';

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-36 lg:pt-44" data-testid="services-page">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Our Services</span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 line-accent">
              Complete Auto Care
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              From routine maintenance to major repairs, our ASE-certified technicians handle it all with precision and care. {BUSINESS.tagline}. Plus premium car wash and detailing services to keep your vehicle looking showroom fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.phoneLink}>
                <Button className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 transition-all duration-300 btn-premium">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Quote
                </Button>
              </a>
              <Link to="/book">
                <Button variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-medium tracking-wide transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.mechanicPortrait}
              alt="Professional mechanic"
              className="w-full aspect-[4/5] object-cover border border-border"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-maroon px-8 py-4 shadow-maroon">
              <p className="font-heading text-sm tracking-[0.15em] uppercase text-white">ASE Certified</p>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-gold" />
          </div>
        </div>
      </section>

      {/* Auto Repair Services */}
      <section className="py-24 lg:py-32 bg-muted/30" data-testid="auto-repair-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex items-center gap-5 mb-14">
            <div className="w-16 h-16 bg-brand-maroon flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase block">Repair Services</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Auto Repair
              </h2>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTO_REPAIR_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Car Wash Services */}
      <section className="py-24 lg:py-32" data-testid="car-wash-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex items-center gap-5 mb-14">
            <div className="w-16 h-16 bg-brand-gold flex items-center justify-center">
              <Droplets className="w-8 h-8 text-brand-dark" />
            </div>
            <div>
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase block">Wash & Detail</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Car Wash
              </h2>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAR_WASH_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 bg-muted/50 border-y border-border" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Special Offer</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get <span className="text-brand-maroon">{BUSINESS.promo}</span> Today
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            New customers receive 20% off any service. Call now to claim your discount or book an appointment online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneLink}>
              <Button size="lg" className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-10 transition-all duration-300 btn-premium">
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS.phone}
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold font-medium tracking-wide transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
