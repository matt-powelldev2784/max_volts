'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './SelectField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getClients } from '@/redux/slice/clientSlice'

interface InvoiceFormProps {
  children: React.ReactNode
}

export const InvoiceForm = ({ children }: InvoiceFormProps) => {
  const dispatch = useAppDispatch()
  const clients = useAppSelector((state) => state.clientReducer.clients)
  const totalPrice = useAppSelector(
    (state) => state.newInvoiceReducer.totalPrice
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
    },
  })

  const clientSelectOptionsJsx = clients.map((client) => {
    return (
      <option key={client.id} value={client.id}>
        {`${client.name} @ ${client.companyName}`}
      </option>
    )
  })

  return (
    <div className="w-full">
      <form className="w-full">
        <p>Create Invoice</p>

        <SelectField
          formik={formik}
          htmlFor="clientId"
          labelText="Select Client"
        >
          <option value="">Select a client</option>
          {clientSelectOptionsJsx}
        </SelectField>
      </form>

      {children}

      <p className="font-bold text-center">Total Price : {totalPrice}</p>
      <Button
        type="submit"
        optionalClasses="w-full bg-red-500 my-2"
        buttonText="Create Invoice"
        disabled={isLoading}
      />
    </div>
  )
}
