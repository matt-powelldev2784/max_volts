import { useState } from 'react'
import { Button } from '@/ui/button/button'
import { T_InvoiceRow } from '@/types'
import {
  setCurrentInvoiceRow,
  toggleAddProductModal,
  deleteInvoiceRow,
} from '@/redux/slice/newInvoiceSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'

interface InvoiceRowModalProps extends T_InvoiceRow {
  header?: boolean
}

export const InvoiceRowText = (productWithId: InvoiceRowModalProps) => {
  const dispatch = useAppDispatch()
  const [isLoading, _setIsLoading] = useState<boolean>(false) // eslint-disable-line
  const { quantity, name, description, VAT, totalPrice, header } = productWithId

  const onEditInvoiceRow = () => {
    dispatch(setCurrentInvoiceRow(productWithId))
    dispatch(toggleAddProductModal())
  }

  const onDeleteInvoiceRow = () => {
    dispatch(setCurrentInvoiceRow(productWithId))
    dispatch(deleteInvoiceRow())
  }

  return (
    <section
      className={`w-full flex flex-fow gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 break-all ${
        header ? 'bg-darkBlack text-white p-3' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full w-full max-w-[50px] text-sm flex">
        {header ? 'Qty' : `${Number(quantity)}`}
      </p>
      <p className="h-fit w-full sm:max-h-[40px] md:max-h-fit md:max-w-[140px] lg:max-w-[180px] text-sm flex ">
        {name}
      </p>
      <p className="h-full md:min-w-[140px] lg:w-full w-full text-sm md:flex sm:hidden">
        {description}
      </p>
      <p className="h-full w-[150px] text-sm lg:flex sm:hidden">
        {header ? 'VAT' : `${Number(VAT)}%`}
      </p>
      <p className="h-full min-w-[70px] text-sm flex">
        {header ? 'Total Price' : `£${Number(totalPrice).toFixed(2)}`}
      </p>

      <div
        className={`flex flex-row gap-2 md:pl-2 break-normal ${
          header ? 'opacity-0 h-0' : null
        }`}
      >
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-darkRed h-full w-fit md:flexRow sm:hidden max-h-[40px]"
          buttonText="Delete"
          disabled={isLoading}
          onClick={onDeleteInvoiceRow}
        />
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange h-full w-fit max-h-[40px]"
          buttonText="Edit"
          disabled={isLoading}
          onClick={onEditInvoiceRow}
        />
      </div>
    </section>
  )
}
