'use client'
import Link from 'next/link'
import { Heart, Eye, MessageCircle, Calendar } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'

export function ProductCard({ product, onBookViewing }: { product: Product; onBookViewing?: (product: Product) => void }) {
  const [liked, setLiked] = useState(false)
  const [hoveredMetal, setHoveredMetal] = useState<string | null>(null)
  const [selectedMetal, setSelectedMetal] = useState(product.metals[0]?.name ?? '')

  const whatsappUrl = `https://wa.me/9198XXXXXXXX?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (${product.code}). Please share details.`)}`

  return (
    <article className="group bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(74,14,23,0.04)] hover:shadow-[0_12px_32px_rgba(74,14,23,0.08)] hover:border-[#C89D47]/40 transition-all duration-500">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF6EE]">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            style={{ objectPosition: product.position }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </Link>

        <div className="product-image-overlay absolute inset-0 bg-gradient-to-t from-maroon/10 via-transparent to-transparent" />

        {/* Floating Actions */}
        <div className="product-image-overlay absolute right-3 top-3 flex flex-col gap-2">
          <button
            aria-label={`Add ${product.name} to wishlist`}
            onClick={() => setLiked(!liked)}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md bg-white/80 border border-gold/20 text-maroon/60 transition-colors duration-200 hover:text-maroon hover:border-gold/40"
          >
            <Heart size={14} className={liked ? 'fill-gold text-gold' : ''} />
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
        <div className="product-image-overlay absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="inline-block rounded-full bg-maroon/80 backdrop-blur-md px-2.5 py-1 font-sans text-[8px] uppercase tracking-[0.1em] text-gold-light">
              {tag}
            </span>
          ))}
        </div>

        {/* Collection Badge */}
        <div className="product-image-overlay absolute bottom-3 left-3 right-3">
          <span className="inline-block rounded-full bg-white/80 backdrop-blur-md px-3 py-1 font-sans text-[9px] uppercase tracking-[0.15em] text-maroon border border-gold/20">
            {product.collection}
          </span>
        </div>
      </div>

      <div className="p-4 pb-5">
        {/* Code & Category */}
        <div className="flex items-center justify-between">
          <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-maroon/30">{product.code}</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-dark">{product.category}</span>
        </div>

        {/* Name & Price */}
        <div className="mt-2 flex items-start justify-between gap-2">
          <Link
            href={`/products/${product.id}`}
            className="font-serif text-base font-medium leading-snug text-maroon transition-colors duration-200 hover:text-gold-dark"
          >
            {product.name}
          </Link>
        </div>

        {/* Price & Weight */}
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="font-sans text-sm font-medium text-gold-dark">{formatPrice(product.price)}</span>
          <span className="font-sans text-[10px] text-maroon/40">| Approx. {product.weight}</span>
        </div>

        <p className="mt-2 line-clamp-2 font-sans text-xs leading-relaxed text-maroon/40">
          {product.description}
        </p>

        {/* Metal Swatches */}
        {product.metals.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5">
            {product.metals.map((metal) => (
              <button
                key={metal.name}
                aria-label={metal.name}
                onMouseEnter={() => setHoveredMetal(metal.name)}
                onMouseLeave={() => setHoveredMetal(null)}
                onClick={() => setSelectedMetal(metal.name)}
                className={`relative h-4 w-4 rounded-full border transition-all duration-200 ${
                  selectedMetal === metal.name
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

        {/* Dual Luxury CTAs */}
        <div className="mt-4 flex gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2.5 font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/20 hover:shadow-[0_0_15px_rgba(37,211,102,0.15)]"
          >
            <MessageCircle size={12} />
            Enquire
          </a>
          <button
            onClick={() => onBookViewing?.(product)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-3 py-2.5 font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon hover:shadow-[0_0_15px_rgba(74,14,23,0.2)]"
          >
            <Calendar size={12} />
            Book Viewing
          </button>
        </div>
      </div>
    </article>
  )
}
