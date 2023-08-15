import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { T_Product } from '@/types'
import { addProduct } from '@/redux/slice/productSlice'

export const useAddProductFormik = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      buyPrice: 0,
      sellPrice: 0,
      VAT: 20,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please input a name'),
      description: Yup.string().required('Please input a description'),
      buyPrice: Yup.number()
        .typeError('Buy price must be a number')
        .required('Please input buy price than must be a number')
        .test(
          'Is positive?',
          'The number cannot be negative',
          (value) => value > 0 || value === 0
        ),
      sellPrice: Yup.number()
        .typeError('Sell price must be a number')
        .required('Please input sell price than must be a number')
        .test(
          'Is positive?',
          'The number cannot be negative',
          (value) => value > 0 || value === 0
        ),
      VAT: Yup.number()
        .typeError('Buy VAT must be a number')
        .required('Please input VAT than must be a number')
        .test(
          'Is positive?',
          'The number cannot be negative',
          (value) => value > 0 || value === 0
        ),
    }),
    onSubmit: async (values) => {
      console.log('values', values)
      const newProduct: T_Product = values
      dispatch(addProduct(newProduct))
    },
  })

  return formik
}
