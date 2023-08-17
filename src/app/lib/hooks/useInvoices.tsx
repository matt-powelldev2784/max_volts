'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getInvoices } from '@/redux/slice/invoiceSlice'

export const useInvoices = (page: string | number) => {
  const dispatch = useAppDispatch()
  const invoices = useAppSelector((state) => state.invoiceReducer.invoices)

  useEffect(() => {
    dispatch(getInvoices(page))
  }, [dispatch, page])

  return invoices
}
