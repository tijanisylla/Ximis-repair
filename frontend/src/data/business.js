// Business Information - XIMI'S AUTO REPAIR
export const BUSINESS = {
  name: "XIMI'S AUTO REPAIR",
  phone: "(312) 533-6377",
  phoneLink: "tel:+13125336377",
  tagline: "The lowest rate in the Chicago area",
  address: {
    street: "3633 N Cicero Ave",
    city: "Chicago",
    state: "IL",
    zip: "60641",
    full: "3633 N Cicero Ave, Chicago, IL 60641"
  },
  hours: "24/7",
  promo: "20% OFF",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.9!2d-87.7463!3d41.9469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU2JzQ4LjgiTiA4N8KwNDQnNDYuNyJX!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=3633+N+Cicero+Ave,+Chicago,+IL+60641",
  instagram: "https://www.instagram.com/ximis_auto_repair/"
};

// Trust Indicators
export const TRUST_INDICATORS = [
  { icon: "Award", text: "ASE Certified", description: "Factory trained technicians" },
  { icon: "Clock", text: "24/7 Service", description: "Always here when you need us" },
  { icon: "Shield", text: "Lowest Rates in Chicago", description: "The lowest rate in the Chicago area" },
  { icon: "FileCheck", text: "Free Estimate & Diagnostic", description: "No cost to get a quote or check engine light" }
];

// Auto Repair Services
export const AUTO_REPAIR_SERVICES = [
  { id: 1, name: "Mechanical Work", description: "Complete mechanical repairs and maintenance for all makes and models", icon: "Wrench", featured: true },
  { id: 2, name: "Brakes", description: "Full brake system inspection, repair, and replacement", icon: "Disc", featured: true },
  { id: 3, name: "Front Suspension", description: "Struts, shocks, lower & upper control arms, ball joints, and wheel bearings", icon: "ArrowDownUp", featured: true },
  { id: 4, name: "Tires", description: "Tire rotation, mount & balance, flat tire repair, and tire replacement", icon: "Circle", featured: false },
  { id: 5, name: "Oil & Fluids", description: "Oil change, fluid check, top off, and coolant flush", icon: "Droplet", featured: false },
  { id: 6, name: "Tune Up", description: "Complete tune-up services to keep your engine running smoothly", icon: "Cog", featured: false },
  { id: 7, name: "Transmission", description: "Transmission services, repair, and full replacement", icon: "Settings", featured: false },
  { id: 8, name: "Engine", description: "Engine repair and complete engine replacement", icon: "Cog", featured: false },
  { id: 9, name: "Radiator", description: "Radiator replacement and cooling system services", icon: "Thermometer", featured: false },
  { id: 10, name: "AC & Heating", description: "Air conditioning repair, Freon refill, blower motors, and heating", icon: "Thermometer", featured: false },
  { id: 11, name: "Diagnostics", description: "Free diagnostic and check engine light scan", icon: "Search", featured: false },
  { id: 12, name: "Roadside Assistance", description: "Flat tire repair and emergency roadside assistance", icon: "Car", featured: false }
];

// Car Wash Services
export const CAR_WASH_SERVICES = [
  { id: 1, name: "Exterior Wash", description: "Hand wash with premium products for a spotless finish", icon: "Sparkles" },
  { id: 2, name: "Interior Clean", description: "Deep vacuum and wipe down of all surfaces", icon: "Car" },
  { id: 3, name: "Full Detailing", description: "Complete interior and exterior restoration", icon: "Star" },
  { id: 4, name: "Wax & Polish", description: "Professional wax application for lasting protection", icon: "Sun" }
];

