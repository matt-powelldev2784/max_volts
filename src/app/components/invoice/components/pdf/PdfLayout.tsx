'use client'

import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'
import { T_Invoice } from '@/types/invoice'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  logoSection: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    // border: '2px solid green',
  },
  imageContainer: {
    width: 200,
    height: 40,
    margin: 8,
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
        <View style={styles.logoSection}>
          <div style={styles.imageContainer}>
            <Image src={`/max_volts_logo.jpg`} />
          </div>
        </View>

        <View style={styles.logoSection}>
          <Text>Invoice Num: {currentInvoice.invoiceNum}</Text>
        </View>
      </Page>
      {/* eslint-enable jsx-a11y/alt-text */}
    </Document>
  )
}
