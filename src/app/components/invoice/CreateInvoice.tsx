'use client'

import { useEffect } from 'react'
import { InvoiceForm } from './components/invoiceForm/InvoiceForm'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'

export const CreateInvoice = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetToInitialState())
  }, [dispatch])

  const clientsApiError = useAppSelector((state) => state.clientReducer.error)
  const productsApiError = useAppSelector((state) => state.productReducer.error)
  const invoiceApiError = useAppSelector((state) => state.invoiceReducer.error)

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
      {clientsApiError || productsApiError || invoiceApiError ? <ErrorMessage /> : null}
      <InvoiceForm>
        <InvoiceRowHeader />
        {invoiceRowsJsx}
        {invoiceRows.length === 0 ? noInvoiceRowsJsx : null}
      </InvoiceForm>
    </section>
  )
}
