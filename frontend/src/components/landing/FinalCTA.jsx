import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TID } from '@/lib/testIds';
import BuyButton from './BuyButton';
import ColorSelector from './ColorSelector';
import { useProduct } from './ProductContext';

export default function FinalCTA() {
  const { product } = useProduct();

  return (
    <section
      id="cta"
      data-testid={TID.finalCta}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border bg-foreground text-background p-10 sm:p-16 lg:p-24 text-center grain"
        >
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent/30 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-background/15 blur-[120px]" />

          {/* Rating + offer */}
          <div className="relative flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur px-3.5 py-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} strokeWidth={1.5} className="fill-background text-background" />
                ))}
              </div>
              <span className="text-xs font-semibold tracking-tight opacity-90">
                4.9/5 from happy listeners
              </span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive text-destructive-foreground px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest">
              {product.discountPercent}% OFF · Limited Time
            </span>
          </div>

          <p className="relative text-xs font-bold uppercase tracking-[0.22em] opacity-60 mb-4">
            One last thing
          </p>
          <h2 className="relative font-display text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.02] max-w-3xl mx-auto">
            Upgrade your listening
            <span className="block italic font-light opacity-70">experience today.</span>
          </h2>

          <div className="relative mt-6 flex items-baseline justify-center gap-4 flex-wrap">
            <span className="font-display text-5xl sm:text-6xl font-medium tracking-tighter">
              ${product.priceCurrent}
            </span>
            <span className="text-2xl line-through opacity-60 font-light">
              ${product.priceCompare}
            </span>
          </div>

          <p className="relative mt-6 text-base sm:text-lg opacity-70 max-w-xl mx-auto leading-relaxed">
            Enjoy premium wireless freedom, immersive sound and advanced ANC
            technology wherever life takes you.
          </p>

          {/* Color selector (inverted for dark bg) */}
          <div className="relative mt-8 flex justify-center">
            <div className="rounded-2xl bg-background/10 backdrop-blur px-5 py-4">
              <ColorSelector compact />
            </div>
          </div>

          <div className="relative mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <BuyButton action="buy" variant="inverted" testId={TID.finalBuyNow} fullWidth>
              Buy Now · ${product.priceCurrent}
            </BuyButton>
            <BuyButton
              action="cart"
              variant="primary"
              testId={TID.finalAddToCart}
              fullWidth
              className="!bg-transparent !text-background border border-background/30 hover:!bg-background/10"
            />
          </div>

          <p className="relative mt-6 text-xs opacity-50">
            Free worldwide shipping · Secure checkout
          </p>
        </motion.div>
      </div>
    </section>
  );
}
