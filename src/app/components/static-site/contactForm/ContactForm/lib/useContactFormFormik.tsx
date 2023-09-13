import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addClient } from '@/redux/slice/clientSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { T_Client } from '@/types'

export const useContactFormFormik = () => {
  const dispatch = useAppDispatch()

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
      message: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log('values', values)
      // try {
      //   const newClient: T_Client = values
      //   await dispatch(addClient(newClient))
      //   resetForm()
      // } catch (error) {
      //   console.log('error', error)
      // } finally {
      //   setSubmitting(false)
      // }
    },
  })

  return formik
}
