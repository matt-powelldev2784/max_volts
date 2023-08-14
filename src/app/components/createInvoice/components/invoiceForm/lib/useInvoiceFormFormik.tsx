import { Dispatch, SetStateAction } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setErrorState, createInvoice } from '@/redux/slice/newInvoiceSlice'
import { T_InvoiceDetails } from '@/types/invoice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'

export const useInvoiceFormFormik = (
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const dispatch = useAppDispatch()
  const totalPrice = useAppSelector(
    (state) => state.newInvoiceReducer.totalPrice
  )
  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )

  const formik = useFormik({
    initialValues: {
      clientId: '',
    },
    validationSchema: Yup.object({
      clientId: Yup.string().required('Please input a value client'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)

      if (!totalPrice || typeof totalPrice !== 'number') {
        return dispatch(setErrorState('Server error, please try again later'))
      }
      if (invoiceRows.length === 0) {
        return dispatch(setErrorState('Please add at least one invoice row'))
      }

      const invoiceDetails: T_InvoiceDetails = {
        clientId: values.clientId,
        totalPrice,
        invoiceRows,
      }

      await dispatch(createInvoice(invoiceDetails))

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    },
  })

  return formik
}
