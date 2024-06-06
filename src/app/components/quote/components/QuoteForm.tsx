'use client'

import { PageTitle } from '@/app/ui/'

interface InvoiceFormProps {
  children: React.ReactNode
}

export const QuoteForm = ({ children }: InvoiceFormProps) => {
  return (
    <div className="min-h-screen relative w-full h-fit mt-4">
      <PageTitle
        text={'Add Quote'}
        imgPath={'/icons/invoice.svg'}
        divClasses="mb-2"
      />
    </div>
  )
}
