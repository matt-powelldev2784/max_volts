'use client'

import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { PageTitle, Button } from '@/app/ui/'

export const QuoteMenu = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const resetInvoiceState = () => {
    dispatch(resetToInitialState())
  }

  return (
    <div className="flexCol gap-4 mt-4 mb-2 mx-4">
      <PageTitle
        text={'Quote Menu'}
        imgPath={'/icons/quote.svg'}
        divClasses=""
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Create Quote"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          router.push('/pages/quote/create-quote')
        }}
      />
      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Quote List"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          window.location.href = '/pages/quote/quote-list/1'
        }}
      />
    </div>
  )
}
