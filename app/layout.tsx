import type { Metadata } from 'next'
import { ShaderGradientBackground } from '@/components/shader-gradient-background'
import './globals.css'

export const metadata: Metadata = {
  title: 'Izaan Qaiser',
  description: 'Izaan Qaiser is a Computer Engineering student at the University of Waterloo building production software, agent systems, and data infrastructure.',
  metadataBase: new URL('https://izaanq.com'),
  openGraph: {
    title: 'Izaan Qaiser',
    description: 'Izaan Qaiser is a Computer Engineering student at the University of Waterloo building production software, agent systems, and data infrastructure.',
    url: '/',
    siteName: 'Izaan Qaiser',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950">
        <ShaderGradientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
