'use client'

import { useState, useEffect } from 'react'
import { announcements } from '@/lib/products'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [visible])

  if (!visible) return null

  return (
    <div className="relative bg-maroon text-gold-light overflow-hidden z-[60]">
      <div className="mx-auto flex items-center justify-center h-9 px-4">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length)}
          className="absolute left-4 text-gold-light/60 hover:text-gold-light transition-colors"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="relative h-5 overflow-hidden">
          {announcements.map((text, i) => (
            <p
              key={i}
              className={`absolute inset-0 flex items-center justify-center font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                i === current ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % announcements.length)}
          className="absolute right-10 text-gold-light/60 hover:text-gold-light transition-colors"
          aria-label="Next announcement"
        >
          <ChevronRight size={14} />
        </button>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 text-gold-light/40 hover:text-gold-light transition-colors"
          aria-label="Close announcement"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  )
}
