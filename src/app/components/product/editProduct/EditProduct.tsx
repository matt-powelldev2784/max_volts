'use client'

import { useState } from 'react'
import { InputField } from '@/app/ui/formElements/InputField'
import { useEditProductFormik } from './lib/useEditProductFormik'
import { PageTitle, Button } from '@/app/ui/'
import { T_Product } from '@/types'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { setProductIsHidden } from '@/redux/slice/productSlice'

interface EditProductProps {
  product: T_Product
}

export const EditProduct = ({ product }: EditProductProps) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const formik = useEditProductFormik(product)

  const onDeleteClientClick = async () => {
    if (product.id) {
      await dispatch(setProductIsHidden(product.id))
      window.location.href = `/pages/product/product-list/1`
    }
  }

  const isLoading = useAppSelector((state) => state.productReducer.isLoading)

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <PageTitle text={'Edit Product'} imgPath={'/icons/add_product.svg'} />

        <form
          className="w-screen md:w-[400px] flexCol min-w-[310px] p-2"
          onSubmit={formik.handleSubmit}
        >
          <InputField
            formik={formik}
            htmlFor="name"
            labelText="Name"
            inputType="text"
            imagePath="/icons/add_product.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="description"
            labelText="Description"
            inputType="text"
            imagePath="/icons/description.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="buyPrice"
            labelText="Buy Price"
            inputType="number"
            imagePath="/icons/pound_sign.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="sellPrice"
            labelText="Sell Price"
            inputType="number"
            imagePath="/icons/pound_sign.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="VAT"
            labelText="VAT"
            inputType="number"
            imagePath="/icons/percent_sign.svg"
            spanText=" *"
          />

          <Button
            type="submit"
            optionalClasses={`w-full text-white text-sm bg-mvOrange h-[42.5px] m-4 ${
              formik.isSubmitting ? 'bg-mvOrange/50' : 'bg-mvOrange'
            }`}
            buttonText="Update Product"
            disabled={formik.isSubmitting}
          />
        </form>

        <div className="w-screen md:w-[400px] flexCol min-w-[310px] p-2 mt-4">
          {confirmDelete ? (
            <Button
              type="button"
              optionalClasses={`text-white text-sm h-full w-fit max-h-[42.5px] ${
                isLoading ? 'bg-darkRed/25' : 'bg-darkRed'
              }`}
              buttonText="Confirm Delete Product"
              disabled={isLoading === true}
              onClick={onDeleteClientClick}
            />
          ) : (
            <Button
              type="button"
              optionalClasses={`text-white text-sm bg-darkBlack h-full w-fit max-h-[42.5px]`}
              buttonText="Delete Product"
              disabled={isLoading === true}
              onClick={() => {
                setConfirmDelete(true)
              }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
