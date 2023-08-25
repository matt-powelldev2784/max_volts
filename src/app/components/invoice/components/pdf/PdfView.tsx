'use client'

import { useState, useEffect } from 'react'
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { T_Invoice } from '@/types/invoice'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  imageContainer: {
    width: 200,
    height: 40,
  },
})

interface PdfLayoutProps {
  currentInvoice: T_Invoice
}

export const PdfLayout = ({ currentInvoice }: PdfLayoutProps) => {
  console.log('currentInvoice', currentInvoice)
  return (
    <Document pageLayout="singlePage">
      {/* eslint-disable jsx-a11y/alt-text */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <div style={styles.imageContainer}>
            <Image src={`/max_volts_logo.jpg`} />
          </div>
          <Text>Invoice Num: {currentInvoice.invoiceNum}</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
      {/* eslint-enable jsx-a11y/alt-text */}
    </Document>
  )
}

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
    <PDFViewer className="w-screen h-[600px]">
      <PdfLayout currentInvoice={currentInvoice} />
    </PDFViewer>
  )
}
export default PDFView
