'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Eye, MessageCircle, Star } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'
import { useWishlist } from '@/components/wishlist-context'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const metals = product.metals || []
  const tags = product.tags || []
  const rating = typeof product.rating === 'number' ? product.rating : 5
  const reviewCount = product.reviewCount ?? 12

  const [hoveredMetal, setHoveredMetal] = useState<string | null>(null)
  const [selectedMetal, setSelectedMetal] = useState(metals[0]?.name ?? '')
  const { toggle, has } = useWishlist()
  const isWishlisted = has(product.id)

  const whatsappUrl = `https://wa.me/9198XXXXXXXX?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name} (${product.code}). Please share details.`
  )}`

  return (
    <article className="group bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(74,14,23,0.04)] hover:shadow-[0_12px_32px_rgba(74,14,23,0.08)] hover:border-[#C89D47]/40 transition-all duration-500 flex flex-col justify-between">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF6EE]">
        <Link href={`/products/${product.id}`} className="absolute inset-0 z-0 overflow-hidden block">
          <Image
            src={product.image || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000'}
            alt={product.name || 'Jewellery piece'}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectPosition: product.position || 'center' }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </Link>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-maroon/15 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span
              className={`inline-block rounded-full px-3 py-1 font-sans text-[8px] font-medium uppercase tracking-[0.1em] text-gold-light ${product.badge === 'Sale'
                ? 'bg-red-500/90'
                : product.badge === 'New'
                  ? 'bg-emerald-heritage/90'
                  : product.badge === 'Premium'
                    ? 'bg-maroon/90'
                    : 'bg-gold-dark/90'
                }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Floating Actions */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
          <button
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={(e) => {
              e.preventDefault()
              toggle(product)
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md bg-white/80 border border-gold/20 text-maroon/60 transition-colors duration-200 hover:text-maroon hover:border-gold/40"
          >
            <Heart size={14} className={isWishlisted ? 'fill-gold text-gold' : ''} />
          </button>
          <Link
            href={`/products/${product.id}`}
            aria-label={`Quick view ${product.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md bg-white/80 border border-gold/20 text-maroon/60 transition-colors duration-200 hover:text-maroon hover:border-gold/40"
          >
            <Eye size={14} />
          </Link>
        </div>

        {/* Purity Tags */}
        {!product.badge && tags.length > 0 && (
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-maroon/80 backdrop-blur-md px-2.5 py-1 font-sans text-[8px] uppercase tracking-[0.1em] text-gold-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Collection Badge */}
        {product.collection && (
          <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
            <span className="inline-block rounded-full bg-white/85 backdrop-blur-md px-3 py-1 font-sans text-[9px] uppercase tracking-[0.15em] text-maroon border border-gold/20">
              {product.collection}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 pb-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Code & Category */}
          <div className="flex items-center justify-between">
            <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-maroon/30">
              {product.code}
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-dark">
              {product.category}
            </span>
          </div>

          {/* Name */}
          <Link
            href={`/products/${product.id}`}
            className="mt-2 block font-serif text-base font-medium leading-snug text-maroon transition-colors duration-200 hover:text-gold-dark line-clamp-1"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="mt-1.5 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={10}
                  className={
                    star <= Math.round(rating)
                      ? 'fill-gold text-gold'
                      : 'fill-none text-maroon/20'
                  }
                />
              ))}
            </div>
            <span className="font-sans text-[9px] text-maroon/40">({reviewCount})</span>
          </div>

          {/* Price & Weight */}
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="font-sans text-sm font-medium text-gold-dark">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-[10px] text-maroon/30 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="font-sans text-[10px] text-maroon/40">| {product.weight}</span>
          </div>

          {/* Metal Swatches */}
          {metals.length > 0 && (
            <div className="mt-3 flex items-center gap-1.5">
              {metals.map((metal) => (
                <button
                  key={metal.name}
                  aria-label={metal.name}
                  onMouseEnter={() => setHoveredMetal(metal.name)}
                  onMouseLeave={() => setHoveredMetal(null)}
                  onClick={() => setSelectedMetal(metal.name)}
                  className={`relative h-4 w-4 rounded-full border transition-all duration-200 ${selectedMetal === metal.name
                    ? 'border-gold ring-1 ring-gold/30 scale-110'
                    : 'border-[#E5DDD0] hover:border-gold/50'
                    }`}
                  style={{ backgroundColor: metal.hex }}
                  title={metal.name}
                />
              ))}
              {(hoveredMetal || selectedMetal) && (
                <span className="ml-1 font-sans text-[9px] text-maroon/40">
                  {hoveredMetal || selectedMetal}
                </span>
              )}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-4 flex gap-2 pt-2 border-t border-[#C89D47]/10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/20 hover:shadow-[0_0_15px_rgba(37,211,102,0.15)]"
          >
            <MessageCircle size={12} />
            Enquire
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-3 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon hover:shadow-[0_0_15px_rgba(74,14,23,0.2)]"
          >
            <MessageCircle size={12} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}