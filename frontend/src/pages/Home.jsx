import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, Wrench, Droplets, MapPin, Clock, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TrustBar } from '../components/shared/TrustBar';
import { ServiceCard } from '../components/shared/ServiceCard';
import { TestimonialCarousel } from '../components/shared/TestimonialCarousel';
import { BeforeAfterGallery } from '../components/shared/BeforeAfterGallery';
import { BUSINESS, AUTO_REPAIR_SERVICES, CAR_WASH_SERVICES, IMAGES } from '../data/business';

// Car silhouette SVG component
const CarSilhouette = ({ className = "" }) => (
  <svg viewBox="0 0 200 70" className={className} fill="currentColor">
    <path d="M15,50 Q8,50 8,42 L8,38 Q8,34 14,30 L45,24 Q60,18 90,18 L140,18 Q170,18 185,28 L192,34 Q198,38 198,42 L198,50 Q198,54 190,54 L175,54 Q172,54 168,50 Q164,46 155,46 Q146,46 142,50 Q138,54 135,54 L65,54 Q62,54 58,50 Q54,46 45,46 Q36,46 32,50 Q28,54 25,54 L15,54 Q8,54 8,50 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"/>
    <circle cx="45" cy="50" r="10" fill="currentColor" opacity="0.2"/>
    <circle cx="155" cy="50" r="10" fill="currentColor" opacity="0.2"/>
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-background" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32" data-testid="hero-section">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-maroon/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-brand-maroon/20 border border-brand-maroon/30 px-5 py-2.5 mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-brand-cream">Open 24/7 - Always Here For You</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.95] mb-6 opacity-0 animate-fade-up animation-delay-100">
              Expert Auto
              <span className="block text-brand-maroon">Repair</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl opacity-0 animate-fade-up animation-delay-200">
              Chicago's trusted destination for professional auto repair and premium car wash services. Quality craftsmanship, honest pricing.
            </p>

            {/* Promo Badge */}
            <div className="inline-flex items-center gap-4 mb-10 opacity-0 animate-fade-up animation-delay-300">
              <div className="bg-brand-maroon px-6 py-3">
                <span className="font-heading text-3xl font-bold text-white">{BUSINESS.promo}</span>
              </div>
              <div>
                <span className="text-brand-gold font-medium block">First Service</span>
                <span className="text-muted-foreground text-sm">New customers only</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-400">
              <a href={BUSINESS.phoneLink} data-testid="hero-call-btn">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 py-6 text-base transition-all duration-300 btn-premium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS.phone}
                </Button>
              </a>
              <Link to="/book" data-testid="hero-book-btn">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-border text-foreground hover:bg-foreground hover:text-background font-medium tracking-wide px-8 py-6 text-base transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-600">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Preview */}
      <section className="py-24 lg:py-32" data-testid="services-preview">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-3 block">What We Do</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-foreground line-accent">
                Our Services
              </h2>
            </div>
            <Link to="/services" className="group">
              <Button variant="outline" className="border-border text-muted-foreground hover:bg-brand-maroon hover:text-white hover:border-brand-maroon font-medium tracking-wide transition-all duration-300">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Service Categories - Bento Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Auto Repair Card */}
            <div className="relative group overflow-hidden min-h-[450px] lg:min-h-[500px]" data-testid="auto-repair-preview">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${IMAGES.serviceRepair})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-brand-maroon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Auto Repair
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                  Complete auto repair services from diagnostics to engine rebuilds. ASE-certified mechanics available 24/7 for all your automotive needs.
                </p>
                <Link to="/services">
                  <Button className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-brand-maroon hover:border-brand-maroon font-medium tracking-wide transition-all duration-300 group-hover:shadow-maroon">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Car Wash Card */}
            <div className="relative group overflow-hidden min-h-[450px] lg:min-h-[500px]" data-testid="car-wash-preview">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${IMAGES.serviceWash})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-8 h-8 text-brand-dark" />
                </div>
                <h3 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Car Wash & Detail
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                  Premium hand wash and detailing services. From quick exterior washes to complete interior restoration and ceramic coating.
                </p>
                <Link to="/services">
                  <Button className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold font-medium tracking-wide transition-all duration-300">
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
      <section className="py-24 lg:py-32 relative overflow-hidden" data-testid="specials-section">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-maroon/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-maroon/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Limited Time Offer</span>
              <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 line-accent">
                Save <span className="text-brand-maroon">{BUSINESS.promo}</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                New customers receive 20% off their first service. Whether you need a brake job, oil change, or full detail - experience the XIMI'S difference at a great price.
              </p>
              <p className="text-muted-foreground text-sm mb-10 border-l-2 border-brand-maroon/30 pl-4">
                Cannot be combined with other offers. Must mention at time of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneLink}>
                  <Button className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 transition-all duration-300 btn-premium">
                    <Phone className="w-4 h-4 mr-2" />
                    Claim Offer
                  </Button>
                </a>
                <Link to="/specials">
                  <Button variant="outline" className="w-full sm:w-auto border-border text-muted-foreground hover:bg-muted font-medium tracking-wide transition-all duration-300">
                    View All Specials
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Box */}
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-card border border-border flex items-center justify-center relative">
                  <div className="text-center">
                    <span className="font-heading text-7xl lg:text-8xl font-bold text-brand-maroon">20%</span>
                    <p className="font-heading text-xl tracking-[0.2em] uppercase text-foreground mt-2">OFF</p>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-maroon" />
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-brand-maroon" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-brand-maroon" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-maroon" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-dark px-4 py-2 font-heading text-sm tracking-wide">
                  First Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 lg:py-32" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Our Work</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-brand-cream">
              Before & After
            </h2>
          </div>
          <BeforeAfterGallery />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 lg:py-32 bg-brand-charcoal/30" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <span className="text-brand-gold font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Testimonials</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-foreground line-accent">
                What Customers Say
              </h2>
            </div>
          </div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Location Section */}
      <section className="py-24 lg:py-32" data-testid="location-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <div className="aspect-square lg:aspect-auto lg:min-h-[500px] bg-brand-charcoal border border-white/5 overflow-hidden">
              <iframe
                src={BUSINESS.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XIMI'S AUTO REPAIR Location"
                className="w-full h-full min-h-[400px]"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Find Us</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-brand-cream mb-10 line-accent">
                Visit Our Shop
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-maroon" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-brand-cream">Address</h4>
                    <p className="text-brand-cream/60 mt-1">{BUSINESS.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-maroon" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-brand-cream">Phone</h4>
                    <a href={BUSINESS.phoneLink} className="text-brand-cream/60 hover:text-brand-gold transition-colors mt-1 block">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-maroon" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-brand-cream">Hours</h4>
                    <p className="text-brand-cream/60 mt-1">Open {BUSINESS.hours}</p>
                  </div>
                </div>
              </div>

              <a 
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="get-directions-btn"
              >
                <Button className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 transition-all duration-300 btn-premium">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-brand-maroon relative overflow-hidden" data-testid="final-cta">
        <div className="absolute inset-0 opacity-10">
          <CarSilhouette className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-auto text-white" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Call us now for a free estimate or book an appointment online. We're here 24/7 to help with all your automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.phoneLink}>
              <Button size="lg" className="w-full sm:w-auto bg-white text-brand-maroon hover:bg-brand-cream font-medium tracking-wide px-10 py-6 text-base transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS.phone}
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-maroon font-medium tracking-wide px-10 py-6 text-base transition-all duration-300">
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
