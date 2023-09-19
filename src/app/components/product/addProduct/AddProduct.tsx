'use client'

import { InputField } from '@/app/ui/formElements/InputField'
import { useAddProductFormik } from './lib/useAddProductFormik'
import { PageTitle, Button } from '@/app/ui/'

export const AddProduct = () => {
  const formik = useAddProductFormik()

  return (
    <section className="min-h-screen w-screen min-w-[320px]">
      <div className="flexCol mt-4">
        <PageTitle text={'Add Product'} imgPath={'/icons/add_product.svg'} />

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
            buttonText="Add Product"
            disabled={formik.isSubmitting}
          />
        </form>
      </div>
    </section>
  )
}
