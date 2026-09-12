'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-16 md:px-20 md:py-20">
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-gold/40" />
        <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Concierge</p>
      </div>
      <h1 className="mt-5 font-serif text-5xl text-maroon">Get in Touch</h1>
      <p className="mt-5 max-w-xl font-sans text-maroon/50">
        Whether seeking bridal collection assistance, custom bespoke estimates, or a private showroom booking at our Jaipur atelier, our heritage advisors are at your service.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 md:p-10 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
          <h2 className="font-serif text-3xl text-maroon">{sent ? 'Dhanyavaad' : 'Send an Inquiry'}</h2>
          {sent ? (
            <p className="mt-6 font-sans text-maroon/50">Your message has been received. A heritage concierge will be in touch shortly.</p>
          ) : (
            <div className="mt-8 space-y-5">
              {['Full Name', 'Email Address', 'WhatsApp Number'].map((label) => (
                <label key={label} className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
                  {label} *
                  <input required placeholder={label} className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 px-4 text-sm normal-case text-maroon placeholder:text-maroon/30 focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all" />
                </label>
              ))}
              <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
                Category of Interest
                <select className="mt-2 h-12 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 px-4 text-sm normal-case text-maroon focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all">
                  <option>Select a category</option>
                  <option>Bridal Trousseau</option>
                  <option>Daily Wear Gold</option>
                  <option>Polki / Jadau</option>
                  <option>Custom Commission</option>
                </select>
              </label>
              <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-maroon">
                Message *
                <textarea required rows={5} placeholder="Describe what you are looking for..." className="mt-2 w-full rounded-xl border border-[#E5DDD0] bg-[#FAF6EE]/60 p-4 text-sm normal-case text-maroon placeholder:text-maroon/30 focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all" />
              </label>
              <button type="submit" className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-[0.98]">
                Send Inquiry
              </button>
            </div>
          )}
        </form>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
            <h3 className="font-serif text-xl text-maroon">Visit Our Atelier</h3>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark">Flagship Showroom</p>
                <p className="mt-1 font-sans text-sm text-maroon/60">Johari Bazar / MI Road</p>
                <p className="font-sans text-sm text-maroon/60">Jaipur, Rajasthan 302001</p>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark">By Appointment</p>
                <p className="mt-1 font-sans text-sm text-maroon/60">+91 98XXX XXXXX</p>
                <p className="font-sans text-sm text-maroon/60">heritage@shreeramjewellers.in</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
            <h3 className="font-serif text-xl text-maroon">Services</h3>
            <div className="mt-6 space-y-3">
              {['Book Jaipur Atelier Visit', 'Schedule Virtual Video Viewing', 'Custom Bespoke Commission', 'Bridal Trousseau Consultation'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  <span className="font-sans text-sm text-maroon/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
            <h3 className="font-serif text-xl text-maroon">Heritage Hours</h3>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span className="font-sans text-sm text-maroon/60">Monday – Saturday</span>
                <span className="font-sans text-sm text-maroon">10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-sans text-sm text-maroon/60">Sunday</span>
                <span className="font-sans text-sm text-maroon">By Appointment Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
