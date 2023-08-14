import { Button } from '@/ui/button/button'
import { SelectField } from '../SelectField'
import { useAddProductFormik } from './lib/useAddProductFormik'
import { useProductSelectOptions } from './lib/useProductSelectOptions'

export const AddProduct = () => {
  const formik = useAddProductFormik()
  const productSelectOptionsJsx = useProductSelectOptions()

  return (
    <form className="w-full flex gap-2 items-end flex-col md:flex-row">
      <div className="w-full">
        <SelectField
          formik={formik}
          htmlFor="productId"
          labelText="Select Product"
          imagePath="/icons/add_product.svg"
        >
          <option value="" disabled>
            Select a product
          </option>
          {productSelectOptionsJsx}
        </SelectField>
      </div>

      <Button
        type="button"
        optionalClasses="w-full md:w-[150px] text-white text-sm bg-mvOrange"
        buttonText="Add Product"
        disabled={formik.isSubmitting}
        onClick={formik.handleSubmit}
      />
    </form>
  )
}
