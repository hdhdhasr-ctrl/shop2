import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bluetooth, Droplet, Shield, Waves } from 'lucide-react';
import { TID } from '@/lib/testIds';
import BuyButton from './BuyButton';
import ColorSelector from './ColorSelector';
import RatingPill from './RatingPill';
import StockCounter from './StockCounter';
import { useProduct } from './ProductContext';

const TRUST = [
  { icon: Shield, label: 'ANC Technology' },
  { icon: Bluetooth, label: 'Bluetooth 5.3' },
  { icon: Waves, label: 'LDAC Audio' },
  { icon: Droplet, label: 'Water Resistant' },
];

export default function Hero() {
  const { selectedVariant, product } = useProduct();

  return (
    <section
      id="hero"
      data-testid={TID.hero}
      className="relative pt-36 sm:pt-40 pb-20 sm:pb-28 overflow-hidden grain"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/20 blur-[140px] opacity-60" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-foreground/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2 rounded-full bg-destructive/10 border border-destructive/30 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase mb-6 text-destructive"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-destructive" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-destructive" />
              </span>
              Limited Time Offer · 25% OFF
            </motion.div>

            <motion.h1
              data-testid={TID.heroHeadline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.02]"
            >
              Experience{' '}
              <span className="italic font-light text-muted-foreground">pure</span>{' '}
              sound
              <br className="hidden sm:block" /> without distractions.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-3 text-sm font-mono tracking-tight uppercase text-muted-foreground"
            >
              <span className="text-foreground font-semibold">{product.modelName}</span>
              <span className="mx-2">·</span> by {product.brand}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Premium TWS Bluetooth 5.3 earbuds with Active Noise Cancellation,
              LDAC Hi-Res audio, deep bass and crystal-clear calls. Built for
              the way you actually live.
            </motion.p>

            {/* Pricing strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-3 flex-wrap"
            >
              <span className="font-display text-4xl sm:text-5xl font-medium tracking-tighter">
                ${product.priceCurrent}
              </span>
              <span className="text-xl text-muted-foreground line-through font-light">
                ${product.priceCompare}
              </span>
              <span className="rounded-full bg-destructive text-destructive-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                {product.discountPercent}% OFF
              </span>
            </motion.div>

            {/* Color selector + indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 flex flex-col sm:flex-row sm:items-end gap-5 justify-center lg:justify-start"
            >
              <ColorSelector />
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <RatingPill />
                <StockCounter />
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center"
            >
              <BuyButton
                action="buy"
                variant="primary"
                testId={TID.heroBuyNow}
                fullWidth
              >
                Buy Now · ${product.priceCurrent}
              </BuyButton>
              <a
                href="#showcase"
                data-testid={TID.heroLearnMore}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-foreground border border-border px-7 py-3.5 font-semibold hover:bg-surface-hover transition-colors active:scale-95"
              >
                Learn More
                <ArrowRight size={16} strokeWidth={1.8} />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
              }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5"
            >
              {TRUST.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  data-testid={TID.trustBadge}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-2 rounded-2xl glass px-3 py-2.5"
                >
                  <Icon size={16} strokeWidth={1.6} className="text-accent shrink-0" />
                  <span className="text-xs font-semibold tracking-tight">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Product visual */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative aspect-square max-w-xl mx-auto"
            >
              {/* Backplate */}
              <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-foreground/5 to-foreground/0 border border-border" />
              <div className="absolute inset-12 rounded-[2.5rem] glass" />

              {/* Floating product — updates with color selection */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedVariant.id}
                    src={selectedVariant.image}
                    alt={`${product.modelName} in ${selectedVariant.label}`}
                    initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-2xl animate-float"
                    loading="eager"
                  />
                </AnimatePresence>
              </div>

              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute -left-2 sm:-left-6 top-12 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Hi-Res</div>
                <div className="font-display font-semibold text-xl">LDAC<span className="text-muted-foreground text-sm font-normal"> audio</span></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="absolute -right-2 sm:-right-4 bottom-16 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Active</div>
                <div className="font-display font-semibold text-xl">Noise Cancel</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 glass rounded-full px-5 py-2 shadow-xl flex items-center gap-2"
              >
                <Bluetooth size={14} strokeWidth={2} className="text-accent" />
                <span className="text-xs font-semibold tracking-tight">Bluetooth 5.3 · LDAC</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
