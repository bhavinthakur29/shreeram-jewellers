'use client'

import { X, Calendar, Video, MapPin } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/products'

type BookingType = 'atelier' | 'virtual'

const categories = ['Bridal Trousseau', 'Daily Wear Gold', 'Polki / Jadau', 'Custom Commission', 'Not Sure Yet']

export function BookingModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [bookingType, setBookingType] = useState<BookingType>('atelier')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    date: '',
    category: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-maroon/20 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF6EE]/98 backdrop-blur-2xl border border-[#C89D47]/25 shadow-2xl shadow-maroon/10">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#C89D47]/10 bg-[#FAF6EE]/95 backdrop-blur-xl px-6 py-5 rounded-t-3xl">
          <div>
            <h2 className="font-serif text-xl text-maroon">Book a Private Viewing</h2>
            <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.15em] text-maroon/40">At our Jaipur Atelier or Virtually</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-maroon/10 text-maroon/40 transition-colors hover:border-maroon/20 hover:text-maroon"
          >
            <X size={14} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
              <Calendar size={24} className="text-gold-dark" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-maroon">Dhanyavaad</h3>
            <p className="mt-3 font-sans text-sm text-maroon/50">
              Your viewing request has been received. A heritage concierge will WhatsApp you within 2 hours to confirm your appointment.
            </p>
            <button
              onClick={onClose}
              className="mt-8 rounded-full border border-maroon/20 px-8 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6">
            {/* Selected Product */}
            {product && (
              <div className="mb-6 flex items-center gap-4 rounded-2xl bg-white/60 border border-[#C89D47]/15 p-4">
                <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl object-cover" />
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-maroon/40">{product.code}</p>
                  <p className="font-serif text-sm text-maroon">{product.name}</p>
                </div>
              </div>
            )}

            {/* Booking Type Toggle */}
            <div className="mb-6">
              <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/50">Select Viewing Type</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBookingType('atelier')}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    bookingType === 'atelier'
                      ? 'border-gold bg-maroon text-gold-light shadow-[0_0_20px_rgba(200,157,71,0.15)]'
                      : 'border-[#C89D47]/20 bg-white/60 text-maroon hover:border-gold/40'
                  }`}
                >
                  <MapPin size={18} />
                  <div>
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em]">Jaipur Atelier</p>
                    <p className="mt-0.5 font-sans text-[9px] text-maroon/40">In-person visit</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType('virtual')}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    bookingType === 'virtual'
                      ? 'border-gold bg-maroon text-gold-light shadow-[0_0_20px_rgba(200,157,71,0.15)]'
                      : 'border-[#C89D47]/20 bg-white/60 text-maroon hover:border-gold/40'
                  }`}
                >
                  <Video size={18} />
                  <div>
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em]">Virtual Viewing</p>
                    <p className="mt-0.5 font-sans text-[9px] text-maroon/40">Video call</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <label className="block">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">Full Name *</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-white/70 px-4 text-sm normal-case text-maroon placeholder:text-maroon/30 focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all"
                />
              </label>

              <label className="block">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">WhatsApp Number *</span>
                <input
                  required
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="+91 98XXX XXXXX"
                  className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-white/70 px-4 text-sm normal-case text-maroon placeholder:text-maroon/30 focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all"
                />
              </label>

              <label className="block">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">Preferred Date *</span>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-white/70 px-4 text-sm normal-case text-maroon placeholder:text-maroon/30 focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all"
                />
              </label>

              <label className="block">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">Category of Interest</span>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-white/70 px-4 text-sm normal-case text-maroon focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-[0.98]"
            >
              {bookingType === 'atelier' ? 'Confirm Atelier Visit' : 'Schedule Virtual Viewing'}
            </button>

            <p className="mt-4 text-center font-sans text-[10px] text-maroon/30">
              {bookingType === 'atelier'
                ? 'Johari Bazar / MI Road, Jaipur, Rajasthan 302001'
                : 'We offer live video inspections for outstation & NRI clients'}
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
