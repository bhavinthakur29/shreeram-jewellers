import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-maroon px-6 py-16 text-[#FAF6EE] md:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-5">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-2xl text-gold-light tracking-[0.2em]">SHREERAM</Link>
          <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.3em] text-[#E8D39E]/70">JAIPUR • RAJASTHAN</p>
          <p className="mt-6 max-w-[300px] font-sans text-sm leading-6 text-[#FAF6EE]/80">
            The Pink City&apos;s heritage atelier for Jadau, Polki, Kundan &amp; temple gold jewellery. Crafted by master karigars of Rajasthan since 1952.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            {[
              { label: 'Instagram', href: '#' },
              { label: 'Facebook', href: '#' },
              { label: 'YouTube', href: '#' },
              { label: 'WhatsApp', href: 'https://wa.me/9198XXXXXXXX' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C89D47]/30 text-[#E8D39E]/60 transition-all hover:border-[#C89D47]/60 hover:text-[#E8D39E]"
                aria-label={social.label}
              >
                <span className="font-sans text-[10px]">{social.label[0]}</span>
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#E8D39E]/50 mb-3">We Accept</p>
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'UPI', 'Net Banking', 'COD'].map((method) => (
                <span key={method} className="rounded border border-[#C89D47]/20 px-2 py-1 font-sans text-[8px] text-[#E8D39E]/50">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D39E]">Quick Links</p>
          <div className="mt-6 space-y-3">
            {[
              { label: 'All Collections', href: '/products' },
              { label: 'Bridal Trousseau', href: '/products?category=Sets' },
              { label: 'About Our Legacy', href: '/about' },
              { label: 'Care Guide', href: '/care' },
              { label: 'Contact Us', href: '/contact' },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="block font-sans text-sm text-[#FAF6EE]/80 transition-colors hover:text-[#FAF6EE]">{item.label}</Link>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8D39E]">Policies</p>
          <div className="mt-6 space-y-3">
            {['Shipping & Returns', 'Privacy Policy', 'Terms of Service', 'BIS Certification', 'Hallmark Guarantee'].map((item) => (
              <span key={item} className="block font-sans text-sm text-[#FAF6EE]/80">{item}</span>
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
