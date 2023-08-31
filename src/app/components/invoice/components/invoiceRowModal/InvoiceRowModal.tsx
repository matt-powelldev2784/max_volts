import { InputField } from '../../../../lib/formElements/InputField'
import { TextAreaField } from '../../../../lib/formElements/TextArea'
import { Button } from '@/app/ui/'
import { T_InvoiceRow } from '@/types'
import {
  toggleAddProductModal,
  deleteInvoiceRow,
} from '@/redux/slice/invoiceSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import Image from 'next/image'
import { useInvoiceRowFormik } from './lib/useInvoiceRowFormik'

export const InvoiceRowModal = (invoiceRow: T_InvoiceRow) => {
  const dispatch = useAppDispatch()
  const displayAddProductModal = useAppSelector(
    (state) => state.invoiceReducer.displayAddProductModal
  )
  const formik = useInvoiceRowFormik(invoiceRow)
  const { quantity, sellPrice, VAT } = formik.values
  const invoiceRowTotal =
    quantity * sellPrice + quantity * sellPrice * (VAT / 100)

  const onDeleteInvoiceRow = () => {
    dispatch(deleteInvoiceRow())
    dispatch(toggleAddProductModal())
  }

  const onCancelEditInvoiceRow = () => {
    dispatch(toggleAddProductModal())
  }

  if (!displayAddProductModal) return null

  return (
    <section className="min-w-screen min-h-screen flex md:justify-center fixed inset-0 bg-darkBlack bg-opacity-50 overflow-y-scroll">
      <div className="md:rounded-xl w-full h-fit md:w-7/8 lg:w-3/4 max-w-[500px] bg-white md:m-8">
        <div className="relative bg-darkBlack text-white p-4 md:rounded-t-xl flexRow justify-start items-end gap-2 border-0 md:border-2 border-white">
          <Image
            src="/icons/add_product.svg"
            alt="arrow-down"
            width={30}
            height={30}
            className=""
          />
          <p>Add Invoice Row</p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="min-h-screen md:min-h-fit flex flex-col items-center justify-start gap-2 md:gap-4 p-4 px-2 md:px-16 mb-6"
        >
          <InputField
            formik={formik}
            htmlFor="quantity"
            labelText="Quantity"
            inputType="number"
            imagePath="/icons/quantity.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="name"
            labelText="Product Name"
            inputType="text"
            optionalClassNames=""
            imagePath="/icons/person.svg"
            spanText=" *"
          />

          <TextAreaField
            formik={formik}
            htmlFor="description"
            labelText="Description"
            inputType="text"
            optionalClassNames="h-20"
            imagePath="/icons/description.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="buyPrice"
            labelText="Buy Price"
            inputType="number"
            imagePath="/icons/pound_sign.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="sellPrice"
            labelText="Sell Price"
            inputType="number"
            imagePath="/icons/pound_sign.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="VAT"
            labelText="VAT"
            inputType="number"
            imagePath="/icons/vat.svg"
            spanText=" *"
          />

          <div className="relative flexCol w-full">
            <p className="w-full p-1 text-sm">Invoice Row Total</p>
            <Image
              src="/icons/pound_sign.svg"
              alt="arrow-down"
              width={22}
              height={22}
              className="absolute left-3 top-[38px] z-20"
            />
            <p className="relative w-full rounded-lg border-2 bg-white p-2 px-4 outline-none pl-10 text-darkBlack font-bold">
              £{invoiceRowTotal.toFixed(2)}
            </p>
          </div>

          <div className="flexRow gap-2 w-full">
            <Button
              type="button"
              optionalClasses="w-full text-white text-sm bg-darkRed h-[42.5px]"
              buttonText="Cancel"
              disabled={formik.isSubmitting}
              onClick={onCancelEditInvoiceRow}
            />
            <Button
              type="submit"
              optionalClasses="w-full text-white text-sm bg-mvOrange h-[42.5px]"
              buttonText="Update Invoice Row"
              disabled={formik.isSubmitting}
            />
          </div>

          <Button
            type="button"
            optionalClasses="w-full text-white text-sm bg-darkRed h-[42.5px] mt-8 md:hidden"
            buttonText="Delete Invoice Row"
            onClick={onDeleteInvoiceRow}
          />
        </form>
      </div>
    </section>
  )
}
