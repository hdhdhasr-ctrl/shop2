// Product data — sourced from the live Shopify product
// gid://shopify/Product/10892048826706
// "S510 TWS Bluetooth Earbuds with LED Display"

const CDN = 'https://cdn.shopify.com/s/files/1/1084/4910/4210/files';

export const PRODUCT = {
  id: 'gid://shopify/Product/10892048826706',
  title: 'S510 TWS Bluetooth Earbuds',
  // Marketing model name created for this brand experience
  modelName: 'S510 Pulse Pro',
  brand: 'Darker',
  priceCurrent: 29.99,
  priceCompare: 39.99,
  discountPercent: 25,
  currency: 'USD',
  featuredImage: `${CDN}/S3f6c70db1f0d43b58684aea4c7a75f42F.webp?v=1782301949`,
  gallery: [
    {
      url: `${CDN}/S3f6c70db1f0d43b58684aea4c7a75f42F.webp?v=1782301949`,
      label: 'Front view',
      caption: 'S510 Pulse Pro with LED display charging case.',
    },
    {
      url: `${CDN}/Scd22fdb1fa5a4d078e9161f56e67bc7dK.webp?v=1782301949`,
      label: 'Case detail',
      caption: 'Compact ergonomic charging case with LED battery indicator.',
    },
    {
      url: `${CDN}/S5c03554621394741b3f93cf843b8162fn.webp?v=1782301949`,
      label: 'Earbud detail',
      caption: 'Sleek stem with touch-sensitive controls.',
    },
    {
      url: `${CDN}/S1024d26226fb44199ff2dae035f9130eB.webp?v=1782301949`,
      label: 'In hand',
      caption: 'Pocket-friendly form factor for everyday carry.',
    },
    {
      url: `${CDN}/S6e96d4cc4f08412989f71859f47e0c2dI.webp?v=1782301949`,
      label: 'Lifestyle',
      caption: 'Designed for music, calls, gaming and travel.',
    },
  ],
  // Real Shopify product variants
  variants: [
    {
      id: 'gid://shopify/ProductVariant/53829349441874',
      name: 'black',
      label: 'Midnight Black',
      swatch: '#1B1B1F',
      ring: '#3a3a40',
      image: `${CDN}/S939e1dbbcd1947ba998467b0922717478.webp?v=1782301949`,
    },
    {
      id: 'gid://shopify/ProductVariant/53829349474642',
      name: 'white',
      label: 'Glacier White',
      swatch: '#F1F1F0',
      ring: '#d8d8d6',
      image: `${CDN}/S90bca74f41d34343ad8244ff94f8ed83X.webp?v=1782301950`,
    },
    {
      id: 'gid://shopify/ProductVariant/53829349409106',
      name: 'khaki',
      label: 'Desert Khaki',
      swatch: '#BFA37A',
      ring: '#8a754d',
      image: `${CDN}/S3ca0789f85b744f2b221882a9e3b7955b.webp?v=1782301949`,
    },
  ],
};

export const SHOPIFY_CONFIG = {
  domain: 'ignca0-wb.myshopify.com',
  apiVersion: '2024-07',
  storefrontToken: '1e498220940cef091a228d39678f608c',
};
