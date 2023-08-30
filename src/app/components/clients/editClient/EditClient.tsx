'use client'

import { InputField } from '@/app/lib/formElements/InputField'
import { Button } from '@/app/ui/button/button'
import { useEditClientFormik } from './lib/useEditCleintFormik'
import { PageTitle } from '@/app/lib/PageTitle'
import { T_Client } from '@/types'

interface EditClientProps {
  client: T_Client
}

export const EditClient = ({ client }: EditClientProps) => {
  const formik = useEditClientFormik(client)

  console.log('client', client)

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <PageTitle text={'Add Client'} imgPath={'/icons/add_client.svg'} />

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
