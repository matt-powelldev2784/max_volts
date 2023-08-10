export interface T_Product {
  id: string
  name: string
  description: string
  buyPrice: number
  sellPrice: number
}

export interface T_ProductWithId extends T_Product {
  reduxId: string
}
