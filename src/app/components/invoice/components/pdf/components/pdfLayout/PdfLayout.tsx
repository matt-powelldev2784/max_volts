'use client'

import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import { T_Invoice, T_InvoiceRow } from '@/types/invoice'

Font.register({
  family: 'BrandonBold',
  src: '/fonts/Brandon_bld.otf',
})

Font.register({
  family: 'BrandonReg',
  src: '/fonts/Brandon_reg.otf',
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'BrandonReg',
    fontSize: '12px',
  },
  logoSection: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: 200,
    height: 40,
    margin: 8,
  },
  textBold: {
    fontFamily: 'BrandonBold',
    fontSize: '14px',
  },
  flexCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyItems: 'space-between',
    marginLeft: 8,
    marginRight: 8,
    width: '90%',
  },
})

interface PdfInvoiceRowProps {
  invoiceRow: T_InvoiceRow
}

const PdfInvoiceRow = ({ invoiceRow }: PdfInvoiceRowProps) => {
  const { quantity, name, description, VAT, totalPrice } = invoiceRow
  const priceForEach = invoiceRow.sellPrice

  return (
    <View style={styles.flexRow}>
      <Text style={{ width: 50, height: 'auto', border: '2px solid green' }}>
        {quantity}
      </Text>
      <Text style={{ width: 130, height: 'auto', border: '2px solid green' }}>
        {name}
      </Text>
      <Text style={{ width: 210, height: 'auto', border: '2px solid green' }}>
        {description}
      </Text>
      <Text style={{ width: 50, height: 'auto', border: '2px solid green' }}>
        {priceForEach}
      </Text>
      <Text style={{ width: 35, height: 'auto', border: '2px solid green' }}>
        {VAT}
      </Text>
      <Text style={{ width: 80, height: 'auto', border: '2px solid green' }}>
        {totalPrice}
      </Text>
    </View>
  )
}

interface PdfLayoutProps {
  currentInvoice: T_Invoice
}

export const PdfLayout = ({ currentInvoice }: PdfLayoutProps) => {
  console.log('currentInvoice', currentInvoice)
  const invoiceRows = currentInvoice.InvoiceRow

  const InvoiceRowsJsx = invoiceRows.map((invoiceRow) => {
    return <PdfInvoiceRow key={invoiceRow.id} invoiceRow={invoiceRow} />
  })

  return (
    <Document pageLayout="singlePage">
      {/* eslint-disable jsx-a11y/alt-text */}
      <Page size="A4" style={styles.page}>
        <View style={styles.logoSection}>
          <View style={styles.imageContainer}>
            <Image src={`/max_volts_logo.jpg`} />
          </View>

          <View style={styles.flexCenter}>
            <Text style={styles.textBold}>Invoice</Text>
            <Text>Invoice Number: {currentInvoice.invoiceNum}</Text>
            <Text>Date: {currentInvoice.invoiceDate}</Text>
          </View>

          <View style={{ height: 8 }}></View>
          <View style={styles.flexCenter}>{InvoiceRowsJsx}</View>

          <View style={styles.flexCenter}>
            <Text>
              Max Volts Electrical Services, 1 Road Name, Worcester Park,
              Surrey, KT11 1AA
            </Text>
            <Text>Tel: 07877 695 996</Text>
            <Text>Email: max-volts-electrical@gmail.com</Text>
          </View>
        </View>
      </Page>
      {/* eslint-enable jsx-a11y/alt-text */}
    </Document>
  )
}
