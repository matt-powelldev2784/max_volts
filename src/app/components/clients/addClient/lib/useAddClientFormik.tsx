import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addClient } from '@/redux/slice/clientSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { T_Client } from '@/types'

export const useAddClientFormik = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      companyName: '',
      add1: '',
      add2: '',
      postcode: '',
      tel: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please input a name'),
      companyName: Yup.string(),
      add1: Yup.string(),
      add2: Yup.string(),
      postcode: Yup.string(),
      tel: Yup.string(),
      email: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const newClient: T_Client = values
        await dispatch(addClient(newClient))
        resetForm()
      } catch (error) {
        console.log('error', error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return formik
}
