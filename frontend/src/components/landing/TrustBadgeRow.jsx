import { Lock, Truck, Sparkles, Smile, Gem } from 'lucide-react';
import { TID } from '@/lib/testIds';

const TRUST = [
  { Icon: Lock, label: 'Secure Checkout' },
  { Icon: Sparkles, label: 'Quality Tested' },
  { Icon: Truck, label: 'Fast Shipping' },
  { Icon: Smile, label: 'Customer Satisfaction' },
  { Icon: Gem, label: 'Premium Build' },
];

export default function TrustBadgeRow({ items = TRUST, className = '' }) {
  return (
    <div
      data-testid={TID.trustBadgeRow}
      className={`grid grid-cols-2 sm:grid-cols-5 gap-2 ${className}`}
    >
      {items.map(({ Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2.5"
        >
          <Icon size={15} strokeWidth={1.6} className="text-muted-foreground shrink-0" />
          <span className="text-[11px] font-semibold tracking-tight leading-tight">{label}</span>
        </div>
      ))}
    </div>
  );
}
