'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './formElements/SelectField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getClients } from '@/redux/slice/clientSlice'
import { setErrorState, createInvoice } from '@/redux/slice/newInvoiceSlice'
import { T_InvoiceDetails } from '@/types/invoice'
import { AddProduct } from './addProduct/AddProduct'
import { InvoiceRowModal } from './invoiceRowModal/InvoiceRowModal'

interface InvoiceFormProps {
  children: React.ReactNode
}

export const InvoiceForm = ({ children }: InvoiceFormProps) => {
  const dispatch = useAppDispatch()
  const clients = useAppSelector((state) => state.clientReducer.clients)
  const totalPrice = useAppSelector(
    (state) => state.newInvoiceReducer.totalPrice
  )
  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )
  const showProductModal = useAppSelector(
    (state) => state.newInvoiceReducer.displayAddProductModal
  )
  const currentInvoiceRow = useAppSelector(
    (state) => state.newInvoiceReducer.currentInvoiceRow
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getClients())
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      clientId: '',
    },
    validationSchema: Yup.object({
      clientId: Yup.string().required('Please input a value client'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)

      if (!totalPrice || typeof totalPrice !== 'number') {
        dispatch(setErrorState('Server error, when submitting invoice'))
      }
      if (invoiceRows.length === 0) {
        dispatch(setErrorState('Please add at least one invoice row'))
      }

      const invoiceDetails: T_InvoiceDetails = {
        clientId: values.clientId,
        totalPrice,
        invoiceRows,
      }

      dispatch(createInvoice(invoiceDetails))

      setIsLoading(false)
    },
  })

  const clientSelectOptionsJsx = clients.map((client) => {
    return (
      <option key={client.id} value={client.id} onBlur={formik.handleBlur}>
        {`${client.name} @ ${client.companyName}`}
      </option>
    )
  })

  return (
    <div className="min-h-screen relative w-full h-fit">
      <p className="p-2">Create Invoice</p>

      <div className="w-full flexRow p-2 md:px-12 lg:px-16 gap-4 lg:gap-16 flex-wrap lg:flex-nowrap mb-8">
        <form className="w-full">
          <SelectField
            formik={formik}
            htmlFor="clientId"
            labelText="Select Client"
            imagePath="/icons/person.svg"
          >
            <option value="" disabled>
              Select a client
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
      </div>
    </div>
  )
}
