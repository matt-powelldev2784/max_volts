import { Dispatch, SetStateAction } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  setErrorState,
  createQuote,
  resetToInitialState,
} from '@/redux/slice/quoteSlice'
import { T_QuoteDetails } from '@/types/quote'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { useRouter } from 'next/navigation'

export const useQuoteFormFormik = (
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const totalPrice = useAppSelector((state) => state.quoteReducer.totalPrice)
  const quoteRows = useAppSelector((state) => state.quoteReducer.quoteRows)

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

        if (quoteRows.length === 0) {
          setIsLoading(false)
          return dispatch(setErrorState('Please add at least one quote row'))
        }

        if (!totalPrice || typeof totalPrice !== 'number') {
          setIsLoading(false)
          return dispatch(
            setErrorState('Server error, please try again later.')
          )
        }

        const quoteDetails: T_QuoteDetails = {
          clientId: values.clientId,
          totalPrice,
          quoteRows,
        }

        const newQuote = await dispatch(createQuote(quoteDetails))
        const quoteId = newQuote.payload.activeQuote.id
        console.log('quoteId', quoteId)
        dispatch(resetToInitialState())

        console.log('quote created')
        router.push(`/pages/dashboard`) // Update the route
        router.push(`/pages/quote/pdf/${quoteId}`) // Update the route
      } catch (error) {
        setIsLoading(false)
      }
    },
  })

  return formik
}
