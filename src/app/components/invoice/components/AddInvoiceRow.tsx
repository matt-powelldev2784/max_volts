'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './SelectField'
import { InputField } from './InputField'
import { useFormik } from 'formik'
import { ClientName } from '@/types/clientName'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { apiCall } from '@/lib/apiCall'

export const AddInvoiceRow = () => {
  const [clients, setClients] = useState<ClientName[]>([])
  const [products, setProducts] = useState<ClientName[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  console.log('clients', clients)
  console.log('products', products)

  const formik = useFormik({
    initialValues: {
      clientId: '',
      totalAmount: '',
    },
    validationSchema: Yup.object({
      clientId: Yup.string().required('Please input a value client'),
      totalAmount: Yup.string().required('Please input a invoice total'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log('values', values)

      try {
        await apiCall({
          httpMethod: 'POST',
          route: `/api/protected/invoice`,
          body: values,
        })
      } catch (error: any) {
        console.log('error', error.message)
      } finally {
        setIsLoading(false)
      }
    },
  })

  useEffect(() => {
    const getClientsData = async () => {
      const clientsData: ClientName[] = await apiCall({
        route: `/api/protected/client/clientname`,
      })
      setClients(clientsData)
    }
    const getProductsData = async () => {
      const productsData: ClientName[] = await apiCall({
        route: `/api/protected/product`,
      })
      setProducts(productsData)
    }
    getClientsData()
    getProductsData()
  }, [])

  const clientSelectOptionsJsx = clients.map((client) => {
    return (
      <option key={client.id} value={client.id}>
        {`${client.name} @ ${client.companyName}`}
      </option>
    )
  })

  const productSelectOptionsJsx = products.map((product) => {
    return (
      <option key={product.id} value={product.id}>
        {`${product.name}`}
      </option>
    )
  })

  return (
    <form
      className="w-[300px] border-2 border-red-500"
      onSubmit={formik.handleSubmit}
    >
      <p>Add Invoice Row</p>

      <SelectField formik={formik} htmlFor="clientId" labelText="Select Client">
        <option value="">Select a client</option>
        {clientSelectOptionsJsx}
      </SelectField>

      <SelectField
        formik={formik}
        htmlFor="selectProduct"
        labelText="Select Client"
      >
        <option value="">Select a product</option>
        {productSelectOptionsJsx}
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
        buttonText="Upload Image"
        disabled={isLoading}
      />
    </form>
  )
}
