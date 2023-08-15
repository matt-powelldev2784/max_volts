'use client'

import { InputField } from '@/app/lib/formElements/InputField'
import { Button } from '@/ui/button/button'
import Image from 'next/image'
import { useAddProductFormik } from './lib/useAddProductFormik'

export const AddProduct = () => {
  const formik = useAddProductFormik()

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol">
        <div className="flexRow gap-2 mt-4">
          <Image
            src="/icons/add_product.svg"
            alt="Person icon"
            width={30}
            height={30}
            className=""
          />
          <p className="text-lg">Add Product</p>
        </div>
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
            buttonText="Add Product"
            disabled={formik.isSubmitting}
          />
        </form>
      </div>
    </section>
  )
}
