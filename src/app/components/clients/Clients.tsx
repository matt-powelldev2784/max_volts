'use client'

import { InputField } from '@/lib/formElements/InputField'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/ui/button/button'

export const Clients = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      companyName: '',
      add1: '',
      add2: '',
      postcode: '',
      tel: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please input a name'),
      companyName: Yup.string().required('Please input a company name'),
      add1: Yup.string(),
      add2: Yup.string(),
      psotcode: Yup.string(),
      tel: Yup.string(),
    }),
    onSubmit: async (values) => {
      console.log('values', values)
    },
  })

  return (
    <section className="w-full flex justify-center item-center  p-2">
      <form
        className="w-screen md:w-[400px] flexCol min-w-[310px]"
        onSubmit={formik.handleSubmit}
      >
        <InputField
          formik={formik}
          htmlFor="name"
          labelText="Name"
          inputType="text"
          imagePath="/icons/quantity.svg"
        />

        <InputField
          formik={formik}
          htmlFor="companyName"
          labelText="Company Name"
          inputType="text"
          imagePath="/icons/quantity.svg"
        />

        <InputField
          formik={formik}
          htmlFor="add1"
          labelText="Address 1"
          inputType="text"
          imagePath="/icons/quantity.svg"
        />

        <InputField
          formik={formik}
          htmlFor="add2"
          labelText="Address 2"
          inputType="text"
          imagePath="/icons/quantity.svg"
        />

        <InputField
          formik={formik}
          htmlFor="postcode"
          labelText="Post Code"
          inputType="text"
          imagePath="/icons/quantity.svg"
        />

        <InputField
          formik={formik}
          htmlFor="tel"
          labelText="Telelphone Number"
          inputType="text"
          imagePath="/icons/quantity.svg"
        />

        <Button
          type="submit"
          optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px] m-4"
          buttonText="Add Client"
          disabled={formik.isSubmitting}
        />
      </form>
    </section>
  )
}
