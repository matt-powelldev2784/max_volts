import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  addProductToInvoice,
  toggleAddProductModal,
} from '@/redux/slice/newInvoiceSlice'
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
      dispatch(addProductToInvoice(selectedProduct))
      dispatch(toggleAddProductModal())
    },
  })

  return formik
}
