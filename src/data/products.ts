export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Party Wear' | 'Casual Wear' | 'Tops';
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  description: string;
  availableSizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  isFeatured: boolean;
  isNewArrival: boolean;
  availability: 'In Stock' | 'Limited Stock';
  isDemoProduct: true;
  details: string[];
  color: string;
}

export const CATEGORIES = [
  {
    id: 'party-wear',
    name: 'Party Wear',
    slug: 'party-wear',
    desc: 'Evening gowns, ruched cocktail dresses & satin jumpsuits designed for celebrations.',
    image: '/images/Champagne Gold Embellished Gown Portrait.webp',
    count: '6 Curated Styles',
  },
  {
    id: 'casual-wear',
    name: 'Casual Wear',
    slug: 'casual-wear',
    desc: 'Tailored blazers, relaxed wide-leg denims & linen co-ords for everyday confidence.',
    image: '/images/Blush Blazer, Charcoal Trousers.webp',
    count: '6 Curated Styles',
  },
  {
    id: 'tops',
    name: 'Tops',
    slug: 'tops',
    desc: 'Crisp poplin shirts, draped satin blouses & fine-knit tops crafted for versatile styling.',
    image: '/images/Ivory Blouse and Burgundy Trousers.webp',
    count: '6 Curated Styles',
  },
] as const;

