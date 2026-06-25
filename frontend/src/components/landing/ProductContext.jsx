import { createContext, useContext, useMemo, useState } from 'react';
import { PRODUCT } from '@/lib/product';

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [selectedVariantId, setSelectedVariantId] = useState(PRODUCT.variants[0].id);

  const selectedVariant = useMemo(
    () => PRODUCT.variants.find((v) => v.id === selectedVariantId) || PRODUCT.variants[0],
    [selectedVariantId],
  );

  const value = useMemo(
    () => ({
      product: PRODUCT,
      variants: PRODUCT.variants,
      selectedVariantId,
      selectedVariant,
      setSelectedVariantId,
    }),
    [selectedVariantId, selectedVariant],
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProduct must be used within ProductProvider');
  return ctx;
}
