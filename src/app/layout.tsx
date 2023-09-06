import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import AuthProvider from './AuthProvider'
import { ReduxProvider } from '@/redux/provider/provider'

const LibreFranklinFont = localFont({
  src: [
    {
      path: '../../public/fonts/libre-franklin.regular.otf',
    },
    {
      path: '../../public/fonts/libre-franklin.bold.otf',
    },
  ],
  variable: '--font-LibreFranklin',
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
        <body className={`${LibreFranklinFont.className} text-base`}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
