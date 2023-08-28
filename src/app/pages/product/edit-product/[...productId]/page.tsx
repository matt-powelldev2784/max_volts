import { EditProduct, NavBar } from '@/app/components'

export default function AddProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const productId = params.productId[0]

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditProduct productId={productId} />
    </main>
  )
}
