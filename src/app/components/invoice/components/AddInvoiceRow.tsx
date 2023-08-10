'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './SelectField'
import { useFormik } from 'formik'
import { ClientName } from '@/types/client'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { apiCall } from '@/lib/apiCall'

export const AddInvoiceRow = () => {
  const [products, setProducts] = useState<ClientName[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  console.log('products', products)

  const formik = useFormik({
    initialValues: {
      productId: '',
    },
    validationSchema: Yup.object({
      productId: Yup.string().required('Please select a product'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)

      const product = products.find(
        (product) => product.id === values.productId
      )
      // const invoiceId = sessionStorage.getItem('currentInvoiceId')
      const invoiceId = '1'
      const invoiceRow = { invoiceId, ...product }

      try {
        await apiCall({
          httpMethod: 'POST',
          route: `/api/protected/invoice-row/`,
          body: invoiceRow,
        })
      } catch (error: any) {
        console.log('error', error.message)
      } finally {
        setIsLoading(false)
      }
    },
  })

  useEffect(() => {
    const getProductsData = async () => {
      const productsData: ClientName[] = await apiCall({
        route: `/api/protected/product`,
      })
      setProducts(productsData)
    }
    getProductsData()
  }, [])

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

      <SelectField
        formik={formik}
        htmlFor="productId"
        labelText="Select Product"
      >
        <option value="">Select a product</option>
        {productSelectOptionsJsx}
      </SelectField>

      <Button
        type="submit"
        optionalClasses="w-full bg-red-500 my-2"
        buttonText="Add Invoice Row"
        disabled={isLoading}
      />
    </form>
  )
}
