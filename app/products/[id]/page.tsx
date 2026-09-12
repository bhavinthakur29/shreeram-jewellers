'use client'
import { MessageCircle, ShieldCheck } from 'lucide-react'
import { getProduct, relatedProducts, formatPrice } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  const whatsappUrl = `https://wa.me/9198XXXXXXXX?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (${product.code}). Please share details.`)}`

  return (
    <main>
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-12 md:grid-cols-2 md:px-20 md:py-20">
        {/* Images */}
        <div>
          <div className="hero-jharokha-border aspect-square overflow-hidden rounded-t-[3rem] rounded-b-2xl bg-[#FAF6EE] border-2 border-[#C89D47]/40 p-2.5 shadow-[0_8px_24px_rgba(74,14,23,0.04)]">
            <div className="hero-jharokha overflow-hidden h-full">
              <img src={product.image} alt={product.name} style={{ objectPosition: product.position }} className="h-full w-full rounded-t-[2.5rem] rounded-b-xl object-cover" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-4">
            {[product.image, '/hero-jewelry.png', '/jewelry-products.png', '/atelier.png'].map((image, index) => (
              <button key={`${image}-${index}`} className={`aspect-square overflow-hidden rounded-2xl border transition-all duration-200 ${index === 0 ? 'border-gold ring-1 ring-gold/20' : 'border-[#E5DDD0] hover:border-gold/40'}`}>
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-gold-dark">{product.code}</p>
            <span className="text-gold/30">&bull;</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-emerald-heritage">In Stock</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl leading-tight text-maroon md:text-5xl">{product.name}</h1>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-sans text-[9px] uppercase tracking-[0.1em] text-gold-dark">
                <ShieldCheck size={10} />
                {tag}
              </span>
            ))}
          </div>

          {/* Price & Weight */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-sans text-2xl font-medium text-maroon">{formatPrice(product.price)}</span>
            <span className="font-sans text-sm text-maroon/40">| Approx. {product.weight}</span>
          </div>

          <p className="mt-6 font-sans text-sm leading-7 text-maroon/50">{product.description}</p>

          {/* Specifications */}
          <div className="mt-8 space-y-3">
            {product.details.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-[#C89D47]/10 pb-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-maroon/40">{label}</span>
                <span className="font-sans text-sm text-maroon">{value}</span>
              </div>
            ))}
          </div>

          {/* Dual Luxury CTAs */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon border border-gold/40 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-maroon-dark hover:shadow-[0_0_25px_rgba(200,157,71,0.45)] active:scale-[0.98]"
            >
              <MessageCircle size={14} />
              Enquire on WhatsApp
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 flex flex-wrap items-center gap-4 gap-y-2">
            {['BIS Hallmarked 916', 'GIA Certified', 'Insured Delivery'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-[0.15em] text-maroon/30">
                <span className="h-1 w-1 rounded-full bg-gold/40" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-20">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gold/40" />
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark">You May Also Adore</p>
          <div className="h-px w-16 bg-gold/40" />
        </div>
        <h2 className="mt-4 text-center font-serif text-4xl text-maroon">Heritage Selections</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts(product.id).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
