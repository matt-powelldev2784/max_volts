'use client'

import { Button } from '@/ui/button/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const InvoiceMenu = () => {
  const router = useRouter()

  return (
    <nav className="flexCol gap-4 m-4">
      <div className="flexRow gap-2 mt-4 mb-5">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="text-lg">Invoice Menu</p>
      </div>

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px]"
        buttonText="Create Invoice"
        disabled={false}
        onClick={() => {
          router.push('/pages/invoice/create-invoice')
        }}
      />
      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px]"
        buttonText="Invoice List"
        disabled={false}
        onClick={() => {
          router.push('/pages/invoice/invoice-list')
        }}
      />
    </nav>
  )
}
