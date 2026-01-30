// Business Information - XIMI'S AUTO REPAIR
export const BUSINESS = {
  name: "XIMI'S AUTO REPAIR",
  phone: "(312) 533-6377",
  phoneLink: "tel:+13125336377",
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
  { icon: "Award", text: "ASE-Certified" },
  { icon: "Clock", text: "Same-Day Service" },
  { icon: "DollarSign", text: "Honest Pricing" },
  { icon: "MapPin", text: "Local Chicago" }
];

// Auto Repair Services
export const AUTO_REPAIR_SERVICES = [
  { id: 1, name: "Diagnostics", description: "Advanced computer diagnostics to identify issues quickly", icon: "Search" },
  { id: 2, name: "Brakes", description: "Complete brake system repair and replacement", icon: "Disc" },
  { id: 3, name: "Oil Change", description: "Quick and thorough oil change service", icon: "Droplet" },
  { id: 4, name: "Engine", description: "Engine repair, rebuild, and maintenance", icon: "Cog" },
  { id: 5, name: "Transmission", description: "Transmission repair and fluid service", icon: "Settings" },
  { id: 6, name: "Suspension", description: "Shocks, struts, and suspension work", icon: "ArrowDownUp" },
  { id: 7, name: "Batteries", description: "Battery testing, charging, and replacement", icon: "Battery" },
  { id: 8, name: "Tires", description: "Tire rotation, balancing, and replacement", icon: "Circle" },
  { id: 9, name: "AC/Heat", description: "Climate control system repair and recharge", icon: "Thermometer" }
];

// Car Wash Services
export const CAR_WASH_SERVICES = [
  { id: 1, name: "Exterior Wash", description: "Thorough exterior cleaning and rinse", icon: "Sparkles" },
  { id: 2, name: "Interior Cleaning", description: "Deep interior vacuum and wipe down", icon: "Car" },
  { id: 3, name: "Full Detailing", description: "Complete interior and exterior detailing", icon: "Star" },
  { id: 4, name: "Wax & Polish", description: "Professional wax and polish for lasting shine", icon: "Sun" }
];

// Mock Reviews
export const REVIEWS = [
  {
    id: 1,
    name: "Michael R.",
    rating: 5,
    text: "Best auto shop in Chicago. Fixed my transmission issue same day. Honest pricing and great service.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    text: "They saved me hundreds compared to the dealer. My car runs better than ever. Highly recommend!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "James K.",
    rating: 5,
    text: "24/7 service is a lifesaver. Had a brake emergency at midnight and they took care of it immediately.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Lisa M.",
    rating: 5,
    text: "Their car wash detailing is incredible. My car looks brand new. Will definitely be back!",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "David P.",
    rating: 5,
    text: "Trustworthy mechanics who explain everything. No surprise charges. Finally found my go-to shop.",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Jennifer H.",
    rating: 5,
    text: "Quick oil change and they noticed a potential issue before it became a problem. Great preventive care!",
    date: "3 weeks ago"
  }
];

// Service Types for Booking Form
export const SERVICE_TYPES = [
  "Diagnostics",
  "Brake Service",
  "Oil Change",
  "Engine Repair",
  "Transmission Service",
  "Suspension Work",
  "Battery Service",
  "Tire Service",
  "AC/Heat Repair",
  "Exterior Car Wash",
  "Interior Cleaning",
  "Full Detailing",
  "Wax & Polish",
  "Other"
];

// Images from design guidelines
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1756575527484-2839c593ed84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHxtZWNoYW5pYyUyMHdvcmtpbmclMjBvbiUyMGNhciUyMGRhcmslMjBtb29keXxlbnwwfHx8fDE3Njk3NTYzNDF8MA&ixlib=rb-4.1.0&q=85",
  chicagoSkyline: "https://images.unsplash.com/photo-1599931088219-645e4174a4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjaGljYWdvJTIwc2t5bGluZSUyMG5pZ2h0JTIwY2l0eSUyMGxpZ2h0c3xlbnwwfHx8fDE3Njk3NTYzNjB8MA&ixlib=rb-4.1.0&q=85",
  mechanicPortrait: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxmcmllbmRseSUyMG1lY2hhbmljJTIwaG9sZGluZyUyMHdyZW5jaCUyMHBvcnRyYWl0fGVufDB8fHx8MTc2OTc1NjM3MXww&ixlib=rb-4.1.0&q=85",
  serviceRepair: "https://images.unsplash.com/photo-1549047608-55b2fd4b8427?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhdXRvJTIwcmVwYWlyJTIwc2hvcCUyMGludGVyaW9yJTIwbmlnaHR8ZW58MHx8fHwxNzY5NzU2MzQ1fDA&ixlib=rb-4.1.0&q=85",
  serviceWash: "https://images.pexels.com/photos/6872609/pexels-photo-6872609.jpeg",
  galleryBefore: "https://images.unsplash.com/photo-1756364897783-160a04249b99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMG11ZGR5JTIwY2FyJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzY5NzU2MzYzfDA&ixlib=rb-4.1.0&q=85",
  galleryAfter: "https://images.unsplash.com/photo-1761119278824-bcb65edd36ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxzaGlueSUyMGNsZWFuJTIwbHV4dXJ5JTIwY2FyJTIwZXh0ZXJpb3IlMjBzdHVkaW98ZW58MHx8fHwxNzY5NzU2MzY5fDA&ixlib=rb-4.1.0&q=85"
};

// Before/After Gallery Data
export const BEFORE_AFTER_GALLERY = [
  {
    id: 1,
    title: "Full Detail Transformation",
    before: IMAGES.galleryBefore,
    after: IMAGES.galleryAfter,
    description: "Complete exterior wash and polish"
  },
  {
    id: 2,
    title: "Engine Bay Cleaning",
    before: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
    after: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800",
    description: "Professional engine bay detailing"
  },
  {
    id: 3,
    title: "Interior Deep Clean",
    before: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800",
    after: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800",
    description: "Complete interior restoration"
  }
];

// Specials/Promos
export const SPECIALS = [
  {
    id: 1,
    title: "20% OFF",
    subtitle: "All Services",
    description: "New customers get 20% off their first service. Valid on all auto repair and car wash services.",
    terms: "Cannot be combined with other offers. Must mention at time of service.",
    active: true,
    featured: true
  },
  {
    id: 2,
    title: "Free Inspection",
    subtitle: "With Any Repair",
    description: "Get a complimentary multi-point inspection when you bring your car in for any repair service.",
    terms: "Valid with paid repair service only.",
    active: true,
    featured: false
  },
  {
    id: 3,
    title: "Coming Soon",
    subtitle: "Loyalty Program",
    description: "Stay tuned for our upcoming loyalty rewards program with exclusive member benefits.",
    terms: "Program details coming soon.",
    active: false,
    featured: false
  }
];
