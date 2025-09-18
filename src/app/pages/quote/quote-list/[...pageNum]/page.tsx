import { QuoteList, NavBar } from '@/app/components'
import { getTenQuotes } from '../getTenQuotes'
import { getMaxQuotePages } from '../getMaxQuotesPages'
import { ServerError } from '@/app/lib/ServerError'

export default async function QuoteListPage({
  params,
}: {
  params: Promise<{ pageNum: string[] }>
}) {
  const { pageNum } = await params
  const page = Number(pageNum?.[0] ?? '1')

  const maxQuotePages = await getMaxQuotePages()
  const quotes = await getTenQuotes(page)

  if (!quotes) return <ServerError />

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <QuoteList
        quotes={quotes}
        maxQuotePages={maxQuotePages}
        currentPageNum={page}
        pageTitle="Quote List"
      />
    </main>
  )
}
