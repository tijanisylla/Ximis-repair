import { Star, Quote } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  return (
    <div 
      className="bg-card border border-border p-6 lg:p-8 min-w-[340px] lg:min-w-[420px] flex-shrink-0 relative group"
      data-testid={`review-card-${review.id}`}
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-maroon/20 group-hover:text-brand-maroon/40 transition-colors" />

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 italic">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="font-heading font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-brand-gold mt-0.5">{review.service}</p>
        </div>
        <div className="w-10 h-10 bg-brand-maroon/20 border border-brand-maroon/30 flex items-center justify-center">
          <span className="font-heading text-brand-maroon font-bold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
      </div>
    </div>
  );
};
