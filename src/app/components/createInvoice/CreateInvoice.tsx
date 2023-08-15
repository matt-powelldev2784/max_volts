'use client'

import { InvoiceForm } from './components/invoiceForm/InvoiceForm'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'

export const CreateInvoice = () => {
  const clientsApiError = useAppSelector((state) => state.clientReducer.error)
  const productsApiError = useAppSelector((state) => state.productReducer.error)

  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRowText key={product.reduxId} {...product} />
  })

  const noInvoiceRowsJsx = (
    <p className="w-full flexCol h-[48px] rounded-lg p-2 sm:max-w-[95vw] m-auto  min-w-[306px] text-sm bg-darkBlack/5">
      No Invoice Items
    </p>
  )

  return (
    <section className="w-full flexCol">
      {clientsApiError || productsApiError ? <ErrorMessage /> : null}
      <InvoiceForm>
        <InvoiceRowHeader />
        {invoiceRowsJsx}
        {invoiceRows.length === 0 ? noInvoiceRowsJsx : null}
      </InvoiceForm>
    </section>
  )
}
