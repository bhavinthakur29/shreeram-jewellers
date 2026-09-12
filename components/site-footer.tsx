import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-maroon px-6 py-16 text-[#FAF6EE] md:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-4">
        {/* Brand Column */}
        <div>
          <Link href="/" className="font-serif text-2xl text-gold-light tracking-[0.2em]">SHREERAM</Link>
          <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.3em] text-[#E8D39E]/70">JAIPUR • RAJASTHAN</p>
          <p className="mt-8 max-w-[250px] font-sans text-sm leading-6 text-[#FAF6EE]/80">
            The Pink City&apos;s heritage atelier for Jadau, Polki, Kundan &amp; temple gold jewellery. Crafted by master karigars of Rajasthan since 1952.
          </p>
          <div className="mt-8 space-y-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#E8D39E]/70">Crafted by Master Karigars of Rajasthan</p>
          </div>
        </div>

        {/* Collections */}
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D39E]">Heritage Collections</p>
          <div className="mt-6 space-y-3">
            {['Jadau & Polki', 'Meenakari Enamel', 'Royal Rajputi Aad', 'Temple Gold Haram', 'Bridal Trousseau'].map((item) => (
              <Link key={item} href="/products" className="block font-sans text-sm text-[#FAF6EE]/80 transition-colors hover:text-[#FAF6EE]">{item}</Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D39E]">Atelier Services</p>
          <div className="mt-6 space-y-3">
            {['Book Jaipur Atelier Visit', 'Virtual Video Viewing', 'Bridal Concierge', 'Custom Bespoke Commission', 'Heritage Care Guide'].map((item) => (
              <Link key={item} href="/care" className="block font-sans text-sm text-[#FAF6EE]/80 transition-colors hover:text-[#FAF6EE]">{item}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D39E]">Visit Our Atelier</p>
          <div className="mt-6 space-y-4">
            <div>
              <p className="font-sans text-sm text-[#FAF6EE]/80">Flagship Showroom</p>
              <p className="font-sans text-sm text-[#FAF6EE]/80">Johari Bazar / MI Road</p>
              <p className="font-sans text-sm text-[#FAF6EE]/80">Jaipur, Rajasthan 302001</p>
            </div>
            <div>
              <p className="font-sans text-sm text-[#FAF6EE]/80">By Appointment</p>
              <p className="font-sans text-sm text-[#FAF6EE]/80">+91 98XXX XXXXX</p>
              <p className="font-sans text-sm text-[#FAF6EE]/80">heritage@shreeramjewellers.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges & Copyright */}
      <div className="mx-auto mt-14 max-w-[1280px] border-t border-[#C89D47]/25 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4 gap-y-2 mb-6">
          {['100% BIS Hallmarked 916 Gold', 'GIA & IGI Certified Diamonds', 'Insured Pan-India & Global Delivery'].map((badge) => (
            <span key={badge} className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.15em] text-[#E8D39E]/70">
              <span className="h-1 w-1 rounded-full bg-[#C89D47]/50" />
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#FAF6EE]/80">
            &copy; 2026 Shreeram Jewellers, Jaipur. All Rights Reserved.
          </p>
          <p className="font-sans text-[9px] uppercase tracking-widest text-[#E8D39E]/70">
            Heritage Karigari Since 1952
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="font-sans text-xs text-[#FAF6EE]/60">
            Handcrafted digitally by{" "}
            <a
              href="https://teksquad.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8D39E] hover:text-[#FAF6EE] underline underline-offset-4 decoration-[#C89D47]/40 hover:decoration-[#FAF6EE] transition-colors"
            >
              TekSquad
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
