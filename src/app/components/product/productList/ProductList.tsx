import { PageTitle } from '@/app/lib'

export const ProductList = () => {
  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <PageTitle text={'Product List'} imgPath={'/icons/add_product.svg'} />
      </div>
    </section>
  )
}
