'use client'

import { AddProduct } from './components/AddProduct'
import { InvoiceForm } from './components/InvoiceForm'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceRow } from './components/InvoiceRow'

export const CreateInvoice = () => {
  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRow key={product.id} {...product} />
  })

  return (
    <section className="w-full flexCol">
      <InvoiceForm>
        <AddProduct />
        {invoiceRowsJsx}
      </InvoiceForm>
    </section>
  )
}
