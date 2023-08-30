import React from 'react'
import { Button } from '@/app/ui/button/button'

interface InvoiceStatusProps {
  isPaid: boolean | undefined
  isActive: boolean | undefined
}

export const InvoiceStatus = ({ isPaid, isActive }: InvoiceStatusProps) => {
  if (isPaid && isActive === null) return <></>
  if (isPaid === false && isActive === true) return <></>

  return (
    <div className="flexRow gap-2 mt-4">
      <Button
        type="button"
        optionalClasses={`text-white text-sm h-full w-[160px] max-h-[40px]} ${
          isPaid ? 'bg-mvGreen' : 'hidden'
        }`}
        buttonText={`${isPaid ? 'Invoice Is Paid' : 'Error'}`}
        onClick={() => null}
      />
      <Button
        type="button"
        optionalClasses={`text-white text-sm h-full w-[160px] max-h-[40px]} ${
          isActive ? '' : 'bg-mvGreen'
        }`}
        buttonText={`${isActive ? 'Error' : 'Invoice Is Closed'}`}
        onClick={() => null}
      />
    </div>
  )
}
