'use client'

import { T_Quote } from '@/types/quote'
import React, { useState } from 'react'
import { Button } from '@/app/ui/'
import { formatDate } from '@/app/lib/formatDate'
import { useRouter } from 'next/navigation'
import { apiCall } from '@/app/lib/apiCall'
import Image from 'next/image'

interface QuoteItemProps extends T_Quote {
  header?: boolean
}

export const QuoteListItem = ({
  id,
  quoteNum,
  Client,
  totalAmount,
  quoteDate,
  isActive,
  header,
}: QuoteItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  const { name, companyName } = Client
  let clientString = companyName ? `${name} @ ${companyName}` : name

  const createInvoice = async () => {
    const body = { quoteId: id }

    setIsLoading(true)

    const newInvoice = await apiCall({
      httpMethod: 'POST',
      route: '/api/protected/quote-to-invoice',
      body,
    })

    setIsLoading(false)

    router.push(`/pages/invoice/pdf/${newInvoice.activeInvoice.id}`)
  }

  return (
    <section
      className={`w-full flex flex-row gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 break-all ${
        header ? 'bg-darkBlack text-white' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full min-w-[75px] text-sm flex sm:hidden md:flex">
        {header ? 'Date' : `${formatDate(quoteDate)}`}
      </p>
      <p className="h-full w-fit min-w-[70px] md:w-[150px] text-sm flex">
        {header ? 'Quote No' : `${Number(quoteNum)}`}
      </p>
      <p className="h-full w-full text-sm flex">
        {header ? 'Client' : `${clientString}`}
      </p>
      <div className="flexCol h-full w-full max-w-[200px] text-sm lg:flex sm:hidden">
        {header ? 'Quote Has Invoice' : null}

        {isActive ? (
          <Image src="/icons/tick.svg" alt="Tick icon" width={30} height={30} />
        ) : null}
      </div>

      <p className="h-full min-w-[80px] text-sm md:flex hidden">
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
            optionalClasses="text-white text-sm bg-mvOrange h-full w-full max-h-[37px]"
            buttonText="Edit"
            onClick={() => router.push(`/pages/quote/edit-quote/${id}`)}
          />
          <Button
            type="button"
            optionalClasses="text-white text-sm bg-mvOrange h-full w-full max-h-[37px]"
            buttonText="View"
            onClick={() => router.push(`/pages/quote/pdf/${id}`)}
          />
          <Button
            type="button"
            optionalClasses="text-white text-sm bg-mvOrange h-full w-full max-h-[37px] min-w-[80px]"
            buttonText="Invoice"
            onClick={createInvoice}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  )
}
