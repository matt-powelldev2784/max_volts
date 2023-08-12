'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './SelectField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getClients } from '@/redux/slice/clientSlice'
import { setErrorState, createInvoice } from '@/redux/slice/newInvoiceSlice'
import { T_InvoiceDetails } from '@/types/invoiceDetails'
import { AddProduct } from './AddProduct'

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
      console.log('values', values)
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
    <div className="w-full">
      <p className="p-2">Create Invoice</p>

      <div className="w-full flexRow p-2 md:px-12 lg:px-8 gap-4 lg:gap-16 flex-wrap lg:flex-nowrap mb-8">
        <form className="w-full">
          <SelectField
            formik={formik}
            htmlFor="clientId"
            labelText="Select Client"
            imagePath="/icons/person.svg"
          >
            <option value="" disabled selected className="">
              Select a client
            </option>
            {clientSelectOptionsJsx}
          </SelectField>
        </form>

        <AddProduct />
      </div>

      {children}

      <p className="font-bold text-center">Total Price : {totalPrice}</p>
      <Button
        type="submit"
        optionalClasses="w-full bg-red-500 my-2"
        buttonText="Create Invoice"
        disabled={isLoading}
        onClick={formik.handleSubmit}
      />
    </div>
  )
}
