'use client'
import { Suspense, useMemo, useState, useEffect } from 'react'
import { Grid3X3, LayoutList, SlidersHorizontal, X } from 'lucide-react'
import { products, collections, categories } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { useSearchParams } from 'next/navigation'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rated']

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const initialQuery = searchParams.get('q') || ''

  const [category, setCategory] = useState(initialCategory)
  const [sort, setSort] = useState('Featured')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  useEffect(() => {
    const cat = searchParams.get('category')
    const q = searchParams.get('q')
    if (cat) setCategory(cat)
    if (q) setSearchQuery(q)
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = category === 'All' ? [...products] : products.filter((p) => p.category === category)

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    return result.sort((a, b) =>
      sort === 'Price: Low to High' ? a.price - b.price :
      sort === 'Price: High to Low' ? b.price - a.price :
      sort === 'Newest' ? (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0) :
      sort === 'Best Rated' ? b.rating - a.rating : 0
    )
  }, [category, sort, searchQuery])

  const activeCollection = collections.find((c) => c.name === category)

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-14 md:px-20 md:py-16">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/40">
        Home&nbsp; / &nbsp;<span className="text-maroon">Heritage Collections</span>
      </p>
      <h1 className="mt-5 font-serif text-5xl text-maroon md:text-6xl">
        {activeCollection ? activeCollection.name : 'The Royal Karigari'}
      </h1>
      <p className="mt-3 max-w-xl font-sans text-sm text-maroon/40">
        Authentic Rajasthani fine jewellery. Jadau, Meenakari, Kundan &amp; Polki — each piece handcrafted by master karigars of Jaipur.
      </p>

      {searchQuery && (
        <div className="mt-4 flex items-center gap-2">
          <span className="font-sans text-sm text-maroon/50">Showing results for:</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-maroon/10 px-3 py-1 font-sans text-xs text-maroon">
            {searchQuery}
            <button onClick={() => setSearchQuery('')} className="hover:text-maroon-dark">
              <X size={12} />
            </button>
          </span>
        </div>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside className="hidden bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-6 shadow-[0_8px_24px_rgba(74,14,23,0.04)] lg:block h-fit sticky top-28">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon">Filter by</span>
            <button onClick={() => { setCategory('All'); setSearchQuery('') }} className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-maroon">Clear All</button>
          </div>
          <div className="mt-8 border-t border-[#C89D47]/10 pt-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon/40">Category</p>
            <div className="mt-4 space-y-3">
              {['All', ...categories].map((item) => (
                <label key={item} className="flex gap-3 font-sans text-sm text-maroon/70 cursor-pointer">
                  <input type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} className="accent-[#C89D47]" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-[#C89D47]/10 pt-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon/40">Collection</p>
            <div className="mt-4 space-y-3">
              {collections.map((item) => (
                <label key={item.name} className="flex gap-3 font-sans text-sm text-maroon/70 cursor-pointer">
                  <input type="radio" name="collection" checked={category === item.name} onChange={() => setCategory(item.name)} className="accent-[#C89D47]" />
                  {item.name}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#C89D47]/10 pb-4">
            <p className="font-sans text-sm text-maroon/50">
              Showing {filtered.length} heritage piece{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 font-sans text-sm text-maroon/70">
                <SlidersHorizontal size={16} className="lg:hidden" />
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent text-maroon outline-none cursor-pointer">
                  {sortOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="hidden items-center gap-1 border-l border-[#C89D47]/15 pl-4 lg:flex">
                <button
                  onClick={() => setView('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${view === 'grid' ? 'bg-[#F5F0E5] text-maroon' : 'text-maroon/30 hover:text-maroon/60'}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-lg transition-colors ${view === 'list' ? 'bg-[#F5F0E5] text-maroon' : 'text-maroon/30 hover:text-maroon/60'}`}
                  aria-label="List view"
                >
                  <LayoutList size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto lg:hidden scrollbar-hide -mx-6 px-6">
            {['All', ...categories].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.15em] transition-all duration-200 ${
                  category === item
                    ? 'border-maroon bg-maroon text-gold-light'
                    : 'border-[#C89D47]/25 text-maroon/60 hover:border-gold/40'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className={
            view === 'grid'
              ? 'grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'
              : 'flex flex-col gap-6'
          }>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-serif text-2xl text-maroon">No heritage pieces found</p>
              <p className="mt-2 font-sans text-sm text-maroon/40">Try adjusting your filters or search</p>
              <button onClick={() => { setCategory('All'); setSearchQuery('') }} className="mt-6 rounded-full border border-maroon/20 px-6 py-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-maroon transition-colors hover:bg-maroon hover:text-gold-light">
                View All Heritage
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <main className="mx-auto max-w-[1280px] px-6 py-14 md:px-20 md:py-16">
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        </div>
      </main>
    }>
      <ProductsContent />
    </Suspense>
  )
}
