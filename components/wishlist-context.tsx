'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { Product } from '@/lib/products'

type WishlistContextType = {
  items: Product[]
  add: (product: Product) => void
  remove: (productId: string) => void
  toggle: (product: Product) => void
  has: (productId: string) => boolean
  count: number
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('shreeram-wishlist')
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('shreeram-wishlist', JSON.stringify(items))
    } catch {}
  }, [items])

  const add = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev
      return [...prev, product]
    })
  }, [])

  const remove = useCallback((productId: string) => {
    setItems((prev) => prev.filter((p) => p.id !== productId))
  }, [])

  const toggle = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev.filter((p) => p.id !== product.id)
      return [...prev, product]
    })
  }, [])

  const has = useCallback((productId: string) => items.some((p) => p.id === productId), [items])

  return (
    <WishlistContext.Provider value={{ items, add, remove, toggle, has, count: items.length }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
