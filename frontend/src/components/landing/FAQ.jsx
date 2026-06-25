import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TID } from '@/lib/testIds';

const FAQS = [
  {
    q: 'How does Active Noise Cancellation work?',
    a: 'Built-in microphones sample the ambient sound around you and the onboard processor generates an inverted waveform that cancels out steady low-frequency noise such as engines, AC hum, and traffic — letting you focus on what you actually want to hear.',
  },
  {
    q: 'Are they compatible with iPhone and Android?',
    a: 'Yes. The earbuds use standard Bluetooth, so they work with iPhone, iPad, Android phones and tablets, laptops and most Bluetooth-enabled devices. iOS pairs over AAC, while Android can take advantage of aptX, aptX HD and LDAC for higher-resolution streaming.',
  },
  {
    q: 'Are they water resistant?',
    a: 'The earbuds are designed to resist sweat and light splashes, which makes them suitable for workouts, runs and light rain. The charging case is not water resistant — keep it dry.',
  },
  {
    q: 'How long does the battery last?',
    a: 'The S510 Pulse Pro is engineered for all-day listening on a single charge, with the USB Type-C charging case providing additional top-ups while you’re on the move. Exact runtime varies with volume, codec and ANC use.',
  },
  {
    q: 'Do they support gaming?',
    a: 'Yes. The earbuds include a Low Latency mode designed for tight audio-video sync, perfect for mobile gaming and video.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid={TID.faq}
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            Questions, answered.
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={item.q}
              value={`item-${idx}`}
              data-testid={TID.faqItem}
              className="rounded-2xl border border-border bg-card px-5 sm:px-6 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-left font-display text-base sm:text-lg font-medium tracking-tight hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
