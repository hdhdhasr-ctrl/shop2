import { useState } from 'react';
import { Loader2, ShoppingBag, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { useProduct } from './ProductContext';
import { addToCart, buyNowCheckout } from '@/lib/shopify';

/**
 * Premium CTA button that wires through to the Shopify Storefront API.
 * Variant comes from ProductContext so the selected color is always used.
 */
export default function BuyButton({
  variant = 'primary', // 'primary' | 'secondary' | 'inverted'
  action = 'buy', // 'buy' | 'cart'
  className = '',
  testId,
  fullWidth = false,
  children,
}) {
  const { selectedVariant, selectedVariantId, product } = useProduct();
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    if (loading) return;
    setLoading(true);
    try {
      if (action === 'buy') {
        const cart = await buyNowCheckout(selectedVariantId, 1);
        if (cart && cart.checkoutUrl) {
          // Open in a new tab so the buyer keeps the landing page open.
          // Falls back to same-tab if the popup is blocked.
          const win = window.open(cart.checkoutUrl, '_blank', 'noopener,noreferrer');
          if (!win) window.location.href = cart.checkoutUrl;
        } else {
          throw new Error('No checkout URL returned');
        }
      } else {
        const cart = await addToCart(selectedVariantId, 1);
        toast.success(`${product.modelName} (${selectedVariant.label}) added to cart`, {
          description: `${cart.totalQuantity} item${cart.totalQuantity === 1 ? '' : 's'} in cart`,
          action: cart.checkoutUrl
            ? {
                label: 'Checkout',
                onClick: () => window.open(cart.checkoutUrl, '_blank', 'noopener,noreferrer'),
              }
            : undefined,
        });
      }
    } catch (e) {
      toast.error('Checkout temporarily unavailable.', {
        description:
          'Please try again in a moment. If the issue persists, contact support@darker.shop.',
      });
    } finally {
      setLoading(false);
    }
  };

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 active:scale-95 disabled:opacity-70';
  const sizes = 'px-7 py-3.5 text-sm sm:text-[15px]';

  const styles = {
    primary: 'bg-foreground text-background hover:opacity-90 shadow-lg shadow-foreground/10',
    secondary: 'bg-secondary text-foreground border border-border hover:bg-surface-hover',
    inverted: 'bg-background text-foreground hover:opacity-90',
  };

  const Icon = action === 'buy' ? Zap : ShoppingBag;
  const defaultLabel = action === 'buy' ? 'Buy Now' : 'Add to Cart';

  return (
    <button
      type="button"
      data-testid={testId}
      onClick={handle}
      disabled={loading}
      className={`${base} ${sizes} ${styles[variant]} ${fullWidth ? 'w-full sm:w-auto' : ''} ${className}`}
    >
      {loading ? (
        <Loader2 size={16} strokeWidth={2} className="animate-spin" />
      ) : (
        <Icon size={15} strokeWidth={2} />
      )}
      <span>{children || defaultLabel}</span>
    </button>
  );
}
