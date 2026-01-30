import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
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
      <div className="relative aspect-video bg-slate-900 overflow-hidden border border-white/10">
        {/* Before Image */}
        <img
          src={currentItem.before}
          alt={`${currentItem.title} - Before`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showAfter ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* After Image */}
        <img
          src={currentItem.after}
          alt={`${currentItem.title} - After`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showAfter ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Label Badge */}
        <div className={`absolute top-4 left-4 px-4 py-2 font-heading text-sm tracking-widest uppercase ${
          showAfter ? 'bg-neon-blue' : 'bg-slate-800'
        } text-white`}>
          {showAfter ? 'After' : 'Before'}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 border border-white/20 flex items-center justify-center text-white hover:bg-neon-blue hover:border-neon-blue transition-colors"
          aria-label="Previous"
          data-testid="gallery-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 border border-white/20 flex items-center justify-center text-white hover:bg-neon-blue hover:border-neon-blue transition-colors"
          aria-label="Next"
          data-testid="gallery-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Info & Toggle */}
      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-bold tracking-wide text-white">
            {currentItem.title}
          </h3>
          <p className="text-slate-400 text-sm">{currentItem.description}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Toggle Buttons */}
          <div className="flex border border-white/20">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-4 py-2 font-heading text-sm tracking-wider uppercase transition-colors ${
                !showAfter ? 'bg-neon-blue text-white' : 'bg-transparent text-slate-400 hover:text-white'
              }`}
              data-testid="toggle-before"
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-4 py-2 font-heading text-sm tracking-wider uppercase transition-colors ${
                showAfter ? 'bg-neon-blue text-white' : 'bg-transparent text-slate-400 hover:text-white'
              }`}
              data-testid="toggle-after"
            >
              After
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {BEFORE_AFTER_GALLERY.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setShowAfter(false);
            }}
            className={`w-2 h-2 transition-all ${
              index === currentIndex ? 'bg-neon-blue w-8' : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
