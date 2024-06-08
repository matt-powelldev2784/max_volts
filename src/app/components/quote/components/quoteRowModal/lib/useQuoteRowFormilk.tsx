import { useFormik } from 'formik'
import * as Yup from 'yup'
import { T_QuoteRow } from '@/types' // Replace with your quote row type
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import {
  toggleAddProductModal,
  updateQuoteRow, // Replace with your quote row update action
  resetUpdateSuccessMessage, // Replace with your quote row success message reset action
} from '@/redux/slice/quoteSlice' // Replace with your quote slice

export const useQuoteRowFormik = (quoteRow: T_QuoteRow) => {
  const dispatch = useAppDispatch()

  const { quantity, name, description, sellPrice, buyPrice, VAT } = quoteRow

  const formik = useFormik({
    initialValues: {
      quantity: quantity | 1,
      name: name,
      description: description,
      buyPrice: buyPrice,
      VAT: VAT,
      sellPrice: sellPrice,
    },
    validationSchema: Yup.object({
      quantity: Yup.number()
        .typeError('Quantity must be a number')
        .required('Please input quantity that must be a number'),
      name: Yup.string().required('Please input a name'),
      description: Yup.string().required('Please input a description'),
      buyPrice: Yup.number()
        .typeError('Buy price must be a number')
        .required('Please input a buy price that must be a number'),
      VAT: Yup.number()
        .typeError('VAT must be a number')
        .required('Please input a VAT percentage that must be a number'),
      sellPrice: Yup.number()
        .typeError('Sell price must be a number')
        .required('Please input a sell price that must be a number'),
    }),
    onSubmit: async (values) => {
      dispatch(updateQuoteRow({ ...quoteRow, ...values })) // Replace with your quote row update action
      dispatch(toggleAddProductModal())
      dispatch(resetUpdateSuccessMessage('Quote updates not saved!')) // Replace with your quote row success message reset action
    },
  })

  return formik
}
