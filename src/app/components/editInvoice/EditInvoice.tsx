'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'

interface EditInvoiceProps {
  invoiceId: string
}

export const EditInvoice = ({ invoiceId }: EditInvoiceProps) => {
  useInvoice(invoiceId)
  const invoice = useAppSelector(
    (state) => state.newInvoiceReducer.currentEditInvoice
  )
  console.log('invoice', invoice)

  return <div>Edit Invoice</div>
}
