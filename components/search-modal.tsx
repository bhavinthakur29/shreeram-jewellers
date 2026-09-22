'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight, Clock, TrendingUp } from 'lucide-react'
import { searchProducts, formatPrice } from '@/lib/products'
import Link from 'next/link'

const trendingSearches = ['Jadau Choker', 'Polki Earrings', 'Bridal Set', 'Meenakari Bangles', 'Temple Necklace']

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ReturnType<typeof searchProducts>>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      setTimeout(() => inputRef.current?.focus(), 100)
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
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-maroon/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[600px] rounded-2xl bg-[#FAF6EE]/98 backdrop-blur-2xl border border-[#C89D47]/25 shadow-2xl shadow-maroon/10 overflow-hidden animate-fade-in">
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-[#C89D47]/10 px-5 py-4">
          <Search size={18} className="text-maroon/40" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search heritage collections..."
            className="flex-1 bg-transparent font-sans text-sm text-maroon outline-none placeholder:text-maroon/30"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-maroon/40 hover:text-maroon">
              <X size={16} />
            </button>
          )}
          <button onClick={onClose} className="rounded-full border border-maroon/10 px-3 py-1 font-sans text-[9px] uppercase tracking-wider text-maroon/40 hover:border-maroon/20 hover:text-maroon">
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {query.length > 1 && results.length > 0 ? (
            <div className="p-4">
              <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-maroon/40 mb-3">{results.length} Results</p>
              <div className="space-y-2">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/60"
                  >
                    <img src={product.image} alt={product.name} className="h-14 w-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-maroon/40">{product.code}</p>
                      <p className="font-serif text-sm text-maroon truncate">{product.name}</p>
                      <p className="font-sans text-xs text-gold-dark">{formatPrice(product.price)}</p>
                    </div>
                    <ArrowRight size={14} className="text-maroon/30" />
                  </Link>
                ))}
              </div>
            </div>
          ) : query.length > 1 ? (
            <div className="p-8 text-center">
              <p className="font-serif text-lg text-maroon">No pieces found</p>
              <p className="mt-1 font-sans text-xs text-maroon/40">Try searching for a different collection</p>
            </div>
          ) : (
            <div className="p-5">
              <p className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.2em] text-maroon/40 mb-3">
                <TrendingUp size={12} /> Trending
              </p>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-[#C89D47]/20 bg-white/60 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.1em] text-maroon/60 transition-all hover:border-gold/40 hover:text-maroon"
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
