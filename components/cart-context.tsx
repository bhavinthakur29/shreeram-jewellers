'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'

type CartLine = { product: Product; quantity: number }
type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  drawerOpen: boolean
  openCart: () => void
  closeCart: () => void
  add: (product: Product, quantity?: number) => void
  update: (id: string, quantity: number) => void
  remove: (id: string) => void
}
const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openCart = useCallback(() => setDrawerOpen(true), [])
  const closeCart = useCallback(() => setDrawerOpen(false), [])

  const add = useCallback((product: Product, quantity = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.product.id === product.id)
      if (existing) {
        return current.map((line) =>
          line.product.id === product.id ? { ...line, quantity: line.quantity + quantity } : line
        )
      }
      return [...current, { product, quantity }]
    })
    setDrawerOpen(true)
  }, [])

  const update = useCallback((id: string, quantity: number) => {
    setLines((current) =>
      quantity < 1
        ? current.filter((line) => line.product.id !== id)
        : current.map((line) => (line.product.id === id ? { ...line, quantity } : line))
    )
  }, [])

  const remove = useCallback((id: string) => {
    setLines((current) => current.filter((line) => line.product.id !== id))
  }, [])

  const value = useMemo(
    () => ({
      lines,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      subtotal: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
      drawerOpen,
      openCart,
      closeCart,
      add,
      update,
      remove,
    }),
    [lines, drawerOpen, openCart, closeCart, add, update, remove]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}