import React from 'react'
import ViewPDF from '@/app/components/quote/components/pdf/PdfView' // Make sure you have a similar component for quotes
import { NavBar } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function QuotePdfPage({
  params,
}: {
  params: { quoteId: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
  if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const quoteId = params.quoteId[0]

  return (
    <>
      <NavBar />
      <ViewPDF quoteId={quoteId} />
    </>
  )
}
