import React from 'react'
import { IsPaidText } from './isPaidText/IsPaidTextBlock'
import { IsActiveText } from './isActiveText/IsActiveTextBlock'

interface InvoiceStatusProps {
  isPaid: boolean | undefined
  isActive: boolean | undefined
}

export const InvoiceStatus = ({ isPaid, isActive }: InvoiceStatusProps) => {
  if (isPaid === undefined || isActive === undefined) return null
  if (isPaid === false && isActive === true) return null

  return (
    <div className="flexRow gap-2 mt-4 mb-2 md:mb-0">
      {isPaid === true ? <IsPaidText /> : null}
      {isActive === true ? null : <IsActiveText />}
    </div>
  )
}
