'use client'

import { useInvoices } from '@/app/lib/hooks/useInvoices'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceItem } from './components/invoiceItem/InvoiceItem'
import { InvoiceItemHeader } from './components/invoiceItemHeader/InvoiceItemHeader'
import { SkipRecords } from './components/SkipRecords/SkipRecords'
import Image from 'next/image'

export const InvoiceList = () => {
  const pageNum = useAppSelector(
    (state) => state.invoiceReducer.invoiceListPageNum
  )

  useInvoices(pageNum)
  const invoices = useAppSelector((state) => state.invoiceReducer.invoices)
  console.log('invoices', invoices)
  const firstInvoice = invoices[0] ? invoices[0].invoiceNum : null
  const lastInvoice =
    invoices.length > 0 ? invoices[invoices.length - 1].invoiceNum : null
  const invoiceItemsJsx = invoices.map((invoice) => {
    return <InvoiceItem key={invoice.id} {...invoice} />
  })

  return (
    <section className="w-full flexCol">
      <div className="flexRow gap-2 mt-4 mb-4">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="text-lg">Invoice List</p>
      </div>
      <SkipRecords firstInvoice={firstInvoice} lastInvoice={lastInvoice} />
      <InvoiceItemHeader />
      {invoiceItemsJsx}
    </section>
  )
}
