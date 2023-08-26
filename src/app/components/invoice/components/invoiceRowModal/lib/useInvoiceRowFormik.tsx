import { useFormik } from 'formik'
import * as Yup from 'yup'
import { T_InvoiceRow } from '@/types'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import {
  toggleAddProductModal,
  updateInvoiceRow,
  resetUpdateSuccessMessage,
} from '@/redux/slice/invoiceSlice'

export const useInvoiceRowFormik = (invoiceRow: T_InvoiceRow) => {
  const dispatch = useAppDispatch()

  const { quantity, name, description, sellPrice, buyPrice, VAT } = invoiceRow

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
        .required('Please input quantitiy than must be a number'),
      name: Yup.string().required('Please input a name'),
      description: Yup.string().required('Please input a description'),
      buyPrice: Yup.number()
        .typeError('Buy price must be a number')
        .required('Please input a buy price than must be a number'),
      VAT: Yup.number()
        .typeError('Buy price must be a number')
        .required('Please input a VAT percentage than must be a number'),
      sellPrice: Yup.number()
        .typeError('Price must be a number')
        .required('Please input a sell price than must be a number'),
    }),
    onSubmit: async (values) => {
      dispatch(updateInvoiceRow({ ...invoiceRow, ...values }))
      dispatch(toggleAddProductModal())
      dispatch(resetUpdateSuccessMessage('Invoice updates not saved!'))
    },
  })

  return formik
}
