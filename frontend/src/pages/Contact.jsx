import { Phone, MapPin, Clock, Navigation, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BUSINESS, IMAGES } from '../data/business';

const Contact = () => {
  return (
    <div className="min-h-screen bg-brand-dark pt-36 lg:pt-44" data-testid="contact-page">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center">
          <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Get In Touch</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-brand-cream mb-6">
            Contact Us
          </h1>
          <p className="text-brand-cream/70 text-lg max-w-2xl mx-auto">
            Stop by our shop or give us a call. We're here 24/7 to help with all your automotive needs.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <a 
            href={BUSINESS.phoneLink}
            className="bg-brand-charcoal/50 border border-white/5 p-8 hover:border-brand-maroon/50 transition-all duration-300 group card-hover"
            data-testid="contact-phone-card"
          >
            <div className="w-14 h-14 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center mb-6 group-hover:bg-brand-maroon/20 transition-colors">
              <Phone className="w-6 h-6 text-brand-maroon" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-wide text-brand-cream mb-3">Phone</h3>
            <p className="text-2xl text-brand-maroon font-heading font-bold mb-2">{BUSINESS.phone}</p>
            <p className="text-brand-cream/50 text-sm">Click to call</p>
          </a>

          {/* Address */}
          <a 
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-charcoal/50 border border-white/5 p-8 hover:border-brand-maroon/50 transition-all duration-300 group card-hover"
            data-testid="contact-address-card"
          >
            <div className="w-14 h-14 bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center mb-6 group-hover:bg-brand-maroon/20 transition-colors">
              <MapPin className="w-6 h-6 text-brand-maroon" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-wide text-brand-cream mb-3">Address</h3>
            <p className="text-brand-cream mb-1">{BUSINESS.address.street}</p>
            <p className="text-brand-cream/70">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
            <p className="text-brand-cream/50 text-sm mt-2 inline-flex items-center gap-1">
              Click for directions <ArrowUpRight className="w-3 h-3" />
            </p>
          </a>

          {/* Hours */}
          <div className="bg-brand-charcoal/50 border border-white/5 p-8" data-testid="contact-hours-card">
            <div className="w-14 h-14 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-brand-gold" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-wide text-brand-cream mb-3">Hours</h3>
            <p className="text-2xl text-brand-gold font-heading font-bold mb-2">{BUSINESS.hours}</p>
            <p className="text-brand-cream/50 text-sm">Always Open</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative" data-testid="map-section">
        {/* Chicago Skyline Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${IMAGES.chicagoSkyline})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
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
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-brand-cream mb-10 line-accent">
                Visit Our Shop
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-maroon flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-brand-cream">{BUSINESS.name}</h4>
                    <p className="text-brand-cream/70 mt-1">{BUSINESS.address.street}</p>
                    <p className="text-brand-cream/70">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                  </div>
                </div>
              </div>

              <p className="text-brand-cream/60 mb-10 leading-relaxed">
                Located on North Cicero Avenue in Chicago. Easy access from I-90 and plenty of parking available. Stop by anytime - we're open 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 transition-all duration-300 btn-premium">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
                <a href={BUSINESS.phoneLink}>
                  <Button variant="outline" className="w-full sm:w-auto border-white/10 text-brand-cream/80 hover:bg-white/5 font-medium tracking-wide transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social / Instagram */}
      <section className="py-24 lg:py-32 bg-brand-charcoal/30" data-testid="social-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-8">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-brand-cream mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-brand-cream/70 mb-10">
            Check out our latest work, customer cars, and behind-the-scenes content.
          </p>
          <a 
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-white/10 text-brand-cream/80 hover:bg-white/5 font-medium tracking-wide transition-all duration-300">
              <Instagram className="w-4 h-4 mr-2" />
              @ximis_auto_repair
            </Button>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-brand-maroon" data-testid="contact-final-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Call now for a free estimate or to schedule your service appointment.
          </p>
          <a href={BUSINESS.phoneLink}>
            <Button size="lg" className="bg-white text-brand-maroon hover:bg-brand-cream font-medium tracking-wide px-10 py-6 text-base transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS.phone}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
