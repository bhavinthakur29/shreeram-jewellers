import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import { MetalTicker } from '@/components/metal-ticker'
import { ConciergePill } from '@/components/concierge-pill'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Shreeram Jewellers | Jaipur Heritage Fine Jewellery Since 1952',
  description: 'The Pink City\'s heritage atelier for Jadau, Polki, Kundan & temple gold jewellery. Crafted by master karigars of Rajasthan. BIS Hallmarked 916 Gold.',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FAF6EE', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        <CartProvider>
          <MetalTicker />
          <SiteHeader />
          <CartDrawer />
          <ConciergePill />
          {children}
          <SiteFooter />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
