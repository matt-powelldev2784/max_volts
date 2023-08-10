'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './components/SelectField'
import { InputField } from './components/InputField'
import { useFormik } from 'formik'
import { T_Product } from '@/types'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { apiCall } from '@/lib/apiCall'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getClients } from '@/redux/slice/clientSlice'

export const MakeInvoice = () => {
  const [products, setProducts] = useState<T_Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  console.log('products', products)

  const dispatch = useAppDispatch()
  const clients = useAppSelector((state) => state.clientReducer.clients)

  useEffect(() => {
    const getProductsData = async () => {
      const productsData: T_Product[] = await apiCall({
        route: `/api/protected/product`,
      })
      setProducts(productsData)
    }
    getProductsData()

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
    <form className="flexCol w-[400px]" onSubmit={formik.handleSubmit}>
      <p>Create Invoice</p>

      <SelectField formik={formik} htmlFor="clientId" labelText="Select Client">
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
  )
}
