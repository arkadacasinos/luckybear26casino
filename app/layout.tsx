import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino — официальный сайт и зеркало',
  description: 'Информационный гид по Lucky Bear Casino: официальный сайт, зеркало и советы для ответственной игры онлайн.',
  generator: 'v0.app',
  icons: {
    icon: '/lucky-bear-favicon.png',
    apple: '/lucky-bear-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e8',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="390c5df978dde8ac" />
        <meta charSet="utf-8" />
        <meta name="description" content="Информационный гид по Lucky Bear Casino: официальный сайт, зеркало и советы для ответственной игры онлайн." />
        <meta name="keywords" content="lucky bear casino, luckybear casino, лаки бир казино, официальный сайт, зеркало" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/lucky-bear-favicon.png" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
