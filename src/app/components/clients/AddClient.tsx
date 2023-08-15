'use client'

import { InputField } from '@/app/lib/formElements/InputField'
import { Button } from '@/ui/button/button'
import Image from 'next/image'
import { useAddClientFormik } from './lib/useAddClientFormik'

export const AddClient = () => {
  const formik = useAddClientFormik()

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <div className="flexRow gap-2">
          <Image
            src="/icons/add_client.svg"
            alt="Person icon"
            width={30}
            height={30}
            className=""
          />
          <p className="text-lg">Add Client</p>
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
            imagePath="/icons/person.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="companyName"
            labelText="Company Name"
            inputType="text"
            imagePath="/icons/id_badge.svg"
          />

          <InputField
            formik={formik}
            htmlFor="add1"
            labelText="Address 1"
            inputType="text"
            imagePath="/icons/location.svg"
          />

          <InputField
            formik={formik}
            htmlFor="add2"
            labelText="Address 2"
            inputType="text"
            imagePath="/icons/location.svg"
          />

          <InputField
            formik={formik}
            htmlFor="postcode"
            labelText="Post Code"
            inputType="text"
            imagePath="/icons/location.svg"
          />

          <InputField
            formik={formik}
            htmlFor="tel"
            labelText="Telelphone Number"
            inputType="text"
            imagePath="/icons/tel.svg"
          />

          <InputField
            formik={formik}
            htmlFor="email"
            labelText="Email"
            inputType="text"
            imagePath="/icons/email.svg"
          />

          <Button
            type="submit"
            optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px] m-4"
            buttonText="Add Client"
            disabled={formik.isSubmitting}
          />
        </form>
      </div>
    </section>
  )
}
