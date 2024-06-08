import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  addProductToQuote,
  toggleAddProductModal,
  resetUpdateSuccessMessage,
} from '@/redux/slice/quoteSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'

export const useAddProductFormik = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.productReducer.products)

  const formik = useFormik({
    initialValues: {
      productId: '',
    },
    validationSchema: Yup.object({
      productId: Yup.string().required('Please select a product'),
    }),
    onSubmit: async (values) => {
      const selectedProductId = values.productId
      if (!selectedProductId) return
      const selectedProduct = products.find(
        (product) => product.id === selectedProductId
      )
      if (!selectedProduct) return
      dispatch(addProductToQuote(selectedProduct)) // Replace with your quote action
      dispatch(toggleAddProductModal()) // Replace with your quote modal action
      dispatch(resetUpdateSuccessMessage('Quote updates not saved!')) // Replace with your quote success message reset action
    },
  })

  return formik
}
