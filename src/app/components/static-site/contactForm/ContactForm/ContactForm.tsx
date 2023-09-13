'use client'

import { InputField } from '../ui/InputField'
import { TextArea } from '../ui/TextArea'
import { useContactFormFormik } from './lib/useContactFormFormik'
import { Button } from '@/app/ui/'

export const ContactForm = () => {
  const formik = useContactFormFormik()

  return (
    <div className="w-full lg:w-[800px] lg:ml-8">
      <h1 className="w-full text-center lg:text-left text-xl lg:text-2xl font-bold text-mvOrange mb-4 md:mb-4">
        ENQUIRY FORM
      </h1>

      <form
        className="flex flex-col items-center lg:flex lg:flex-col lg:items-start w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full px-6 lg:px-0 flexCol gap-4 md:max-w-[800px] md:w-full">
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

          <TextArea
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
          optionalClasses={`text-white bg-mvOrange h-[45px] mt-6 rounded-xl font-bold lg:w-fit px-8 ${
            formik.isSubmitting ? 'bg-mvOrange/50' : 'bg-mvOrange'
          }`}
          buttonText="SEND MESSAGE"
          disabled={formik.isSubmitting}
        />
      </form>
    </div>
  )
}
