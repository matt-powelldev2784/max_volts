import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getInvoice } from '@/redux/slice/invoiceSlice'

export const useInvoice = (invoiceId: string) => {
  const dispatch = useAppDispatch()
  const invoice = useAppSelector(
    (state) => state.invoiceReducer.currentEditInvoice
  )

  useEffect(() => {
    dispatch(getInvoice(invoiceId))
  }, [dispatch, invoiceId])

  return invoice
}
