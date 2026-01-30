import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, Wrench, Droplets, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TrustBar } from '../components/shared/TrustBar';
import { ServiceCard } from '../components/shared/ServiceCard';
import { TestimonialCarousel } from '../components/shared/TestimonialCarousel';
import { BeforeAfterGallery } from '../components/shared/BeforeAfterGallery';
import { BUSINESS, AUTO_REPAIR_SERVICES, CAR_WASH_SERVICES, IMAGES } from '../data/business';

const Home = () => {
  return (
    <div className="min-h-screen bg-midnight" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" data-testid="hero-section">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-2xl">
            {/* 24/7 Badge */}
            <div className="inline-flex items-center gap-2 bg-neon-blue/20 border border-neon-blue/50 px-4 py-2 mb-6 animate-pulse-glow">
              <Clock className="w-4 h-4 text-neon-blue" />
              <span className="font-heading text-sm tracking-widest uppercase text-neon-blue">Open 24/7</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white leading-none mb-4 opacity-0 animate-fade-up">
              Expert Auto
              <span className="block text-neon-blue">Repair</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg opacity-0 animate-fade-up animation-delay-100">
              Chicago's trusted destination for professional auto repair and premium car wash services. Quality work, honest prices.
            </p>

            {/* Promo Badge */}
            <div className="inline-flex items-center gap-3 bg-neon-red text-white px-6 py-3 mb-8 opacity-0 animate-fade-up animation-delay-200">
              <span className="font-heading text-2xl font-bold">{BUSINESS.promo}</span>
              <span className="text-sm uppercase tracking-wider">All Services</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
              <a href={BUSINESS.phoneLink} data-testid="hero-call-btn">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-8 py-6 text-base transition-all hover:shadow-neon"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS.phone}
                </Button>
              </a>
              <Link to="/book" data-testid="hero-book-btn">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-midnight font-heading tracking-wider uppercase px-8 py-6 text-base transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Preview */}
      <section className="py-20 md:py-32" data-testid="services-preview">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">What We Do</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
                Our Services
              </h2>
            </div>
            <Link to="/services" className="group">
              <Button variant="outline" className="border-white/20 text-slate-300 hover:bg-neon-blue hover:text-white hover:border-neon-blue font-heading tracking-wider uppercase transition-all">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Auto Repair Card */}
            <div className="relative group overflow-hidden" data-testid="auto-repair-preview">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${IMAGES.serviceRepair})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
              <div className="relative z-10 p-8 md:p-12 min-h-[400px] flex flex-col justify-end">
                <div className="w-16 h-16 bg-neon-blue flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold tracking-tight uppercase text-white mb-3">
                  Auto Repair
                </h3>
                <p className="text-slate-300 mb-6 max-w-md">
                  Complete auto repair services from diagnostics to engine rebuilds. ASE-certified mechanics ready 24/7.
                </p>
                <Link to="/services">
                  <Button className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-neon-blue hover:border-neon-blue font-heading tracking-wider uppercase transition-all">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Car Wash Card */}
            <div className="relative group overflow-hidden" data-testid="car-wash-preview">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${IMAGES.serviceWash})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
              <div className="relative z-10 p-8 md:p-12 min-h-[400px] flex flex-col justify-end">
                <div className="w-16 h-16 bg-neon-blue flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold tracking-tight uppercase text-white mb-3">
                  Car Wash
                </h3>
                <p className="text-slate-300 mb-6 max-w-md">
                  Premium car wash and detailing services. From quick exterior washes to full interior restoration.
                </p>
                <Link to="/services">
                  <Button className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-neon-blue hover:border-neon-blue font-heading tracking-wider uppercase transition-all">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900/50 to-midnight" data-testid="specials-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-neon-red font-heading text-sm tracking-widest uppercase mb-2 block">Limited Time</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight uppercase text-white mb-6">
                Save <span className="text-neon-red">{BUSINESS.promo}</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                New customers get 20% off their first service. Whether you need a brake job, oil change, or full detail - save big on your first visit.
              </p>
              <p className="text-slate-500 text-sm mb-8">
                *Cannot be combined with other offers. Must mention at time of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneLink}>
                  <Button className="w-full sm:w-auto bg-neon-red hover:bg-neon-red/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]">
                    <Phone className="w-4 h-4 mr-2" />
                    Claim Offer
                  </Button>
                </a>
                <Link to="/specials">
                  <Button variant="outline" className="w-full sm:w-auto border-white/20 text-slate-300 hover:bg-white/10 font-heading tracking-wider uppercase transition-all">
                    View All Specials
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square bg-slate-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-red/20 to-transparent" />
                <div className="text-center relative z-10">
                  <span className="font-heading text-8xl md:text-9xl font-bold text-neon-red">20%</span>
                  <p className="font-heading text-2xl tracking-widest uppercase text-white mt-2">OFF</p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-neon-red/30" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border border-neon-red/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 md:py-32" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">Results</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
              Before & After
            </h2>
          </div>
          <BeforeAfterGallery />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-32 bg-slate-900/30" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">Testimonials</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
                What Customers Say
              </h2>
            </div>
          </div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32" data-testid="location-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="aspect-square md:aspect-auto md:min-h-[500px] bg-slate-900 border border-white/10 overflow-hidden">
              <iframe
                src={BUSINESS.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XIMI'S AUTO REPAIR Location"
                className="w-full h-full min-h-[400px]"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">Find Us</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8">
                Visit Our Shop
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold tracking-wide text-white">Address</h4>
                    <p className="text-slate-400">{BUSINESS.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold tracking-wide text-white">Phone</h4>
                    <a href={BUSINESS.phoneLink} className="text-slate-400 hover:text-neon-blue transition-colors">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold tracking-wide text-white">Hours</h4>
                    <p className="text-slate-400">Open {BUSINESS.hours}</p>
                  </div>
                </div>
              </div>

              <a 
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="get-directions-btn"
              >
                <Button className="w-full sm:w-auto bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-neon">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-neon-blue" data-testid="final-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Call us now for a free estimate or book an appointment online. We're here 24/7 to help with all your auto needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneLink}>
              <Button size="lg" className="w-full sm:w-auto bg-white text-neon-blue hover:bg-white/90 font-heading tracking-wider uppercase px-8 py-6 text-base transition-all">
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS.phone}
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-neon-blue font-heading tracking-wider uppercase px-8 py-6 text-base transition-all">
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
