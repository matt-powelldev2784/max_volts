import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { getProducts } from '@/redux/slice/productSlice'
import { Button } from '@/ui/button/button'
import { T_Product } from '@/types'
import { addProductToInvoice } from '@/redux/slice/newInvoiceSlice'

export const AddProduct = () => {
  const products = useAppSelector((state) => state.productReducer.products)
  const dispatch = useAppDispatch()
  const [selectedProduct, setSelectedProduct] = useState<T_Product>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  console.log('selectedProduct', selectedProduct)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProductId = event.target.value
    const selectedProduct = products.find(
      (product) => product.id === selectedProductId
    )
    console.log('selectedProduct', selectedProduct)
    setSelectedProduct(selectedProduct)
  }

  const onAddProductClick = () => {
    setIsLoading(true)
    if (selectedProduct === undefined) return
    dispatch(addProductToInvoice(selectedProduct))
    setIsLoading(false)
  }

  const productSelectOptionsJsx = products.map((product) => {
    return (
      <option key={product.id} value={product.id}>
        {`${product.name}`}
      </option>
    )
  })

  return (
    <form className="flexCol w-full" onSubmit={onAddProductClick}>
      <label htmlFor="productId" className="w-full p-1 text-sm">
        Select Product
      </label>
      <select
        className="w-full rounded-lg border-2 border-darkBlack p-2 px-4 outline-none"
        onChange={handleSelectChange}
      >
        <option value="">Select a product</option>
        {productSelectOptionsJsx}
      </select>
      <Button
        type="button"
        optionalClasses="w-full bg-red-500 my-2"
        buttonText="Add Product to Invoice"
        disabled={isLoading}
        onClick={onAddProductClick}
      />
    </form>
  )
}
