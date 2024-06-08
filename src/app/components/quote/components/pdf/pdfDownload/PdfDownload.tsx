'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/app/ui/'
import { PdfLayout } from '../pdfLayout/PdfLayout'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { T_Quote } from '@/types/quote' // Make sure you have a similar type for quotes

interface PdfQuoteDownloadProps {
  currentQuote: T_Quote
}

const PdfDownload = ({ currentQuote }: PdfQuoteDownloadProps) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!client) return null

  return (
    <div className="w-full flexCol">
      <PDFDownloadLink
        document={<PdfLayout currentQuote={currentQuote} />}
        fileName={`max-volts-quote-${currentQuote.quoteNum}.pdf`}
      >
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px] my-4"
          buttonText="Download Quote"
          disabled={false}
        />
      </PDFDownloadLink>
    </div>
  )
}
export default PdfDownload
