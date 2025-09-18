'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

type FormValues = {
  name: string
  email: string
  tel: string
  message: string
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid').required('Required'),
  tel: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
})

export const useContactFormFormik = () => {
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false)

  const formik = useFormik<FormValues>({
    initialValues: { name: '', email: '', tel: '', message: '' },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

        await emailjs.send(serviceId, templateId, values, { publicKey })
        resetForm()
        setSubmissionSuccessful(true)
      } catch (e) {
        console.error('EmailJS error:', e)
        setSubmissionSuccessful(false)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return { formik, submissionSuccessful }
}
