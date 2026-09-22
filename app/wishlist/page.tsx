'use client'

import Link from 'next/link'
import { Heart, Trash2, ShoppingBag } from 'lucide-react'
import { useWishlist } from '@/components/wishlist-context'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/products'

export default function WishlistPage() {
  const { items, remove } = useWishlist()
  const { add } = useCart()

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-14 md:px-20 md:py-16 min-h-[60vh]">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/40">
        Home&nbsp; / &nbsp;<span className="text-maroon">Wishlist</span>
      </p>
      <h1 className="mt-5 font-serif text-5xl text-maroon md:text-6xl">My Wishlist</h1>
      <p className="mt-3 font-sans text-sm text-maroon/40">
        {items.length} {items.length === 1 ? 'piece' : 'pieces'} saved
      </p>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-maroon/5">
            <Heart size={32} className="text-maroon/20" />
          </div>
          <h2 className="mt-6 font-serif text-2xl text-maroon">Your wishlist is empty</h2>
          <p className="mt-2 max-w-sm font-sans text-sm text-maroon/40">
            Save your favourite heritage pieces here for later.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-maroon border border-gold/40 px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)]"
          >
            Explore Collections
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <article key={product.id} className="group bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF6EE]">
                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ objectPosition: product.position }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="inline-block rounded-full bg-maroon/80 backdrop-blur-md px-2.5 py-1 font-sans text-[8px] uppercase tracking-[0.1em] text-gold-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-maroon/30">{product.code}</p>
                <Link href={`/products/${product.id}`} className="mt-1 block font-serif text-base text-maroon hover:text-gold-dark transition-colors">
                  {product.name}
                </Link>
                <p className="mt-1 font-sans text-sm font-medium text-gold-dark">{formatPrice(product.price)}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => {
                      add(product)
                      remove(product.id)
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-3 py-2.5 font-sans text-[9px] font-medium uppercase tracking-[0.1em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon"
                  >
                    <ShoppingBag size={12} /> Add to Cart
                  </button>
                  <button
                    onClick={() => remove(product.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon/10 text-maroon/30 transition-colors hover:border-red-300 hover:text-red-400"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
