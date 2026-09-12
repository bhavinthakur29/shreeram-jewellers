'use client'

import Link from 'next/link'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/components/cart-context'

const links = [
  ['Heritage', '/products'],
  ['Bridal', '/products?category=Sets'],
  ['The Atelier', '/about'],
  ['Concierge', '/care'],
  ['Contact', '/contact'],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const { count, openCart } = useCart()

  return (
    <>
      <header className="fixed top-[36px] left-0 right-0 z-50 mx-3 md:mx-6 rounded-full bg-[#FAF6EE]/80 backdrop-blur-md border border-[#C89D47]/20 shadow-[0_4px_20px_rgba(74,14,23,0.03)] transition-all duration-300">
        <div className="flex items-center justify-between px-6 py-3 md:px-10">
          <Link href="/" className="leading-none">
            <span className="block font-serif text-[22px] font-semibold tracking-[0.25em] text-[#4A0E17]">SHREERAM</span>
            <span className="mt-0.5 block font-sans text-[7px] uppercase tracking-[0.3em] text-[#C89D47]">JAIPUR • RAJASTHAN</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="font-sans text-[11px] uppercase tracking-[0.2em] text-maroon/70 font-normal transition-colors hover:text-maroon">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" onClick={() => setSearch(!search)} className="text-maroon/60 transition-colors hover:text-maroon">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button aria-label="Wishlist" className="text-maroon/60 transition-colors hover:text-maroon">
              <Heart size={18} strokeWidth={1.5} />
            </button>
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

      {search && (
        <div className="glass-dropdown mx-6 mt-2 rounded-2xl px-6 py-4 md:mx-20">
          <form action="/products">
            <input autoFocus name="q" placeholder="Search Jaipur heritage collections..." className="w-full border-b border-gold/30 bg-transparent py-2 font-sans text-sm text-maroon outline-none placeholder:text-maroon/30 focus:border-gold transition-colors" />
          </form>
        </div>
      )}

      {open && (
        <nav className="glass-dropdown mx-6 mt-2 flex flex-col gap-5 rounded-2xl px-6 py-6 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="font-sans text-[11px] uppercase tracking-[0.2em] text-maroon/60 transition-colors hover:text-maroon">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
