'use client'

import { useState } from 'react'
import { SelectField } from '@/app/ui/formElements/SelectField'
import { Button } from '@/app/ui/button/button'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { AddProduct } from '../addProduct/AddProduct'
import { QuoteRowModal } from '../quoteRowModal/QuoteRowModal'
import { useQuoteFormFormik } from './lib/useQuoteFormFormik'
import { useClientSelectOptions } from '@/app/components/invoice/components/invoiceForm/lib/useClientSelectOptions'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { PageTitle, IsLoadingJsx } from '@/app/ui/'

interface QuoteFormProps {
  children: React.ReactNode
}

export const QuoteForm = ({ children }: QuoteFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createQuoteError = useAppSelector((state) => state.quoteReducer.error)
  const apiIsLoading = useAppSelector((state) => state.quoteReducer.isLoading)

  const totalPrice = useAppSelector((state) => state.quoteReducer.totalPrice)
  const showProductModal = useAppSelector(
    (state) => state.quoteReducer.displayAddProductModal
  )
  const currentQuoteRow = useAppSelector(
    (state) => state.quoteReducer.currentQuoteRow
  )
  const clients = useAppSelector((state) => state.clientReducer.clients)
  const formik = useQuoteFormFormik(setIsLoading)
  const clientSelectOptionsJsx = useClientSelectOptions()

  return (
    <div className="min-h-screen relative w-full h-fit mt-4">
      <PageTitle
        text={'Add Quote'}
        imgPath={'/icons/add_quote.svg'}
        divClasses="mb-2"
      />

      {apiIsLoading ? <IsLoadingJsx /> : null}

      <div className="w-full flexRow p-2 md:px-12 lg:px-16 gap-4 lg:gap-16 flex-wrap lg:flex-nowrap mb-8 ">
        <form className="w-full sm:px-2 md:px-0">
          <SelectField
            formik={formik}
            htmlFor="clientId"
            labelText="Select Client"
            imagePath="/icons/person.svg"
          >
            <option value="" disabled>
              {clients.length > 0 ? 'Select a client' : 'Loading...'}
            </option>
            {clientSelectOptionsJsx}
          </SelectField>
        </form>

        <AddProduct />
      </div>

      {showProductModal && currentQuoteRow?.reduxId ? (
        <QuoteRowModal {...currentQuoteRow} />
      ) : null}

      {children}

      <p className="font-bold text-center mt-8 w-full">
        Total Price : £{Number(totalPrice).toFixed(2)}
      </p>

      <div className="flexCol p-2">
        <Button
          type="submit"
          optionalClasses={`text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px] ${
            isLoading ? 'bg-mvOrange/50' : 'bg-mvOrange'
          } `}
          buttonText="Create Quote"
          disabled={isLoading}
          onClick={formik.handleSubmit}
        />

        {createQuoteError ? (
          <ErrorMessage errorMessage={createQuoteError} />
        ) : null}
      </div>
    </div>
  )
}
