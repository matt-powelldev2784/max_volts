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
import { T_Invoice } from '@/types/invoice'

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
  flexCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  textBold: {
    fontFamily: 'BrandonBold',
    fontSize: '14px',
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
          <View style={styles.imageContainer}>
            <Image src={`/max_volts_logo.jpg`} />
          </View>

          <View style={styles.flexCenter}>
            <Text style={styles.textBold}>Invoice</Text>
            <Text>Invoice Number: {currentInvoice.invoiceNum}</Text>
          </View>

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
