'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './components/SelectField'
import { InputField } from './components/InputField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getClients } from '@/redux/slice/clientSlice'
import { getProducts } from '@/redux/slice/productSlice'
import { AddProduct } from './components/AddProduct'

export const MakeInvoice = () => {
  const dispatch = useAppDispatch()
  const clients = useAppSelector((state) => state.clientReducer.clients)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getClients())
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      clientId: '',
      totalAmount: '0.001',
    },
    validationSchema: Yup.object({
      clientId: Yup.string().required('Please input a value client'),
      totalAmount: Yup.string().required('Please input a invoice total'),
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
    <section className="flexCol">
      <form onSubmit={formik.handleSubmit}>
        <p>Create Invoice</p>

        <SelectField
          formik={formik}
          htmlFor="clientId"
          labelText="Select Client"
        >
          <option value="">Select a client</option>
          {clientSelectOptionsJsx}
        </SelectField>

        <InputField
          formik={formik}
          htmlFor="totalAmount"
          labelText="Invoice Total"
          inputType="text"
        />

        <Button
          type="submit"
          optionalClasses="w-full bg-red-500 my-2"
          buttonText="Create Invoice"
          disabled={isLoading}
        />
      </form>

      <AddProduct />
    </section>
  )
}
