import { EditProduct, NavBar } from '@/app/components'
import { getProduct } from '../getProduct'
import { ServerError } from '@/app/lib/ServerError'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function AddProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')

  const productId = params.productId[0]
  const product = await getProduct(productId)

  if (!product) {
    return <ServerError />
  }

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditProduct product={product} />
    </main>
  )
}
