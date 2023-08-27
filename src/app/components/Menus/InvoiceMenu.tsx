'use client'

import { Button } from '@/ui/button/button'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { PageTitle } from '@/app/lib/PageTitle'

export const InvoiceMenu = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const resetInvoiceState = () => {
    dispatch(resetToInitialState())
  }

  return (
    <nav className="flexCol gap-4 m-4">
      <PageTitle text={'Invoice Menu'} imgPath={'/icons/invoice.svg'} />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px]"
        buttonText="Create Invoice"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          router.push('/pages/invoice/create-invoice')
        }}
      />
      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px]"
        buttonText="Invoice List"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          router.push('/pages/invoice/invoice-list')
        }}
      />
    </nav>
  )
}