export const PRODUCTS: Product[] = [
  // ─── PARTY WEAR (6 Items) ───
  {
    id: 'prod-pw-01',
    slug: 'champagne-embellished-evening-gown',
    name: 'Champagne Gold Embellished Gown',
    category: 'Party Wear',
    price: 4899,
    originalPrice: 5999,
    image: '/images/Champagne Gold Embellished Gown Portrait.webp',
    gallery: [
      '/images/Champagne Gold Embellished Gown Portrait.webp',
      '/images/Elegant Shimmering One-Shoulder Evening Dress.webp',
    ],
    description:
      'A breathtaking floor-length evening gown detailed with shimmering champagne embellishments and an elegant drape, crafted for gala evenings, cocktail receptions, and high-glamour celebrations.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Premium embellished mesh with soft stretch satin lining',
      'Fit: Figure-sculpting silhouette with gentle flare',
      'Care: Professional dry clean only',
      'Styling: Pair with minimalist gold heels and delicate clutch',
    ],
    color: 'Champagne Gold',
  },
  {
    id: 'prod-pw-02',
    slug: 'emerald-satin-midi-dress',
    name: 'Emerald Satin Draped Midi Dress',
    category: 'Party Wear',
    price: 3499,
    originalPrice: 4299,
    image: '/images/Emerald Satin Dress Portrait.webp',
    gallery: [
      '/images/Emerald Satin Dress Portrait.webp',
      '/images/Emerald Satin Fashion Portrait.webp',
    ],
    description:
      'Luxurious rich emerald green midi dress cut in glossy satin with an asymmetric cowl neckline and ruching along the waist that flatters every silhouette.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    isNewArrival: false,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Heavyweight polyester satin with liquid sheen',
      'Fit: Midi length, draped waistline',
      'Care: Dry clean or cold delicate hand wash',
      'Origin: Demo catalogue item for Raadnyi Clothing Pune',
    ],
    color: 'Emerald Green',
  },
  {
    id: 'prod-pw-03',
    slug: 'burgundy-ruched-cocktail-dress',
    name: 'Burgundy Ruched Bodycon Dress',
    category: 'Party Wear',
    price: 3299,
    originalPrice: 3999,
    image: '/images/Burgundy Ruched Dress Portrait.webp',
    gallery: [
      '/images/Burgundy Ruched Dress Portrait.webp',
      '/images/Burgundy Elegance with Sparkling Clutch.webp',
    ],
    description:
      'A statement cocktail dress in Raadnyi’s signature deep maroon burgundy hue. Featuring all-over figure-defining ruching and a modern scoop neckline.',
    availableSizes: ['S', 'M', 'L'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Stretch poly-crepe blend',
      'Fit: Snug bodycon with natural stretch comfort',
      'Closure: Concealed back zipper',
      'Occasion: Dinner dates, parties, and anniversary soirees',
    ],
    color: 'Deep Maroon / Burgundy',
  },
  {
    id: 'prod-pw-04',
    slug: 'navy-one-shoulder-evening-gown',
    name: 'Midnight Navy One-Shoulder Gown',
    category: 'Party Wear',
    price: 4299,
    originalPrice: 5199,
    image: '/images/Elegant Navy One-Shoulder Gown.webp',
    gallery: [
      '/images/Elegant Navy One-Shoulder Gown.webp',
      '/images/Elegant Shimmering One-Shoulder Evening Dress.webp',
    ],
    description:
      'Refined evening glamour in midnight navy. The structured one-shoulder cut elongates the neckline while the gentle side slit delivers timeless elegance.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: false,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Premium bonded crepe with silk-touch lining',
      'Feature: Single shoulder architectural strap and side slit',
      'Care: Dry clean recommended',
    ],
    color: 'Midnight Navy',
  },
  {
    id: 'prod-pw-05',
    slug: 'teal-satin-party-jumpsuit',
    name: 'Teal Tailored Satin Jumpsuit',
    category: 'Party Wear',
    price: 3799,
    originalPrice: 4599,
    image: '/images/Elegant Teal Satin Jumpsuit Portrait.webp',
    gallery: [
      '/images/Elegant Teal Satin Jumpsuit Portrait.webp',
      '/images/Elegant Ivory Satin Fashion Portrait.webp',
    ],
    description:
      'The modern alternative to an evening dress. Tailored in deep teal satin with a cinched waistline, pleated palazzo legs, and subtle front tie detailing.',
    availableSizes: ['S', 'M', 'L'],
    isFeatured: false,
    isNewArrival: false,
    availability: 'Limited Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Satin blend with matte-sheen texture',
      'Inseam: Wide palazzo cut for fluid movement',
      'Fit: Tailored bodice with relaxed lower half',
    ],
    color: 'Teal Green',
  },
  {
    id: 'prod-pw-06',
    slug: 'burgundy-puff-sleeve-soiree-dress',
    name: 'Burgundy Puff-Sleeve Soirée Dress',
    category: 'Party Wear',
    price: 3599,
    originalPrice: 4399,
    image: '/images/Burgundy Puff-Sleeve Elegance.webp',
    gallery: [
      '/images/Burgundy Puff-Sleeve Elegance.webp',
      '/images/Joyful Plum Dress Studio Portrait.webp',
    ],
    description:
      'Playful yet deeply sophisticated, this deep maroon dress features organza-lined puff sleeves, a square neckline, and a structured A-line skirt.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Structured cotton-rich stretch crepe',
      'Sleeve: Voluminous puff sleeve with elasticated cuffs',
      'Care: Cold gentle machine wash',
    ],
    color: 'Burgundy Maroon',
  },

  // ─── CASUAL WEAR (6 Items) ───
  {
    id: 'prod-cw-01',
    slug: 'casual-chic-co-ord-set',
    name: 'Neutral Casual Chic Co-ord Set',
    category: 'Casual Wear',
    price: 2699,
    originalPrice: 3299,
    image: '/images/Casual Chic Studio Fashion Portrait.webp',
    gallery: [
      '/images/Casual Chic Studio Fashion Portrait.webp',
      '/images/Relaxed Studio Fashion Portrait.webp',
    ],
    description:
      'Effortless daytime styling in a warm neutral palette. This matching set combines a cropped tailored jacket with pleated, relaxed wide-leg trousers.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Breathable linen-cotton weave',
      'Set includes: Crop button-down jacket + wide-leg trousers',
      'Pockets: Functional deep trouser side pockets',
    ],
    color: 'Sand Beige',
  },
  {
    id: 'prod-cw-02',
    slug: 'relaxed-high-rise-denim-edit',
    name: 'Wide-Leg Relaxed Denim Ensemble',
    category: 'Casual Wear',
    price: 2499,
    originalPrice: 2999,
    image: '/images/Casual Denim Style Portrait.webp',
    gallery: [
      '/images/Casual Denim Style Portrait.webp',
      '/images/Cheerful Casual Denim Fashion Portrait.webp',
    ],
    description:
      'Everyday denim elevated with contemporary tailoring. Cut in washed cotton denim with a high-rise waist and fluid wide-leg fall that transitions easily into evening.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isFeatured: false,
    isNewArrival: false,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: 100% rigid premium cotton denim',
      'Rise: High-rise waist with 5-pocket construction',
      'Care: Machine wash inside out in cold water',
    ],
    color: 'Classic Washed Indigo',
  },
  {
    id: 'prod-cw-03',
    slug: 'blush-tailored-blazer-trouser-set',
    name: 'Blush Tailored Blazer & Charcoal Trousers',
    category: 'Casual Wear',
    price: 3899,
    originalPrice: 4799,
    image: '/images/Blush Blazer, Charcoal Trousers.webp',
    gallery: [
      '/images/Blush Blazer, Charcoal Trousers.webp',
      '/images/Blush Skirt Studio Portrait.webp',
    ],
    description:
      'A smart-casual power look pairing a pastel blush unstructured blazer with sharply tailored charcoal grey cigarette trousers. Perfect for meetings, brunches, and casual gallery days.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Lightweight tropical wool blend & poly-rayon',
      'Fit: Semi-oversized boyfriend blazer with slim-tapered pants',
      'Care: Dry clean recommended',
    ],
    color: 'Blush Pink & Charcoal Grey',
  },
  {
    id: 'prod-cw-04',
    slug: 'ivory-linen-wide-leg-jumpsuit',
    name: 'Ivory Relaxed Linen Jumpsuit',
    category: 'Casual Wear',
    price: 2999,
    originalPrice: 3699,
    image: '/images/Elegant Ivory Linen Jumpsuit Portrait.webp',
    gallery: [
      '/images/Elegant Ivory Linen Jumpsuit Portrait.webp',
      '/images/Professional Casual Outdoor Portrait.webp',
    ],
    description:
      'Sun-drenched ease in natural ivory linen. Features an adjustable waist belt, breezy wide cropped legs, and wooden button details for effortless weekend elegance.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isFeatured: false,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: 70% pure linen, 30% cotton',
      'Breathability: Ultra-breathable for warm afternoons',
      'Features: Detachable self-tie fabric belt',
    ],
    color: 'Warm Ivory',
  },
  {
    id: 'prod-cw-05',
    slug: 'urban-striped-denim-look',
    name: 'Urban Striped Denim Set',
    category: 'Casual Wear',
    price: 2399,
    originalPrice: 2899,
    image: '/images/Playful Striped Denim Studio Portrait.webp',
    gallery: [
      '/images/Playful Striped Denim Studio Portrait.webp',
      '/images/Cheerful Casual Denim Fashion Portrait.webp',
    ],
    description:
      'A fresh urban aesthetic combining fine pinstriped denim trousers with a relaxed casual finish, crafted for modern street style and coffee dates.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isFeatured: false,
    isNewArrival: false,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Pinstripe cotton twill denim',
      'Fit: Mid-rise relaxed boyfriend cut',
      'Care: Machine wash cold with similar colors',
    ],
    color: 'Navy & White Pinstripe',
  },
  {
    id: 'prod-cw-06',
    slug: 'minimalist-sage-trouser-ensemble',
    name: 'Minimalist Sage Daywear Ensemble',
    category: 'Casual Wear',
    price: 2799,
    originalPrice: 3499,
    image: '/images/Polished Casual Studio Portrait.webp',
    gallery: [
      '/images/Polished Casual Studio Portrait.webp',
      '/images/Minimalist Sage Green Fashion Portrait.webp',
    ],
    description:
      'Clean lines and calm earth tones. This minimalist ensemble in muted sage green includes tailored high-waist culottes and a matching lightweight mock-layer.',
    availableSizes: ['S', 'M', 'L'],
    isFeatured: true,
    isNewArrival: false,
    availability: 'Limited Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Textured poly-viscose blend with soft drape',
      'Details: Belt loops with pleat front accents',
      'Styling: Pairs effortlessly with white sneakers or slides',
    ],
    color: 'Sage Green',
  },

  // ─── TOPS (6 Items) ───
  {
    id: 'prod-top-01',
    slug: 'sage-ribbed-everyday-top',
    name: 'Sage Ribbed Contour Top',
    category: 'Tops',
    price: 1499,
    originalPrice: 1899,
    image: '/images/Casual Sage Top Studio Portrait.webp',
    gallery: [
      '/images/Casual Sage Top Studio Portrait.webp',
      '/images/Cheerful Portrait in Sage Green.webp',
    ],
    description:
      'A wardrobe foundation piece crafted in premium wide-rib knit cotton. Features a clean crew neckline and fitted silhouette that tucks smoothly into trousers and skirts.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: 95% combed cotton, 5% elastane rib',
      'Feel: Ultra-soft second-skin contouring',
      'Length: Regular hip length for versatile tucking',
    ],
    color: 'Muted Sage',
  },
  {
    id: 'prod-top-02',
    slug: 'ivory-draped-satin-blouse',
    name: 'Ivory Draped Satin Blouse',
    category: 'Tops',
    price: 1899,
    originalPrice: 2399,
    image: '/images/Ivory Blouse and Burgundy Trousers.webp',
    gallery: [
      '/images/Ivory Blouse and Burgundy Trousers.webp',
      '/images/Ivory Top, Burgundy Trousers.webp',
    ],
    description:
      'Fluid elegance for work or evening. Cut in lustrous ivory satin with draped cowl detail and buttoned French cuffs that command instant polish.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    isNewArrival: false,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: 100% lightweight hammered polyester satin',
      'Cut: Relaxed fit with soft shoulder drape',
      'Care: Hand wash or dry clean',
    ],
    color: 'Warm Ivory',
  },
  {
    id: 'prod-top-03',
    slug: 'lavender-chiffon-gathered-blouse',
    name: 'Lavender Chiffon Gathered Blouse',
    category: 'Tops',
    price: 1699,
    originalPrice: 2199,
    image: '/images/Lavender Blouse and Ivory Skirt Portrait.webp',
    gallery: [
      '/images/Lavender Blouse and Ivory Skirt Portrait.webp',
      '/images/Smiling in Burgundy and Cream.webp',
    ],
    description:
      'Romantic femininity embodied in delicate lavender chiffon. Detailed with subtle shirring along the neckline and soft blouson sleeves.',
    availableSizes: ['S', 'M', 'L'],
    isFeatured: false,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Featherweight poly-chiffon with inner camisole lining',
      'Neckline: Soft jewel neck with keyhole back closure',
      'Occasion: Day-to-night styling',
    ],
    color: 'Pastel Lavender',
  },
  {
    id: 'prod-top-04',
    slug: 'sky-blue-crisp-poplin-shirt',
    name: 'Sky Blue Crisp Poplin Oversized Shirt',
    category: 'Tops',
    price: 1799,
    originalPrice: 2299,
    image: '/images/Sky Blue Shirt Editorial Portrait.webp',
    gallery: [
      '/images/Sky Blue Shirt Editorial Portrait.webp',
      '/images/Smiling in Sky-Blue Lace and White Trousers.webp',
    ],
    description:
      'The quintessential Western shirt reimagined. Crisp cotton poplin in clear sky blue, tailored with an easy oversized silhouette, mother-of-pearl buttons, and dropped shoulders.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    isNewArrival: false,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: 100% crisp combed cotton poplin',
      'Fit: Contemporary oversized boyfriend fit',
      'Care: Machine wash warm, iron while damp for crisp finish',
    ],
    color: 'Sky Blue',
  },
  {
    id: 'prod-top-05',
    slug: 'sky-blue-lace-accent-top',
    name: 'Sky Blue Lace Detailed Top',
    category: 'Tops',
    price: 1599,
    originalPrice: 1999,
    image: '/images/Smiling in Sky-Blue Lace and White Trousers.webp',
    gallery: [
      '/images/Smiling in Sky-Blue Lace and White Trousers.webp',
      '/images/Smiling Woman in Dusty Pink and Charcoal.webp',
    ],
    description:
      'Feminine texture meets modern everyday comfort. Delicate floral lace inset across the shoulders and sleeves elevates this soft powder blue top.',
    availableSizes: ['S', 'M', 'L'],
    isFeatured: false,
    isNewArrival: true,
    availability: 'In Stock',
    isDemoProduct: true,
    details: [
      'Fabric: Viscose jersey body with guipure lace inserts',
      'Sleeve: 3/4 length lace sleeves',
      'Care: Hand wash gently in cold water',
    ],
    color: 'Powder Blue',
  },
  {
    id: 'prod-top-06',
    slug: 'nautical-striped-fine-knit-top',
    name: 'Nautical Striped Fine-Knit Top',
    category: 'Tops',
    price: 1649,
    originalPrice: 2099,
    image: '/images/Smiling Woman in Striped Sweater and Trousers.webp',
    gallery: [
      '/images/Smiling Woman in Striped Sweater and Trousers.webp',
      '/images/Confident Maroon and Cream Portrait.webp',
    ],
    description:
      'A Parisian-inspired Breton stripe top in ultra-fine cotton knit. Styled with a classic boat neckline and bracelet-length sleeves for timeless polish.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    isNewArrival: true,
    availability: 'Limited Stock',
    isDemoProduct: true,
    details: [
      'Fabric: 100% fine-gauge combed cotton',
      'Neckline: Flattering horizontal boat neckline',
      'Styling: Looks stunning paired with white trousers or denim',
    ],
    color: 'Navy & Cream Stripe',
  },
];

