'use client'

import { useState, useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { PdfLayout } from './pdfLayout/PdfLayout'
import PdfDownload from './pdfDownload/PdfDownload'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { useQuote } from '@/app/lib/hooks/useQuote' // Replace with your quote hook
import Image from 'next/image'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { PdfIsLoading } from './pdfIsLoading/PdfIsLoading'

interface PdfViewProps {
  quoteId: string
}

const PDFView = ({ quoteId }: PdfViewProps) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  useQuote(quoteId) // Replace with your quote hook

  const currentQuote = useAppSelector(
    (state) => state.quoteReducer.currentEditQuote // Replace with your quote reducer
  )

  const error = useAppSelector((state) => state.quoteReducer.error) // Replace with your quote reducer
  const ErrorJSX = (
    <ErrorMessage
      errorMessage={'Error generating PDF. Please try again later'}
    />
  )

  if (!client || !currentQuote) return <PdfIsLoading />

  return (
    <>
      <div className="flexCol gap-2 w-full mt-4 mb-4">
        <Image
          src="/icons/quote.svg" // Replace with your quote icon
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="flexRow text-lg text-center">
          PDF Quote Number {currentQuote.quoteNum}
        </p>
      </div>
      {error ? ErrorJSX : null}
      <PdfDownload currentQuote={currentQuote} />
      <PDFViewer className="w-screen h-[600px]">
        <PdfLayout currentQuote={currentQuote} />
      </PDFViewer>
    </>
  )
}
export default PDFView
