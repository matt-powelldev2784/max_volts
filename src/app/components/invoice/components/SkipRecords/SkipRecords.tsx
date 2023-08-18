import React from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import {
  setNextInvoicePageNum,
  setPrevInvoicePageNum,
} from '@/redux/slice/invoiceSlice'
interface SkipRecordsProps {
  firstInvoice: number | null
  lastInvoice: number | null
}

export const SkipRecords = ({
  firstInvoice,
  lastInvoice,
}: SkipRecordsProps) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.invoiceReducer.isLoading)

  const onClickNextRecords = () => {
    if (!isLoading) dispatch(setNextInvoicePageNum())
  }

  const onClickPrevRecords = () => {
    if (!isLoading) dispatch(setPrevInvoicePageNum())
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
      <p>
        {isLoading || (!firstInvoice && !lastInvoice)
          ? 'loading...'
          : `Invoices: ${lastInvoice} - ${firstInvoice}`}
      </p>
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
