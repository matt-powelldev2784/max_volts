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
    <form className="w-full flex gap-2 items-end" onSubmit={onAddProductClick}>
      <div className="w-full">
        <label htmlFor="productId" className="w-full p-1 text-sm">
          Select Product
        </label>
        <select
          className="w-full rounded-lg border-2 border-black bg-white p-2 px-4 outline-none"
          onChange={handleSelectChange}
        >
          <option value="">Select a product</option>
          {productSelectOptionsJsx}
        </select>
      </div>

      <Button
        type="button"
        optionalClasses="w-[150px] text-white text-sm bg-mvOrange"
        buttonText="Add Product to Invoice"
        disabled={isLoading}
        onClick={onAddProductClick}
      />
    </form>
  )
}
