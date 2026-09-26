'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react'

const slides = [
  {
    image: '/hero-jewelry.png',
    tag: 'Courts of Rajputana',
    title: 'Jadau & Polki Heritage',
    subtitle: 'Handcrafted uncut diamonds set in 22KT gold by master karigars of Jaipur.',
    cta: 'Explore Collection',
    href: '/products?category=Necklaces',
    position: '58% 45%',
  },
  {
    image: '/jewelry-products.png',
    tag: 'Jaipur Karigari',
    title: 'Meenakari Artistry',
    subtitle: 'Time-honored enamel artistry etched with royal Rajasthani floral motifs.',
    cta: 'View Bangles',
    href: '/products?category=Bangles',
    position: '52% 18%',
  },
  {
    image: '/atelier.png',
    tag: 'Generations of Karigari',
    title: 'The Sacred Atelier',
    subtitle: 'Three generations preserving the rare jewellery crafts of Pink City.',
    cta: 'Our Legacy',
    href: '/about',
    position: '60% 40%',
  },
  {
    image: '/hero-jewelry.png',
    tag: 'The Royal Trousseau',
    title: 'Bridal Heritage Sets',
    subtitle: 'Complete bespoke parures handcrafted for the modern royal bride.',
    cta: 'Shop Bridal',
    href: '/products?category=Necklaces',
    position: '50% 30%',
  },
]

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [playing, next])

  const slide = slides[current]

  return (
    <section className="relative min-h-[92vh] md:min-h-[96vh] w-full overflow-hidden bg-[#1A0508] flex items-center">
      {/* Background Slides */}
      {slides.map((s, i) => (
        <div
          key={s.title + i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-[7000ms]`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectPosition: s.position }}
            className="object-cover"
          />

          {/* Luxury Shading Vignette: Top header shade + left narrative gradient + bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0508]/90 via-[#1A0508]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-transparent to-[#1A0508]/70" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 md:px-20 pt-36 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-[580px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C89D47]/40 bg-[#1A0508]/60 backdrop-blur-md px-3.5 py-1.5 mb-6">
            <Sparkles size={11} className="text-[#C89D47]" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#E8D39E] font-medium">
              {slide.tag || 'Shreeram Jewellers • Est. 1952'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF6EE] leading-[1.1] tracking-tight drop-shadow-sm">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 font-sans text-sm md:text-base text-white/80 leading-relaxed font-light max-w-md">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={slide.href}
              className="inline-flex items-center justify-center rounded-full bg-[#C89D47] px-8 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A0508] transition-all duration-300 hover:bg-[#D4AF5F] hover:shadow-[0_0_25px_rgba(200,157,71,0.4)] active:scale-95"
            >
              {slide.cta}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-7 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white hover:bg-white/15 hover:border-white/50 transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white/80 transition-all hover:bg-black/60 hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white/80 transition-all hover:bg-black/60 hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-6 md:left-20 z-20 flex items-center gap-4">
        <button
          onClick={() => setPlaying(!playing)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white/80 transition-all hover:bg-black/60 hover:text-white"
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
        >
          {playing ? <Pause size={10} /> : <Play size={10} />}
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-[#C89D47]' : 'w-2 bg-white/35 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}