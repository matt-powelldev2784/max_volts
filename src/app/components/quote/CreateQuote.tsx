'use client'

import { useEffect } from 'react'
import { QuoteForm } from './components/quoteForm/QuoteForm'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { QuoteRowText } from './components/quoteRowText/QuoteRowText'
import { QuoteRowHeader } from './components/quoteRowHeader/InvoiceRowHeader'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { resetToInitialState } from '@/redux/slice/quoteSlice' 

export const CreateQuote = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetToInitialState())
  }, [dispatch])

  const clientsApiError = useAppSelector((state) => state.clientReducer.error)
  const productsApiError = useAppSelector((state) => state.productReducer.error)
  const quoteApiError = useAppSelector((state) => state.quoteReducer.error)

  const quoteRows = useAppSelector((state) => state.quoteReducer.quoteRows)

  const quoteRowsJsx = quoteRows.map((product) => {
    return <QuoteRowText key={product.reduxId} {...product} /> // Replace with your quote row text
  })

  const noQuoteRowsJsx = (
    <p className="w-full flexCol h-[48px] rounded-lg p-2 sm:max-w-[95vw] m-auto  min-w-[306px] text-sm bg-darkBlack/5">
      No Quote Items
    </p>
  )

  return (
    <section className="w-full flexCol">
      {clientsApiError || productsApiError || quoteApiError ? (
        <ErrorMessage />
      ) : null}
      <QuoteForm>
        <QuoteRowHeader />
        {quoteRowsJsx}
        {quoteRows.length === 0 ? noQuoteRowsJsx : null}
      </QuoteForm>
    </section>
  )
}
