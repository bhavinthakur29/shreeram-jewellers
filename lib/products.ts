export type Metal = { name: string; hex: string }
export type Product = {
  id: string
  code: string
  name: string
  price: number
  weight: string
  category: string
  collection: string
  description: string
  image: string
  position?: string
  tags: string[]
  details: [string, string][]
  metals: Metal[]
}

export const products: Product[] = [
  {
    id: 'jaipur-jadau-polki-choker',
    code: 'SJ-JK-001',
    name: 'Jaipur Jadau Polki Choker',
    price: 345000,
    weight: '48.2g 22KT',
    category: 'Chokers',
    collection: 'Jadau & Polki',
    description: 'Handcrafted Jadau choker featuring uncut Basra Polki diamonds set in 22KT gold with meenakari reverse work. A masterpiece of Jaipur\'s living heritage.',
    image: '/hero-jewelry.png',
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
  },
  {
    id: 'bridal-kundan-set',
    code: 'SJ-BK-007',
    name: 'Bridal Kundan Parure Set',
    price: 890000,
    weight: '112.5g 22KT',
    category: 'Sets',
    collection: 'Jadau & Polki',
    description: 'Complete bridal parure featuring necklace, earrings, maang tikka, and bangles in elaborate Kundan Jadau work. The definitive Jaipur bridal trousseau centrepiece.',
    image: '/hero-jewelry.png',
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
  },
  {
    id: 'polki-chandbali-earrings',
    code: 'SJ-PC-008',
    name: 'Polki Chandbali Earrings',
    price: 215000,
    weight: '28.6g 22KT',
    category: 'Earrings',
    collection: 'Jadau & Polki',
    description: 'Crescent-shaped Chandbali earrings with tiered Polki diamonds and tiny pearl fringes. A nod to the royal courts of Rajputana.',
    image: '/jewelry-products.png',
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
  },
]

export const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`

export const getProduct = (id: string) => products.find((product) => product.id === id) ?? products[0]

export const relatedProducts = (id: string) => products.filter((product) => product.id !== id).slice(0, 4)

export const collections = [
  { name: 'Jadau & Polki', image: '/jewelry-products.png', position: '5% 5%' },
  { name: 'Meenakari', image: '/hero-jewelry.png', position: '30% 45%' },
  { name: 'Royal Rajputi', image: '/jewelry-products.png', position: '94% 15%' },
  { name: 'Temple Gold', image: '/jewelry-products.png', position: '94% 92%' },
  { name: 'Bridal Trousseau', image: '/atelier.png', position: '65% 50%' },
] as const
