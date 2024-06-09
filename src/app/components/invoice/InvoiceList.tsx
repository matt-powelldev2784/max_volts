'use client'

import { InvoiceListItem } from './components/invoiceListItem/InvoiceListItem'
import { InvoiceListHeader } from './components/invoiceListHeader/InvoiceListHeader'
import { SetPage, PageTitle } from '@/app/ui/'
import { T_Invoice } from '@/types/invoice'

interface InvoiceListProps {
  invoices: T_Invoice[]
  maxInvoicePages: number
  currentPageNum: number
  pageTitle: string
}

export const InvoiceList = ({
  invoices,
  maxInvoicePages,
  currentPageNum,
  pageTitle,
}: InvoiceListProps) => {

  const invoiceItemsJsx = invoices.map((invoice) => {
    return <InvoiceListItem key={invoice.id} {...invoice} />
  })

  return (
    <section className="w-full flexCol">
      <PageTitle
        text={pageTitle}
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