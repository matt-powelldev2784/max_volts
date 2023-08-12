import { useState } from 'react'
import { InputField } from './InputField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { T_ProductWithId } from '@/types'
import { updateInvoiceRow } from '@/redux/slice/newInvoiceSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'

export const InvoiceRow = ({
  name,
  description,
  sellPrice,
  buyPrice,
  reduxId,
}: T_ProductWithId) => {
  const dispatch = useAppDispatch()
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
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Please input a price than must be a number'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log('values', values)
      dispatch(updateInvoiceRow({ reduxId, ...values }))
      setIsLoading(false)
    },
  })

  return (
    <div className="mx-16 m-auto">
      <p>Invoice Row</p>

      <form
        onSubmit={formik.handleSubmit}
        className="flex items-end gap-4 max-w-[1100px]"
      >
        <p>Quantitiy</p>

        <InputField
          formik={formik}
          htmlFor="name"
          labelText="Product Name"
          inputType="text"
          optionalClassNames="w-[200px]"
        />

        <InputField
          formik={formik}
          htmlFor="description"
          labelText="Description"
          inputType="text"
        />

        <p>{buyPrice}</p>

        <p>VAT</p>

        <InputField
          formik={formik}
          htmlFor="price"
          labelText="Price"
          inputType="text"
          optionalClassNames="w-[100px]"
        />

        <Button
          type="submit"
          optionalClasses="w-full md:w-[150px] text-white text-sm bg-mvOrange h-[42.5px]"
          buttonText="Update Invoice Row"
          disabled={isLoading}
        />
      </form>
    </div>
  )
}
