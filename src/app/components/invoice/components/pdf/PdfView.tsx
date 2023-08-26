'use client'

import { useState, useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { PdfLayout } from './components/pdfLayout/PdfLayout'
import PdfDownload from './components/pdfDownload/PdfDownload'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { useInvoice } from '@/app/lib/hooks/useInvoice'
import Image from 'next/image'
import { IsLoading } from '@/app/lib/IsLoading'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'

interface PdfViewProps {
  invoiceId: string
}

const PDFView = ({ invoiceId }: PdfViewProps) => {
  const [client, setClient] = useState(false)
  const dispatch = useAppDispatch()
  dispatch(resetToInitialState)
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

  useEffect(() => {
    setClient(true)
  }, [])

  if (!client || !currentInvoice) {
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
          <p className="flexRow text-lg text-center">PDF Invoice Generating</p>
        </div>
        <IsLoading isLoading={true} imgPath={'/icons/loading.svg'} />
      </>
    )
  }

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
