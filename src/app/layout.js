import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '🚘 Car Bazaar',
  description: 'A car showcase platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light-500 text-dark-500 `}>{children}</body>
    </html>
  )
}
