import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'
import AuthProvider from './AuthProvider'
import { ReduxProvider } from '@/redux/provider/provider'

const brandonGrotFont = localFont({
  src: [
    {
      path: '../../public/fonts/LibreFranklin-VariableFont_wght.ttf',
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
        <body className={brandonGrotFont.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
