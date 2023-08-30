import React from 'react'
import { Button } from '@/app/ui/button/button'
import { IsPaidText } from './isPaidText/IsPaidText'

interface InvoiceStatusProps {
  isPaid: boolean | undefined
  isActive: boolean | undefined
}

export const InvoiceStatus = ({ isPaid, isActive }: InvoiceStatusProps) => {
  if (isPaid && isActive === null) return <></>
  if (isPaid === false && isActive === true) return <></>

  return (
    <div className="flexRow gap-2 mt-4">
      {isPaid ? <IsPaidText /> : null}
      {isActive ? null : <IsPaidText />}
    </div>
  )
}
