import { ProductList, NavBar } from '@/app/components'
import { getTenProducts } from './getTenProducts'

export default async function ProductListPage() {
  const products = await getTenProducts(1)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <ProductList products={products} />
    </main>
  )
}
