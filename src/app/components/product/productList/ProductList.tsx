import { PageTitle } from '@/app/lib'
import { T_Product } from '@/types'

interface ProductListProps {
  products: T_Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  console.log('a')
  console.log('products', products)
  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <PageTitle text={'Product List'} imgPath={'/icons/add_product.svg'} />
      </div>

      
    </section>
  )
}
