'use client'

import { useQuote } from '@/app/lib/hooks/useQuote'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { updateQuote, setErrorState } from '@/redux/slice/quoteSlice'
import { AddProduct } from './components/addProduct/AddProduct'
import { ClientText } from '../invoice/components/ClientText/ClientText'
import { QuoteRowText } from './components/quoteRowText/QuoteRowText'
import { QuoteRowHeader } from './components/quoteRowHeader/InvoiceRowHeader'
import { QuoteRowModal } from './components/quoteRowModal/QuoteRowModal'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { PageTitle, Button } from '@/app/ui/'
import { useRouter } from 'next/navigation'

interface EditQuoteProps {
  quoteId: string
}

export const EditQuote = ({ quoteId }: EditQuoteProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  useQuote(quoteId)

  const quoteApiError = useAppSelector((state) => state.quoteReducer.error)
  const isLoading = useAppSelector((state) => state.quoteReducer.isLoading)
  const updateSuccess = useAppSelector(
    (state) => state.quoteReducer.updateSuccess
  )
  const quote = useAppSelector((state) => state.quoteReducer.currentEditQuote)
  const quoteRows = useAppSelector((state) => state.quoteReducer.quoteRows)
  const showProductModal = useAppSelector(
    (state) => state.quoteReducer.displayAddProductModal
  )
  const currentQuoteRow = useAppSelector(
    (state) => state.quoteReducer.currentQuoteRow
  )
  const totalPrice = useAppSelector((state) => state.quoteReducer.totalPrice)
  const quoteNum = quote?.quoteNum

  const clientText = quote?.Client.companyName
    ? `${quote?.Client.name} @ ${quote?.Client.companyName}`
    : quote?.Client.name

  const quoteRowsJsx = quoteRows.map((product) => {
    return <QuoteRowText key={product.reduxId} {...product} />
  })

  const onUpdateQuoteClick = async () => {
    if (quoteRows.length === 0) {
      return dispatch(setErrorState('Please add at least one quote row'))
    }
    await dispatch(updateQuote({ quoteId, totalPrice, quoteRows }))
    router.push(`/pages/quote/pdf/${quoteId}`)
  }

  return (
    <section className="w-screen mt-4 mb-8">
      <PageTitle
        text={`Edit Quote ${quoteNum ? quoteNum : ''}`}
        imgPath={'/icons/quote.svg'}
        divClasses="mb-2"
      />

      <div className="w-full flexCol">
        <div className="flexCol w-full md:w-1/3">
          {updateSuccess ? <ErrorMessage errorMessage={updateSuccess} /> : null}
          {quoteApiError ? (
            <ErrorMessage errorMessage={quoteApiError || undefined} />
          ) : null}
        </div>
      </div>

      <div className="w-full flexCol mim-w-[305px] px-2 lg:px-4">
        <div className="w-full flexCol md:p-2 gap-4 lg:flexRow md:px-12 lg:gap-16 mb-8">
          <ClientText clientText={clientText} />
          <AddProduct />
        </div>

        <div className="w-full lg:px:16 mim-w-[305px] md:p-2 ">
          <QuoteRowHeader />
          {quoteRowsJsx}
        </div>

        <p className="font-bold text-center mt-8 w-full mb-2">
          Total Price : £{Number(totalPrice).toFixed(2)}
        </p>

        <Button
          type="button"
          optionalClasses={`text-white text-sm w-full h-[42.5px] max-w-[320px] ${
            isLoading ? 'bg-mvOrange/50' : 'bg-mvOrange'
          } `}
          buttonText="Update Quote"
          disabled={isLoading}
          isLoading={isLoading}
          onClick={onUpdateQuoteClick}
        />
      </div>

      {showProductModal && currentQuoteRow?.reduxId ? (
        <QuoteRowModal {...currentQuoteRow} />
      ) : null}
    </section>
  )
}
