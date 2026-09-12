'use client'

import { useEffect, useState } from 'react'

const tickerItems = [
  { label: "24KT GOLD", value: "₹15,480/g", change: "+0.3%", up: true },
  { label: "22KT GOLD", value: "₹14,190/g", change: "+0.3%", up: true },
  { label: "18KT GOLD", value: "₹11,610/g", change: "+0.2%", up: true },
  { label: "SILVER", value: "₹1,85,000/kg", change: "+0.1%", up: true },
  { label: "PLATINUM", value: "₹3,420/g", change: "+0.1%", up: true },
]

export function MetalTicker() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-[#3A0A10] text-[#E8D39E] text-[11px] tracking-widest py-1.5 px-4 flex justify-between items-center border-b border-[#C89D47]/20 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="hidden md:flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {tickerItems.map((item) => (
            <span key={item.label} className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#E8D39E]/60">{item.label}:</span>
              <span className="font-medium text-[#E8D39E]">{item.value}</span>
              {item.change && (
                <span className={`text-[10px] ${item.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.change}
                </span>
              )}
            </span>
          ))}
          <span className="sm:hidden text-[#E8D39E]/80">24KT: ₹15,480/g</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <span className="text-[#E8D39E]/50">COMPLIMENTARY INSURED PAN-INDIA DELIVERY</span>
      </div>
    </div>
  )
}