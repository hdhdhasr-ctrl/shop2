import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { TID } from '@/lib/testIds';

const NAV = [
  { label: 'Product', href: '#showcase', tid: TID.navProduct },
  { label: 'Features', href: '#features', tid: TID.navFeatures },
  { label: 'Reviews', href: '#reviews', tid: TID.navReviews },
  { label: 'FAQ', href: '#faq', tid: TID.navFaq },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      data-testid={TID.header}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-8 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            data-testid={TID.logo}
            className="flex items-center gap-2 font-display font-bold tracking-tight"
          >
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
              <span className="font-display text-base font-bold leading-none">D</span>
            </span>
            <span className="text-lg leading-none">
              <span>Darker</span>
              <span className="hidden md:inline text-muted-foreground text-sm font-normal ml-2">
                · S510 Pulse Pro
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                data-testid={item.tid}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              data-testid={TID.themeToggle}
              onClick={toggle}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-secondary transition-colors active:scale-95"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun size={18} strokeWidth={1.6} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon size={18} strokeWidth={1.6} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity active:scale-95"
            >
              Buy Now
            </a>

            <button
              type="button"
              data-testid={TID.mobileMenuToggle}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 glass rounded-3xl p-4 flex flex-col gap-1"
            >
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  data-testid={`${TID.mobileNavLink}-${item.label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium hover:bg-secondary rounded-2xl"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
