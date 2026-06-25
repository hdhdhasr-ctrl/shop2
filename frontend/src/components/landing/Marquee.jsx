import { TID } from '@/lib/testIds';

const ITEMS = [
  'BLUETOOTH 5.3',
  'ACTIVE NOISE CANCELLATION',
  'LDAC HI-RES AUDIO',
  'USB TYPE-C',
  'DUAL DRIVER',
  'WATER RESISTANT',
  'HD CALLS',
  'LOW LATENCY MODE',
  'DUAL DEVICE',
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-5">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {all.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="flex items-center gap-8 font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter px-6 text-muted-foreground"
          >
            {it}
            <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
