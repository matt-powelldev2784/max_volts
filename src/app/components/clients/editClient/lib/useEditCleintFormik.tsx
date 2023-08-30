import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { T_Client } from '@/types'
import { updateClient } from '@/redux/slice/clientSlice'

export const useEditClientFormik = (client: T_Client) => {
  const dispatch = useAppDispatch()

  const { id, name, companyName, add1, add2, postcode, tel, email } = client

  const formik = useFormik({
    initialValues: {
      name: name,
      companyName: companyName,
      add1: add1,
      add2: add2,
      postcode: postcode,
      tel: tel,
      email: email,
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
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const updatedClient: T_Client = { id, ...values }
        await dispatch(updateClient(updatedClient))
      } catch (error) {
        console.log('error', error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return formik
}
