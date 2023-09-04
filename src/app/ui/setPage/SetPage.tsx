'use client'

import { useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(false)

  const onClickNextRecords = () => {
    if (currentPageNum + 1 <= maxPageNumber && !isLoading) {
      setIsLoading(true)
      router.push(`${baseUrl}${currentPageNum + 1}`)
    }
  }

  const onClickPrevRecords = () => {
    if (currentPageNum - 1 >= 1 && !isLoading) {
      setIsLoading(true)
      router.push(`${baseUrl}${currentPageNum - 1}`)
    }
  }

  return (
    <div className="flexRow gap-8 m-2">
      <Image
        src="/icons/prev.svg"
        alt="Person icon"
        width={30}
        height={30}
        onClick={onClickPrevRecords}
        className={`${isLoading ? 'opacity-50' : 'opacity-100'}`}
      />

      <Image
        src="/icons/next.svg"
        alt="Person icon"
        width={30}
        height={30}
        onClick={onClickNextRecords}
        className={`${isLoading ? 'opacity-50' : 'opacity-100'}`}
      />
    </div>
  )
}
