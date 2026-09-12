'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice } from '@/lib/products'

export default function CheckoutPage() {
  const { subtotal } = useCart()
  const [complete, setComplete] = useState(false)

  const total = subtotal || 345000

  if (complete) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-28 text-center">
        <Check className="mx-auto text-gold" size={48} strokeWidth={1.5} />
        <h1 className="mt-6 font-serif text-5xl text-maroon">Dhanyavaad</h1>
        <p className="mt-4 font-sans text-maroon/50">
          Your Shreeram Jewellers order has been received. A heritage concierge will confirm your order via WhatsApp within 2 hours.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-maroon border border-gold/40 px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark">
          Return Home
        </Link>
      </main>
    )
  }

  return (
    <main>
      <div className="border-b border-[#C89D47]/10 py-8">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-8 font-sans text-sm">
          <span className="flex items-center gap-2 text-maroon">
            <b className="flex h-6 w-6 items-center justify-center rounded-full bg-maroon text-gold-light text-xs">1</b> Shipping
          </span>
          <span className="text-maroon/30">2&nbsp; Payment</span>
          <span className="text-maroon/30">3&nbsp; Review</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-14 md:px-20 lg:grid-cols-[1fr_380px]">
        <section>
          <h1 className="font-serif text-4xl text-maroon">Shipping Information</h1>
          <form onSubmit={(e) => { e.preventDefault(); setComplete(true) }} className="mt-8 space-y-5">
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
              Full Name *
              <input required className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 px-4 text-sm normal-case text-maroon outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" placeholder="Your full name" />
            </label>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
              WhatsApp Number *
              <input required type="tel" className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 px-4 text-sm normal-case text-maroon outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" placeholder="+91 98XXX XXXXX" />
            </label>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
              Email Address *
              <input required type="email" className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 px-4 text-sm normal-case text-maroon outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" placeholder="your@email.com" />
            </label>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
              Delivery Address *
              <textarea required rows={3} className="mt-2 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 p-4 text-sm normal-case text-maroon outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" placeholder="Full address with PIN code" />
            </label>

            <div className="pt-4">
              <button type="submit" className="flex h-12 w-full items-center justify-center rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-[0.98]">
                Place Order
              </button>
            </div>
          </form>
        </section>

        <aside className="h-fit bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
          <h2 className="font-serif text-xl text-maroon">Order Summary</h2>
          <div className="mt-6 space-y-3 font-sans text-sm">
            <div className="flex justify-between text-maroon/50">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-maroon/50">
              <span>Insured Shipping</span>
              <span className="text-emerald-heritage">Complimentary</span>
            </div>
            <div className="flex justify-between text-maroon/50">
              <span> GST (Est.)</span>
              <span>{formatPrice(Math.round(total * 0.03))}</span>
            </div>
            <div className="my-2 border-t border-[#E5DDD0] pt-3">
              <div className="flex justify-between font-sans text-base">
                <span className="font-medium text-maroon">Total</span>
                <span className="font-serif text-xl text-maroon">{formatPrice(Math.round(total * 1.03))}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-maroon/30">
            <span className="font-sans text-[10px]">BIS Hallmarked &amp; GIA/IGI Certified</span>
          </div>

          <a
            href={`https://wa.me/9198XXXXXXXX?text=${encodeURIComponent('Hi, I would like to proceed with my order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10"
          >
            <MessageCircle size={13} />
            Enquire on WhatsApp
          </a>
        </aside>
      </div>
    </main>
  )
}
