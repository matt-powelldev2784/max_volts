import { useState } from 'react'
import { Button } from '@/ui/button/button'
import { T_ProductWithId } from '@/types'
import {
  setCurrentInvoiceRow,
  toggleAddProductModal,
  deleteInvoiceRow,
} from '@/redux/slice/newInvoiceSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'

interface InvoiceRowModalProps extends T_ProductWithId {
  header?: boolean
}

export const InvoiceRowText = (productWithId: InvoiceRowModalProps) => {
  const dispatch = useAppDispatch()
  const [isLoading, _setIsLoading] = useState<boolean>(false) // eslint-disable-line
  const { name, description, sellPrice, buyPrice, header } = productWithId

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
      className={`w-full flex flex-fow gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 ${
        header ? 'bg-darkBlack text-white p-3' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full w-[90px] text-sm flex">Qty</p>
      <p className="h-full w-full md:max-w-[140px] lg:max-w-[210px] text-sm flex sm:max-h-[40px] overflow-hidden">
        {name}
      </p>
      <p className="h-full md:min-w[160px] lg:min-w-[300px] w-full text-sm md:flex sm:hidden">
        {description}
      </p>
      <p className="h-full min-w-[80px] text-sm lg:flex sm:hidden">VAT</p>
      <p className="h-full min-w-[80px] text-sm lg:flex sm:hidden">
        {header ? 'Buy Price' : `£${Number(buyPrice).toFixed(2)}`}
      </p>
      <p className="h-full min-w-[80px] text-sm flex">
        {header ? 'Price' : `£${Number(sellPrice).toFixed(2)}`}
      </p>

      <div
        className={`flex flex-row gap-2 md:pl-2 ${
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
