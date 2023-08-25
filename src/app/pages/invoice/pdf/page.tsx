import React from 'react'
import ViewPDF from '@/app/components/invoice/components/pdf/PdfView'
import DownloadPdf from '@/app/components/invoice/components/pdf/PdfDownload'
import { NavBar } from '@/app/components'

export default function InvoicePdfPage() {
  return (
    <>
      <NavBar />
      <DownloadPdf />
      <ViewPDF />
    </>
  )
}
