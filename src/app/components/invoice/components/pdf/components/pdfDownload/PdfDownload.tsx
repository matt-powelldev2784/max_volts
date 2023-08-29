'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/app/ui/button/button'
import { PdfLayout } from '../pdfLayout/PdfLayout'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { T_Invoice } from '@/types/invoice'

interface PdfDownloadProps {
  currentInvoice: T_Invoice
}

const PdfDownload = ({ currentInvoice }: PdfDownloadProps) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!client) return null

  return (
    <div className="w-full flexCol">
      <PDFDownloadLink
        document={<PdfLayout currentInvoice={currentInvoice} />}
        fileName={`max-volts-invoice-${currentInvoice.invoiceNum}.pdf`}
      >
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px] my-4"
          buttonText="Download Invoice"
          disabled={false}
        />
      </PDFDownloadLink>
    </div>
  )
}
export default PdfDownload
