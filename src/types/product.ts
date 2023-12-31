export interface T_Product {
  id: string
  name: string
  description: string
  buyPrice: number
  sellPrice: number
  VAT: number
}

export interface T_ProductWithoutId {
  name: string
  description: string
  buyPrice: number
  sellPrice: number
  VAT: number
}
