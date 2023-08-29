import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { T_Product } from '@/types'
import { updateProduct } from '@/redux/slice/productSlice'

export const useEditProductFormik = (product: T_Product) => {
  const dispatch = useAppDispatch()

  const { id, name, buyPrice, sellPrice, VAT, description } = product

  const formik = useFormik({
    initialValues: {
      name: name,
      description: description,
      buyPrice: buyPrice,
      sellPrice: sellPrice,
      VAT: VAT,
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
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const updatedProduct: T_Product = { id, ...values }
        await dispatch(updateProduct(updatedProduct))
      } catch (error) {
        console.log('error', error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return formik
}
