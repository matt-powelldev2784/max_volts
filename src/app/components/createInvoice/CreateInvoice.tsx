'use client'

import { InvoiceForm } from './components/InvoiceForm'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceRowText } from './components/InvoiceRowText'

export const CreateInvoice = () => {
  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRowText key={product.reduxId} {...product} />
  })

  const invoiceRowsHeader = {
    id: 'invoice_row_header',
    name: 'Product Name',
    buyPrice: 'Buy Price',
    description: 'Description',
    sellPrice: 'Price',
    reduxId: '',
    editMode: false,
    header: true,
  }

  const invoiceRowHeader = (
    // @ts-ignore: ignore erros to allow insertion of invoice row header
    <InvoiceRowText key={invoiceRowsHeader.id} {...invoiceRowsHeader} />
  )

  return (
    <section className="w-full flexCol">
      <InvoiceForm>
        {invoiceRowHeader}
        {invoiceRowsJsx}
      </InvoiceForm>
    </section>
  )
}
