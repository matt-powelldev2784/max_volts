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

export const InvoiceRowModal = (productWithId: T_ProductWithId) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const displayAddProductModal = useAppSelector(
    (state) => state.newInvoiceReducer.displayAddProductModal
  )
  const { name, description, sellPrice, buyPrice, VAT, reduxId } = productWithId
  console.log('buyPrice', buyPrice)

  const formik = useFormik({
    initialValues: {
      quantity: '1',
      name: name,
      description: description,
      buyPrice: buyPrice,
      VAT: VAT,
      price: sellPrice,
    },
    validationSchema: Yup.object({
      quantity: Yup.number()
        .typeError('Quantity must be a number')
        .required('Please input quantitiy than must be a number'),
      name: Yup.string().required('Please input a name'),
      description: Yup.string().required('Please input a description'),
      buyPrice: Yup.number()
        .typeError('Buy price must be a number')
        .required('Please input a buy price than must be a number'),
      VAT: Yup.number()
        .typeError('Buy price must be a number')
        .required('Please input a buy price than must be a number'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Please input a price than must be a number'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      dispatch(updateInvoiceRow({ reduxId, ...values }))
      setIsLoading(false)
      dispatch(toggleAddProductModal())
    },
  })

  const onCancelEditInvoiceRow = () => {
    dispatch(toggleAddProductModal())
  }

  const onDeleteInvoiceRow = () => {
    dispatch(deleteInvoiceRow())
    dispatch(toggleAddProductModal())
  }

  if (!displayAddProductModal) return null

  return (
    <section className="min-w-screen min-h-screen flex md:justify-center fixed inset-0 bg-darkBlack bg-opacity-50 overflow-y-scroll">
      <div className="md:rounded-xl w-full h-fit md:w-7/8 lg:w-3/4 max-w-[500px] bg-white md:m-8">
        <div className="relative bg-darkBlack text-white p-4 md:rounded-t-xl flexRow justify-start items-end gap-2 border-0 md:border-2 border-white">
          <Image
            src="./icons/add_product.svg"
            alt="arrow-down"
            width={30}
            height={30}
            className=""
          />
          <p>Add Invoice Row</p>
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
            imagePath="/icons/quantity.svg"
          />

          <InputField
            formik={formik}
            htmlFor="name"
            labelText="Product Name"
            inputType="text"
            optionalClassNames=""
            imagePath="/icons/person.svg"
          />

          <TextAreaField
            formik={formik}
            htmlFor="description"
            labelText="Description"
            inputType="text"
            optionalClassNames="h-20"
            imagePath="/icons/description.svg"
          />

          <InputField
            formik={formik}
            htmlFor="buyPrice"
            labelText="Buy Price"
            inputType="text"
            imagePath="/icons/pound_sign.svg"
          />

          <InputField
            formik={formik}
            htmlFor="VAT"
            labelText="VAT"
            inputType="text"
            imagePath="/icons/vat.svg"
          />

          <InputField
            formik={formik}
            htmlFor="price"
            labelText="Price"
            inputType="text"
            imagePath="/icons/pound_sign.svg"
          />

          <div className="flexRow gap-2 w-full">
            <Button
              type="button"
              optionalClasses="w-full text-white text-sm bg-darkRed h-[42.5px]"
              buttonText="Cancel"
              disabled={isLoading}
              onClick={onCancelEditInvoiceRow}
            />
            <Button
              type="submit"
              optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px]"
              buttonText="Update Invoice Row"
              disabled={isLoading}
            />
          </div>

          <Button
            type="button"
            optionalClasses="w-full text-white text-sm bg-darkRed h-[42.5px] mt-8 md:hidden"
            buttonText="Delete Invoice Row"
            disabled={isLoading}
            onClick={onDeleteInvoiceRow}
          />
        </form>
      </div>
    </section>
  )
}
