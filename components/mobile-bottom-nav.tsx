'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid3X3, Heart, ShoppingBag, User } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { useWishlist } from '@/components/wishlist-context'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Grid3X3, label: 'Categories', href: '/products' },
  { icon: Heart, label: 'Wishlist', href: '/wishlist' },
  { icon: ShoppingBag, label: 'Cart', href: '/cart' },
]

export function MobileBottomNav() {
  const pathname = usePathname()
  const { count } = useCart()
  const { count: wishlistCount } = useWishlist()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF6EE]/95 backdrop-blur-xl border-t border-[#C89D47]/15 safe-area-pb">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          const badge = item.label === 'Cart' ? count : item.label === 'Wishlist' ? wishlistCount : 0

          if (item.href === '/cart') {
            return (
              <button
                key={item.label}
                onClick={() => document.querySelector('[data-cart-open]')?.click()}
                className="relative flex flex-col items-center gap-1 px-3 py-1.5"
              >
                <div className="relative">
                  <Icon size={20} strokeWidth={1.5} className={isActive ? 'text-gold-dark' : 'text-maroon/50'} />
                  {badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-maroon px-1 font-sans text-[8px] font-medium text-gold-light">
                      {badge}
                    </span>
                  )}
                </div>
                <span className={`font-sans text-[8px] uppercase tracking-wider ${isActive ? 'text-gold-dark' : 'text-maroon/40'}`}>{item.label}</span>
              </button>
            )
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-center gap-1 px-3 py-1.5"
            >
              <div className="relative">
                <Icon size={20} strokeWidth={1.5} className={isActive ? 'text-gold-dark' : 'text-maroon/50'} />
                {badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-maroon px-1 font-sans text-[8px] font-medium text-gold-light">
                    {badge}
                  </span>
                )}
              </div>
              <span className={`font-sans text-[8px] uppercase tracking-wider ${isActive ? 'text-gold-dark' : 'text-maroon/40'}`}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
