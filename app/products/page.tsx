'use client'
import { useMemo, useState } from 'react'
import { Grid3X3, LayoutList, SlidersHorizontal } from 'lucide-react'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

const categories = ['All', 'Chokers', 'Necklaces', 'Bangles', 'Earrings', 'Sets']

export default function ProductsPage() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Featured')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const filtered = useMemo(() => {
    const result = category === 'All' ? products : products.filter((p) => p.category === category)
    return [...result].sort((a, b) =>
      sort === 'Price: Low to High' ? a.price - b.price :
      sort === 'Price: High to Low' ? b.price - a.price : 0
    )
  }, [category, sort])

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-14 md:px-20 md:py-16">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/40">
        Home&nbsp; / &nbsp;<span className="text-maroon">Heritage Collections</span>
      </p>
      <h1 className="mt-5 font-serif text-5xl text-maroon md:text-6xl">The Royal Karigari</h1>
      <p className="mt-3 max-w-xl font-sans text-sm text-maroon/40">
        Authentic Rajasthani fine jewellery. Jadau, Meenakari, Kundan &amp; Polki — each piece handcrafted by master karigars of Jaipur.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside className="hidden bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-6 shadow-[0_8px_24px_rgba(74,14,23,0.04)] lg:block">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon">Filter by</span>
            <button onClick={() => setCategory('All')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-maroon">Clear All</button>
          </div>
          <div className="mt-8 border-t border-[#C89D47]/10 pt-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon/40">Category</p>
            <div className="mt-4 space-y-3">
              {categories.slice(1).map((item) => (
                <label key={item} className="flex gap-3 font-sans text-sm text-maroon/70 cursor-pointer">
                  <input type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} className="accent-[#C89D47]" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-[#C89D47]/10 pt-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon/40">Metal</p>
            <div className="mt-4 flex gap-2">
              {[
                { name: '22KT Gold', hex: '#D4AF37' },
                { name: 'Rose Gold', hex: '#B76E79' },
                { name: 'Oxidized', hex: '#8B7355' },
              ].map((metal) => (
                <button
                  key={metal.name}
                  title={metal.name}
                  className="h-7 w-7 rounded-full border-2 border-[#E5DDD0] transition-all duration-200 hover:border-gold hover:scale-110"
                  style={{ backgroundColor: metal.hex }}
                />
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
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
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

          <div className="mb-8 flex gap-2 overflow-x-auto lg:hidden">
            {categories.map((item) => (
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
              <p className="mt-2 font-sans text-sm text-maroon/40">Try adjusting your filters</p>
              <button onClick={() => setCategory('All')} className="mt-6 rounded-full border border-maroon/20 px-6 py-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-maroon transition-colors hover:bg-maroon hover:text-gold-light">
                View All Heritage
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
