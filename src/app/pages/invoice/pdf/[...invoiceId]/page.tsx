import React from 'react'
import ViewPDF from '@/app/components/invoice/components/pdf/PdfView'
import { NavBar } from '@/app/components'

export default async function InvoicePdfPage({
  params,
}: {
  params: Promise<{ invoiceId: string[] }>
}) {
  const { invoiceId } = await params
  const id = invoiceId?.[0]
  if (!id) return null

  return (
    <>
      <NavBar />
      <ViewPDF invoiceId={id} />
    </>
  )
}
