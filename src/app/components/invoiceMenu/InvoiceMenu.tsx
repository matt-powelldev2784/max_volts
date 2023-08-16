'use client'

import { Button } from '@/ui/button/button'
import { useRouter } from 'next/navigation'

export const InvoiceMenu = () => {
  const router = useRouter()

  return (
    <nav className="flexCol gap-4 m-4">
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
