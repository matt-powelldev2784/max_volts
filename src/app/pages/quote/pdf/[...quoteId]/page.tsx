import React from 'react'
import ViewPDF from '@/app/components/quote/components/pdf/PdfView'
import { NavBar } from '@/app/components'

export default async function QuotePdfPage({
  params,
}: {
  params: Promise<{ quoteId: string[] }>
}) {
  const { quoteId } = await params
  const id = quoteId?.[0]
  if (!id) return null

  return (
    <>
      <NavBar />
      <ViewPDF quoteId={id} />
    </>
  )
}
