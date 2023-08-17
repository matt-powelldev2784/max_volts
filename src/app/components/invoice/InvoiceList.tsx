'use client'

import { useInvoices } from '@/app/lib/hooks/useInvoices'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceItem } from './components/invoiceItem/InvoiceItem'
import { InvoiceItemHeader } from './components/invoiceItemHeader/InvoiceItemHeader'
import Image from 'next/image'

export const InvoiceList = () => {
  useInvoices(1)
  const invoices = useAppSelector((state) => state.newInvoiceReducer.invoices)
  console.log('invoices', invoices)

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
      <InvoiceItemHeader />
      {invoiceItemsJsx}
    </section>
  )
}
