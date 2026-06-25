import { motion } from 'framer-motion';
import { TID } from '@/lib/testIds';

const CODECS = ['SBC', 'AAC', 'aptX', 'aptX HD', 'LDAC'];

const PILLARS = [
  { kpi: 'Deep', label: 'Bass that you feel, not just hear.' },
  { kpi: 'Clear', label: 'Vocals isolated like a studio session.' },
  { kpi: 'Balanced', label: 'Treble tuned for hours of listening.' },
  { kpi: 'Hi-Res', label: 'Up to 24-bit / 96kHz via LDAC.' },
];

function SoundWave() {
  const bars = Array.from({ length: 36 });
  return (
    <div className="flex items-center justify-center gap-1.5 h-32 sm:h-40">
      {bars.map((_, i) => (
        <span
          key={i}
          className="wave-bar w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-accent to-foreground"
          style={{
            height: `${30 + (i % 7) * 9}%`,
            animationDelay: `${(i % 9) * 0.08}s`,
            animationDuration: `${1 + (i % 4) * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function PremiumAudio() {
  return (
    <section
      id="audio"
      data-testid={TID.audio}
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-1/4 -z-10 mx-auto max-w-3xl h-72 bg-accent/15 blur-[140px] opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Premium Audio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-tight">
            Studio-quality
            <br className="hidden sm:block" />
            <span className="italic font-light text-muted-foreground">wireless audio.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dual driver system, custom-tuned EQ and Hi-Res ready codecs. Hear
            every nuance the artist intended, untethered.
          </p>
        </motion.div>

        {/* Codec strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {CODECS.map((c) => (
            <span
              key={c}
              data-testid={TID.codecBadge}
              className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider rounded-full border border-border bg-card px-3.5 sm:px-4 py-2"
            >
              {c}
            </span>
          ))}
        </motion.div>

        {/* Sound wave card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative rounded-3xl border border-border bg-card overflow-hidden p-8 sm:p-12"
        >
          <SoundWave />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {PILLARS.map((p) => (
              <div key={p.kpi}>
                <div className="font-display text-3xl sm:text-4xl font-medium tracking-tighter">
                  {p.kpi}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
