import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Lock, Undo2 } from 'lucide-react';
import { TID } from '@/lib/testIds';

const ITEMS = [
  { icon: Truck, text: 'FREE WORLDWIDE SHIPPING ON ORDERS OVER $25' },
  { icon: ShieldCheck, text: '25% LAUNCH DISCOUNT — LIMITED TIME' },
  { icon: Lock, text: 'SECURE CHECKOUT VIA SHOPIFY' },
  { icon: Undo2, text: '30-DAY MONEY-BACK GUARANTEE' },
];

export default function PromoBar() {
  return (
    <div
      data-testid={TID.promoBar}
      className="fixed top-0 inset-x-0 z-[60] h-8 bg-foreground text-background overflow-hidden border-b border-foreground"
    >
      <div className="h-full flex items-center animate-marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map(({ icon: Icon, text }, i) => (
          <span
            key={`${text}-${i}`}
            className="flex items-center gap-2 px-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em]"
          >
            <Icon size={11} strokeWidth={2} />
            {text}
            <span className="inline-block w-1 h-1 rounded-full bg-background/40 ml-2" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
