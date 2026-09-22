'use client'

import { useEffect, useState } from 'react'

interface ProductsFeedResponse {
  rates?: Record<string, number>
}

async function getLiveRates() {
  const feedUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/public/shreeram/products"
      : "https://tekbiz.dev/api/public/shreeram/products"

  try {
    const res = await fetch(feedUrl, {
      next: { tags: ["products"] },
    })

    if (!res.ok) throw new Error("Feed request failed")
    const data: ProductsFeedResponse = await res.json()
    return data.rates || null
  } catch {
    return null
  }
}

export async function MetalTicker() {
  const liveRates = await getLiveRates()

  const tickerItems = [
    {
      label: "24KT GOLD",
      value: `₹${Number(liveRates?.["24KT"] ?? 15480).toLocaleString("en-IN")}/g`,
    },
    {
      label: "22KT GOLD",
      value: `₹${Number(liveRates?.["22KT"] ?? 14190).toLocaleString("en-IN")}/g`,
    },
    {
      label: "18KT GOLD",
      value: `₹${Number(liveRates?.["18KT"] ?? 11610).toLocaleString("en-IN")}/g`,
    },
    {
      label: "SILVER",
      value: `₹${Number(liveRates?.["SILVER"] ?? 185).toLocaleString("en-IN")}/g`,
    },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#3A0A10] text-[#E8D39E] text-[11px] tracking-widest py-1.5 px-4 flex justify-between items-center border-b border-[#C89D47]/20">
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {tickerItems.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#E8D39E]/60">{item.label}:</span>
              <span className="font-medium text-[#E8D39E]">{item.value}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}