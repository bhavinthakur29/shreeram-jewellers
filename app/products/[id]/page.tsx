'use client'
import { useState } from 'react'
import { MessageCircle, ShieldCheck, Star, Heart, Share2 } from 'lucide-react'
import { getProduct, relatedProducts, formatPrice } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ReviewsSection } from '@/components/reviews-section'
import { PincodeChecker } from '@/components/pincode-checker'
import { useWishlist } from '@/components/wishlist-context'
import { useCart } from '@/components/cart-context'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedMetal, setSelectedMetal] = useState(product.metals[0]?.name ?? '')
  const { toggle, has } = useWishlist()
  const { add, openCart } = useCart()
  const isWishlisted = has(product.id)

  const images = product.images || [product.image]

  const whatsappUrl = `https://wa.me/9198XXXXXXXX?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (${product.code}). Please share details.`)}`

  return (
    <main>
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 md:grid-cols-2 md:px-20 md:py-20">
        {/* Images */}
        <div>
          <div className="hero-jharokha-border aspect-square overflow-hidden rounded-t-[3rem] rounded-b-2xl bg-[#FAF6EE] border-2 border-[#C89D47]/40 p-2.5 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
            <div className="hero-jharokha overflow-hidden h-full">
              <img
                src={images[selectedImage]}
                alt={product.name}
                style={{ objectPosition: product.position }}
                className="h-full w-full rounded-t-[2.5rem] rounded-b-xl object-cover transition-opacity duration-300"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                  index === selectedImage ? 'border-gold ring-1 ring-gold/20' : 'border-[#E5DDD0] hover:border-gold/40'
                }`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-gold-dark">{product.code}</p>
            <span className="text-gold/30">&bull;</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-emerald-heritage">{product.inStock ? 'In Stock' : 'Made to Order'}</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl leading-tight text-maroon md:text-5xl">{product.name}</h1>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className={star <= Math.round(product.rating) ? 'fill-gold text-gold' : 'fill-none text-maroon/20'} />
              ))}
            </div>
            <span className="font-sans text-sm text-maroon/50">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.1em] text-gold-dark">
                <ShieldCheck size={10} />
                {tag}
              </span>
            ))}
          </div>

          {/* Price & Weight */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-sans text-2xl font-medium text-maroon">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="font-sans text-sm text-maroon/30 line-through">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="font-sans text-sm text-maroon/40">| Approx. {product.weight}</span>
          </div>

          <p className="mt-6 font-sans text-sm leading-7 text-maroon/50">{product.description}</p>

          {/* Metal Selection */}
          {product.metals.length > 1 && (
            <div className="mt-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/50 mb-3">Metal: {selectedMetal}</p>
              <div className="flex gap-3">
                {product.metals.map((metal) => (
                  <button
                    key={metal.name}
                    onClick={() => setSelectedMetal(metal.name)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2.5 transition-all duration-300 ${
                      selectedMetal === metal.name
                        ? 'border-gold bg-maroon text-gold-light shadow-[0_0_15px_rgba(200,157,71,0.2)]'
                        : 'border-[#C89D47]/20 bg-white/60 text-maroon hover:border-gold/40'
                    }`}
                  >
                    <span className="h-4 w-4 rounded-full border border-white/20" style={{ backgroundColor: metal.hex }} />
                    <span className="font-sans text-[10px] uppercase tracking-[0.1em]">{metal.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          <div className="mt-8 space-y-3">
            {product.details.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-[#C89D47]/10 pb-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/40">{label}</span>
                <span className="font-sans text-sm text-maroon">{value}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-[0.98]"
            >
              <MessageCircle size={14} />
              Enquire on WhatsApp
            </a>
            <div className="flex gap-3">
              <button
                onClick={() => toggle(product)}
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-full border font-sans text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                  isWishlisted
                    ? 'border-gold bg-gold/10 text-gold-dark'
                    : 'border-maroon/20 bg-white/60 text-maroon hover:border-maroon hover:bg-maroon hover:text-gold-light'
                }`}
              >
                <Heart size={14} className={isWishlisted ? 'fill-gold' : ''} />
                {isWishlisted ? 'Saved' : 'Save'}
              </button>
              <button
                onClick={() => {
                  add(product)
                  openCart()
                }}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-maroon/20 bg-white/60 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-gold-light"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Pincode Checker */}
          <div className="mt-6">
            <PincodeChecker />
          </div>

          {/* Trust Signals */}
          <div className="mt-8 flex flex-wrap items-center gap-4 gap-y-2">
            {['BIS Hallmarked 916', 'GIA Certified', 'Insured Delivery', 'Easy Returns'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-[0.15em] text-maroon/30">
                <span className="h-1 w-1 rounded-full bg-gold/40" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-20">
        <ReviewsSection reviews={product.reviews} rating={product.rating} reviewCount={product.reviewCount} />
      </section>

      {/* Related */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-20">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gold/40" />
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">You May Also Adore</p>
          <div className="h-px w-16 bg-gold/40" />
        </div>
        <h2 className="mt-4 text-center font-serif text-4xl text-maroon">Heritage Selections</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts(product.id).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
