'use client'

import { InvoiceForm } from './components/InvoiceForm'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceRowText } from './components/InvoiceRowText'

export const CreateInvoice = () => {
  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRowText key={product.id} {...product} />
  })

  return (
    <section className="w-full flexCol">
      <InvoiceForm>{invoiceRowsJsx}</InvoiceForm>
    </section>
  )
}
