import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { TID } from '@/lib/testIds';

const ROWS = [
  { label: 'Active Noise Cancellation', us: true, them: false },
  { label: 'Bluetooth Version', us: '5.3', them: '5.0 or older' },
  { label: 'Audio Quality', us: 'Hi-Res / LDAC', them: 'Standard SBC' },
  { label: 'Battery Life', us: 'All-day with case', them: 'Short' },
  { label: 'Water Resistant', us: true, them: false },
  { label: 'Low Latency Mode', us: true, them: false },
  { label: 'HD Calls (Dual-mic)', us: true, them: false },
  { label: 'Premium Codecs (aptX HD, LDAC)', us: true, them: false },
];

function Cell({ value, accent = false }) {
  if (typeof value === 'boolean') {
    return value ? (
      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${accent ? 'bg-foreground text-background' : 'bg-secondary text-muted-foreground'}`}>
        <Check size={16} strokeWidth={2.5} />
      </div>
    ) : (
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-muted-foreground">
        <X size={16} strokeWidth={2} />
      </div>
    );
  }
  return (
    <span className={`text-sm sm:text-base font-medium ${accent ? 'text-foreground' : 'text-muted-foreground'}`}>
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      data-testid={TID.comparison}
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Side by side
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            The honest comparison.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-border bg-card overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-3 border-b border-border bg-secondary/40">
            <div className="px-4 sm:px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Feature
            </div>
            <div className="px-4 sm:px-6 py-4 text-center">
              <div className="font-display font-semibold tracking-tight">Darker S510</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent">This product</div>
            </div>
            <div className="px-4 sm:px-6 py-4 text-center">
              <div className="font-display font-semibold tracking-tight">Standard Earbuds</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Typical market</div>
            </div>
          </div>

          {ROWS.map((row, idx) => (
            <div
              key={row.label}
              data-testid={TID.comparisonRow}
              className={`grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-3 items-center ${
                idx !== ROWS.length - 1 ? 'border-b border-border' : ''
              } ${idx % 2 === 1 ? 'bg-secondary/10' : ''}`}
            >
              <div className="px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-medium">
                {row.label}
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center">
                <Cell value={row.us} accent />
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center">
                <Cell value={row.them} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
