// Shopify Storefront API integration — direct cart create / add
// Replaces the Buy Button widget approach so we can pass variants and style natively.

import { SHOPIFY_CONFIG } from './product';

const ENDPOINT = `https://${SHOPIFY_CONFIG.domain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`;
const CART_STORAGE_KEY = 'dixsg-cart-id';

async function gql(query, variables = {}) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.storefrontToken,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join(', '));
  return json.data;
}

/**
 * The merchant has a custom storefront domain that may not be live yet
 * (returns 404). Rewrite checkoutUrl to the canonical myshopify.com host so
 * checkout always works regardless of custom-domain status.
 */
function normaliseCheckoutUrl(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    u.host = SHOPIFY_CONFIG.domain;
    u.protocol = 'https:';
    return u.toString();
  } catch (e) {
    return url;
  }
}

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
          }
        }
      }
    }
  }
`;

/**
 * Create a brand-new cart with a single line item.
 */
export async function createCart(variantId, quantity = 1) {
  const data = await gql(
    `mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { input: { lines: [{ merchandiseId: variantId, quantity }] } },
  );
  const cart = data.cartCreate.cart;
  if (cart && cart.id) localStorage.setItem(CART_STORAGE_KEY, cart.id);
  if (cart) cart.checkoutUrl = normaliseCheckoutUrl(cart.checkoutUrl);
  return cart;
}

/**
 * Add a variant to the persistent cart (creates one if needed).
 * Returns the updated cart.
 */
export async function addToCart(variantId, quantity = 1) {
  const existingId = localStorage.getItem(CART_STORAGE_KEY);
  if (!existingId) return createCart(variantId, quantity);

  try {
    const data = await gql(
      `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart { ${CART_FIELDS} }
          userErrors { message }
        }
      }`,
      {
        cartId: existingId,
        lines: [{ merchandiseId: variantId, quantity }],
      },
    );
    const cart = data.cartLinesAdd.cart;
    if (!cart) {
      // Cart expired/invalid — create a new one
      localStorage.removeItem(CART_STORAGE_KEY);
      return createCart(variantId, quantity);
    }
    cart.checkoutUrl = normaliseCheckoutUrl(cart.checkoutUrl);
    return cart;
  } catch (e) {
    localStorage.removeItem(CART_STORAGE_KEY);
    return createCart(variantId, quantity);
  }
}

/**
 * Buy now: create a fresh single-item cart and return the checkoutUrl.
 * (We don't reuse persistent cart here so the buyer only pays for this item.)
 */
export async function buyNowCheckout(variantId, quantity = 1) {
  const data = await gql(
    `mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { id checkoutUrl }
        userErrors { message }
      }
    }`,
    { input: { lines: [{ merchandiseId: variantId, quantity }] } },
  );
  return {
    ...data.cartCreate.cart,
    checkoutUrl: normaliseCheckoutUrl(data.cartCreate.cart?.checkoutUrl),
  };
}
