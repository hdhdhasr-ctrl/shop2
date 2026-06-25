import { useState } from 'react';
import { Instagram, Twitter, Youtube, Facebook, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { TID } from '@/lib/testIds';

const COLUMNS = [
  {
    title: 'Product',
    links: ['Earbuds', 'Charging Case', 'Accessories', 'Companion App'],
  },
  {
    title: 'Support',
    links: ['Shipping Information', 'Returns Policy', 'Order Tracking', 'Contact Us'],
  },
  {
    title: 'Company',
    links: ['About Darker', 'Press', 'Sustainability', 'Careers'],
  },
];

const SOCIAL = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Youtube, label: 'YouTube' },
  { Icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success("You're in. Watch your inbox for launch perks.");
    setEmail('');
  };

  return (
    <footer
      data-testid={TID.footer}
      className="relative pt-24 pb-10 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-border">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 font-display font-bold tracking-tight mb-4">
              <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
                <span className="font-display text-base font-bold leading-none">D</span>
              </span>
              <span className="text-lg">Darker</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight leading-tight max-w-md">
              Be the first to hear what&apos;s next.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Product drops, firmware updates, and early-access invitations — straight to your inbox. No spam.
            </p>

            <form onSubmit={submit} className="mt-6 flex items-center gap-2 max-w-md">
              <div className="relative flex-1">
                <Mail
                  size={16}
                  strokeWidth={1.6}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  data-testid={TID.newsletterInput}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full rounded-full bg-secondary border border-border pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>
              <button
                type="submit"
                data-testid={TID.newsletterSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity active:scale-95"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-sm font-medium hover:text-accent transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Darker. Crafted for the way you listen.
          </div>
          <div className="flex items-center gap-2">
            {SOCIAL.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={label}
                data-testid={TID.socialLink}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card hover:bg-secondary transition-colors"
              >
                <Icon size={15} strokeWidth={1.6} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
