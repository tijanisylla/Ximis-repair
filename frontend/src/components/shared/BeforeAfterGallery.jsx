import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_GALLERY } from '../../data/business';

export const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const currentItem = BEFORE_AFTER_GALLERY[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_GALLERY.length);
    setShowAfter(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BEFORE_AFTER_GALLERY.length) % BEFORE_AFTER_GALLERY.length);
    setShowAfter(false);
  };

  return (
    <div className="relative" data-testid="before-after-gallery">
      {/* Main Image Container */}
      <div className="relative aspect-[16/10] lg:aspect-[21/9] bg-brand-charcoal overflow-hidden border border-white/5">
        {/* Before Image */}
        <img
          src={currentItem.before}
          alt={`${currentItem.title} - Before`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            showAfter ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* After Image */}
        <img
          src={currentItem.after}
          alt={`${currentItem.title} - After`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            showAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Label Badge */}
        <div className={`absolute top-6 left-6 px-5 py-2.5 font-heading text-sm tracking-wider transition-all duration-300 ${
          showAfter ? 'bg-brand-gold text-brand-dark' : 'bg-brand-charcoal/90 text-brand-cream border border-white/10'
        }`}>
          {showAfter ? 'AFTER' : 'BEFORE'}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-dark/80 backdrop-blur border border-white/10 flex items-center justify-center text-brand-cream hover:bg-brand-maroon hover:border-brand-maroon transition-all duration-300"
          aria-label="Previous"
          data-testid="gallery-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-dark/80 backdrop-blur border border-white/10 flex items-center justify-center text-brand-cream hover:bg-brand-maroon hover:border-brand-maroon transition-all duration-300"
          aria-label="Next"
          data-testid="gallery-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
      </div>

      {/* Info & Toggle */}
      <div className="mt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-2xl font-semibold tracking-wide text-brand-cream">
            {currentItem.title}
          </h3>
          <p className="text-brand-cream/60 mt-1">{currentItem.description}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Toggle Buttons */}
          <div className="flex border border-white/10 overflow-hidden">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 font-medium text-sm tracking-wide transition-all duration-300 ${
                !showAfter 
                  ? 'bg-brand-maroon text-white' 
                  : 'bg-transparent text-brand-cream/60 hover:text-brand-cream hover:bg-white/5'
              }`}
              data-testid="toggle-before"
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 font-medium text-sm tracking-wide transition-all duration-300 ${
                showAfter 
                  ? 'bg-brand-gold text-brand-dark' 
                  : 'bg-transparent text-brand-cream/60 hover:text-brand-cream hover:bg-white/5'
              }`}
              data-testid="toggle-after"
            >
              After
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {BEFORE_AFTER_GALLERY.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setShowAfter(false);
            }}
            className={`h-1 transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-brand-maroon w-10' 
                : 'bg-white/20 w-6 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
