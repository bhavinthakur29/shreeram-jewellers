'use client'

import { useState } from 'react'
import { MapPin, Truck, CheckCircle } from 'lucide-react'

export function PincodeChecker() {
  const [pincode, setPincode] = useState('')
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle')

  const check = () => {
    if (pincode.length !== 6) return
    setStatus('checking')
    // Simulate API call
    setTimeout(() => {
      // First 3 digits determine metro/non-metro for demo
      const firstDigit = parseInt(pincode[0])
      setStatus(firstDigit >= 1 && firstDigit <= 7 ? 'available' : 'unavailable')
    }, 1000)
  }

  return (
    <div className="rounded-xl border border-[#C89D47]/15 bg-white/60 p-4">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={14} className="text-maroon/40" />
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/50">Check Delivery</span>
      </div>
      <div className="flex gap-2">
        <input
          type="tel"
          value={pincode}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, '').slice(0, 6)
            setPincode(val)
            setStatus('idle')
          }}
          placeholder="Enter Pincode"
          className="flex-1 h-10 rounded-lg border border-[#E5DDD0] bg-white/70 px-3 font-sans text-sm text-maroon outline-none focus:border-gold focus:ring-1 focus:ring-gold/10 transition-all"
        />
        <button
          onClick={check}
          disabled={pincode.length !== 6 || status === 'checking'}
          className="h-10 rounded-lg bg-maroon px-4 font-sans text-[10px] uppercase tracking-wider text-gold-light transition-all hover:bg-maroon-dark disabled:opacity-50"
        >
          {status === 'checking' ? '...' : 'Check'}
        </button>
      </div>
      {status === 'available' && (
        <div className="mt-3 flex items-center gap-2 text-emerald-heritage">
          <CheckCircle size={14} />
          <span className="font-sans text-xs">Delivered in 5-7 business days. Free shipping.</span>
        </div>
      )}
      {status === 'unavailable' && (
        <div className="mt-3 flex items-center gap-2 text-maroon/50">
          <Truck size={14} />
          <span className="font-sans text-xs">Delivery available in 10-12 business days.</span>
        </div>
      )}
    </div>
  )
}
