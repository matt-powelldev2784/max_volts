'use client'

import { QuoteListItem } from './components/quoteListItem/QuoteListItem'
import { QuoteListHeader } from './components/quoteListHeader/QuoteListHeader'
import { SetPage, PageTitle } from '@/app/ui/'
import { T_Quote } from '@/types/quote'

interface QuoteListProps {
  quotes: T_Quote[]
  maxQuotePages: number
  currentPageNum: number
  pageTitle: string
}

export const QuoteList = ({
  quotes,
  maxQuotePages,
  currentPageNum,
  pageTitle,
}: QuoteListProps) => {
  const quoteItemsJsx = quotes.map((quote) => {
    return <QuoteListItem key={quote.id} {...quote} />
  })

  return (
    <section className="w-full flexCol">
      <PageTitle
        text={pageTitle}
        imgPath={'/icons/quote.svg'}
        divClasses="mt-4 mb-4"
      />
      <SetPage
        maxPageNumber={maxQuotePages}
        currentPageNum={currentPageNum}
        baseUrl="/pages/quote/quote-list/"
      />
      <QuoteListHeader />
      {quoteItemsJsx}
    </section>
  )
}
