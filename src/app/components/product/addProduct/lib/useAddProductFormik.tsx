import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { addProduct } from '@/redux/slice/productSlice'
import { T_ProductWithoutId } from '@/types'

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
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const newProduct: T_ProductWithoutId = values
        await dispatch(addProduct(newProduct))
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
