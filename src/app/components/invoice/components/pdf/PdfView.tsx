'use client'

import { useState, useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { PdfLayout } from './components/pdfLayout/PdfLayout'
import PdfDownload from './components/pdfDownload/PdfDownload'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { useInvoice } from '@/app/lib/hooks/useInvoice'
import Image from 'next/image'

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

  useEffect(() => {
    setClient(true)
  }, [])

  if (!client) return null
  if (!currentInvoice) return null

  return (
    <>
      <div className="flexRow gap-2 mt-4 mb-4">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="text-lg">PDF Invoice Generated</p>
      </div>
      <PdfDownload currentInvoice={currentInvoice} />
      <PDFViewer className="w-screen h-[600px]">
        <PdfLayout currentInvoice={currentInvoice} />
      </PDFViewer>
    </>
  )
}
export default PDFView
