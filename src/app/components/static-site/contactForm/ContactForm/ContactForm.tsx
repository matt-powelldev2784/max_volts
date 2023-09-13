'use client'

import { InputField } from '../ui/InputField'
import { useContactFormFormik } from './lib/useContactFormFormik'
import { Button } from '@/app/ui/'

export const ContactForm = () => {
  const formik = useContactFormFormik()

  return (
    <div className="w-full lg:w-[800px]">
      <h1 className="w-full text-center lg:text-left lg:ml-11 text-xl lg:text-2xl font-bold text-mvOrange mb-4 md:mb-4">
        ENQUIRY FORM
      </h1>

      <form
        className="flexCol lg:flex lg:flex-col w-full lg:mx-8"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-11/12 flexCol gap-4 max-w-[850px] md:w-full px-2">
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
            optionalClassNames="h-[150px]"
          />
        </div>

        <Button
          type="submit"
          optionalClasses={`w-full text-white text-sm bg-mvOrange h-[42.5px] md:max-w-[320px] mt-4 ${
            formik.isSubmitting ? 'bg-mvOrange/50' : 'bg-mvOrange'
          }`}
          buttonText="Add Client"
          disabled={formik.isSubmitting}
        />
      </form>
    </div>
  )
}
