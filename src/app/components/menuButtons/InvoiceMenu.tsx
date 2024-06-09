'use client'

import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { resetToInitialState } from '@/redux/slice/invoiceSlice'
import { PageTitle, Button } from '@/app/ui/'
import Image from 'next/image'

export const InvoiceMenu = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const resetInvoiceState = () => {
    dispatch(resetToInitialState())
  }

  return (
    <div className="flexCol gap-4 mt-4 mb-2 mx-4">
      <PageTitle
        text={'Invoice Menu'}
        imgPath={'/icons/invoice.svg'}
        divClasses=""
      />

      <Button
        type="button"
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Create Invoice"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          router.push('/pages/invoice/create-invoice')
        }}
      >
        <Image
          src="/icons/add_invoice_white.svg"
          alt="Person icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>

      {/* ------------------------------------------------------------------------- */}

      <Button
        type="button"
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Invoice List"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          window.location.href = '/pages/invoice/invoice-list/1'
        }}
      >
        <Image
          src="/icons/invoice_white.svg"
          alt="Person icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>

      {/* ------------------------------------------------------------------------- */}

      <Button
        type="button"
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Due Invoice List"
        disabled={false}
        onClick={() => {
          resetInvoiceState()
          window.location.href = '/pages/invoice/active-invoices/1'
        }}
      >
        <Image
          src="/icons/invoice_white.svg"
          alt="Person icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>
    </div>
  )
}
