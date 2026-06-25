import { Star } from 'lucide-react';
import { TID } from '@/lib/testIds';

export default function RatingPill({ className = '' }) {
  return (
    <div
      data-testid={TID.ratingPill}
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 ${className}`}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} strokeWidth={1.5} className="fill-foreground text-foreground" />
        ))}
      </div>
      <span className="text-xs font-semibold tracking-tight">
        4.9<span className="text-muted-foreground">/5</span>
      </span>
      <span className="text-[11px] text-muted-foreground hidden sm:inline">· 1k+ reviews</span>
    </div>
  );
}
