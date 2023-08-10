import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './AuthProvider'
import { ReduxProvider } from '@/redux/provider/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Volts Web Portal',
  description: 'Max Volts web Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
