'use client'

import { InvoiceListItem } from './components/invoiceListItem/InvoiceListItem'
import { InvoiceListHeader } from './components/invoiceListHeader/InvoiceListHeader'
import { PageTitle } from '@/app/lib/PageTitle'
import { SetPage } from '@/app/ui/setPage/SetPage'
import { T_Invoice } from '@/types/invoice'

interface InvoiceListProps {
  invoices: T_Invoice[]
  maxInvoicePages: number
  currentPageNum: number
}

export const InvoiceList = ({
  invoices,
  maxInvoicePages,
  currentPageNum,
}: InvoiceListProps) => {
  const invoiceItemsJsx = invoices.map((invoice) => {
    return <InvoiceListItem key={invoice.id} {...invoice} />
  })

  return (
    <section className="w-full flexCol">
      <PageTitle
        text={'Invoice List'}
        imgPath={'/icons/invoice.svg'}
        divClasses="mt-4 mb-4"
      />
      <SetPage
        maxPageNumber={maxInvoicePages}
        currentPageNum={currentPageNum}
        baseUrl="/pages/invoice/invoice-list/"
      />
      <InvoiceListHeader />
      {invoiceItemsJsx}
    </section>
  )
}