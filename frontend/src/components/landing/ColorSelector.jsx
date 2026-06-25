import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useProduct } from './ProductContext';
import { TID } from '@/lib/testIds';

/**
 * Premium color swatch selector — passes selected variant into the Shopify cart.
 */
export default function ColorSelector({ compact = false, className = '' }) {
  const { variants, selectedVariantId, selectedVariant, setSelectedVariantId } = useProduct();

  return (
    <div className={className} data-testid={TID.colorSelector}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Color
        </div>
        <div className="text-sm font-medium tracking-tight">{selectedVariant.label}</div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {variants.map((v) => {
          const isSelected = v.id === selectedVariantId;
          return (
            <button
              key={v.id}
              type="button"
              aria-label={`Select ${v.label}`}
              aria-pressed={isSelected}
              data-testid={`${TID.colorSwatch}-${v.name}`}
              onClick={() => setSelectedVariantId(v.id)}
              className={`group relative inline-flex items-center justify-center transition-transform active:scale-95 ${
                compact ? 'w-9 h-9' : 'w-12 h-12'
              }`}
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-200 ${
                  isSelected
                    ? 'ring-2 ring-offset-2 ring-offset-background ring-foreground scale-100'
                    : 'ring-1 ring-border scale-95 group-hover:scale-100'
                }`}
                style={{
                  backgroundColor: v.swatch,
                  boxShadow: isSelected
                    ? `inset 0 0 0 1px ${v.ring}`
                    : `inset 0 0 0 1px ${v.ring}`,
                }}
              />
              {isSelected && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 text-white mix-blend-difference"
                >
                  <Check size={compact ? 13 : 16} strokeWidth={2.5} />
                </motion.span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
