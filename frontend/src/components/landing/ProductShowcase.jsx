import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { TID } from '@/lib/testIds';
import { useProduct } from './ProductContext';

export default function ProductShowcase() {
  const { product, selectedVariant } = useProduct();

  // Compose gallery: variant image first, then standard product gallery
  const gallery = [
    {
      url: selectedVariant.image,
      label: `${selectedVariant.label}`,
      caption: `${product.modelName} in ${selectedVariant.label}.`,
    },
    ...product.gallery,
  ];

  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  const next = () => setActive((i) => (i + 1) % gallery.length);
  const prev = () => setActive((i) => (i - 1 + gallery.length) % gallery.length);

  const current = gallery[Math.min(active, gallery.length - 1)];

  return (
    <section
      id="showcase"
      data-testid={TID.showcase}
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Product Tour
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              Every angle. Every detail.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Tap any thumbnail to switch views. Click the image to zoom in on
            machined details and material finishes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-card border border-border">
              <AnimatePresence mode="wait">
                <motion.button
                  key={`${current.url}-${active}`}
                  type="button"
                  onClick={() => setZoom(true)}
                  data-testid={TID.galleryMainImage}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-0 group cursor-zoom-in"
                  aria-label={`Zoom ${current.label}`}
                >
                  <img
                    src={current.url}
                    alt={current.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold">
                    <ZoomIn size={14} strokeWidth={1.8} />
                    Zoom
                  </span>
                </motion.button>
              </AnimatePresence>

              <button
                type="button"
                onClick={prev}
                data-testid={TID.galleryPrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                data-testid={TID.galleryNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  0{Math.min(active, gallery.length - 1) + 1} / 0{gallery.length}
                </div>
                <div className="font-display font-medium text-lg mt-1">{current.label}</div>
                <div className="text-sm text-muted-foreground">{current.caption}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-2 gap-3">
            {gallery.map((g, idx) => (
              <button
                key={`${g.url}-${idx}`}
                type="button"
                onClick={() => setActive(idx)}
                data-testid={TID.galleryThumb}
                aria-label={`Select ${g.label}`}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  active === idx
                    ? 'border-foreground scale-[1.02]'
                    : 'border-border opacity-70 hover:opacity-100'
                }`}
              >
                <img src={g.url} alt={g.label} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1.5 text-left">
                  {g.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={current.url}
              alt={current.label}
              className="max-w-5xl max-h-[88vh] w-full h-full object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
