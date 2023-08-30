import React from 'react'
import { IsPaidText } from './isPaidText/IsPaidText'
import { IsActiveText } from './isActiveText/IsActiveText'

interface InvoiceStatusProps {
  isPaid: boolean | undefined
  isActive: boolean | undefined
}

export const InvoiceStatus = ({ isPaid, isActive }: InvoiceStatusProps) => {
  if (isPaid && isActive === null) return <></>

  if (isPaid === false && isActive === true) return <></>

  return (
    <div className="flexRow gap-2 mt-4 mb-4">
      {isPaid ? <IsPaidText /> : null}
      {isActive ? null : <IsActiveText />}
    </div>
  )
}
