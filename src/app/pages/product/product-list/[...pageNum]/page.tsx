import { ProductList, NavBar } from '@/app/components'
import { getTenProducts } from '../getTenProducts'
import { getMaxProductPage } from '../getMaxProductPage'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function ProductListPage({
  params,
}: {
  params: { pageNum: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
   if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const maxProductPage = await getMaxProductPage()
  const page = Number(params.pageNum[0])
  const products = await getTenProducts(page)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <ProductList
        products={products}
        maxProductPages={maxProductPage}
        currentPageNum={page}
      />
    </main>
  )
}
