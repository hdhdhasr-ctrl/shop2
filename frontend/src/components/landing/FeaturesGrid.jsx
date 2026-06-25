import { motion } from 'framer-motion';
import {
  Bluetooth,
  Cable,
  Ear,
  Layers,
  Mic,
  Radio,
  Settings2,
  Smartphone,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { TID } from '@/lib/testIds';

const FEATURES = [
  { icon: Bluetooth, label: 'Bluetooth Version', value: '5.3' },
  { icon: Radio, label: 'Wireless Range', value: '10–20 m' },
  { icon: Ear, label: 'Frequency Response', value: '20Hz – 20kHz' },
  { icon: Layers, label: 'Dual Driver System', value: 'Yes' },
  { icon: Cable, label: 'Charging', value: 'USB Type-C' },
  { icon: Mic, label: 'Built-in HD Mic', value: 'Yes' },
  { icon: Smartphone, label: 'Dual Device Connection', value: 'Yes' },
  { icon: Sparkles, label: 'Automatic Pairing', value: 'Yes' },
  { icon: Volume2, label: 'Volume Control', value: 'On-bud touch' },
  { icon: Settings2, label: 'App Support', value: 'iOS · Android' },
];

export default function FeaturesGrid() {
  return (
    <section
      id="features"
      data-testid={TID.features}
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Technical Specs
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            Specs that{' '}
            <span className="italic font-light text-muted-foreground">actually</span> matter.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {FEATURES.map(({ icon: Icon, label, value }, idx) => (
            <motion.div
              key={label}
              data-testid={TID.featureItem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.04 }}
              className="rounded-2xl border border-border bg-card p-5 hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-3 min-h-[140px]"
            >
              <Icon size={20} strokeWidth={1.5} className="text-muted-foreground" />
              <div className="mt-auto">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                <div className="mt-1 font-display font-medium text-lg sm:text-xl tracking-tight">
                  {value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
