import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import AuthProvider from './AuthProvider'
import { ReduxProvider } from '@/redux/provider/provider'

const LibreFranklinRegFont = localFont({
  src: [
    {
      path: '../../public/fonts/libre-franklin.regular.otf',
    },
  ],
  variable: '--font-LibreFranklinReg',
})

const LibreFranklinBoldFont = localFont({
  src: [
    {
      path: '../../public/fonts/libre-franklin.bold.otf',
    },
  ],
  variable: '--font-LibreFranklinBold',
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
        <body
          className={`${LibreFranklinRegFont.className} ${LibreFranklinBoldFont.className} text-base font-sans`}
        >
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
