import { ClientList, NavBar } from '@/app/components'
import { getTenClients } from '../getTenClients'
import { getMaxClienttPages } from '../getMaxClientPages'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function ClienttListPage({
  params,
}: {
  params: { pageNum: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
   if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const maxClientPages = await getMaxClienttPages()
  const page = Number(params.pageNum[0])
  const clients = await getTenClients(page)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <ClientList
        clients={clients}
        maxClientPages={maxClientPages}
        currentPageNum={page}
      />
      {/* <ProductList
        products={products}
        maxProductPages={maxProductPage}
        currentPageNum={page}
      /> */}
    </main>
  )
}
