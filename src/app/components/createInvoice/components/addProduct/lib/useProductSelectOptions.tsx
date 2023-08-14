import { useProducts } from '../../../../../../lib/hooks/useProducts'

export const useProductSelectOptions = () => {
  const products = useProducts()

  return products.map((product) => {
    return (
      <option key={product.id} value={product.id}>
        {`${product.name}`}
      </option>
    )
  })
}
