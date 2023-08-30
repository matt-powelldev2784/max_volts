import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addClient } from '@/redux/slice/clientSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { T_Client } from '@/types'

export const useEditClientFormik = (client: T_Client) => {
  const dispatch = useAppDispatch()
  console.log('client********', client)

  const { name, companyName, add1, add2, postcode, tel, email } = client

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
    onSubmit: async (values) => {
      console.log('values', values)
      const newClient: T_Client = values
      // dispatch(addClient(newClient))
    },
  })

  return formik
}
