'use client'
import { useState } from 'react'
import { Box, Droplets, Sparkles, Shield } from 'lucide-react'

export default function CarePage() {
  const [open, setOpen] = useState(2)

  const faqs = [
    { q: 'What are your shipping timeframes?', a: 'Ready-to-ship pieces dispatch within 2-3 business days. Custom bespoke orders take 4-8 weeks depending on complexity. All shipments are insured and tracked pan-India.' },
    { q: 'Do you offer international shipping?', a: 'Yes, we offer insured global delivery to over 40 countries. International orders are shipped via insured courier with full tracking. Please contact our concierge for international shipping rates.' },
    { q: 'What is your returns policy?', a: 'We offer a 7-day return policy for unworn pieces in original packaging. Custom bespoke and bridal orders are non-returnable. BIS hallmark certification accompanies every return.' },
    { q: 'What warranty is provided with purchases?', a: 'All Shreeram Jewellers pieces come with a lifetime craftsmanship warranty. This covers manufacturing defects, stone settings, and clasp repairs. BIS 916 hallmark certification is provided with every gold piece.' },
    { q: 'How long do custom bespoke orders take?', a: 'Custom Jadau and Polki pieces typically require 6-12 weeks. Temple gold and Meenakari work takes 4-8 weeks. Your dedicated concierge will provide a detailed timeline during your consultation.' },
  ]

  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-20">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-gold/40" />
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Concierge</p>
        </div>
        <h1 className="mt-5 font-serif text-5xl text-maroon">Heritage Care</h1>
        <p className="mt-5 max-w-xl font-sans text-maroon/50">
          Our dedicated heritage concierge team guides you through every step of your jewellery journey — from Jaipur atelier visits to global insured delivery.
        </p>

        <h2 className="mt-20 font-serif text-4xl text-maroon">Preserving Sacred Radiance</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Box, 'Heritage Storage'],
            [Droplets, 'Gentle Cleansing'],
            [Sparkles, 'Daily Wear Rituals'],
            [Shield, 'Professional Service'],
          ].map(([Icon, title]) => (
            <div key={title as string} className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-8 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
              <Icon className="text-gold-dark" />
              <h3 className="mt-8 font-serif text-xl text-maroon">{title as string}</h3>
              <p className="mt-4 font-sans text-sm leading-6 text-maroon/50">
                Keep your heritage jewellery individually cared for with gentle, considered rituals befitting pieces crafted in Jaipur&apos;s atelier.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#C89D47]/15 bg-[#F5F0E5] px-6 py-20 md:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <p className="text-center font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Questions</p>
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <h2 className="mt-4 text-center font-serif text-4xl text-maroon">Frequently Asked Questions</h2>
          <div className="mt-12 max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-serif text-base text-maroon">{faq.q}</span>
                  <span className="ml-4 shrink-0 font-sans text-lg text-maroon/30">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 border-t border-[#C89D47]/10 pt-4">
                    <p className="font-sans text-sm leading-6 text-maroon/50">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
