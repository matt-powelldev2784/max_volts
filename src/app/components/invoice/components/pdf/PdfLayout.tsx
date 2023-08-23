'use client'

import { useState, useEffect } from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
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

const PDFView = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!client) return null

  return (
    <div>
      <BlobProvider document={<PdfLayout />}>
        {({ blob, url, loading, error }) => {
          // Do whatever you need with blob here

          console.log('blob', blob)
          console.log('url', url)

          console.log('error', error)
          console.log('loading', loading)

          if (!loading && url) {
            return (
              <a href={url} download>
                Download
              </a>
            )
          }
          return <div>There is something going on on the fly</div>
        }}
      </BlobProvider>
    </div>
  )
}
export default PDFView
