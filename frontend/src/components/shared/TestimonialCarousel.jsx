import { ReviewCard } from './ReviewCard';
import { REVIEWS } from '../../data/business';

export const TestimonialCarousel = () => {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <div className="relative overflow-hidden" data-testid="testimonial-carousel">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex gap-6 animate-marquee">
        {duplicatedReviews.map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
};
