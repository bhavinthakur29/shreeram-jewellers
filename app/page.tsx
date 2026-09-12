'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Video } from 'lucide-react'
import { useRef, useState } from 'react'
import { products, collections } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

const metalOptions = [
  { id: '22kt-yellow', label: '22KT Yellow Gold', subtitle: 'Timeless temple gold with rich warm lustre' },
  { id: 'rose-polki', label: 'Rose Polki', subtitle: 'Uncut diamonds set in blush rose gold' },
  { id: 'uncut-solitaire', label: 'Uncut Solitaire', subtitle: 'Raw Polki diamonds with kundan setting' },
]

export default function HomePage() {
  const [activeMetal, setActiveMetal] = useState('22kt-yellow')
  const heroRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -8, y: x * 8 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const activeMetalData = metalOptions.find((m) => m.id === activeMetal)

  return (
    <main>
      {/* Hero Section - Mughal Jharokha */}
      <section className="relative min-h-[720px] overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#F5F0E5] to-[#FAF6EE]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C89D47\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Ambient gold glows */}
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#C89D47]/15 to-transparent blur-3xl animate-float-glow" />
        <div className="pointer-events-none absolute -left-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[#C89D47]/10 to-transparent blur-3xl animate-float-glow" style={{ animationDelay: '2s' }} />

        <div className="mx-auto grid max-w-[1280px] min-h-[720px] items-center px-6 py-32 md:grid-cols-2 md:px-20 md:py-0">
          {/* Left: Heritage Typography */}
          <div className="relative z-10 max-w-[480px]">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gold" />
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Jaipur, Rajasthan &bull; Est. 1952</p>
            </div>

            <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.05] text-maroon md:text-6xl lg:text-7xl">
              The Pink City&apos;s<br />Heritage Karigari
            </h1>

            <p className="mt-7 max-w-[400px] font-sans text-sm leading-7 text-maroon/50">
              Three generations of master karigars. Jadau, Polki, Kundan &amp; temple gold jewellery handcrafted in Jaipur&apos;s atelier since 1952. BIS Hallmarked 916 Gold. GIA &amp; IGI Certified.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-maroon border border-gold/40 px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-95">
                Explore the Heritage
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-white/60 px-6 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon hover:shadow-[0_0_25px_rgba(200,157,71,0.35)] active:scale-95">
                <Calendar size={14} />
                Visit Our Atelier
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-white/60 px-6 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon hover:shadow-[0_0_25px_rgba(200,157,71,0.35)] active:scale-95">
                <Video size={14} />
                Virtual Viewing
              </Link>
            </div>

            {/* Metal Switcher */}
            <div className="mt-8">
              <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-maroon/40 mb-3">View In:</p>
              <div className="flex flex-wrap gap-2">
                {metalOptions.map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setActiveMetal(metal.id)}
                    className={`rounded-full border px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.1em] transition-all duration-300 ${
                      activeMetal === metal.id
                        ? 'bg-maroon border-gold/40 text-gold-light shadow-[0_0_15px_rgba(200,157,71,0.2)]'
                        : 'bg-white/80 border-[#C89D47]/30 text-maroon/60 hover:bg-maroon hover:text-white hover:border-maroon'
                    }`}
                  >
                    {metal.label}
                  </button>
                ))}
              </div>
              {activeMetalData && (
                <p className="mt-3 font-sans text-[11px] text-maroon/40 italic transition-all duration-300">
                  {activeMetalData.subtitle}
                </p>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {['BIS Hallmarked 916 Gold', 'GIA & IGI Certified', 'Crafted in Jaipur'].map((badge) => <span key={badge} className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.15em] text-maroon/40"><span className="h-1 w-1 rounded-full bg-gold" />{badge}</span>)}
            </div>
          </div>

          {/* Right: Jharokha Arch Hero Image with 3D Tilt */}
          <div className="relative hidden md:block">
            {/* Ambient glow behind frame */}
            <div className="absolute -inset-12 bg-gradient-to-tr from-[#C89D47]/15 to-transparent blur-2xl pointer-events-none animate-float-glow" />

            <div
              ref={heroRef}
              className="hero-tilt relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer decorative border */}
              <div className="hero-jharokha-border relative border-2 border-[#C89D47]/40 bg-white/40 backdrop-blur-md p-2.5 shadow-[0_25px_60px_-15px_rgba(74,14,23,0.12)]">
                <div
                  className="hero-jharokha-inner overflow-hidden"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: 'transform 0.15s ease-out',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="hero-jharokha overflow-hidden">
                    <img
                      src="/hero-jewelry.png"
                      alt="Heritage Jadau and Polki diamond jewelry from Jaipur"
                      className="w-full h-[560px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Floating gold accent dot */}
              <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-gold/20 animate-pulse-ring" />
              <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-gold/15 animate-pulse-ring" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Mobile: Full-width hero image */}
        <div className="px-6 pb-8 md:hidden">
          <div className="hero-jharokha-border border-2 border-[#C89D47]/40 p-2 bg-white/40 backdrop-blur-md shadow-xl">
            <div className="hero-jharokha overflow-hidden">
              <img src="/hero-jewelry.png" alt="Heritage Jadau and Polki diamond jewelry" className="w-full h-[360px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Heirlooms */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">The Royal Karigari</p>
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <h2 className="mt-4 font-serif text-4xl text-maroon md:text-5xl">Heritage Heirlooms</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories - Royal Silhouettes */}
      <section className="mx-auto max-w-[1280px] px-6 pb-28 md:px-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Collections</p>
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <h2 className="mt-4 font-serif text-4xl text-maroon md:text-5xl">Shop by Heritage</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {collections.map((item) => (
            <Link href={`/products?category=${item.name.split(' ')[0]}`} key={item.name} className="group relative aspect-[0.72] overflow-hidden rounded-t-[2rem] rounded-b-2xl">
              <img src={item.image} alt={item.name} style={{ objectPosition: item.position }} className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-maroon/10 to-transparent" />
              <span className="absolute inset-x-3 bottom-5 text-center font-serif text-lg text-gold-light">{item.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="border-y border-[#C89D47]/15 bg-[#F5F0E5]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-20">
          <div className="relative">
            <div className="absolute -inset-4 rounded-t-[3rem] bg-gradient-to-br from-gold/10 to-transparent" />
            <img src="/atelier.png" alt="Master karigar crafting heritage jewelry in Jaipur" className="relative aspect-[1.25] w-full rounded-t-[2.5rem] rounded-b-2xl object-cover border border-gold/20 p-1 bg-white/30 shadow-lg" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold/40" />
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Our Legacy</p>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-maroon md:text-5xl">A Legacy of Sacred Karigari</h2>
            <p className="mt-7 font-sans text-sm leading-7 text-maroon/50">For over seven decades, Shreeram Jewellers has preserved the sacred art of Jadau, Polki, Kundan, and temple gold jewellery from our atelier in Jaipur. Three generations of master karigars, each piece a testament to Rajasthan&apos;s richest jewellery traditions.</p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-maroon">Discover Our Heritage <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-24 text-center md:px-20">
        <div className="mx-auto max-w-[560px]">
          <h2 className="font-serif text-4xl text-maroon">Join the Royal Circle</h2>
          <p className="mx-auto mt-5 font-sans text-sm text-maroon/50">Subscribers receive private access to bridal previews, heritage collection launches, and exclusive karigari showcases from our Jaipur atelier.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-maroon/20 px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-gold-light hover:border-maroon hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-95">Subscribe</Link>
        </div>
      </section>
    </main>
  )
}
