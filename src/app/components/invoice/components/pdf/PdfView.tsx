'use client'

import { useState, useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { PdfLayout } from './components/pdfLayout/PdfLayout'
import PdfDownload from './components/pdfDownload/PdfDownload'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { useInvoice } from '@/app/lib/hooks/useInvoice'
import Image from 'next/image'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { PdfIsLoading } from './components/pdfIsLoading/PdfIsLoading'

interface PdfViewProps {
  invoiceId: string
}

const PDFView = ({ invoiceId }: PdfViewProps) => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  useInvoice(invoiceId)

  const currentInvoice = useAppSelector(
    (state) => state.invoiceReducer.currentEditInvoice
  )

  const error = useAppSelector((state) => state.invoiceReducer.error)
  const ErrorJSX = (
    <ErrorMessage
      errorMessage={'Error generating PDF. Please try again later'}
    />
  )

  if (!client || !currentInvoice) return <PdfIsLoading />

  return (
    <>
      <div className="flexCol gap-2 w-full mt-4 mb-4">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="flexRow text-lg text-center">
          PDF Invoice Number {currentInvoice.invoiceNum}
        </p>
      </div>

      {error ? ErrorJSX : null}

      <PdfDownload currentInvoice={currentInvoice} />
      <PDFViewer className="w-screen h-[600px]">
        <PdfLayout currentInvoice={currentInvoice} />
      </PDFViewer>
    </>
  )
}
export default PDFView
