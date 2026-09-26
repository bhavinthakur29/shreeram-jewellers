'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react'
import { searchProducts, formatPrice } from '@/lib/products'

const trendingSearches = [
  'Jadau Choker',
  'Polki Earrings',
  'Bridal Set',
  'Meenakari Bangles',
  'Temple Necklace',
]

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ReturnType<typeof searchProducts>>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [open])

  useEffect(() => {
    if (query.length > 1) {
      setResults(searchProducts(query))
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-24 md:pt-32 px-4">
      {/* Deep overlay ensures universal contrast across both light and dark pages */}
      <div
        className="fixed inset-0 bg-[#0C0204]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[620px] rounded-3xl bg-[#1C0508]/95 backdrop-blur-2xl border border-[#C89D47]/30 shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#C89D47]/20 px-6 py-4">
          <Search size={18} className="text-[#C89D47] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search heritage collections, gemstones, metals..."
            className="flex-1 bg-transparent font-sans text-sm text-[#FAF6EE] outline-none placeholder:text-[#FAF6EE]/30"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#FAF6EE]/40 hover:text-[#FAF6EE] transition-colors p-1"
              aria-label="Clear query"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-full border border-[#C89D47]/25 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#E8D39E]/60 hover:border-[#C89D47] hover:text-[#E8D39E] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[420px] overflow-y-auto">
          {query.length > 1 && results.length > 0 ? (
            <div className="p-4 sm:p-5">
              <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#C89D47] mb-3 font-semibold px-2">
                {results.length} Pieces Found
              </p>
              <div className="space-y-1.5">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-2xl p-2.5 transition-all hover:bg-white/5 border border-transparent hover:border-[#C89D47]/20 group"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#2A080D] border border-[#C89D47]/20">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="56px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#C89D47]/70 font-mono">
                        {product.code}
                      </p>
                      <p className="font-serif text-sm text-[#FAF6EE] truncate group-hover:text-[#E8D39E] transition-colors">
                        {product.name}
                      </p>
                      <p className="font-sans text-xs text-[#E8D39E] font-medium mt-0.5">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-[#FAF6EE]/20 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C89D47] mr-2"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ) : query.length > 1 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-lg text-[#FAF6EE]">No pieces found</p>
              <p className="mt-1 font-sans text-xs text-[#FAF6EE]/40">
                Try searching for jadau, bangles, chokers, or polki
              </p>
            </div>
          ) : (
            <div className="p-6">
              <p className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.2em] text-[#C89D47] mb-3 font-semibold">
                <TrendingUp size={12} /> Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-[#C89D47]/20 bg-white/5 px-3.5 py-1.5 font-sans text-[11px] text-[#FAF6EE]/80 transition-all hover:border-[#C89D47] hover:bg-[#C89D47]/15 hover:text-[#E8D39E]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}