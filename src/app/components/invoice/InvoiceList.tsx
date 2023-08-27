'use client'

import { useInvoices } from '@/app/lib/hooks/useInvoices'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceItem } from './components/invoiceItem/InvoiceItem'
import { InvoiceListHeader } from './components/invoiceListHeader/InvoiceListHeader'
import { SkipRecords } from './components/SkipRecords/SkipRecords'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'
import Image from 'next/image'

export const InvoiceList = () => {
  const pageNum = useAppSelector(
    (state) => state.invoiceReducer.invoiceListPageNum
  )
  const invoiceApiError = useAppSelector((state) => state.invoiceReducer.error)

  useInvoices(pageNum)

  const invoices = useAppSelector((state) => state.invoiceReducer.invoices)
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
      {invoiceApiError ? <ErrorMessage /> : null}
      <SkipRecords firstInvoice={firstInvoice} lastInvoice={lastInvoice} />
      <InvoiceListHeader />
      {invoiceItemsJsx}
    </section>
  )
}
