'use client'

import { useState, useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { PdfLayout } from './components/PdfLayout'
import PdfDownload from './components/PdfDownload'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { useInvoice } from '@/app/lib/hooks/useInvoice'

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
    <PdfDownload currentInvoice={currentInvoice} />
      <PDFViewer className="w-screen h-[600px]">
        <PdfLayout currentInvoice={currentInvoice} />
      </PDFViewer>
    </>
  )
}
export default PDFView
