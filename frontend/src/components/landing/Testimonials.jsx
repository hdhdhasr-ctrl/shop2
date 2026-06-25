import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TID } from '@/lib/testIds';

const REVIEWS = [
  {
    name: 'Aarav Mehta',
    handle: 'Producer · Mumbai',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
    body:
      'The LDAC support actually makes a difference. Mixing reference tracks on the train feels like cheating.',
  },
  {
    name: 'Lena Vogt',
    handle: 'Designer · Berlin',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
    body:
      'ANC silences my open-plan office completely. Calls are crisp — colleagues thought I was at home.',
  },
  {
    name: 'Marcus Chen',
    handle: 'Runner · Singapore',
    avatar: 'https://i.pravatar.cc/120?img=33',
    rating: 5,
    body:
      'Stays in through sweaty 10Ks and light rain. Comfortable, sounds huge, charges fast.',
  },
  {
    name: 'Sofia Romano',
    handle: 'Student · Milan',
    avatar: 'https://i.pravatar.cc/120?img=49',
    rating: 5,
    body:
      'Cheaper than the big brands and honestly better. The low-latency mode is great for mobile gaming.',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          className={i < count ? 'fill-foreground text-foreground' : 'text-muted-foreground'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      data-testid={TID.testimonials}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Loved by listeners
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              4.9 / 5 average rating
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Stars />
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">1,000+</span> happy listeners
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REVIEWS.map((r, idx) => (
            <motion.figure
              key={r.name}
              data-testid={TID.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="relative rounded-3xl border border-border bg-card p-6 flex flex-col"
            >
              <Quote size={22} strokeWidth={1.5} className="text-muted-foreground opacity-50" />
              <blockquote className="mt-4 text-sm sm:text-[15px] leading-relaxed font-medium">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold tracking-tight">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.handle}</div>
                </div>
                <Stars count={r.rating} />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
