interface ProductsFeedResponse {
  rates?: Record<string, number>
}

const DEFAULT_RATES: Record<string, number> = {
  '24KT': 15480,
  '22KT': 14190,
  '18KT': 11610,
  SILVER: 185,
}

async function getLiveRates(): Promise<Record<string, number>> {
  const feedUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/public/shreeram/products'
      : 'https://tekbiz.dev/api/public/shreeram/products'

  try {
    const res = await fetch(feedUrl, {
      cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'default',
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 60, tags: ['products'] },
    })

    if (!res.ok) return DEFAULT_RATES
    const data: ProductsFeedResponse = await res.json()
    return data.rates || DEFAULT_RATES
  } catch {
    return DEFAULT_RATES
  }
}

export async function MetalTicker() {
  const rates = await getLiveRates()

  const tickerItems = [
    {
      label: '24KT GOLD',
      value: `₹${Number(rates['24KT'] ?? 15480).toLocaleString('en-IN')}/g`,
    },
    {
      label: '22KT GOLD',
      value: `₹${Number(rates['22KT'] ?? 14190).toLocaleString('en-IN')}/g`,
    },
    {
      label: '18KT GOLD',
      value: `₹${Number(rates['18KT'] ?? 11610).toLocaleString('en-IN')}/g`,
    },
    {
      label: 'SILVER',
      value: `₹${Number((rates['SILVER'] ?? 185) * 1000).toLocaleString('en-IN')}/kg`,
    },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-[#3A0A10] text-[#E8D39E] text-[11px] tracking-widest px-4 flex items-center justify-between border-b border-[#C89D47]/20 select-none">
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {tickerItems.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#E8D39E]/60 text-[10px]">{item.label}:</span>
              <span className="font-medium text-[#E8D39E] font-mono">{item.value}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}