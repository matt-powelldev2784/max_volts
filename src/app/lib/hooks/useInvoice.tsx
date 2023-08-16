'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getInvoice } from '@/redux/slice/newInvoiceSlice'

export const useInvoice = (invoiceId: string) => {
  const dispatch = useAppDispatch()
  const invoices = useAppSelector(
    (state) => state.newInvoiceReducer.currentEditInvoice
  )

  useEffect(() => {
    dispatch(getInvoice(invoiceId))
  }, [dispatch, invoiceId])

  return invoices
}
