import { Hammer, Leaf, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
  return (
    <main>
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#F5F0E5]">
        <img src="/atelier.png" alt="Shreeram Jewellers atelier in Jaipur" className="absolute inset-0 h-full w-full object-cover brightness-75" />
        <div className="relative text-center text-gold-light">
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold/80">The Atelier &bull; Jaipur, Rajasthan</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">The Shreeram Legacy</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 md:grid-cols-2 md:px-20">
        <div className="relative">
          <div className="absolute -inset-4 rounded-t-[3rem] bg-gradient-to-br from-gold/10 to-transparent" />
          <img src="/atelier.png" alt="Master karigar at work in Jaipur" className="relative aspect-square rounded-t-[2.5rem] rounded-b-2xl object-cover border border-gold/20 p-1 bg-white/30 shadow-lg" />
        </div>
        <div className="self-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold/40" />
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Our Heritage</p>
          </div>
          <h2 className="mt-5 font-serif text-4xl text-maroon">A Legacy of Sacred Karigari</h2>
          <p className="mt-7 font-sans leading-7 text-maroon/50">
            Founded in the heart of Jaipur&apos;s Johari Bazar in 1952, Shreeram Jewellers was built upon a sacred promise: to preserve and elevate India&apos;s richest jewellery traditions. Spanning three generations of master karigars, our atelier has remained dedicated to hand-forging Jadau, Polki, Kundan, and temple gold pieces that stand as testaments to timeless artistry.
          </p>
          <p className="mt-5 font-sans leading-7 text-maroon/50">
            Every piece that leaves our Jaipur workshop carries the soul of Rajasthan — the patience of meenakari enamel work, the precision of kundan setting, and the devotion of temple gold craftsmanship passed down through centuries.
          </p>
        </div>
      </section>

      <section className="border-y border-[#C89D47]/15 bg-[#F5F0E5] px-6 py-24 md:px-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">Our Craft</p>
            <div className="h-px w-16 bg-gold/40" />
          </div>
          <h2 className="mt-4 font-serif text-4xl text-maroon">Three Pillars of Heritage</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              [Hammer, 'Jadau & Polki', 'The ancient art of setting uncut diamonds and gemstones into molten gold, practiced by Jaipur\'s master karigars for over 500 years.'],
              [Leaf, 'Meenakari Enamel', 'Hand-ground mineral enamels fired at precise temperatures to create the vibrant, lasting colours of Rajasthani meenakari.'],
              [ShieldCheck, 'Certified Excellence', 'Every piece is BIS Hallmarked 916 Gold. Diamonds are GIA & IGI certified. Basra pearls are laboratory verified.'],
            ].map(([Icon, title, desc]) => (
              <div key={title as string} className="bg-white/70 backdrop-blur-lg border border-[#C89D47]/25 rounded-2xl p-10 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
                <Icon className="text-gold-dark" size={24} />
                <h3 className="mt-8 font-serif text-xl text-maroon">{title as string}</h3>
                <p className="mt-4 font-sans text-sm leading-6 text-maroon/50">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-20">
        <div className="text-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">The Jaipur Atelier</p>
          <h2 className="mt-4 font-serif text-4xl text-maroon">Visit Our Showroom</h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-sm leading-7 text-maroon/50">
            Our flagship showroom at Johari Bazar / MI Road, Jaipur is open by private appointment. Experience our heritage collections in person with a dedicated stylist.
          </p>
          <div className="mt-8 inline-flex flex-col items-center gap-2 rounded-2xl border border-[#C89D47]/20 bg-white/60 px-8 py-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/50">Flagship Showroom</p>
            <p className="font-serif text-lg text-maroon">Johari Bazar / MI Road</p>
            <p className="font-sans text-sm text-maroon/50">Jaipur, Rajasthan 302001</p>
          </div>
        </div>
      </section>
    </main>
  )
}
