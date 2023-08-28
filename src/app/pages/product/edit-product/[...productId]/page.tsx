import { EditProduct, NavBar } from '@/app/components'

export default function AddProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const productId = params.productId[0]
  console.log('productId', productId)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditProduct />
    </main>
  )
}