// Mock Reviews
export const REVIEWS = [
  {
    id: 1,
    name: "Michael R.",
    rating: 5,
    text: "Best auto shop in Chicago. They fixed my transmission issue same day when other shops said it would take a week. Truly professional.",
    date: "2 weeks ago",
    service: "Transmission Repair"
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    text: "Saved me hundreds compared to the dealership quote. My car runs better than when I bought it. These guys know their stuff.",
    date: "1 month ago",
    service: "Engine Diagnostics"
  },
  {
    id: 3,
    name: "James K.",
    rating: 5,
    text: "24/7 service is a lifesaver. Had a brake emergency at midnight and they took care of it immediately. Can't thank them enough.",
    date: "3 weeks ago",
    service: "Brake Service"
  },
  {
    id: 4,
    name: "Lisa M.",
    rating: 5,
    text: "The detailing work is incredible. My 10-year-old car looks brand new. They pay attention to every single detail.",
    date: "1 week ago",
    service: "Full Detailing"
  },
  {
    id: 5,
    name: "David P.",
    rating: 5,
    text: "Finally found honest mechanics who explain everything without the jargon. No surprise charges, no upselling. Just great service.",
    date: "2 months ago",
    service: "Oil Change"
  },
  {
    id: 6,
    name: "Jennifer H.",
    rating: 5,
    text: "Quick oil change turned into them catching a potential issue before it became a major problem. That's real service.",
    date: "3 weeks ago",
    service: "Preventive Maintenance"
  }
];

// Service Types for Booking Form
export const SERVICE_TYPES = [
  "Mechanical Work",
  "Brakes",
  "Front Suspension",
  "Struts",
  "Shocks",
  "Lower Control Arms",
  "Upper Control Arms",
  "Ball Joints",
  "Wheel Bearing",
  "Tires",
  "Tire Rotation",
  "Tire Mount & Balance",
  "Oil Change",
  "Check Fluids / Top Off Fluids",
  "Tune Up",
  "Transmission Service",
  "Transmission Replacement",
  "Engine Replacement",
  "Radiator Replacement",
  "Coolant Flush",
  "Air Conditioning Repair",
  "Air Conditioning Freon Refill",
  "Blower Motors",
  "Heating",
  "Flat Tire Repair",
  "Tire Replacement",
  "Roadside Assistance",
  "Free Estimate",
  "Free Diagnostic",
  "Check Engine Light",
  "Exterior Car Wash",
  "Interior Cleaning",
  "Full Detailing",
  "Wax & Polish",
  "Other"
];

// Images 
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",
  heroAlt: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
  chicagoSkyline: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1920&q=80",
  mechanicPortrait: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  serviceRepair: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
  serviceWash: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  carDetail1: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
  carDetail2: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  galleryBefore: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  galleryAfter: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
};

// Before/After Gallery Data
export const BEFORE_AFTER_GALLERY = [
  {
    id: 1,
    title: "Full Detail Transformation",
    before: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    after: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    description: "Complete exterior restoration and ceramic coating"
  },
  {
    id: 2,
    title: "Engine Bay Restoration",
    before: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    after: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    description: "Professional engine bay degreasing and detailing"
  },
  {
    id: 3,
    title: "Interior Revival",
    before: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80",
    after: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    description: "Deep interior cleaning and leather conditioning"
  }
];

// Specials/Promos
export const SPECIALS = [
  {
    id: 1,
    title: "20% OFF",
    subtitle: "First Service",
    description: "New customers receive 20% off their first service. Valid on all auto repair and car wash services.",
    terms: "Cannot be combined with other offers. Must mention at time of service.",
    active: true,
    featured: true
  },
  {
    id: 2,
    title: "Free",
    subtitle: "Multi-Point Inspection",
    description: "Complimentary comprehensive vehicle inspection with any repair service over $100.",
    terms: "Valid with paid repair service only.",
    active: true,
    featured: false
  },
  {
    id: 3,
    title: "Coming Soon",
    subtitle: "VIP Membership",
    description: "Exclusive member benefits including priority scheduling, discounts, and complimentary services.",
    terms: "Program details coming soon.",
    active: false,
    featured: false
  }
];
