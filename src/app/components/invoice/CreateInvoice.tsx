'use client'

import { InvoiceForm } from './components/invoiceForm/InvoiceForm'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'

export const CreateInvoice = () => {
  const dispatch = useAppDispatch()
  const clientsApiError = useAppSelector((state) => state.clientReducer.error)
  const productsApiError = useAppSelector((state) => state.productReducer.error)
  dispatch(resetToInitialState)

  const invoiceRows = useAppSelector(
    (state) => state.invoiceReducer.invoiceRows
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