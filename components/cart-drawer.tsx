'use client'

import Link from 'next/link'
import { Minus, Plus, ShoppingBag, Trash2, X, Truck, ShieldCheck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/products'

const FREE_SHIPPING_THRESHOLD = 5000
const TAX_RATE = 0.088
const GIFT_WRAP = 25

export function CartDrawer() {
  const { lines, count, subtotal, drawerOpen, closeCart, update, remove } = useCart()
  const [closing, setClosing] = useState(false)
  const [mounted, setMounted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => { closeCart(); setClosing(false) }, 300)
  }

  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)
  const remainingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)
  const estimatedTax = subtotal * TAX_RATE
  const total = subtotal + estimatedTax + GIFT_WRAP

  if (!mounted) return null

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[100] ${
        drawerOpen && !closing ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-maroon/10 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen && !closing ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-[440px] bg-[#FAF6EE]/95 backdrop-blur-2xl border-l border-[#C89D47]/20 shadow-2xl shadow-maroon/10 flex flex-col ${
          drawerOpen && !closing ? 'animate-slide-in' : 'animate-slide-out'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#C89D47]/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-maroon" strokeWidth={1.5} />
            <h2 className="font-serif text-lg text-maroon">Your Bag</h2>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-maroon px-1.5 font-sans text-[10px] font-medium text-gold-light">
              {count}
            </span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close cart"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-maroon/10 text-maroon/40 transition-colors hover:border-maroon/20 hover:text-maroon"
          >
            <X size={14} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-6 py-4 border-b border-[#C89D47]/10">
          {subtotal >= FREE_SHIPPING_THRESHOLD ? (
            <div className="flex items-center gap-2 text-emerald-heritage">
              <Truck size={14} />
              <span className="font-sans text-xs">Complimentary insured shipping unlocked!</span>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-xs text-maroon/50">
                  {formatPrice(remainingForFreeShipping)} away from free shipping
                </span>
                <Truck size={14} className="text-maroon/30" />
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5DDD0]">
                <div
                  className="shipping-progress h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </>
          )}
        </div>

        {/* Line Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-[#E5DDD0] mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-maroon">Your bag is empty</p>
              <p className="mt-2 font-sans text-sm text-maroon/40">Discover our heritage collection</p>
              <Link
                href="/products"
                onClick={handleClose}
                className="mt-6 rounded-full border border-maroon px-6 py-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-maroon transition-colors hover:bg-maroon hover:text-gold-light"
              >
                Browse Heritage
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {lines.map((line) => (
                <div
                  key={line.product.id}
                  className="group relative rounded-2xl bg-white/60 border border-[#C89D47]/15 p-4 transition-all duration-300 hover:border-[#C89D47]/30"
                >
                  <div className="flex gap-4">
                    <Link
                      href={`/products/${line.product.id}`}
                      onClick={handleClose}
                      className="shrink-0 overflow-hidden rounded-xl"
                    >
                      <img
                        src={line.product.image}
                        alt={line.product.name}
                        style={{ objectPosition: line.product.position }}
                        className="h-20 w-20 object-cover"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${line.product.id}`}
                          onClick={handleClose}
                          className="font-serif text-sm font-medium leading-snug text-maroon truncate transition-colors hover:text-gold-dark"
                        >
                          {line.product.name}
                        </Link>
                        <button
                          onClick={() => remove(line.product.id)}
                          aria-label={`Remove ${line.product.name}`}
                          className="shrink-0 text-maroon/20 transition-colors hover:text-[#B33A3A]"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-gold-dark">
                        22KT Gold
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center rounded-full border border-[#E5DDD0]">
                          <button
                            onClick={() => update(line.product.id, line.quantity - 1)}
                            className="px-2.5 py-1 text-maroon/40 transition-colors hover:text-maroon"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={11} />
                          </button>
                          <span className="min-w-[24px] text-center font-sans text-xs text-maroon">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() => update(line.product.id, line.quantity + 1)}
                            className="px-2.5 py-1 text-maroon/40 transition-colors hover:text-maroon"
                            aria-label="Increase quantity"
                          >
                            <Plus size={11} />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-maroon">
                          {formatPrice(line.product.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sticky Bottom Summary */}
        {lines.length > 0 && (
          <div className="border-t border-[#C89D47]/10 bg-white/60 backdrop-blur-xl px-6 py-5">
            <div className="space-y-2 font-sans text-sm">
              <div className="flex justify-between text-maroon/50">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-maroon/50">
                <span>Estimated Tax</span>
                <span>{formatPrice(Math.round(estimatedTax))}</span>
              </div>
              <div className="flex justify-between text-maroon/50">
                <span>Gift Wrapping</span>
                <span>${GIFT_WRAP}</span>
              </div>
              <div className="flex justify-between text-maroon/50">
                <span>Shipping</span>
                <span className={subtotal >= FREE_SHIPPING_THRESHOLD ? 'text-emerald-heritage font-medium' : ''}>
                  {subtotal >= FREE_SHIPPING_THRESHOLD ? 'Complimentary' : 'Calculated at checkout'}
                </span>
              </div>
              <div className="my-2 border-t border-[#E5DDD0] pt-3">
                <div className="flex justify-between font-sans text-base">
                  <span className="font-medium text-maroon">Total</span>
                  <span className="font-serif text-xl text-maroon">{formatPrice(Math.round(total))}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-maroon/30">
              <ShieldCheck size={12} />
              <span className="font-sans text-[10px]">BIS Hallmarked &amp; IGI Certified</span>
            </div>

            <Link
              href="/checkout"
              onClick={handleClose}
              className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_20px_rgba(200,157,71,0.25)]"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={handleClose}
              className="mt-3 w-full text-center font-sans text-xs text-maroon/40 transition-colors hover:text-gold-dark"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}