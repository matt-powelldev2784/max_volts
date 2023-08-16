'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getInvoices } from '@/redux/slice/newInvoiceSlice'

export const useInvoices = (page: string | number) => {
  const dispatch = useAppDispatch()
  const invoices = useAppSelector((state) => state.newInvoiceReducer.invoices)

  useEffect(() => {
    dispatch(getInvoices(page))
  }, [dispatch, page])

  return invoices
}
