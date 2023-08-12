import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { getProducts } from '@/redux/slice/productSlice'
import { Button } from '@/ui/button/button'
import { T_Product } from '@/types'
import { addProductToInvoice } from '@/redux/slice/newInvoiceSlice'
import { SelectField } from './SelectField'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const AddProduct = () => {
  const products = useAppSelector((state) => state.productReducer.products)
  const dispatch = useAppDispatch()
  const [selectedProduct, setSelectedProduct] = useState<T_Product>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      productId: '',
    },
    validationSchema: Yup.object({
      productId: Yup.string().required('Please seclect a product'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      const selectedProductId = values.productId
      if (!selectedProductId) return
      const selectedProduct = products.find(
        (product) => product.id === selectedProductId
      )
      if (!selectedProduct) return
      dispatch(addProductToInvoice(selectedProduct))
      setIsLoading(false)
    },
  })

  const productSelectOptionsJsx = products.map((product) => {
    return (
      <option key={product.id} value={product.id}>
        {`${product.name}`}
      </option>
    )
  })

  return (
    <form className="w-full flex gap-2 items-end">
      <div className="w-full">
        <SelectField
          formik={formik}
          htmlFor="productId"
          labelText="Select Product"
          imagePath="/icons/add_product.svg"
        >
          <option value="" disabled selected>
            Select a product
          </option>
          {productSelectOptionsJsx}
        </SelectField>
      </div>

      <Button
        type="button"
        optionalClasses="w-[150px] text-white text-sm bg-mvOrange h-[42.5px]"
        buttonText="Add Product"
        disabled={isLoading}
        onClick={formik.handleSubmit}
      />
    </form>
  )
}
