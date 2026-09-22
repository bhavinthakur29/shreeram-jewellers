'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    image: '/hero-jewelry.png',
    title: 'Jadau & Polki Heritage',
    subtitle: 'Uncut diamonds from the courts of Rajputana',
    cta: 'Explore Collection',
    href: '/products?category=Chokers',
    position: '58% 45%',
  },
  {
    image: '/jewelry-products.png',
    title: 'Meenakari Artistry',
    subtitle: 'Hand-enameled masterpieces of Jaipur',
    cta: 'View Designs',
    href: '/products?category=Bangles',
    position: '52% 18%',
  },
  {
    image: '/atelier.png',
    title: 'The Sacred Atelier',
    subtitle: 'Three generations of master karigars',
    cta: 'Our Legacy',
    href: '/about',
    position: '60% 40%',
  },
  {
    image: '/hero-jewelry.png',
    title: 'Bridal Trousseau',
    subtitle: 'Complete parures for the royal bride',
    cta: 'Shop Bridal',
    href: '/products?category=Sets',
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
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [playing, next])

  const slide = slides[current]

  return (
    <section className="relative h-[500px] md:h-[650px] overflow-hidden bg-maroon">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt={s.title}
            style={{ objectPosition: s.position }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/80 via-maroon/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 md:px-20">
        <div className="max-w-[500px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-light/70">Shreeram Jewellers</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold-light leading-tight">{slide.title}</h2>
          <p className="mt-4 font-sans text-sm text-gold-light/60 leading-relaxed">{slide.subtitle}</p>
          <Link
            href={slide.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/40 px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-gold/30 hover:shadow-[0_0_25px_rgba(200,157,71,0.3)] active:scale-95 backdrop-blur-sm"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-light transition-all hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-light transition-all hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={() => setPlaying(!playing)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-light transition-all hover:bg-white/20"
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
        >
          {playing ? <Pause size={12} /> : <Play size={12} />}
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
