import { Star } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  return (
    <div 
      className="bg-slate-900/50 border border-white/10 p-6 min-w-[320px] md:min-w-[400px] flex-shrink-0"
      data-testid={`review-card-${review.id}`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-neon-blue text-neon-blue" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-heading font-bold text-white tracking-wide">{review.name}</p>
          <p className="text-xs text-slate-500">{review.date}</p>
        </div>
        <div className="w-10 h-10 bg-neon-blue/20 border border-neon-blue/30 flex items-center justify-center">
          <span className="font-heading text-neon-blue font-bold">
            {review.name.charAt(0)}
          </span>
        </div>
      </div>
    </div>
  );
};
