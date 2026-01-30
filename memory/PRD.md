# XIMI'S AUTO REPAIR - Product Requirements Document

## Original Problem Statement
Build a modern, high-converting website for XIMI'S AUTO REPAIR - an auto repair + car wash business in Chicago. The website should generate leads (calls + appointment requests) and highlight services.

## Business Information
- **Name:** XIMI'S AUTO REPAIR
- **Address:** 3633 N Cicero Ave, Chicago, IL 60641
- **Phone:** (312) 533-6377
- **Hours:** 24/7
- **Promo:** 20% OFF

## User Personas
1. **Vehicle Owners in Chicago** - Looking for reliable auto repair services
2. **Emergency Repair Seekers** - Need 24/7 service availability
3. **Car Care Enthusiasts** - Seeking premium car wash and detailing

## Core Requirements (Static)
- React + TypeScript frontend (no backend required for MVP)
- Mobile-first responsive design
- Dark theme with blue accent ("Midnight Mechanic" design)
- Clickable phone numbers throughout
- SEO optimized with JSON-LD LocalBusiness schema
- Accessibility compliant

## What's Been Implemented (January 2026)

### Pages Created
1. **Home** - Hero with 24/7 badge, 20% OFF promo, CTAs, trust bar, services preview, specials section, before/after gallery, testimonial carousel, location map
2. **Services** - Auto Repair (9 services) and Car Wash (4 services) sections with service cards
3. **Book Appointment** - Full form with validation, stores in local state, success toast
4. **Specials** - Featured 20% OFF promo and additional offers
5. **Contact** - NAP, Google Maps embed, Instagram link

### Components Built
- Navbar with promo banner and phone CTA
- Footer with NAP and Chicago skyline background
- Sticky call button (mobile)
- Live chat widget placeholder (desktop)
- Service cards with hover effects
- Review cards and testimonial carousel
- Before/After gallery with toggle
- Trust bar with indicators

### Technical Implementation
- Design System: "Midnight Mechanic" theme
- Colors: #020617 (background), #2563EB (primary blue), #EF4444 (accent red)
- Typography: Oswald (headings), Inter (body)
- Animations: Fade-up, marquee carousel, pulse glow
- UI Components: Shadcn/UI (Button, Input, Select, Textarea, etc.)
- Toast notifications via Sonner

## P0/P1/P2 Features Remaining

### P0 (Critical) - All Complete ✓
- ✓ All pages functional
- ✓ Phone links clickable
- ✓ Form submission working
- ✓ Mobile responsive

### P1 (Important)
- Integrate with actual email service for form submissions
- Add Google Analytics tracking
- Add more before/after photos from Instagram

### P2 (Nice to Have)
- Implement actual live chat functionality
- Add customer login/appointment history
- Add online payment for deposits
- Multi-language support (Spanish)

## Next Action Items
1. Consider adding email integration (Resend/SendGrid) for form submissions
2. Add real Instagram images from @ximis_auto_repair
3. Set up Google Business Profile integration
4. Add conversion tracking for marketing

## Technical Notes
- Frontend runs on port 3000
- No backend API required for current functionality
- Form data stored in React local state (can be upgraded to backend later)
