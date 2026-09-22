'use client'

import Link from 'next/link'
import { Heart, Menu, Search, ShoppingBag, X, User } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/components/cart-context'
import { useWishlist } from '@/components/wishlist-context'
import { SearchModal } from '@/components/search-modal'

const links = [
  ['Heritage', '/products'],
  ['Bridal', '/products?category=Sets'],
  ['The Atelier', '/about'],
  ['Concierge', '/care'],
  ['Contact', '/contact'],
]

const megaMenu = {
  Heritage: [
    { label: 'Jadau & Polki', href: '/products?category=Chokers' },
    { label: 'Meenakari', href: '/products?category=Bangles' },
    { label: 'Royal Rajputi', href: '/products?category=Necklaces' },
    { label: 'Temple Gold', href: '/products?category=Necklaces' },
    { label: 'All Collections', href: '/products' },
  ],
  Bridal: [
    { label: 'Bridal Sets', href: '/products?category=Sets' },
    { label: 'Chokers', href: '/products?category=Chokers' },
    { label: 'Necklaces', href: '/products?category=Necklaces' },
    { label: 'Earrings', href: '/products?category=Earrings' },
    { label: 'Bangles', href: '/products?category=Bangles' },
  ],
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { count, openCart } = useCart()
  const { count: wishlistCount } = useWishlist()

  return (
    <>
      <header className="fixed top-[36px] left-0 right-0 z-50 mx-3 md:mx-6 rounded-full bg-[#FAF6EE]/80 backdrop-blur-md border border-[#C89D47]/20 shadow-[0_4px_20px_rgba(74,14,23,0.03)] transition-all duration-300">
        <div className="flex items-center justify-between px-4 md:px-10 py-3">
          <Link href="/" className="leading-none">
            <span className="block font-serif text-[22px] font-semibold tracking-[0.25em] text-[#4A0E17]">SHREERAM</span>
            <span className="mt-0.5 block font-sans text-[7px] uppercase tracking-[0.3em] text-[#C89D47]">JAIPUR • RAJASTHAN</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(([label, href]) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => megaMenu[label as keyof typeof megaMenu] ? setActiveDropdown(label) : setActiveDropdown(null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={href} className="font-sans text-[11px] uppercase tracking-[0.2em] text-maroon/70 font-normal transition-colors hover:text-maroon">
                  {label}
                </Link>
                {megaMenu[label as keyof typeof megaMenu] && activeDropdown === label && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#FAF6EE]/98 backdrop-blur-2xl border border-[#C89D47]/20 shadow-xl p-4 animate-fade-in">
                    {megaMenu[label as keyof typeof megaMenu].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2.5 rounded-lg font-sans text-[11px] text-maroon/70 transition-colors hover:bg-maroon/5 hover:text-maroon"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="text-maroon/60 transition-colors hover:text-maroon">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link href="/wishlist" aria-label="Wishlist" className="relative text-maroon/60 transition-colors hover:text-maroon">
              <Heart size={18} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-maroon px-1 font-sans text-[9px] font-medium text-gold-light">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button aria-label="Shopping bag" onClick={openCart} className="relative text-maroon/60 transition-colors hover:text-maroon">
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-maroon px-1 font-sans text-[9px] font-medium text-gold-light">
                  {count}
                </span>
              )}
            </button>
            <button aria-label="Open menu" onClick={() => setOpen(!open)} className="lg:hidden text-maroon/60">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="h-[108px]" />

      {open && (
        <nav className="glass-dropdown mx-6 mt-2 flex flex-col gap-5 rounded-2xl px-6 py-6 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="font-sans text-[11px] uppercase tracking-[0.2em] text-maroon/60 transition-colors hover:text-maroon">
              {label}
            </Link>
          ))}
        </nav>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
