import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Lock, RotateCcw, Truck } from 'lucide-react';
import { TID } from '@/lib/testIds';
import { useProduct } from './ProductContext';
import BuyButton from './BuyButton';
import ColorSelector from './ColorSelector';
import RatingPill from './RatingPill';
import StockCounter from './StockCounter';
import TrustBadgeRow from './TrustBadgeRow';

const PERKS = [
  { icon: Truck, label: 'Free worldwide shipping' },
  { icon: Lock, label: 'Secure encrypted checkout' },
];

const INCLUDED = [
  'Pair of S510 Pulse Pro Earbuds',
  'USB Type-C charging case',
  'Silicone ear tips (S/M/L)',
  'USB-C charging cable',
  'Quick start guide',
];

function useCountdown(targetMs) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

export default function Pricing() {
  const { product, selectedVariant } = useProduct();

  const [endsAt] = useState(() => {
    const stored = Number(sessionStorage.getItem('dixsg-deal-ends'));
    if (stored && stored > Date.now()) return stored;
    const t = Date.now() + 24 * 60 * 60 * 1000;
    sessionStorage.setItem('dixsg-deal-ends', String(t));
    return t;
  });
  const { h, m, s } = useCountdown(endsAt);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section
      id="pricing"
      data-testid={TID.pricing}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-card">
              <motion.img
                key={selectedVariant.id}
                src={selectedVariant.image}
                alt={`${product.modelName} in ${selectedVariant.label}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-destructive text-destructive-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Save {product.discountPercent}%
              </div>
              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full glass-dark text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-red-400 animate-pulse" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-red-500" />
                </span>
                Limited Offer
              </div>
            </div>
          </motion.div>

          {/* Buy box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">
              Limited Launch Offer
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
              {product.modelName}
            </h2>
            <p className="mt-2 text-sm font-mono uppercase tracking-widest text-muted-foreground">
              by {product.brand}
            </p>

            <div className="mt-6 flex items-baseline gap-4 flex-wrap">
              <div className="font-display text-5xl sm:text-6xl font-medium tracking-tighter">
                ${product.priceCurrent}
              </div>
              <div className="text-2xl text-muted-foreground line-through font-light">
                ${product.priceCompare}
              </div>
              <span className="rounded-full bg-destructive text-destructive-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
                {product.discountPercent}% OFF
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <RatingPill />
              <StockCounter />
            </div>

            {/* Countdown */}
            <div
              data-testid={TID.countdown}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
            >
              <Clock size={16} strokeWidth={1.8} className="text-destructive" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Offer ends in
              </span>
              <span className="font-mono text-base font-bold tracking-tight tabular-nums">
                {pad(h)}:{pad(m)}:{pad(s)}
              </span>
            </div>

            {/* Color */}
            <div className="mt-8">
              <ColorSelector />
            </div>

            {/* What's included */}
            <ul className="mt-8 space-y-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground text-background shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BuyButton
                action="buy"
                variant="primary"
                testId={TID.pricingBuyNow}
                fullWidth
              >
                Buy Now · ${product.priceCurrent}
              </BuyButton>
              <BuyButton
                action="cart"
                variant="secondary"
                testId={TID.pricingAddToCart}
                fullWidth
              />
            </div>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PERKS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-3 py-3"
                >
                  <Icon size={16} strokeWidth={1.6} className="text-muted-foreground shrink-0" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="mt-6">
              <TrustBadgeRow />
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              In stock · Selected color: {selectedVariant.label}.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
