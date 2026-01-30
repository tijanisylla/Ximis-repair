import { Link } from 'react-router-dom';
import { Phone, Calendar, Wrench, Droplets } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/shared/ServiceCard';
import { BUSINESS, AUTO_REPAIR_SERVICES, CAR_WASH_SERVICES, IMAGES } from '../data/business';

const Services = () => {
  return (
    <div className="min-h-screen bg-midnight pt-32 md:pt-40" data-testid="services-page">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">Our Services</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight uppercase text-white mb-6">
              Complete Auto Care
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              From routine maintenance to major repairs, our ASE-certified technicians handle it all. Plus premium car wash and detailing services to keep your vehicle looking its best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.phoneLink}>
                <Button className="w-full sm:w-auto bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-neon">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Quote
                </Button>
              </a>
              <Link to="/book">
                <Button variant="outline" className="w-full sm:w-auto border-white/20 text-slate-300 hover:bg-white/10 font-heading tracking-wider uppercase transition-all">
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
              className="w-full aspect-square object-cover border border-white/10"
            />
            <div className="absolute -bottom-4 -left-4 bg-neon-blue px-6 py-3">
              <p className="font-heading text-sm tracking-widest uppercase text-white">ASE Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Repair Services */}
      <section className="py-20 md:py-32 bg-slate-900/30" data-testid="auto-repair-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-neon-blue flex items-center justify-center">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-neon-blue font-heading text-sm tracking-widest uppercase block">Repair Services</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">
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
      <section className="py-20 md:py-32" data-testid="car-wash-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-neon-blue flex items-center justify-center">
              <Droplets className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-neon-blue font-heading text-sm tracking-widest uppercase block">Wash & Detail</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">
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
      <section className="py-20 md:py-32 bg-slate-900/50 border-y border-white/10" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-neon-red font-heading text-sm tracking-widest uppercase mb-2 block">Special Offer</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Get <span className="text-neon-red">{BUSINESS.promo}</span> Today
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            New customers receive 20% off any service. Call now to claim your discount or book an appointment online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneLink}>
              <Button size="lg" className="w-full sm:w-auto bg-neon-red hover:bg-neon-red/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]">
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS.phone}
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-slate-300 hover:bg-neon-blue hover:text-white hover:border-neon-blue font-heading tracking-wider uppercase transition-all">
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
