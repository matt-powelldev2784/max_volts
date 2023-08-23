import React from 'react'
import ViewPDF from '@/app/components/invoice/components/pdf/PdfLayout'
import { NavBar } from '@/app/components'

export default function InvoicePdfPage() {
  return (
    <>
      <NavBar />
      <ViewPDF />
    </>
  )
}
