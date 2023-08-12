import { useState } from 'react'
import { Button } from '@/ui/button/button'
import { T_ProductWithId } from '@/types'
import { toggleAddProductModal } from '@/redux/slice/newInvoiceSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'

export const InvoiceRowText = ({
  name,
  description,
  sellPrice,
  buyPrice,
}: T_ProductWithId) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <section className="w-full flexRow gap-2 h-[42.5px] max-w-[1100px] m-auto">
      <p className="h-full w-[80px] flexRow">quantiity</p>
      <p className="h-full w-[150px] flexRow">{name}</p>
      <p className="h-full w-[250px] flexRow text-sm">{description}</p>
      <p className="h-full w-[95px] flexRow">Buy Price</p>
      <p className="h-full w-[50px] flexRow">20%</p>
      <p className="h-full w-[95px] flexRow">{buyPrice}</p>
      <p className="h-full w-[95px] flexRow">{sellPrice}</p>

      <div className="flexRow gap-2">
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-darkRed h-full w-fit"
          buttonText="Delete"
          disabled={isLoading}
          onClick={() => dispatch(toggleAddProductModal())}
        />
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange h-full w-fit"
          buttonText="Update Invoice Row"
          disabled={isLoading}
        />
      </div>
    </section>
  )
}
