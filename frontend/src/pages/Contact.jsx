import { Phone, MapPin, Clock, Navigation, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BUSINESS, IMAGES } from '../data/business';

const Contact = () => {
  return (
    <div className="min-h-screen bg-midnight pt-32 md:pt-40" data-testid="contact-page">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-center">
          <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">Get In Touch</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight uppercase text-white mb-6">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Stop by our shop or give us a call. We're here 24/7 to help with all your automotive needs.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <a 
            href={BUSINESS.phoneLink}
            className="bg-slate-900/50 border border-white/10 p-8 hover:border-neon-blue transition-all group"
            data-testid="contact-phone-card"
          >
            <div className="w-14 h-14 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
              <Phone className="w-7 h-7 text-neon-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold tracking-wider uppercase text-white mb-2">Phone</h3>
            <p className="text-2xl text-neon-blue font-heading font-bold mb-2">{BUSINESS.phone}</p>
            <p className="text-slate-400 text-sm">Click to call</p>
          </a>

          {/* Address */}
          <a 
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/50 border border-white/10 p-8 hover:border-neon-blue transition-all group"
            data-testid="contact-address-card"
          >
            <div className="w-14 h-14 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
              <MapPin className="w-7 h-7 text-neon-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold tracking-wider uppercase text-white mb-2">Address</h3>
            <p className="text-slate-300 mb-1">{BUSINESS.address.street}</p>
            <p className="text-slate-300">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
            <p className="text-slate-400 text-sm mt-2">Click for directions</p>
          </a>

          {/* Hours */}
          <div className="bg-slate-900/50 border border-white/10 p-8" data-testid="contact-hours-card">
            <div className="w-14 h-14 bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-neon-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold tracking-wider uppercase text-white mb-2">Hours</h3>
            <p className="text-2xl text-neon-blue font-heading font-bold mb-2">{BUSINESS.hours}</p>
            <p className="text-slate-400 text-sm">Always Open</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative" data-testid="map-section">
        {/* Chicago Skyline Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${IMAGES.chicagoSkyline})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="aspect-square lg:aspect-auto lg:min-h-[500px] bg-slate-900 border border-white/10 overflow-hidden">
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
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8">
                Visit Our Shop
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-blue flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold tracking-wide text-white">{BUSINESS.name}</h4>
                    <p className="text-slate-300">{BUSINESS.address.street}</p>
                    <p className="text-slate-300">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 mb-8">
                Located on North Cicero Avenue in Chicago. Easy access from I-90 and plenty of parking available. Stop by anytime - we're open 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-neon">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
                <a href={BUSINESS.phoneLink}>
                  <Button variant="outline" className="w-full sm:w-auto border-white/20 text-slate-300 hover:bg-white/10 font-heading tracking-wider uppercase transition-all">
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
      <section className="py-20 md:py-32 bg-slate-900/30" data-testid="social-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-8">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-slate-300 mb-8">
            Check out our latest work, customer cars, and behind-the-scenes content.
          </p>
          <a 
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-white/20 text-slate-300 hover:bg-white/10 font-heading tracking-wider uppercase transition-all">
              <Instagram className="w-4 h-4 mr-2" />
              @ximis_auto_repair
            </Button>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-neon-blue" data-testid="contact-final-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Call now for a free estimate or to schedule your service appointment.
          </p>
          <a href={BUSINESS.phoneLink}>
            <Button size="lg" className="bg-white text-neon-blue hover:bg-white/90 font-heading tracking-wider uppercase px-8 py-6 text-base transition-all">
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
