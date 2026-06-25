import { motion } from 'framer-motion';
import { Battery, Bluetooth, Droplet, Gamepad2, PhoneCall, ShieldOff } from 'lucide-react';
import { TID } from '@/lib/testIds';

const BENEFITS = [
  {
    icon: ShieldOff,
    title: 'Active Noise Cancellation',
    desc: 'Block unwanted noise and stay focused — wherever life gets loud.',
    span: 'md:col-span-7',
    accent: true,
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth 5.3',
    desc: 'Fast pairing and ultra-stable connectivity up to 20 meters.',
    span: 'md:col-span-5',
  },
  {
    icon: PhoneCall,
    title: 'HD Calls',
    desc: 'Crystal-clear voice with environmental noise reduction.',
    span: 'md:col-span-4',
  },
  {
    icon: Gamepad2,
    title: 'Low Latency Gaming',
    desc: 'Perfect synchronization for games and videos in dedicated mode.',
    span: 'md:col-span-4',
  },
  {
    icon: Droplet,
    title: 'Waterproof Design',
    desc: 'Built for workouts, travel and outdoor adventures.',
    span: 'md:col-span-4',
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    desc: 'Designed to keep up with your full day, with USB-C fast charging case.',
    span: 'md:col-span-12',
    wide: true,
  },
];

export default function KeyBenefits() {
  return (
    <section
      id="benefits"
      data-testid={TID.benefits}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Why Darker
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            Engineered to disappear.
            <span className="block text-muted-foreground">So the music doesn&apos;t.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {BENEFITS.map(({ icon: Icon, title, desc, span, accent, wide }, idx) => (
            <motion.div
              key={title}
              data-testid={TID.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`group relative rounded-3xl border border-border bg-card p-6 sm:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 ${span}`}
            >
              {accent && (
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
              )}
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary border border-border">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className={`mt-6 font-display font-medium tracking-tight ${wide ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                  {title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
