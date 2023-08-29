'use client'

import { T_Product } from '@/types'
import { Button } from '@/ui/button/button'
import { useRouter } from 'next/navigation'

interface ProductListItemProps {
  product: T_Product
  header?: boolean
}

export const ProductListItem = ({ product, header }: ProductListItemProps) => {
  const router = useRouter()
  console.log('product', product)

  const { id, name, buyPrice, sellPrice, description, VAT } = product

  return (
    <section
      className={`w-full flex flex-fow gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 break-all ${
        header ? 'bg-darkBlack text-white' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full w-full max-w-[80px] text-sm flex">
        {header ? 'name' : `${name}`}
      </p>
      <p className="h-full w-full max-w-[100px] text-sm lg:flex hidden">
        {header ? 'Buy Price' : `${Number(buyPrice)}`}
      </p>
      <p className="h-full w-full text-sm flex">
        {header ? 'Sell Price' : `${sellPrice}`}
      </p>
      <p className="h-full w-full max-w-[50px] text-sm lg:flex hidden">
        {header ? 'Description' : `${description}`}
      </p>
      <p className="h-full min-w-[70px] text-sm flex">
        {header ? 'VAT' : `£${Number(VAT)}`}
      </p>

      <div
        className={`flex flex-row gap-2 md:pl-2 break-normal ${
          header ? 'opacity-0 h-0' : null
        }`}
      >
        <div className="flexCol gap-2 md:flexRow">
          <Button
            type="button"
            optionalClasses="text-white text-sm bg-mvOrange h-full w-full max-h-[40px]"
            buttonText="Edit"
            onClick={() => router.push(`/pages/invoice/edit-invoice/${id}`)}
          />
          <Button
            type="button"
            optionalClasses="text-white text-sm bg-mvOrange h-full w-full max-h-[40px]"
            buttonText="View"
            onClick={() => router.push(`/pages/invoice/pdf/${id}`)}
          />
        </div>
      </div>
    </section>
  )
}
