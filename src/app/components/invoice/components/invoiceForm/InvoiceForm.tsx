'use client'

import { useState } from 'react'
import { SelectField } from '../../../../lib/formElements/SelectField'
import { Button } from '@/ui/button/button'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import { AddProduct } from '../addProduct/AddProduct'
import { InvoiceRowModal } from '../invoiceRowModal/InvoiceRowModal'
import { useInvoiceFormFormik } from './lib/useInvoiceFormFormik'
import { useClientSelectOptions } from './lib/useClientSelectOptions'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'
import Image from 'next/image'

interface InvoiceFormProps {
  children: React.ReactNode
}

export const InvoiceForm = ({ children }: InvoiceFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const createInvoiceError = useAppSelector(
    (state) => state.newInvoiceReducer.error
  )
  const totalPrice = useAppSelector(
    (state) => state.newInvoiceReducer.totalPrice
  )
  const showProductModal = useAppSelector(
    (state) => state.newInvoiceReducer.displayAddProductModal
  )
  const currentInvoiceRow = useAppSelector(
    (state) => state.newInvoiceReducer.currentInvoiceRow
  )
  const clients = useAppSelector((state) => state.clientReducer.clients)
  const formik = useInvoiceFormFormik(setIsLoading)
  const clientSelectOptionsJsx = useClientSelectOptions()

  return (
    <div className="min-h-screen relative w-full h-fit">
      <div className="flexRow gap-2 mt-4 mb-4">
        <Image
          src="/icons/add_invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="text-lg">Add Invoice</p>
      </div>

      <div className="w-full flexRow p-2 md:px-12 lg:px-16 gap-4 lg:gap-16 flex-wrap lg:flex-nowrap mb-8">
        <form className="w-full">
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

      {showProductModal && currentInvoiceRow?.reduxId ? (
        <InvoiceRowModal {...currentInvoiceRow} />
      ) : null}

      {children}

      <p className="font-bold text-center mt-8 w-full">
        Total Price : £{Number(totalPrice).toFixed(2)}
      </p>

      <div className="flexCol p-2">
        <Button
          type="submit"
          optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px]"
          buttonText="Create Invoice"
          disabled={isLoading}
          onClick={formik.handleSubmit}
        />
        {createInvoiceError ? (
          <ErrorMessage errorMessage={createInvoiceError} />
        ) : null}
      </div>
    </div>
  )
}
