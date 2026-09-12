'use client'

import { Calendar, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { BookingModal } from '@/components/booking-modal'

export function ConciergePill() {
  const [hovered, setHovered] = useState(false)
  const [showBooking, setShowBooking] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setShowBooking(true)}
          className="bg-[#4A0E17]/90 backdrop-blur-xl border border-[#C89D47]/40 text-[#FAF6EE] shadow-2xl rounded-full px-5 py-3 flex items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,157,71,0.2)]"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#C89D47]/20">
            <Calendar size={16} className="text-[#E8D39E]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C89D47]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C89D47]" />
            </span>
          </div>
          <div className="hidden sm:block text-left">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#E8D39E]">Book Jaipur Atelier Visit</p>
            <p className="font-sans text-[8px] uppercase tracking-widest text-[#E8D39E]/50">By Appointment Only</p>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C89D47]/15">
            <Sparkles size={12} className="text-[#C89D47]" />
          </div>
        </button>

        {hovered && (
          <div className="absolute bottom-full right-0 mb-3 w-64 rounded-2xl bg-[#4A0E17]/95 backdrop-blur-xl border border-[#C89D47]/30 p-4 shadow-2xl animate-fade-in">
            <p className="font-serif text-sm text-[#E8D39E]">Private Viewing Session</p>
            <p className="mt-1 font-sans text-[10px] text-[#E8D39E]/60 leading-relaxed">Experience our Jadau, Polki &amp; bridal collection at our Jaipur atelier or via virtual video call.</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-sans text-[9px] uppercase tracking-widest text-emerald-400">Available Today</span>
            </div>
          </div>
        )}
      </div>

      {showBooking && <BookingModal product={null} onClose={() => setShowBooking(false)} />}
    </>
  )
}
