'use client'

import { useState, useEffect } from 'react'
import { apiCall } from '@/lib/apiCall'

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

  return invoiceData ? (
    <p>{invoiceData.id + ' ' + invoiceData.totalAmount}</p>
  ) : null
}
