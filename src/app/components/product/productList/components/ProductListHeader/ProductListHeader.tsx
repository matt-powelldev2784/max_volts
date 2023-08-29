import { ProductListItem } from '../ProductListItem/ProductListItem'

export const ProductListHeader = () => {
  const productListHeader = {
    id: 'productListHeader',
    name: 'Name',
    description: 'Description',
    buyPrice: 'Buy Price',
    sellPrice: 'Sell Price',
    VAT: 'VAT',
    header: true,
  }

  const ProductListHeaderJsx = (
    // @ts-ignore: ignore erros to allow insertion of invoice row header
    <ProductListItem key={productListHeader.id} product={productListHeader} />
  )

  return <>{ProductListHeaderJsx}</>
}
