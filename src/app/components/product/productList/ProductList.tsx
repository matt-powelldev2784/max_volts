import { PageTitle } from '@/app/lib'
import { T_Product } from '@/types'
import { ProductListItem } from './components/ProductListItem/ProductListItem'
import { ProductListHeader } from './components/ProductListHeader/ProductListHeader'
import { SetPage } from '@/app/ui/setPage/SetPage'

interface ProductListProps {
  products: T_Product[]
  maxProductPages: number
}

export const ProductList = async ({
  products,
  maxProductPages,
}: ProductListProps) => {
  const productsJsx = products.map((product) => {
    return <ProductListItem key={product.id} product={product} />
  })

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4 mb-4">
        <PageTitle text={'Product List'} imgPath={'/icons/add_product.svg'} />
      </div>
      <SetPage maxPageNumber={maxProductPages} />
      <ProductListHeader />
      {productsJsx}
    </section>
  )
}
