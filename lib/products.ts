export type Metal = { name: string; hex: string }

export type Review = {
  id: string
  author: string
  rating: number
  date: string
  title: string
  body: string
  verified: boolean
}

export type Product = {
  id: string
  code: string
  name: string
  price: number
  originalPrice?: number
  weight: string
  category: string
  collection: string
  description: string
  image: string
  images?: string[]
  position?: string
  tags: string[]
  details: [string, string][]
  metals: Metal[]
  rating: number
  reviewCount: number
  reviews: Review[]
  inStock: boolean
  badge?: string
}

export const products: Product[] = [
  {
    id: 'jaipur-jadau-polki-choker',
    code: 'SJ-JK-001',
    name: 'Jaipur Jadau Polki Choker',
    price: 345000,
    originalPrice: 380000,
    weight: '48.2g 22KT',
    category: 'Chokers',
    collection: 'Jadau & Polki',
    description: 'Handcrafted Jadau choker featuring uncut Basra Polki diamonds set in 22KT gold with meenakari reverse work. A masterpiece of Jaipur\'s living heritage.',
    image: '/hero-jewelry.png',
    images: ['/hero-jewelry.png', '/jewelry-products.png', '/atelier.png', '/hero-jewelry.png'],
    position: '58% 45%',
    tags: ['22KT BIS Hallmarked', 'Natural Basra Pearls', 'Jaipur Jadau'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Gemstones', 'Uncut Basra Polki Diamonds'],
      ['Technique', 'Traditional Jadau Kundan Setting'],
      ['Weight', '48.2 grams Approx.'],
      ['Origin', 'Handcrafted in Jaipur'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }, { name: '22KT Rose Gold', hex: '#B76E79' }],
    rating: 4.8,
    reviewCount: 124,
    reviews: [
      { id: 'r1', author: 'Priya M.', rating: 5, date: '2025-08-15', title: 'Absolutely Stunning!', body: 'The craftsmanship is extraordinary. Every Polki diamond is perfectly set. Wore this for my engagement and received countless compliments.', verified: true },
      { id: 'r2', author: 'Ananya S.', rating: 5, date: '2025-07-22', title: 'Worth Every Penny', body: 'Beautiful piece with excellent weight and finish. The meenakari work on the reverse is equally impressive. True Jaipur heritage.', verified: true },
      { id: 'r3', author: 'Meera K.', rating: 4, date: '2025-06-10', title: 'Great Quality', body: 'Very happy with the purchase. The choker sits perfectly and the Basra pearls add elegance. Delivery was prompt.', verified: true },
    ],
    inStock: true,
    badge: 'Bestseller',
  },
  {
    id: 'meenakari-heritage-bangles',
    code: 'SJ-MB-002',
    name: 'Meenakari Heritage Bangles',
    price: 189000,
    weight: '32.6g 22KT',
    category: 'Bangles',
    collection: 'Meenakari',
    description: 'Set of four hand-enameled Meenakari bangles with floral motifs in royal green, crimson, and ivory. Each bangle takes 40 hours of meticulous craftsmanship.',
    image: '/jewelry-products.png',
    images: ['/jewelry-products.png', '/hero-jewelry.png', '/atelier.png', '/jewelry-products.png'],
    position: '52% 18%',
    tags: ['22KT BIS Hallmarked', 'Meenakari Enamel', 'Jaipur Craft'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Technique', 'Traditional Jaipur Meenakari'],
      ['Set', '4 Bangles'],
      ['Weight', '32.6 grams Approx.'],
      ['Motifs', 'Royal Floral Paisley'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }],
    rating: 4.6,
    reviewCount: 89,
    reviews: [
      { id: 'r4', author: 'Deepa R.', rating: 5, date: '2025-09-01', title: 'Vibrant Colors!', body: 'The meenakari colors are so vibrant and rich. These bangles are a work of art. Perfect for weddings.', verified: true },
      { id: 'r5', author: 'Kavita J.', rating: 4, date: '2025-08-05', title: 'Beautiful Craftsmanship', body: 'Love the floral motifs. The enamel work is very detailed. Slightly heavier than expected but that speaks to the quality.', verified: true },
    ],
    inStock: true,
  },
  {
    id: 'royal-rajputi-aad',
    code: 'SJ-RA-003',
    name: 'Royal Rajputi Aad Necklace',
    price: 525000,
    weight: '72.8g 22KT',
    category: 'Necklaces',
    collection: 'Royal Rajputi',
    description: 'A magnificent Rajputi Aad necklace featuring cascading Polki diamonds and natural emeralds in a traditional rigid collar setting. The crown jewel of Rajasthani bridal trousseaux.',
    image: '/hero-jewelry.png',
    images: ['/hero-jewelry.png', '/jewelry-products.png', '/atelier.png', '/hero-jewelry.png'],
    position: '30% 45%',
    tags: ['22KT BIS Hallmarked', 'GIA Certified', 'Bridal Heritage'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Gemstones', 'Polki Diamonds & Colombian Emeralds'],
      ['Style', 'Traditional Rajputi Aad Collar'],
      ['Weight', '72.8 grams Approx.'],
      ['Occasion', 'Bridal & Royal Ceremonies'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }],
    rating: 4.9,
    reviewCount: 67,
    reviews: [
      { id: 'r6', author: 'Shreya V.', rating: 5, date: '2025-09-10', title: 'Royal Elegance', body: 'This Aad necklace is truly majestic. The Polki diamonds catch light beautifully. My wedding jewellery is sorted!', verified: true },
    ],
    inStock: true,
    badge: 'New',
  },
  {
    id: 'temple-gold-emerald-haram',
    code: 'SJ-TH-004',
    name: 'Temple Gold & Emerald Haram',
    price: 412000,
    weight: '56.4g 22KT',
    category: 'Necklaces',
    collection: 'Temple Gold',
    description: 'An elaborate temple gold haram with hand-carved Lakshmi motifs and Zambian emerald drops. Inspired by the sacred jewellery traditions of South Indian temples.',
    image: '/jewelry-products.png',
    images: ['/jewelry-products.png', '/hero-jewelry.png', '/atelier.png', '/jewelry-products.png'],
    position: '95% 12%',
    tags: ['22KT BIS Hallmarked', 'Natural Emeralds', 'Temple Heritage'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Gemstones', 'Zambian Emeralds & Seed Pearls'],
      ['Motifs', 'Goddess Lakshmi Temple Design'],
      ['Weight', '56.4 grams Approx.'],
      ['Length', '22 inches Traditional Haram'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }],
    rating: 4.7,
    reviewCount: 53,
    reviews: [
      { id: 'r7', author: 'Lakshmi N.', rating: 5, date: '2025-07-18', title: 'Divine Beauty', body: 'The Lakshmi motifs are so intricate. This haram is a masterpiece of temple jewellery. Highly recommended for South Indian brides.', verified: true },
    ],
    inStock: true,
  },
  {
    id: 'hasli-heritage-necklace',
    code: 'SJ-HN-005',
    name: 'Hasli Heritage Necklace',
    price: 278000,
    weight: '38.5g 22KT',
    category: 'Necklaces',
    collection: 'Royal Rajputi',
    description: 'A bold traditional Hasli necklace with rigid torque design and hanging gold bead drops. Timeless Rajasthani silversmith artistry reimagined in 22KT gold.',
    image: '/atelier.png',
    images: ['/atelier.png', '/hero-jewelry.png', '/jewelry-products.png', '/atelier.png'],
    position: '60% 40%',
    tags: ['22KT BIS Hallmarked', 'Artisan Made', 'Heritage Design'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Style', 'Traditional Hasli Torque'],
      ['Finish', 'Heritage Antiqued Gold'],
      ['Weight', '38.5 grams Approx.'],
      ['Closure', 'Traditional Hook Clasp'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }, { name: '22KT Oxidized Gold', hex: '#8B7355' }],
    rating: 4.5,
    reviewCount: 41,
    reviews: [
      { id: 'r8', author: 'Ritu A.', rating: 5, date: '2025-08-20', title: 'Unique Design', body: 'Love the torque design. It sits beautifully on the neck. The antiqued finish gives it a royal look.', verified: true },
    ],
    inStock: true,
  },
  {
    id: 'kundan-polki-earrings',
    code: 'SJ-KE-006',
    name: 'Kundan Polki Jhumka Earrings',
    price: 156000,
    weight: '22.4g 22KT',
    category: 'Earrings',
    collection: 'Jadau & Polki',
    description: 'Exquisite Kundan Polki jhumkas with pear-shaped Basra pearl drops and meenakari detailing on the reverse. Each earring is a miniature work of art.',
    image: '/jewelry-products.png',
    images: ['/jewelry-products.png', '/hero-jewelry.png', '/atelier.png', '/jewelry-products.png'],
    position: '94% 15%',
    tags: ['22KT BIS Hallmarked', 'Natural Basra Pearls', 'Kundan Craft'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Gemstones', 'Uncut Polki & Basra Pearls'],
      ['Style', 'Traditional Jhumka Drop'],
      ['Weight', '22.4 grams Approx.'],
      ['Back', 'Meenakari Enamel Work'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }],
    rating: 4.8,
    reviewCount: 98,
    reviews: [
      { id: 'r9', author: 'Nisha P.', rating: 5, date: '2025-09-05', title: 'Perfect Jhumkas', body: 'These are the most beautiful jhumkas I own. The Basra pearl drops add such elegance. True heritage piece.', verified: true },
      { id: 'r10', author: 'Varsha G.', rating: 5, date: '2025-08-12', title: 'Exquisite Craft', body: 'The meenakari work on the reverse is stunning. You can tell these are handcrafted with love. Worth every rupee.', verified: true },
    ],
    inStock: true,
    badge: 'Bestseller',
  },
  {
    id: 'bridal-kundan-set',
    code: 'SJ-BK-007',
    name: 'Bridal Kundan Parure Set',
    price: 890000,
    originalPrice: 950000,
    weight: '112.5g 22KT',
    category: 'Sets',
    collection: 'Jadau & Polki',
    description: 'Complete bridal parure featuring necklace, earrings, maang tikka, and bangles in elaborate Kundan Jadau work. The definitive Jaipur bridal trousseau centrepiece.',
    image: '/hero-jewelry.png',
    images: ['/hero-jewelry.png', '/jewelry-products.png', '/atelier.png', '/hero-jewelry.png'],
    position: '50% 30%',
    tags: ['22KT BIS Hallmarked', 'Bridal Collection', 'Jadau Parure'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Gemstones', 'Polki, Emeralds, Basra Pearls'],
      ['Set', 'Necklace, Earrings, Tikka, Bangles'],
      ['Weight', '112.5 grams Approx.'],
      ['Occasion', 'Bridal Trousseau'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }],
    rating: 4.9,
    reviewCount: 34,
    reviews: [
      { id: 'r11', author: 'Divya M.', rating: 5, date: '2025-09-12', title: 'Dream Bridal Set', body: 'This parure is every bride\'s dream. The craftsmanship is museum-quality. My wedding photos looked stunning because of this set.', verified: true },
    ],
    inStock: true,
    badge: 'Premium',
  },
  {
    id: 'polki-chandbali-earrings',
    code: 'SJ-PC-008',
    name: 'Polki Chandbali Earrings',
    price: 215000,
    originalPrice: 240000,
    weight: '28.6g 22KT',
    category: 'Earrings',
    collection: 'Jadau & Polki',
    description: 'Crescent-shaped Chandbali earrings with tiered Polki diamonds and tiny pearl fringes. A nod to the royal courts of Rajputana.',
    image: '/jewelry-products.png',
    images: ['/jewelry-products.png', '/hero-jewelry.png', '/atelier.png', '/jewelry-products.png'],
    position: '18% 10%',
    tags: ['22KT BIS Hallmarked', 'Polki Diamonds', 'Rajputana Design'],
    details: [
      ['Metal', '22KT Yellow Gold (916 Hallmarked)'],
      ['Gemstones', 'Uncut Polki Diamonds'],
      ['Style', 'Chandbali Crescent Drop'],
      ['Weight', '28.6 grams Approx.'],
      ['Finish', 'Heritage Gold Polish'],
    ],
    metals: [{ name: '22KT Yellow Gold', hex: '#D4AF37' }, { name: '22KT Rose Gold', hex: '#B76E79' }],
    rating: 4.7,
    reviewCount: 76,
    reviews: [
      { id: 'r12', author: 'Pooja L.', rating: 5, date: '2025-08-28', title: 'Royal Look', body: 'These chandbalis make me feel like royalty. The pearl fringes move so gracefully. Absolutely love them!', verified: true },
    ],
    inStock: true,
    badge: 'Sale',
  },
]

export const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`

export const getProduct = (id: string) => products.find((product) => product.id === id) ?? products[0]

export const relatedProducts = (id: string) => products.filter((product) => product.id !== id).slice(0, 4)

export const searchProducts = (query: string) => {
  const q = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  )
}

export const collections = [
  { name: 'Jadau & Polki', image: '/jewelry-products.png', position: '5% 5%', count: 3 },
  { name: 'Meenakari', image: '/hero-jewelry.png', position: '30% 45%', count: 1 },
  { name: 'Royal Rajputi', image: '/jewelry-products.png', position: '94% 15%', count: 2 },
  { name: 'Temple Gold', image: '/jewelry-products.png', position: '94% 92%', count: 1 },
  { name: 'Bridal Trousseau', image: '/atelier.png', position: '65% 50%', count: 1 },
] as const

export const categories = ['Chokers', 'Necklaces', 'Bangles', 'Earrings', 'Sets'] as const

export const announcements = [
  'Complimentary Insured Pan-India Delivery on All Orders',
  'BIS Hallmarked 916 Gold — Certified Purity Guaranteed',
  'GIA & IGI Certified Diamonds — Book Your Private Viewing',
  'Zero Making Charges on Select Gold Collections',
]
