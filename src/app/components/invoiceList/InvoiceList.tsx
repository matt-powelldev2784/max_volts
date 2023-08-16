'use client'

import { useInvoices } from '@/app/lib/hooks/useInvoices'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceItem } from './InvoiceItem'

export const InvoiceList = () => {
  useInvoices(1)
  const invoices = useAppSelector((state) => state.newInvoiceReducer.invoices)
  console.log('invoices', invoices)

  const invoiceItemsJsx = invoices.map((invoice) => {
    return <InvoiceItem key={invoice.id} {...invoice} />
  })

  return <div>{invoiceItemsJsx}</div>
}
