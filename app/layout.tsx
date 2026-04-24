import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const fontJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const fontOutfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  title: 'Data Science Portfolio',
  description: 'Machine learning projects, data analysis, and AI solutions',
  generator: 'v0.app',
  authors: [{ name: 'Data Scientist' }],
  keywords: ['machine learning', 'data science', 'AI', 'deep learning', 'portfolio'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Data Science Portfolio',
    description: 'Machine learning projects, data analysis, and AI solutions',
    siteName: 'Data Science Portfolio',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontJakarta.variable} ${fontOutfit.variable} font-sans antialiased text-foreground bg-background`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
