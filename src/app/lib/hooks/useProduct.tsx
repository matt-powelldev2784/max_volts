import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getProduct } from '@/redux/slice/productSlice'

export const useProduct = (productId: string) => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.productReducer.products)

  useEffect(() => {
    dispatch(getProduct(productId))
  }, [dispatch, productId])

  return product
}
