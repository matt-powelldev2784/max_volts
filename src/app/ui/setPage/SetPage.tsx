'use client'

import React from 'react'
import Image from 'next/image'

interface SkipRecordsProps {
  pageNumberProp: number
  maxPageNumber: number
}

export const SetPage = ({
  pageNumberProp,
  maxPageNumber,
}: SkipRecordsProps) => {
  const [pageNumber, setPageNumber] = React.useState<number>(pageNumberProp)

  console.log('pageNumber', pageNumber)

  const onClickNextRecords = () => {
    setPageNumber((prevState) => {
      return prevState + 1 <= maxPageNumber ? prevState + 1 : prevState
    })
  }

  const onClickPrevRecords = () => {
    setPageNumber((prevState) => {
      return prevState - 1 >= 1 ? prevState - 1 : prevState
    })
  }

  return (
    <div className="flexRow gap-4 m-2">
      <Image
        src="/icons/prev.svg"
        alt="Person icon"
        width={30}
        height={30}
        onClick={onClickPrevRecords}
      />
      {/* <p>
        {isLoading || (!firstInvoice && !lastInvoice)
          ? 'loading...'
          : `Invoices: ${lastInvoice} - ${firstInvoice}`}
      </p> */}
      <Image
        src="/icons/next.svg"
        alt="Person icon"
        width={30}
        height={30}
        onClick={onClickNextRecords}
      />
    </div>
  )
}
