'use client'

import { InputField } from '@/app/lib/formElements/InputField'
import { Button } from '@/ui/button/button'
import { useEditProductFormik } from './lib/useEditProductFormik'
import { PageTitle } from '@/app/lib/PageTitle'
import { T_Product } from '@/types'

interface EditProductProps {
  product: T_Product
}

export const EditProduct = ({ product }: EditProductProps) => {
  const formik = useEditProductFormik(product)

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
            optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px] m-4"
            buttonText="Edit Product"
            disabled={formik.isSubmitting}
          />
        </form>
      </div>
    </section>
  )
}
