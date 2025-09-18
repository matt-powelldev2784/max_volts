import { EditProduct, NavBar } from '@/app/components'
import { getProduct } from '../getProduct'
import { ServerError } from '@/app/lib/ServerError'

export default async function AddProductPage({
  params,
}: {
  params: Promise<{ productId: string[] }>
}) {
  const { productId } = await params
  const id = productId?.[0]
  if (!id) return <ServerError />

  const product = await getProduct(id)
  if (!product) return <ServerError />

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditProduct product={product} />
    </main>
  )
}
