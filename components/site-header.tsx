'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Menu, Search, ShoppingBag, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '@/components/cart-context'
import { useWishlist } from '@/components/wishlist-context'
import { SearchModal } from '@/components/search-modal'

const links = [
  ['Shop Jewellery', '/products'],
  ['Collections', '/products'],
  ['Bridal Sets', '/products?category=Necklaces'],
  ['About Us', '/about'],
  ['Contact', '/contact'],
]

const megaMenu: Record<string, { label: string; href: string }[]> = {
  'Shop Jewellery': [
    { label: 'View All (Full Catalogue)', href: '/products' },
    { label: 'Necklaces & Chokers', href: '/products?category=Necklaces' },
    { label: 'Bangles & Kadas', href: '/products?category=Bangles' },
    { label: 'Earrings & Jhumkas', href: '/products?category=Earrings' },
    { label: 'Statement Rings', href: '/products?category=Rings' },
    { label: 'Silverware', href: '/products?category=Silverware' },
  ],
  'Collections': [
    { label: 'All Heritage Designs', href: '/products' },
    { label: 'Jadau & Polki', href: '/products?q=polki' },
    { label: 'Jaipur Meenakari', href: '/products?q=meenakari' },
    { label: 'Royal Rajputi Kundan', href: '/products?q=rajput' },
    { label: 'Temple Antique Gold', href: '/products?q=temple' },
  ],
}

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const { count, openCart } = useCart()
  const { count: wishlistCount } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Solid dark floating dock on subpages, transparent only on homepage at top
  const isSolid = !isHome || isScrolled

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${isSolid
            ? 'top-11 mx-4 md:mx-10 rounded-full bg-[#1C0508]/90 backdrop-blur-xl border border-[#C89D47]/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)] py-2.5 px-6 md:px-8'
            : 'top-8 mx-0 rounded-none bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 px-6 md:px-14'
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="leading-none select-none">
            <span className="block font-serif text-xl md:text-2xl font-bold tracking-[0.25em] text-[#FAF6EE] drop-shadow-sm">
              SHREERAM
            </span>
            <span className="mt-0.5 block font-sans text-[7px] uppercase tracking-[0.35em] text-[#C89D47] font-semibold">
              JAIPUR • EST. 1952
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(([label, href]) => {
              const hasDropdown = Boolean(megaMenu[label])
              const isOpen = activeDropdown === label

              return (
                <div
                  key={label}
                  className="relative py-1"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={href}
                    className={`inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${isOpen
                        ? 'text-[#E8D39E] font-medium'
                        : 'text-white/85 hover:text-[#E8D39E]'
                      }`}
                  >
                    {label}
                    {hasDropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C89D47]' : 'text-white/50'
                          }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                      <div className="rounded-2xl bg-[#1C0508]/95 backdrop-blur-2xl border border-[#C89D47]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-3 space-y-1">
                        {megaMenu[label].map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-3.5 py-2.5 rounded-xl font-sans text-xs text-[#FAF6EE]/80 transition-all hover:bg-white/5 hover:text-[#E8D39E] hover:translate-x-1"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="p-1 text-white/85 hover:text-[#E8D39E] transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative p-1 text-white/85 hover:text-[#E8D39E] transition-colors"
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -right-1.5 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#C89D47] px-1 font-sans text-[8px] font-bold text-[#1C0508]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              aria-label="Shopping bag"
              onClick={openCart}
              className="relative p-1 text-white/85 hover:text-[#E8D39E] transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#C89D47] px-1 font-sans text-[8px] font-bold text-[#1C0508]">
                  {count}
                </span>
              )}
            </button>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-1 text-white"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <nav className="fixed top-[92px] left-4 right-4 z-40 flex flex-col gap-4 rounded-3xl bg-[#1C0508]/98 border border-[#C89D47]/30 shadow-2xl p-6 lg:hidden backdrop-blur-2xl">
          {links.map(([label, href]) => (
            <div key={label} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E8D39E] block mb-2"
              >
                {label}
              </Link>
              {megaMenu[label] && (
                <div className="pl-3 space-y-2 mt-1">
                  {megaMenu[label].map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block font-sans text-xs text-[#FAF6EE]/70 hover:text-white"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}