import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from './AuthProvider'
import { ReduxProvider } from '@/redux/provider/provider'
import { Libre_Franklin } from 'next/font/google'

const Libre = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

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
        <body className={`${Libre.className} min-w-[320px]`}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
