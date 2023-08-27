'use cleint'

import { T_Invoice } from '@/types/invoice'
import React from 'react'
import { Button } from '@/ui/button/button'
import { formatDate } from '@/app/lib/formatDate'
import { useRouter } from 'next/navigation'

interface InvoiceItemProps extends T_Invoice {
  header?: boolean
}

export const InvoiceItem = ({
  id,
  invoiceNum,
  Client,
  totalAmount,
  invoiceDate,
  paid,
  header,
}: InvoiceItemProps) => {
  const router = useRouter()
  const { name, companyName } = Client
  let clientString = companyName ? `${name} @ ${companyName}` : name

  return (
    <section
      className={`w-full flex flex-fow gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 break-all ${
        header ? 'bg-darkBlack text-white' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full w-full max-w-[80px] text-sm flex">
        {header ? 'Date' : `${formatDate(invoiceDate)}`}
      </p>
      <p className="h-full w-full max-w-[100px] text-sm lg:flex hidden">
        {header ? 'Invoice No' : `${Number(invoiceNum)}`}
      </p>
      <p className="h-full w-full text-sm flex">
        {header ? 'Client' : `${clientString}`}
      </p>
      <p className="h-full w-full max-w-[50px] text-sm lg:flex hidden">
        {header ? 'Paid' : `${paid}`}
      </p>
      <p className="h-full min-w-[70px] text-sm flex">
        {header ? 'Total' : `£${Number(totalAmount).toFixed(2)}`}
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
