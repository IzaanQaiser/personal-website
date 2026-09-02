import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Izaan Qaiser',
  description: 'Created with v0',
  generator: 'v0.dev',
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
        {children}
      </body>
    </html>
  )
}
