import { Dispatch, SetStateAction } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setErrorState, createInvoice } from '@/redux/slice/invoiceSlice'
import { T_InvoiceDetails } from '@/types/invoice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { useRouter } from 'next/navigation'

export const useInvoiceFormFormik = (
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const totalPrice = useAppSelector((state) => state.invoiceReducer.totalPrice)
  const invoiceRows = useAppSelector(
    (state) => state.invoiceReducer.invoiceRows
  )

  const formik = useFormik({
    initialValues: {
      clientId: '',
    },
    validationSchema: Yup.object({
      clientId: Yup.string().required('Please input a value client'),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true)

        if (invoiceRows.length === 0) {
          setIsLoading(false)
          return dispatch(setErrorState('Please add at least one invoice row'))
        }

        if (!totalPrice || typeof totalPrice !== 'number') {
          setIsLoading(false)
          return dispatch(
            setErrorState('Server error, please try again later.')
          )
        }

        const invoiceDetails: T_InvoiceDetails = {
          clientId: values.clientId,
          totalPrice,
          invoiceRows,
        }

        const newInvoice = await dispatch(createInvoice(invoiceDetails))
        const invoiceId = newInvoice.payload.activeInvoice.id

        router.push(`/pages/invoice/pdf/${invoiceId}`)
      } catch (error) {
        setIsLoading(false)
      }
    },
  })

  return formik
}
