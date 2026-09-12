'use client'
import Link from 'next/link'
import { Minus, Plus, Trash2, MessageCircle } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice, products } from '@/lib/products'

export default function CartPage() {
  const { lines, subtotal, update, remove } = useCart()
  const displayLines = lines.length ? lines : products.slice(0, 3).map((product) => ({ product, quantity: 1 }))
  const total = displayLines.reduce((sum, line) => sum + line.product.price * line.quantity, 0)

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-14 md:px-20 md:py-16">
      <h1 className="font-serif text-5xl text-maroon">Your Heritage Bag</h1>
      <p className="mt-3 font-sans text-sm text-maroon/50">({displayLines.reduce((sum, line) => sum + line.quantity, 0)} pieces)</p>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">
        <section>
          {displayLines.map((line) => (
            <div key={line.product.id} className="flex flex-wrap items-center gap-6 border-t border-[#C89D47]/10 py-8">
              <img src={line.product.image} alt={line.product.name} style={{ objectPosition: line.product.position }} className="h-28 w-28 rounded-2xl object-cover border border-[#C89D47]/10" />
              <div className="min-w-[180px] flex-1">
                <h2 className="font-serif text-xl text-maroon">{line.product.name}</h2>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.15em] text-maroon/30">{line.product.code}</p>
                <p className="mt-2 max-w-lg font-sans text-sm text-maroon/50 line-clamp-2">{line.product.description}</p>
                <p className="mt-3 font-sans text-[9px] uppercase tracking-[0.15em] text-gold-dark">22KT BIS Hallmarked</p>
              </div>
              <div className="flex items-center rounded-xl border border-[#E5DDD0]">
                <button onClick={() => line.product && update(line.product.id, line.quantity - 1)} className="p-3 text-maroon/40 hover:text-maroon"><Minus size={13} /></button>
                <span className="min-w-[32px] text-center font-sans text-sm text-maroon">{line.quantity}</span>
                <button onClick={() => line.product && update(line.product.id, line.quantity + 1)} className="p-3 text-maroon/40 hover:text-maroon"><Plus size={13} /></button>
              </div>
              <div className="w-28 text-right">
                <span className="font-sans text-sm font-medium text-maroon">{formatPrice(line.product.price * line.quantity)}</span>
                <button onClick={() => remove(line.product.id)} className="mt-2 flex items-center gap-1 text-xs text-maroon/30 hover:text-[#B33A3A]"><Trash2 size={12} /> Remove</button>
              </div>
            </div>
          ))}
          <Link href="/products" className="mt-6 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-maroon">
            Continue Exploring Heritage
          </Link>
        </section>

        <aside className="h-fit bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
          <h2 className="font-serif text-xl text-maroon">Order Summary</h2>
          <div className="mt-6 space-y-3 font-sans text-sm">
            <div className="flex justify-between text-maroon/50">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal || total)}</span>
            </div>
            <div className="flex justify-between text-maroon/50">
              <span>Insured Shipping</span>
              <span className="text-emerald-heritage">Complimentary</span>
            </div>
            <div className="my-2 border-t border-[#E5DDD0] pt-3">
              <div className="flex justify-between font-sans text-base">
                <span className="font-medium text-maroon">Total</span>
                <span className="font-serif text-xl text-maroon">{formatPrice(subtotal || total)}</span>
              </div>
            </div>
          </div>

          <Link href="/checkout" className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_20px_rgba(200,157,71,0.25)]">
            Proceed to Checkout
          </Link>

          <a
            href={`https://wa.me/9198XXXXXXXX?text=${encodeURIComponent('Hi, I would like to enquire about the items in my bag.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10"
          >
            <MessageCircle size={13} />
            Enquire on WhatsApp
          </a>
        </aside>
      </div>
    </main>
  )
}
