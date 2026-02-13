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
      <div className="relative aspect-[16/10] lg:aspect-[21/9] bg-card overflow-hidden border border-border">
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
          showAfter ? 'bg-brand-gold text-brand-dark' : 'bg-card/90 backdrop-blur text-foreground border border-border'
        }`}>
          {showAfter ? 'AFTER' : 'BEFORE'}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-brand-maroon hover:text-white hover:border-brand-maroon transition-all duration-300"
          aria-label="Previous"
          data-testid="gallery-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-brand-maroon hover:text-white hover:border-brand-maroon transition-all duration-300"
          aria-label="Next"
          data-testid="gallery-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Info & Toggle */}
      <div className="mt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-2xl font-semibold tracking-wide text-foreground">
            {currentItem.title}
          </h3>
          <p className="text-muted-foreground mt-1">{currentItem.description}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Toggle Buttons */}
          <div className="flex border border-border overflow-hidden">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 font-medium text-sm tracking-wide transition-all duration-300 ${
                !showAfter 
                  ? 'bg-brand-maroon text-white' 
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted'
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
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted'
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
                : 'bg-muted-foreground/30 w-6 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
