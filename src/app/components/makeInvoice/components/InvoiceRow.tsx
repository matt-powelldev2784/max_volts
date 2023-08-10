import { useState } from 'react'
import { InputField } from './InputField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { T_Product } from '@/types'

export const InvoiceRow = ({ name, description, sellPrice }: T_Product) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      name: name,
      description: description,
      price: sellPrice,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please input a name'),
      description: Yup.string().required('Please input a description'),
      price: Yup.string().required('Please input a description'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log('values', values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <p>Invoice Row</p>

      <InputField
        formik={formik}
        htmlFor="name"
        labelText="Product Name"
        inputType="text"
      />

      <InputField
        formik={formik}
        htmlFor="description"
        labelText="Description"
        inputType="text"
      />

      <InputField
        formik={formik}
        htmlFor="price"
        labelText="Price"
        inputType="text"
      />

      <Button
        type="submit"
        optionalClasses="w-full bg-red-500 my-2"
        buttonText="Update Invoice Row"
        disabled={isLoading}
      />
    </form>
  )
}
