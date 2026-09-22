'use client'

import Link from 'next/link'
import { collections } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

export function CollectionCards() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold/40" />
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Curated Heritage</p>
          </div>
          <h2 className="mt-3 font-serif text-3xl text-maroon md:text-4xl">Shop by Collection</h2>
        </div>
        <Link href="/products" className="hidden md:inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-maroon">
          View All <ArrowRight size={14} />
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 md:overflow-visible">
        {collections.map((item) => (
          <Link
            key={item.name}
            href={`/products?category=${item.name.split(' ')[0]}`}
            className="group relative flex-shrink-0 w-[200px] md:w-auto aspect-[0.72] overflow-hidden rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ objectPosition: item.position }}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-maroon/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
              <span className="font-serif text-base text-gold-light text-center">{item.name}</span>
              <span className="mt-1 font-sans text-[9px] uppercase tracking-[0.15em] text-gold-light/50">{item.count} Pieces</span>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/products" className="mt-6 md:hidden inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-maroon">
        View All Collections <ArrowRight size={14} />
      </Link>
    </section>
  )
}
