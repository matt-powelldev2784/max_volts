import { apiCall } from '@/app/lib/apiCall'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

export const useContactFormFormik = () => {
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      tel: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please input a name'),
      email: Yup.string()
        .email('Please input a valid email address')
        .required('Email is required'),
      tel: Yup.number()
        .typeError('Please input a valid telephone number')
        .required('Telephone number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await apiCall({
          route: '/api/email-enquiry',
          httpMethod: 'POST',
          body: values,
        })
        if (res.status === 200) {
          resetForm()
          setSubmissionSuccessful(true)
        }
      } catch (error) {
        console.log('error', error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return { formik, submissionSuccessful }
}
