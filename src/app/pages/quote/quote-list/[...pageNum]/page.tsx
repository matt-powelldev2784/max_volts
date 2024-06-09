import { QuoteList, NavBar } from '@/app/components'
import { getTenQuotes } from '../getTenQuotes'
import { getMaxQuotePages } from '../getMaxQuotesPages'
import { ServerError } from '@/app/lib/ServerError'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function QuoteListPage({
  params,
}: {
  params: { pageNum: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
  if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const maxQuotePages = await getMaxQuotePages()
  const page = Number(params.pageNum[0])
  const quotes = await getTenQuotes(page)

  if (!quotes) {
    return <ServerError />
  }

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
