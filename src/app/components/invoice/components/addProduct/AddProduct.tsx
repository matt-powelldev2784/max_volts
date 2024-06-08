import { Button } from '@/app/ui/'
import { SelectField } from '../../../../ui/formElements/SelectField'
import { useAddProductFormik } from './lib/useAddProductFormik'
import { useProductSelectOptions } from './lib/useProductSelectOptions'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'

export const AddProduct = () => {
  const formik = useAddProductFormik()
  const products = useAppSelector((state) => state.productReducer.products)
  const isActive = useAppSelector(
    (state) => state.invoiceReducer.currentEditInvoice?.isActive
  )
  const productSelectOptionsJsx = useProductSelectOptions()

  return (
    <form className="w-full flex gap-2 items-end flex-col md:flex-row min-w-[320px] sm:px-2 md:px-0">
      <div className="w-full">
        <SelectField
          formik={formik}
          htmlFor="productId"
          labelText="Select Product"
          imagePath="/icons/add_product.svg"
        >
          <option value="" disabled>
            {products.length > 0 ? 'Select a product' : 'Loading...'}
          </option>
          {productSelectOptionsJsx}
        </SelectField>
      </div>

      <Button
        type="button"
        optionalClasses={`w-full md:w-[150px] text-white text-sm bg-mvOrange ${
          isActive === false ? 'opacity-50' : null
        }`}
        buttonText="Add Product"
        disabled={formik.isSubmitting || isActive === false}
        onClick={formik.handleSubmit}
      />
    </form>
  )
}
