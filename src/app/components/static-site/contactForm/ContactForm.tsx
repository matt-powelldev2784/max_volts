'use client'

import { InputField } from '../ui/InputField'
import { useContactFormFormik } from './lib/useContactFormFormik'
import { Button } from '@/app/ui/'

export const ContactForm = () => {
  const formik = useContactFormFormik()

  return (
    <div className="bg-darkBlack w-screen">
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
          htmlFor="email"
          labelText="Email"
          inputType="text"
          imagePath="/icons/email_lightgrey.svg"
          spanText=" *"
        />

        <InputField
          formik={formik}
          htmlFor="tel"
          labelText="Telelphone Number"
          inputType="text"
          imagePath="/icons/tel.svg"
          spanText=" *"
        />

        <InputField
          formik={formik}
          htmlFor="message"
          labelText="Message"
          inputType="text"
          imagePath="/icons/description.svg"
        />

        <Button
          type="submit"
          optionalClasses={`w-full text-white text-sm bg-mvOrange h-[42.5px] m-4 ${
            formik.isSubmitting ? 'bg-mvOrange/50' : 'bg-mvOrange'
          }`}
          buttonText="Add Client"
          disabled={formik.isSubmitting}
        />
      </form>
    </div>
  )
}
