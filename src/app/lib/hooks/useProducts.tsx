import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { getProducts } from '@/redux/slice/productSlice'

export const useProducts = () => {
  const products = useAppSelector((state) => state.productReducer.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return products
}
