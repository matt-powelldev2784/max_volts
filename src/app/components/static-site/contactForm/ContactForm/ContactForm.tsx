'use client'

import { InputField } from '../ui/InputField'
import { TextArea } from '../ui/TextArea'
import { useContactFormFormik } from './lib/useContactFormFormik'
import { Button } from '@/app/ui/'

export const ContactForm = () => {
  const { formik, submissionSuccessful } = useContactFormFormik()

  return (
    <div className="w-full lg:w-[800px] lg:ml-8">
      <h1 className="w-full text-center lg:text-left text-xl lg:text-2xl font-bold text-mvOrange mb-4 md:mb-4">
        ENQUIRY FORM
      </h1>
      <p className="text-white mb-2 text-center lg:text-left sm:mx-6 md:mx-0">
        Leave your details below and we will contact you:
      </p>

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
            labelText="Telephone Number"
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
            spanText=" *"
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
        {submissionSuccessful ? (
          <p className="text-mvGreen text-lg m-4 mx-6 lg:mx-0 text-center lg:text-left">
            Thank you for your enquiry, we will be contact soon.
          </p>
        ) : null}
      </form>
    </div>
  )
}
