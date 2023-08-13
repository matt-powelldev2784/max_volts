import { useState } from 'react'
import { Button } from '@/ui/button/button'
import { T_ProductWithId } from '@/types'
import { toggleAddProductModal } from '@/redux/slice/newInvoiceSlice'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'

interface InvoiceRowModalProps extends T_ProductWithId {
  header?: boolean
}

export const InvoiceRowText = ({
  name,
  description,
  sellPrice,
  buyPrice,
  header,
}: InvoiceRowModalProps) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  console.log('header', header)

  if (10 === Math.random()) setIsLoading(false)

  return (
    <section
      className={`w-full flexRow gap-4 sm:gap-2 h-[48px] max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 ${
        header ? 'bg-darkBlack text-white h-[32px] p-3' : 'bg-black/5'
      }`}
    >
      <p className="h-full w-[90px] text-sm flex">Quantity</p>
      <p className="h-full w-full md:max-w-[140px] lg:max-w-[210px] text-sm flex overflow:hidden">
        {name}
      </p>
      <p className="h-full md:min-w[160px] lg:min-w-[300px] w-full text-sm md:flex sm:hidden overflow:hidden">
        {description}
      </p>
      <p className="h-full min-w-[80px] text-sm lg:flex sm:hidden">VAT</p>
      <p className="h-full min-w-[95px] text-sm lg:flex sm:hidden">
        £{Number(buyPrice).toFixed(2)}
      </p>
      <p className="h-full min-w-[60px] text-sm flex">
        £{Number(sellPrice).toFixed(2)}
      </p>

      <div className={`flexRow gap-2 py-2 ${header ? 'opacity-0 h-0' : null}`}>
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-darkRed h-full w-fit md:flexRow sm:hidden"
          buttonText="Delete"
          disabled={isLoading}
          onClick={() => dispatch(toggleAddProductModal())}
        />
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange h-full w-fit"
          buttonText="Edit"
          disabled={isLoading}
        />
      </div>
    </section>
  )
}
