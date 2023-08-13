import { useState } from 'react'
import { InputField } from './InputField'
import { TextAreaField } from './TextArea'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { T_ProductWithId } from '@/types'
import {
  toggleAddProductModal,
  updateInvoiceRow,
  deleteInvoiceRow,
} from '@/redux/slice/newInvoiceSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import Image from 'next/image'

export const InvoiceRowModal = ({
  name,
  description,
  sellPrice,
  buyPrice,
  reduxId,
}: T_ProductWithId) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const displayAddProductModal = useAppSelector(
    (state) => state.newInvoiceReducer.displayAddProductModal
  )

  console.log('buyPrice', buyPrice)

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
      dispatch(toggleAddProductModal())
    },
  })

  const cancelAddProduct = () => {
    dispatch(deleteInvoiceRow())
    dispatch(toggleAddProductModal())
  }

  if (!displayAddProductModal) return null

  return (
    <section className="min-w-screen min-h-screen flex md:justify-center fixed inset-0 bg-black bg-opacity-50 overflow-y-scroll">
      <div className="md:rounded-xl w-full h-fit md:w-7/8 lg:w-3/4 max-w-[500px] bg-white md:m-8">
        <div className="relative bg-black text-white p-4 md:rounded-t-xl flexRow justify-start items-end gap-2 border-2 border-white">
          <Image
            src="./icons/add_product.svg"
            alt="arrow-down"
            width={30}
            height={30}
            className=""
          />
          <p> Add Invoice Row</p>
          <p className="absolute text-mvGreen font-lg top-2 right-4">X</p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="min-h-screen md:min-h-fit flex flex-col items-center justify-start gap-2 md:gap-4 p-4 px-2 md:px-16 mb-6"
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
              onClick={cancelAddProduct}
            />
            <Button
              type="submit"
              optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px]"
              buttonText="Update Invoice Row"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
