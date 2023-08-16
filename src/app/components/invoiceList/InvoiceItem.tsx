import { T_Invoice } from '@/types/invoice'
import React from 'react'
import { Button } from '@/ui/button/button'

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
      <p className="h-full w-full max-w-[100px] text-sm flex">
        {header ? 'Num' : `${Number(invoiceNum)}`}
      </p>
      <p className="h-full w-full text-sm flex">
        {header ? 'Client' : `${clientString}`}
      </p>
      <p className="h-full min-w-[70px] text-sm flex">
        {header ? 'Total' : `£${Number(totalAmount).toFixed(2)}`}
      </p>

      <div
        className={`flex flex-row gap-2 md:pl-2 break-normal ${
          header ? 'opacity-0 h-0' : null
        }`}
      >
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange h-full w-fit max-h-[40px]"
          buttonText="Edit"
          onClick={() => {}}
        />
      </div>
    </section>
  )
}
