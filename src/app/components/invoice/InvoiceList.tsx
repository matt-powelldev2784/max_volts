'use client'

import { useInvoices } from '@/app/lib/hooks/useInvoices'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceItem } from './components/invoiceItem/InvoiceItem'
import { InvoiceListHeader } from './components/invoiceListHeader/InvoiceListHeader'
import { SkipRecords } from './components/SkipRecords/SkipRecords'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'
import { PageTitle } from '@/app/lib/PageTitle'

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
      <PageTitle text={'Invoice List'} imgPath={'/icons/invoice.svg'} />
      {invoiceApiError ? <ErrorMessage /> : null}
      <SkipRecords firstInvoice={firstInvoice} lastInvoice={lastInvoice} />
      <InvoiceListHeader />
      {invoiceItemsJsx}
    </section>
  )
}
