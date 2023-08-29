import { PageTitle } from '@/app/lib'
import { T_Product } from '@/types'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { ProductListHeader } from './components/ProductListHeader/ProductListHeader'

interface ProductListProps {
  products: T_Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  const productsJsx = products.map((product) => {
    return <ProductListItem key={product.id} product={product} />
  })

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <PageTitle text={'Product List'} imgPath={'/icons/add_product.svg'} />
      </div>
      <ProductListHeader />
      {productsJsx}
    </section>
  )
}
