import { useState } from 'react'
import { InputField } from './InputField'
import { TextAreaField } from './TextArea'
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
    <section className="min-w-screen min-h-screen flexCol fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="rounded-xl w-11/12 md:w-7/8 lg:w-3/4 max-w-[500px] bg-white overflow-y-auto m-8">
        <p className="bg-mvGreen p-4 rounded-t-xl">Add Invoice Row</p>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center gap-2 md:gap-4 p-4 px-2 md:px-16 mb-6"
        >
          <InputField
            formik={formik}
            htmlFor="quantity"
            labelText="Quantity"
            inputType="text"
            optionalClassNames=""
          />

          <InputField
            formik={formik}
            htmlFor="name"
            labelText="Product Name"
            inputType="text"
            optionalClassNames=""
          />

          <TextAreaField
            formik={formik}
            htmlFor="description"
            labelText="Description"
            inputType="text"
            optionalClassNames="h-20"
          />

          <InputField
            formik={formik}
            htmlFor="buyprice"
            labelText="Buy Price"
            inputType="text"
          />

          <InputField
            formik={formik}
            htmlFor="vat"
            labelText="VAT"
            inputType="text"
          />

          <InputField
            formik={formik}
            htmlFor="price"
            labelText="Price"
            inputType="text"
            optionalClassNames=""
          />

          <div className="flexRow gap-2 w-full">
            <Button
              type="button"
              optionalClasses="w-full text-white text-sm bg-darkRed h-[42.5px]"
              buttonText="Cancel"
              disabled={isLoading}
            />
            <Button
              type="submit"
              optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px]"
              buttonText="Add Invoice Row"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
