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
    <div className="flexCol gap-4 mt-4 mb-2">
      <PageTitle
        text={'Invoice Menu'}
        imgPath={'/icons/invoice.svg'}
        divClasses=""
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Create Invoice"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          router.push('/pages/invoice/create-invoice')
        }}
      />
      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Invoice List"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          router.push('/pages/invoice/invoice-list')
        }}
      />
    </div>
  )
}
