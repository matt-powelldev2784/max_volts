'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/ui/button/button'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer'

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
})

// Create Document Component
export const PdfLayout = () => (
  <Document pageLayout="singlePage">
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)

const PdfDownload = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!client) return null

  return (
    <div className="w-full flexCol">
      <PDFDownloadLink document={<PdfLayout />} fileName="invoice.pdf">
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px] m-4"
          buttonText="Download Invoice"
          disabled={false}
        />
      </PDFDownloadLink>
    </div>
  )
}
export default PdfDownload
