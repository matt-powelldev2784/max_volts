import { ClientList, NavBar } from '@/app/components'
import { getTenClients } from '../getTenClients'
import { getMaxClienttPages } from '../getMaxClientPages'

export default async function ClienttListPage({
  params,
}: {
  params: Promise<{ pageNum: string[] }>
}) {
  const { pageNum } = await params
  const page = Number(pageNum?.[0] ?? '1')

  const maxClientPages = await getMaxClienttPages()
  const clients = await getTenClients(page)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <ClientList
        clients={clients}
        maxClientPages={maxClientPages}
        currentPageNum={page}
      />
    </main>
  )
}
