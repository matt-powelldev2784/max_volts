'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface SkipRecordsProps {
  maxPageNumber: number
  currentPageNum: number
  baseUrl: string
}

export const SetPage = ({
  maxPageNumber,
  currentPageNum,
  baseUrl,
}: SkipRecordsProps) => {
  const router = useRouter()

  console.log('currentPageNum', currentPageNum)

  const onClickNextRecords = () => {
    if (currentPageNum + 1 <= maxPageNumber) {
      router.push(`${baseUrl}${currentPageNum + 1}`)
    }
  }

  const onClickPrevRecords = () => {
    if (currentPageNum - 1 >= 1) {
      router.push(`${baseUrl}${currentPageNum - 1}`)
    }
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
