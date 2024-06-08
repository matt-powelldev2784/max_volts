import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getQuote } from '@/redux/slice/quoteSlice'

export const useQuote = (quoteId: string) => {
  const dispatch = useAppDispatch()
  const quote = useAppSelector((state) => state.quoteReducer.currentEditQuote)

  useEffect(() => {
    dispatch(getQuote(quoteId))
  }, [dispatch, quoteId])

  return quote
}
