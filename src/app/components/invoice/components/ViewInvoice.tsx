'use client'

import { useState, useEffect } from 'react'
import { apiCall } from '@/lib/apiCall'
import { InvoiceRow } from './InvoiceRow'

export const ViewInvoice = () => {
  const [invoiceData, setInvoiceData] = useState<any>(null)
  const currentInvoiceId = sessionStorage.getItem('currentInvoiceId')

  useEffect(() => {
    const getInvoiceData = async () => {
      const InvoiceData = await apiCall({
        route: `/api/protected/invoice/single?invoice_id=${currentInvoiceId}`,
      })
      setInvoiceData(InvoiceData)
    }
    getInvoiceData()
  }, [currentInvoiceId])

  console.log('invoiceData', invoiceData)

  if (!invoiceData) return null

  const invoiceRowData = invoiceData.InvoiceRow
  console.log('invoiceRowData', invoiceRowData)

  const invoiceRowsJsx = invoiceRowData.map((invoiceRow: any) => {
    return <InvoiceRow key={invoiceRow.id} {...invoiceRow} />
  })

  return (
    <section>
      <p>Invoice Number:{invoiceData.invoiceNum}</p>
      <p>Total Amount:{invoiceData.totalAmount}</p>
      <div>{invoiceRowsJsx}</div>
    </section>
  )
}
