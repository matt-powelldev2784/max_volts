import { T_Invoice } from '@/types/invoice'
import React from 'react'

interface InvoiceItemProps extends T_Invoice {
  header?: boolean
}

export const InvoiceItem = ({
  invoiceNum,
  Client,
  totalAmount,
  header,
}: InvoiceItemProps) => {
  console.log('Client', Client)

  const { name, companyName } = Client
  let clientString = companyName ? `${name} @ ${companyName}` : name

  return (
    <section
      className={`w-full flex flex-fow gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 break-all ${
        header ? 'bg-darkBlack text-white' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full w-full max-w-[50px] text-sm flex">
        {header ? 'Invoice Num' : `${Number(invoiceNum)}`}
      </p>
      <p className="h-full w-full max-w-[250px] text-sm flex">
        {header ? 'Client' : `${clientString}`}
      </p>
      <p className="h-full w-full max-w-[50px] text-sm flex">
        {header ? 'Total Amount' : `${Number(totalAmount)}`}
      </p>
    </section>
  )
}
