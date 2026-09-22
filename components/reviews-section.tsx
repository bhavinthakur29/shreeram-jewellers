'use client'

import { Star, CheckCircle } from 'lucide-react'
import type { Review } from '@/lib/products'

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? 'fill-gold text-gold' : 'fill-none text-maroon/20'}
        />
      ))}
    </div>
  )
}

export function ReviewsSection({ reviews, rating, reviewCount }: { reviews: Review[]; rating: number; reviewCount: number }) {
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
    percentage: reviews.length > 0 ? (reviews.filter((r) => r.rating === stars).length / reviews.length) * 100 : 0,
  }))

  return (
    <section className="mt-12 border-t border-[#C89D47]/10 pt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-maroon">Customer Reviews</h3>
        <div className="flex items-center gap-2">
          <StarRating rating={Math.round(rating)} size={16} />
          <span className="font-sans text-sm text-maroon/60">{rating} ({reviewCount} reviews)</span>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="mb-8 rounded-xl bg-white/60 border border-[#C89D47]/15 p-4">
        {ratingDistribution.map(({ stars, count, percentage }) => (
          <div key={stars} className="flex items-center gap-3 py-1">
            <span className="font-sans text-xs text-maroon/50 w-8">{stars} ★</span>
            <div className="flex-1 h-2 rounded-full bg-maroon/5 overflow-hidden">
              <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${percentage}%` }} />
            </div>
            <span className="font-sans text-xs text-maroon/40 w-8 text-right">{count}</span>
          </div>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-xl bg-white/60 border border-[#C89D47]/15 p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} size={12} />
                  {review.verified && (
                    <span className="flex items-center gap-1 font-sans text-[9px] uppercase tracking-wider text-emerald-heritage">
                      <CheckCircle size={10} /> Verified
                    </span>
                  )}
                </div>
                <h4 className="mt-2 font-serif text-base text-maroon">{review.title}</h4>
              </div>
              <span className="font-sans text-[10px] text-maroon/30">{new Date(review.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <p className="mt-2 font-sans text-sm text-maroon/50 leading-relaxed">{review.body}</p>
            <p className="mt-3 font-sans text-[10px] text-maroon/30">— {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
