import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { TID } from '@/lib/testIds';

/**
 * Simple "Only X left in stock" urgency indicator.
 * Persists a slowly-decreasing number per session for plausibility.
 */
export default function StockCounter({ className = '' }) {
  const [count, setCount] = useState(() => {
    const stored = Number(sessionStorage.getItem('dixsg-stock'));
    if (stored && stored > 0) return stored;
    // Random plausible number 12-37
    const n = 12 + Math.floor(Math.random() * 26);
    sessionStorage.setItem('dixsg-stock', String(n));
    return n;
  });

  // Tick down slowly to imply real-time scarcity
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c <= 6) return c;
        const next = Math.random() > 0.7 ? c - 1 : c;
        sessionStorage.setItem('dixsg-stock', String(next));
        return next;
      });
    }, 22000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      data-testid={TID.stockCounter}
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 ${className}`}
    >
      <Flame size={14} strokeWidth={1.8} className="text-destructive" />
      <span className="text-xs font-semibold tracking-tight">
        Only <span className="font-mono font-bold tabular-nums">{count}</span> left in stock
      </span>
    </div>
  );
}
